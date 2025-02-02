import { useTranslation } from "react-i18next";
import { getUserName } from "../../../commons/utils/utils"

const Congrats = (props: {restart: Function}) => {
    const userName = getUserName();
    const { t } =  useTranslation();

    return(
        <div className="text-center py-40 md:p-32 bg-blue-950 text-white shine">
            <h1 className="text-lg">{userName}</h1>
            <h1 className="text-4xl mt-5 font-bold">{t('label.congratulations')}</h1>
            <h1 className="text-md text-gray-300 mb-5">{t('label.finished')}</h1>
            <button 
                onClick={() => props.restart()}
                className="text-md bg-white text-black rounded-full px-3 py-1 text-sm font-semibold">
                {t('label.repeat')}
            </button>
        </div>
    )
}

export default Congrats