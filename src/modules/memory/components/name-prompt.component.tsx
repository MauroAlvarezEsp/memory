import { ArrowRightOutlined } from "@ant-design/icons"
import { useRef } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from 'react-router'
import { setUserName } from "../../../commons/utils/utils"

export const NamePrompt =  () => {
    const userName: any = useRef(null)
    const navigate = useNavigate()
    const { t } = useTranslation()
    
    const saveUserName = () => {
        setUserName(userName?.current?.value)
        navigate(0);
    }
    
    return (
        <div>
            <h1 className="text-5xl text-left mb-4 text-blue-950">
                {t('label.enter-text')}<br/>{t('label.name')}
            </h1>
            <input ref={userName} type="text" placeholder="Name" className="border-blue-950 border-b-2 px-2 py-0.5 border-gray-200 font-sans"/>
            <button onClick={() => saveUserName()} className="px-3 bg-blue-950 rounded-md ml-3 text-white py-1 hover:bg-blue-900 rounded-full h-9 w-10">
                <ArrowRightOutlined />
            </button>
        </div>
    )
}