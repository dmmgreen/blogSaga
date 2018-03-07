1、安装babel-polyfill
否则提示错误saga部分,ReferenceError: regeneratorRuntime is not defined

2、apiServer/运行数据库
   server/index则是运行起相同域可以访问

3、http-proxy实现反向代理，用于服务端口被占用，分发端口

   webpack 入口配置

   `webpack-hot-middleware/client?path=http://${config.host}:${config.port}/__webpack_hmr`,

   webpack plugins配置
   new webpack.HotModuleReplacementPlugin()

   server.js配置
 
4、使用less版本不同出现，

Module build failed:

// ant-design/ant-motion#44
.bezierEasingMixin();
^
Inline JavaScript is not enabled. Is it set in your options?


less@2.x 是OK的。

less@3.x，需要开启 配置项 javascriptEnabled: true

{ loader: 'less-loader', options: { javascriptEnabled: true } }
