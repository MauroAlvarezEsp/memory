import { QuestionOutlined } from "@ant-design/icons"
import { ImageResponseMapped } from "../types/ImageResponse.type"
import { flippedStatus, guessedStatus } from "../../../commons/constants/general.constans"
import { useContext } from "react"
import { CardsContext } from "../contexts/CardsContext"

const FlippingCard = (props: {image: ImageResponseMapped, flip: Function}) => {
    const cards = useContext(CardsContext)
    const flippedCards = cards.filter(card => card.status == flippedStatus).length

    const cardFlipped = () => {
        return (
            <div 
                role="card-flipped"
                style={{background: `url(${props.image.url}) no-repeat center`, backgroundSize:"cover"}}
                className="animate-[flip_0.2s_forwards] w-full h-32 sm:h-36 border-2 border-slate-100 rounded-md"
            />
        )
    }

    const cardNotFlipped = () => {
        return (
            <div
                role="card-not-flipped"
                onClick={flippedCards !== 2 ? () => props.flip(props.image.index) : ()=>{}}
                key={props.image.uuid}
                className="animate-[flip_0.2s_forwards] w-full h-32 sm:h-36 text-gray-500 bg-gray-100 border-2 border-slate-100 flex justify-center hover:cursor-pointer hover:shadow-lg rounded-md"
            >
                <QuestionOutlined className="text-5xl text-blue-950" style={{transform: "rotateY(180deg)"}} />
            </div>
        )
    }
    return(
        [flippedStatus, guessedStatus].includes(props.image.status)
        ? cardFlipped()
        : cardNotFlipped()                   
    )
}

export default FlippingCard