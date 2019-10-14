# self_web

## Project step
1. "工具樣式"概念和 SASS (SCSS)
```
  sass-loader
   1.npm i -D sass sass-loader
   2.新增一個SCSS folder生出樣式檔 還有 變量檔
   3.要用任何變量就可以直接這樣
     @import '../../assets/scss/variables.scss';

```
2. 樣式重置
```
  替*(所有元素)
    1.加個border-box
    2.高亮消失
  html 定義
    1.找尋出現次數最多的字體大小
  body 定義
    1.設margin 0
    2.設置行高
    3.設置常用字體
  a 定義
    1.更改默認顏色
  li 定義
    1.取消默認點點
    2.float: left(看情況)
    3.cursor: pointer(看情況)
  button 定義
    1.取消默認方框
    2.border-radius: 0.5rem;(看情況)
```
3. 網站色彩和字體定義
```
  1.找出要做出的網站的主色調
    1.1 定義一些顏色變量
    1.2 用each跑出字體和背景顏色
  2.找出網站大多數的字體大小
    1.1 each跑出字體大小
```
4. 定義常用flex
```
  1.定義 display
  2.定義jc && ai
```

5. 定義常用margin padding
```
  1.分別做出type direction size的變量
  2.用each 做三層嵌套循環
```

6. 其他常用定義
```
  text align 定義
    分為 left, center, right
  flex-wrap 定義
    分為要換行和不換行
  font-weight 定義
    定義粗體字等等
  寬高100% 定義
    width: 100%;
    height: 100%;
```

7. 開始做頁面
```
  1.做完導航菜單 (header nav)
  2.做swiper ==> npm install vue-awesome-swiper --save
  https://github.com/surmon-china/vue-awesome-swiper
  3.iconfont
    3.1 https://www.iconfont.cn/
    3.2 下載完代碼後記得去main.js import iconfont.css
```

8. 佈署到heroku
```
  1.server 端
    1.1 npm init -y
    1.2 創建index.js
    1.3 增加script --> "serve": "nodemon index.js",
    1.4 npm i -g nodemon
    1.5 寫index.js (看一下)
  2.前端web
    1.1 寫vue.config.js(看一下)
    1.2 npm run build
  3.佈署到heroku
    1.1 記得一定要加  "start": "nodemon index.js"
    1.2 git init 
        git add .
        git commit -m ""
    1.3 heroku login 
        heroku create <name>
        git push heroku master
```

9. 其他觀念
```
  1.頁面整體型態可參考aboutMe
  2.在容器設置rem 裡面可以用%數 如果內部有自帶寬高的元素那就不用
  3.手機端製作動畫時盡量不要用到
    background、寬高，會很卡
  4.部署github 要加以下的東西
     publicPath: process.env.NODE_ENV === 'production'
     ? '/<responsity-name>>>/'
     : '/'
```



