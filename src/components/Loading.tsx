import { Spin } from 'antd';

const Loading: React.FC = () => {
    return (
        <div className='h-dvh w-full flex items-center justify-center'>
            <Spin className='text-indigo-900'/>
        </div>
    )
}

export default Loading
