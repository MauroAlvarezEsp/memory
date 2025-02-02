import { LoadingOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const Loader = () =>{
    const { t } = useTranslation()
    return (
    <div className="flex w-screen h-screen justify-center items-center text-blue-950">
        <h1 className='text-4xl mr-5'>{t('label.loading')}</h1><LoadingOutlined spin style={{fontSize:"200%"}}/>
    </div>
    )
}

export default Loader