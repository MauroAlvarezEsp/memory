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
            <h1 className="text-5xl text-violet-950 mb-5">
                {t('label.enter-text')}<br/>{t('label.name')}
            </h1>
            <input ref={userName} type="text" placeholder="Name" className="border-blue-950 border-b-2 px-2 py-0.5 border-gray-200"/>
            <button onClick={() => saveUserName()} className="gradient-theme rounded-md ml-4 text-white hover:bg-blue-900 h-8 w-10">
                <ArrowRightOutlined />
            </button>
        </div>
    )
}