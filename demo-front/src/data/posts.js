export const posts = [
  { id: 1,
    title: '用 Vite 搭建个人页面',
    desc: '从 0 配置搭建个人页面展示',
    md: `

>* 从零开始，一个基于Vue3 **个人页面** 目的于深入学习前后端技术，实现全栈项目的流程。*
>> 选择Vite是因为它结合了热模块更替、超快的冷启动以及现代化的开发体验。能通过插件生态扩展功能，应对复杂项目需求
>> 首先进行页面构建开发，之后再进行后端功能实现
## 1. 初始化

\`\`\`bash
npm create vite@latest project-name
cd my-vue-app
npm install
\`\`\`

## 2. 前端服务
> 1).页面设计

>> 使用Vue进行页面搭建
>> 进行移动端适配，同时对于不同页面宽度也进行了适配

> 2).页面数据存放
>> 通过Mysql储存页面数据方便后续增改

## 3. 后端服务
> 使用Spring Boot进行前后端数据交换，同时可以着手进行 ***数据管理系统*** 的开发
    `,
    date: '2025-10-04',
    showInProject: true },
  { id: 2,
    title: '明日方舟猜干员',
    desc: '使用Html5+web Socket',
    md: `
# 用 NodeJs 搭建后端服务支持

> 一个 **明日方舟** 的在线聊天猜干员小游戏。

## 1. 已将简易测试版本上传至Github


源码地址：[明日方舟猜干员](https://github.com/Yezi99999/Arknights-Guess "明日方舟猜干员")

## 2. 代码由AI构建，旨在快速实现功能，未作细节优化以及性能调优
> 代码由Javascript+HTML+CSS组成

    `,
    date: '2025-05-01',
    showInProject: true },
  { id: 3,
    title: 'Python 爬虫可视化',
    desc: '基于 Python Django和Mysql',
    md: `
# 用 Python爬取数据后进行清洗储存到Mysql，使用Django将数据路由到Vue可视化大屏

> 基于 Vue3 和 Django + Mysql 的数据可视化大屏。

## 1. 源码丢失

\`\`\`后续重新编码
\`\`\`

## 2. None

...
    `,
    date: '2025-05-20',
    showInProject: true },
  { id: 4,
    title: '内部测试草稿',
    desc: '不对外',
    md: `
测试页面

...
    `,
    date: '2025-02-01',
    showInProject: false }   // 这条不会出现在项目页
]
