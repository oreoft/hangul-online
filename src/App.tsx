import React, {useState} from 'react';
import {Tabs} from 'antd';
import HangulCharacters from './HangulCharacters';
import CommonWords from './CommonWords';
import {AppOutline, UnorderedListOutline} from 'antd-mobile-icons';
import {TabBar} from 'antd-mobile';

const {TabPane} = Tabs;

const tabs = [
    {
        key: '1',
        title: 'Hangul',
        icon: <AppOutline/>,
        component: <HangulCharacters/>
    },
    {
        key: '2',
        title: 'Mnemonic',
        icon: <UnorderedListOutline/>,
        component: <CommonWords/>
    }
];

function App() {
    const [activeKey, setActiveKey] = useState('1');
    return (
        <div className="App mx-2">
            <div className="flex-1 overflow-y-auto p-4 pb-16">
                {tabs.map(item => {
                    if (item.key === activeKey) {
                        return <div key={item.key}>{item.component}</div>;
                    }
                    return null;
                })}
            </div>
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white">
                <TabBar activeKey={activeKey} onChange={setActiveKey}>
                    {tabs.map(item => (
                        <TabBar.Item
                            key={item.key}
                            icon={item.icon}
                            title={item.title}
                        />
                    ))}
                </TabBar>
            </div>
        </div>
    );
}

export default App;
