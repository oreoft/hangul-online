import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/antd.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ConfigProvider} from "antd";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const theme = {
    token: {
        colorPrimary: '#a062d4',
    },
};

root.render(
    <React.StrictMode>
        <ConfigProvider theme={theme}>
            <App/>
        </ConfigProvider>,
    </React.StrictMode>
);
reportWebVitals();
