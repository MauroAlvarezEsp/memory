import React, { Suspense, useEffect, useMemo, useState } from "react"
import { lazy } from 'react';
import { useExecuteQuery } from "../../commons/hooks/usexecuteQuery.hook"
import { cacheKeyImages, fallbackUrl, flippedStatus, guessedStatus, intitialScore, unflippedStatus } from "../../commons/constants/general.constans"
import { imagesPath } from "../../commons/constants/paths.contats"
import { ReactQueryType } from "../../commons/types/react-query.type"
import { ImageResponseMapped } from "./types/ImageResponse.type";
import { ScoreType } from "./types/score.type"
import { ScoreBar } from "./components/score-bar.component"
import { mapper } from "./utils/response-mapper"
import { shuffleArray } from "../../commons/utils/utils"
import { CardsContext } from "./contexts/CardsContext"
import FlippingCard from "./components/flipping-card.component";
import Congrats from "./components/congrats.component";
import Loader from "../../commons/components/loader.component";

export const MemoryComponent = () => {
    const [cards, setCards] = useState<ImageResponseMapped[]>([])
    const [score, setScore] = useState<ScoreType>({hits: 0, errors: 0})
    const [attempt, setAttempt] = useState(1)

    const url = (process.env.REACT_APP_URL_MODYO || fallbackUrl).concat(imagesPath)
    const imagesQuery: ReactQueryType = useExecuteQuery(cacheKeyImages, url, mapper, attempt)

    const restart = async () => {
        setScore(intitialScore)
        setAttempt(attempt + 1)
    }

    const flip = (index: number) => setCards(prev =>
        prev.map(item => item.index === index ? { ...item, status: flippedStatus } : item)
    );
    
    const handleHit = (flippedCards: Array<string>) => {
        setCards(prev =>
            prev.map(item => flippedCards.includes(item.uuid) ? { ...item, status: guessedStatus} : item)
        )
        setScore({...score, hits: score.hits + 1})
    };

    const cardsComponent = useMemo(() => {
        return cards?.map((image: ImageResponseMapped) => 
            <FlippingCard flip={flip} key={image.index} image={image}/>)
    }, [cards])


    useEffect(() => {
        if(cards) {
            const flippedCards = cards.filter(card => card.status == flippedStatus)
            const flippedCardsUuids = flippedCards.map(flipped => flipped.uuid)
    
            if (flippedCards.length === 2) {
                if(flippedCardsUuids[0] == flippedCardsUuids[1])
                    return handleHit(flippedCardsUuids)
                else{
                    setScore({...score, errors: score.errors + 1})
                    
                    setTimeout(() => 
                        setCards(prev => prev.map(item => item.status != guessedStatus ? ({ ...item, status: unflippedStatus }) : item))
                    , 700);
                }
            }
        }

    }, [cards]);
    

    useEffect(() => {
        setCards(shuffleArray(imagesQuery.data))
    },[imagesQuery.data])

    return (
        
        imagesQuery.isPending 
        ? <Loader />
        : (
            <section className="w-[100%] md:w-[90%] lg:w-[90%] max-w-5xl border-2 border-slate-200 shadow-lg rounded-md bg-white m-auto">
                <CardsContext.Provider value={cards}>
                    {(score.hits == cards?.length / 2)
                    ? <Congrats restart={restart} />
                    : (
                        <>
                            <ScoreBar score={score}/>

                            <div className="grid gap-2 sm:gap-4 p-6 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                                { cardsComponent }
                            </div>
                        </>
                    )}
                </CardsContext.Provider>
            </section>
        )
    )
}