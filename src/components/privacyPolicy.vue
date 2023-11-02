<template>
    <div id="privacyPolicy">
      <div class="privacyTitle">
        <h1>網站政策</h1>
      </div>
      <ol>
        <li>
          <h5>本網站是否有搜集個資？</h5>
          <p>雖然網站上有聯絡表單及電子報訂閱介面，但實際上並未搜集任何個資，僅僅是依照輸入框的內容在前端做判斷及反饋，表單提交動作僅會觸發彈出視窗指令，並未提交至後台。</p>
        </li>
        <li>
          <h5>本網站未來是否會搜集個資？</h5>
          <p>未來短期可能會加入GA4，但僅是匿名流量的紀錄，無法偵測個人資訊，並且加入GA4後也會同步更新隱私權政策。</p>
        </li>
        <li>
          <h5>關於表單的部分，如何處理瀏覽器自動帶入的資料？</h5>
          <p>本網站以 <code>autocomplete="off"</code> 的語法將自動帶入功能關閉。</p>
        </li>
        <li>
          <h5>網站前動畫有點久怎麼辦？</h5>
          <p>網站內有較多圖片資源，在前動畫期間會進行圖片預載入，能提升頁面使用的流暢度，請耐心等候，謝謝！</p>
        </li>
        <li>
          <h5>聯絡表單能聯絡到作者嗎？</h5>
          <p>聯絡表單只有前端邏輯的展示，所以聯絡不到作者～</p>
        </li>
        <li>
          <h5>網站內資源來自於哪裡？可以取用嗎？</h5>
          <p>網站內資源都是來自於CC圖庫/影片庫，可以盡情使用。</p>
        </li>
        <li>
          <h5>網站內有外站連結嗎？</h5>
          <p>沒有，所以安心使用本網站！</p>
        </li>
      </ol>
    </div>
  </template>
  
  <style lang="scss" scoped>
    #privacyPolicy{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      min-height: 100vh;
      >.privacyTitle{
        display: flex;
        height: 20vh;
        width: 100%;
        align-items: center;
        >h1{
          width: 100%;
          text-align: center;
          font-size: 2.5em;
        }
      }
      >ol{
        width: 80%;
        >li{
          margin: 40px 0;
          >h5{
            width: 100%;
            line-height: 2em;
            font-weight: 700;
            border-bottom: 2px solid #fff;
          }
          >p{
            margin-top: 1em;
            >code{
              color: $minorColor;
            }
          }
        }
      }
    }
  </style>
  
  <script>
  export default {
    name: 'privacyPolicy'
  }
  </script>