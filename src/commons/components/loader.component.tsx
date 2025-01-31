import { LoadingOutlined } from '@ant-design/icons';

export const Loader = () =>{
    return (
    <div className="flex w-screen h-screen justify-center items-center">
        <h1 className='text-4xl mr-5'>Loading</h1><LoadingOutlined spin style={{fontSize:"200%"}}/>
    </div>
    )
}