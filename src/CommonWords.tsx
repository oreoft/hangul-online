import React from 'react';

const words: string[] = ['가 나 다 라 마 바 사', '아 자 차 카 타 파 하'];

const CommonWords: React.FC = () => {
    return (
        <div className="p-4 grid grid-cols-2 gap-4">
            {words.map((word, index) => (
                <div key={index} className="p-2 border rounded shadow cursor-pointer hover:bg-gray-100">
                    {word}
                </div>
            ))}
        </div>
    );
}

export default CommonWords;
