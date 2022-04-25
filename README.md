<div align="center">
<h1>NANSHU-CLI</h1>

<br />

<a href="https://github.com/LuckyChou710/nanshu-ui">
  <img
    height="80"
    width="80"
    alt=""
    src="https://cdn.jsdelivr.net/gh/LuckyChou710/nanshu-assets/png/icon3.png"
  />
  <img
    height="80"
    width="80"
    alt=""
    src="https://cdn.jsdelivr.net/gh/LuckyChou710/nanshu-assets/png/icon27.png"
  />
  <img
    height="80"
    width="80"
    alt=""
    src="https://cdn.jsdelivr.net/gh/LuckyChou710/nanshu-assets/png/icon5.png"
  />
</a>

<br />

<br />
  
掘金主页 [juejin](https://juejin.cn/user/1574156383563496) ( 更新中 🏠 )

个人博客 [blog](https://luckychou.gitbook.io/blog/)( 停止维护 ⚠️ )

学习笔记 [code-traveling](https://github.com/LuckyChou710/code-traveling) ( codeing 🧑‍💻 )

个人网站 [fe-tutorial](http://124.223.71.181:3000/) ( 施工中 🚧 )

个人 UI [@nanshu/ui](http://124.223.71.181:3002/) ( 建设中 👷 )

一些些 [npm package](https://www.npmjs.com/~chou209)( 扩展中 🏗 )

<br />
 
 
</div>

```
Usage: nanshu [options] [command]

    _   _____    _   _______ __  ____  ____
   / | / /   |  / | / / ___// / / / / / / /
  /  |/ / /| | /  |/ /\__ \/ /_/ / / / / /
 / /|  / ___ |/ /|  /___/ / __  / /_/ /_/
/_/ |_/_/  |_/_/ |_//____/_/ /_/\____(_)

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  create|c        create a project
  help [command]  display help for command
```

```
cli
├─ .eslintrc.js
├─ README.md
├─ bin
│  └─ nanshu-cli.js
├─ lib
│  ├─ commander.js
│  ├─ create.js
│  ├─ main.js
│  └─ utils
│     ├─ constants.js
│     ├─ generator.js // 编译模版文件
│     ├─ loadCustomPreset.js // 加载用户自定义配置
│     ├─ loadRemotePreset.js // 加载远程仓库模版
│     ├─ prompt.js // 用户自定义信息输入
│     ├─ request.js  //  github api request
│     └─ sign.js
├─ package.json
└─ yarn.lock
```
