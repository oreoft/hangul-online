import React from 'react';

const consonants: string[] = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const vowels: string[] = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ'];

const HangulCharacters: React.FC = () => {
    return (
        <div className="p-4 grid grid-cols-3 gap-4">
            {consonants.map((char, index) => (
                <div key={index} className="p-2 border rounded shadow cursor-pointer hover:bg-gray-100">
                    {char}
                </div>
            ))}
            {vowels.map((char, index) => (
                <div key={index} className="p-2 border rounded shadow cursor-pointer hover:bg-gray-100">
                    {char}
                </div>
            ))}
        </div>
    );
}

export default HangulCharacters;
