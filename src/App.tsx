import React from 'react';
import {Tabs} from 'antd';
import HangulCharacters from './HangulCharacters';
import CommonWords from './CommonWords';

const {TabPane} = Tabs;

function App() {
    return (
        <div className="App">
            <Tabs defaultActiveKey="1">
                <TabPane tab="hangul" key="1">
                    <HangulCharacters/>
                </TabPane>
                <TabPane tab="mnemonic" key="2">
                    <CommonWords/>
                </TabPane>
            </Tabs>
        </div>
    );
}

export default App;
