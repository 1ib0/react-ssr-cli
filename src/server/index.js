// server/index.js
import express from 'express';
import { render } from './utils';
import { routesConfig } from '../routes';
import { matchRoutes } from 'react-router-config';
import { serverStore } from '../store';

const app = express();
app.use(express.static('public'));

let store = serverStore();

//注意这里要换成*来匹配
app.get('*', function(req, res) {
    // 调用 matchRoutes 用来匹配当前路由(支持多级路由)
    const matchedRoutes = matchRoutes(routesConfig, req.path);
    // promise对象数组
    const promises = [];
    matchedRoutes.forEach(item => {
        // 如果这个路由对应的组件有 loadData 方法
        if (item.route.loadData) {
            // 那么就执行一次,并将 store 传进去
            // 注意 loadData 函数调用后, 需要返回 Promise 对象
            promises.push(item.route.loadData(store));
        }
    });

    Promise.all(promises).then(() => {
        res.send(render(req, store));
    });
});

app.listen(3001, () => {
    console.log('listen:3001');
});
