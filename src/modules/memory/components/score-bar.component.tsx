import { useTranslation } from "react-i18next";
import { ScoreType } from "../types/score.type"

export const ScoreBar = (props: {score: ScoreType}) => {
    const { t } = useTranslation();

    return (
        <div className="flex sm:w-[45%] lg:w-[30%] m-auto justify-around pt-5 pb-1 text-blue-950">
            <h1 className="text-xl font-semibold">{t('label.hits')} {props.score.hits}</h1>
            <h1 className="text-xl font-semibold">{t('label.errors')} {props.score.errors}</h1>
        </div>
    )
}