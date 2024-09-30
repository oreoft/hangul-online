import React from 'react';
import {
    aspiratedConsonants,
    basicVowels,
    compoundVowels,
    laxConsonants,
    nasalConsonants,
    tensedConsonants
} from "./const";
import {Col, Row, Tabs} from "antd";
import {HangulConfig} from "./types/HangulConfig";


const {TabPane} = Tabs;

const colCountKey = 4;
const hangulCard = (char: HangulConfig, index: number) => (
    <Col span={24 / colCountKey} key={index}>
        <div className="w-full aspect-square border shadow cursor-pointer hover:bg-gray-100 rounded-2xl">
            <div className="flex flex-col items-center justify-center h-full">
                <div className="font-bold text-xl">
                    {char.hangul}
                </div>
                <div className="text-gray-400">
                    {char.rome[0]}
                </div>
            </div>
        </div>
    </Col>
)


const HangulCharacters: React.FC = () => {
    return (
        <div className="">
            <Tabs defaultActiveKey="1">
                <TabPane tab="vowels" key="1">
                    <div className={'mb-6 mt-4 text-xl font-black'}>basic</div>
                    <Row gutter={[10, 10]}>
                        {basicVowels
                            .map((char, index) => hangulCard(char, index))}
                    </Row>
                    <div className={'my-6 text-xl font-black'}>compound</div>
                    <Row gutter={[16, 16]}>
                        {compoundVowels
                            .map((char, index) => hangulCard(char, index))}
                    </Row>
                </TabPane>
                <TabPane tab="consonants" key="2">
                    <div className={'mb-6 mt-4 text-xl font-black'}>aspirated</div>
                    <Row gutter={[10, 10]}>
                        {aspiratedConsonants
                            .map((char, index) => hangulCard(char, index))}
                    </Row>
                    <div className={'my-6 text-xl font-black'}>lax</div>
                    <Row gutter={[16, 16]}>
                        {laxConsonants
                            .map((char, index) => hangulCard(char, index))}
                    </Row>
                    <div className={'my-6 text-xl font-black'}>nasal&liquid</div>
                    <Row gutter={[16, 16]}>
                        {nasalConsonants
                            .map((char, index) => hangulCard(char, index))}
                    </Row>
                    <div className={'my-6 text-xl font-black'}>tensed</div>
                    <Row gutter={[16, 16]}>
                        {tensedConsonants
                            .map((char, index) => hangulCard(char, index))}
                    </Row>
                </TabPane>
            </Tabs>
        </div>
    );
}

export default HangulCharacters;
