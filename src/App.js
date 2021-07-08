import React, { useState } from 'react';

import sendAsync from './message-control/renderer';

import './App.css';
import PageRoutes from './pages';
import 'antd/dist/antd.css';
import { FullScreeWrapper } from './styled/common';
import { ThemeProvider } from 'styled-components';
import { theme } from './styled/theme';
 
function App() {
    const [message, setMessage] = useState('SELECT * FROM repositories');
    const [response, setResponse] = useState();

    function send(sql) {
        sendAsync(sql).then((result) => setResponse(result));
    }

    return (
        <ThemeProvider theme={theme}>
        <FullScreeWrapper>
            <PageRoutes />
        </FullScreeWrapper>
        </ThemeProvider>
    );
}

export default App;
