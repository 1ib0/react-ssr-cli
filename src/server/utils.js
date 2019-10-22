// server/utils.js
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'; // 重要是要用到 StaticRouter
import { Provider } from 'react-redux';
import RoutesComponent from '../routes';

export const render = (req, store) => {
    // 构建服务端的路由
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path}>
                <RoutesComponent />
            </StaticRouter>
        </Provider>
    );
    // 服务端添加 store 之后，浏览器端不需要 在运行 store
    return `
        <html>
            <head>
                <title>ssr</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.context = {
                        state: ${JSON.stringify(store.getState())}
                    }
                </script>
                <script src="/index.js"></script>
            </body>
        </html>
    `;
};
