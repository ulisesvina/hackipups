import { FC } from 'react';

const ProgressBar: FC<{ progress: number }> = ({ progress }) => {
    return (
        <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex h-3 bg-gray-200">
                <div style={{ width: `${progress}%` }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${ progress >= 59 ? "bg-green-500" : "bg-red-500"}`}></div>
            </div>
        </div>
    );
};

export default ProgressBar;
