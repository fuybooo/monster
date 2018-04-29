# 运行方法
1. git clone git@github.com:fuybooo/monster.git 下载代码
2. cd monster 进入到工程
3. yarn 安装依赖 （需要先安装[yarn](https://yarn.bootcss.com/docs/install.html)）
4. yarn s 运行后台服务
5. yarn start 运行前端服务
6. 打开浏览器输入 localhost:3000 即可运行
7. [戳此](https://fuybooo.github.io/monster/#/)在线预览
# Monster
   1. 创建于2018-04-21
## 创建项目
- 1. 使用脚手架：yarn create react-app monster --scripts-version=react-scripts-ts
- 2. 安装依赖：yarn add antd react-app-rewired ts-import-plugin react-app-rewire-less
- 3. 安装全局服务器lite-server：不要使用yarn安装，使用npm安装
    - sudo npm i lite-server -g 无需更改环境变了
- 4. 构建运行：yarn build 完成之后 "serve": "lite-server --baseDir='build'" yarn -> serve

## 自定义配置项
- 1. 弹出所有的配置：yarn eject
- 2. 安装必须的包：
    - 使用less：yarn add less-loader react-scripts
- 3. 对config进行配置
    ```
      const tsImportPluginFactory = require('ts-import-plugin');
      const { getLoader } = require("react-app-rewired");
      // 修改 start
      let config = {
                     + test: /\.less$/,
                     use: [
                       + require.resolve('less-loader'),
                     ],
                   },
      // 修改 end
      const tsLoader = getLoader(
        config.module.rules,
        rule =>
          rule.loader &&
          typeof rule.loader === 'string' &&
          rule.loader.includes('ts-loader')
      );
      tsLoader.options = {
        getCustomTransformers: () => ({
          before: [tsImportPluginFactory({
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css',
            // style: true,
          })]
        })
      };
      module.exports = config;
    ```
- 4. 启动打包：yarn start -> yarn build -> yarn serve

## 开始开发页面
- 1. 路由：yarn add react-router-dom @types/react-router-dom
- 2. 发布到github
    - 1. 设置package.homepage
    - 2. git subtree push --prefix=build origin gh-pages
- 3. 添加动画：yarn add react-transition-group @types/react-transition-group

## 2018-04-22
  - 1. 使用redux开发
    - 1. yarn add redux @types/redux react-redux
    - 2. redux-thunk的index.d.ts报错，需要该为：
    ```
      import {Middleware, Dispatch} from "redux";
      
      
      export type ThunkAction<R, S, E> = (dispatch: any, getState: () => S,
                                          extraArgument: E) => R;
      
      declare module "redux" {
        // export interface Dispatch<S> {
        //   <R, E>(asyncAction: ThunkAction<R, S, E>): R;
        // }
      }
      
      
      declare const thunk: Middleware & {
        withExtraArgument(extraArgument: any): Middleware;
      };
      
      export default thunk;

    ```

  - 2. 开发后端服务接口
    - 1. 使用es6开发后端服务 sudo npm i express supervisor --save
## 2018-4-29
  - 1. 目的实现分页查询课程
    - 1. 开发简单的后端服务
    - 2. 在api.home中定义一个查询lesson的函数
    - 3. 在redux.action-types中定义一个type
    - 4. 在redux.actions.home中定义一个方法去调用api
    - 5. 在redux.reducers.home中定义一个case合并action中穿回来的数据
    - 6. 在componentDidMount中真正调用该请求，实际调用的是4中的方法
    - 7. 使用请求到的数据从props中获取即可