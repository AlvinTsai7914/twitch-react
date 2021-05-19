# twitch-react



### Why this?

利用 twitch 的板來練習，使用 react 框架，react styled-components 搭配 scss 來切版，一來利用實作複習之前學習的內容，二來參考現今較大的網站的版面規劃，期望能將 CSS、REACT、接API 都熟練。

---------



### 使用的工具

- React (` create-react-app` )

- Styled-Components

- Fetch API
- Twitch API ( `URL/games/top`，`URL/search/streams`)
- Simple-Bar ( 取代原生 scroll bar )

------



### Update 

5/2 完成 side bar 和 main 的靜態畫面，下一步處理動態的部分。

5/3 

1. 插入`SimpleBar`，為了避免瀏覽器 `scroll bar` 出現，`Main` 的 `position:relative` 改成 `position:fixed` ( 猜測 `fixed` 跳脫出瀏覽器的內部框架，純屬猜測 )。  

2. 完成 `ThumbCard hover`，利用了偽元素和 `transform: skew()` ，但 twitch 好像是使用 `transform: scale()`，之後有時間再來研究。

5/7  

1. 接了兩支API，第一支抓前6名的實況遊戲，第二支API利用第一支API取得的遊戲名稱去找前10名實況主，兩隻都在 `Main` 裡串接完，再傳 `props` 給 `ThumbList` 和 `ThumbCard`，物件、陣列的處理還不夠熟練，有時間得再回去把文件重看一遍。 
2. 標上圖片上的 streamType(LIVE) 和 觀看人數。
3. 解決 flex box 被內容撐開導致 card 大小不一，在外容器使用 ` flex: 1; width:0;`將容器的寬度設為0 ，再讓 flex 自行決定寬度
4. 問題：在資料串接還沒完成時，`Main` 傳 `props` 給 `List` 和 `Card` ，會造成 `props` 值為 `undefined` ，`fetch(porps)` 時出錯。只好一次全部 `fetch` 完再來整理資料。
5. 上 gh-pages

5/11

1. 完成 RWD，twitch 有電腦和手機版結構不太一樣，所以手機板就以電腦版加上自己的想法去改了。
2. 把 `Nav` 的小圖示都改成粗體。

待解決：

1. `<ThumbList>` 因為使用 `nth-child()` 控制 `card` 數量，導致 `card` 裡的元件的意外消失。( 5/12 已解決)
2. RWD 版的 Nav Search 。

5/11 第二次上傳

1. 解決手機上跑板問題，方法：加上了 `<MainListCard> flex: 1` ，`<Main> max-width: `。

 5/12 

1. 加入 `<Header>`左側按鈕點擊時，下方底線 `<BottomLine>` 跟著移動 ( 使用`e.target.offsetLeft`來定位 ) 

2. 解決使用 `nth-child()` 控制 `card` 數量，導致 `card` 裡的元件的意外消失：將 `<ThumbList> `和 `<ThumbCard>`從原本的 `styled.div` 改成 `styled.ul/styled.li`，再利用 `li:nth-child()`避免選取到`<ThumbCard>`子層。

3. 使用 `@media(hover:hover){button:hover{}}`可以避免觸控裝置點擊時出現不必要的hover效果，只留下PC版的 hover。

   ```
   @media(hover:hover){
   	button:hover{
   		hover-style....
   	}
   }
   ```

5/13

1. 加入`<Sidabar>`的卡片的展開效果，用上了`keyframes`和`animation: 0.25s ${fadeIn} ease;`
2. `<ThumbCrad>` 加入 `<AspectSpace>`  讓圖片下載時先將版面撐開，`<ThumbCrad><img>`改成`absolute`疊在 `<AspectSpace> `上。

5/19

1. 加上 `react-router-dom`，讓 `<Direct> `按鈕按下會轉換畫面。

------



Search Cager