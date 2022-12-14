const gameList = document.querySelector('.gameList');
const searchInput = document.querySelector('#searchInput');
const gameData = [
  {
    title: '明星三缺一',
    time: '111/10/4 - 111/11/1',
    content: '單筆儲值GASH 1,000點，加送10%ｉ幣<br>單筆儲值GASH 3,000點，加送10%ｉ幣',
    awards: '儲值立即送',
    exp: '儲值後7天遊戲內領取',
    notice: '※詳情請以遊戲官網或粉絲團公告為主',
    logo: 'logo-01.png',
    url: '',
  },
  {
    title: '幸運拉霸GO',
    time: '111/10/4 - 111/11/1',
    content: '儲值GASH 1000點送 尊榮福袋包<br>儲值GASH 3000點送 豪華福袋包',
    awards: '儲值立即送',
    exp: '儲值後7天遊戲內領取',
    notice: '※詳情請以遊戲官網或粉絲團公告為主',
    logo: 'logo-02.png',
    url: '',
  },
  {
    title: '滿貫大亨',
    time: '111/10/4 - 111/11/2',
    content:
      '儲值1000元加贈<br>「歡慶豪華寶箱」x1+歡慶拉霸幣禮盒x3<br><br>儲值3000元加贈<br>「歡慶豪華寶箱」x3+歡慶拉霸幣禮盒x9',
    awards: '儲值立即送',
    exp: '儲值後7天遊戲內領取',
    notice:
      '「歡慶豪華寶箱」內容：抽大獎滿貫特製黃金金牌卡(價值8,888紅鑽)！其他獎勵包含：黃金卡、紅鑽、隨機虛寶卡，獎勵隨機取一。<br><br>「歡慶拉霸幣禮盒」內容：歡慶拉霸幣1~10個，數量隨機獲得。蒐集指定數量可至遊戲內拉霸機轉動獲得獎勵！大獎台銀幻彩條塊卡(10公克)(價值19,000紅鑽)！',
    logo: 'logo-03.png',
    url: 'https://www.gametower.com.tw/action/79_TMD/20220830U/page2.aspx',
  },
  {
    title: '金好運',
    time: '111/10/4 - 111/11/1',
    content:
      '單筆儲值GASH 1,000點<br>加送嬉遊記暢玩卡(2星) 20張<br><br>單筆儲值GASH 3,000點<br>加送嬉遊記暢玩卡(2星) 100張',
    awards: '儲值立即送',
    exp: '儲值後7天遊戲內領取',
    notice: '※詳情請以遊戲官網或粉絲團公告為主',
    logo: 'logo-04.png',
    url: 'https://www.goodluck777.com/news/6311b34956e8ff70d449e651',
  },
  {
    title: '至尊娛樂城-黃金版',
    time: '111/10/4 - 111/11/1',
    content:
      '1000 →儲值回饋10%至尊幣點數<br>加碼再送【GASH金福袋】×1<br><br>3000 →儲值回饋10%至尊幣點數<br>加碼再送【GASH金福袋】×3<br><br>5000 →儲值回饋13%至尊幣點數<br>加碼再送【GASH鑽福袋】×2',
    awards: '儲值立即送',
    exp: '儲值後30天遊戲內領取',
    notice: '※詳情請以遊戲官網或粉絲團公告為主',
    logo: 'logo-05.png',
    url: 'https://act.tw.ace777.com/point-event/gash',
  },
  {
    title: '多樂米麻將館',
    time: '依活動期間為主',
    content:
      '活動期間至全台7-ELEVEN<br>購買指定面額GASH儲值卡<br>並成功儲值至多樂米遊戲內<br><br>單筆1000點 實際獲得135,000多幣<br><br>單筆3000點 實際獲得435,000多幣<br><br>單筆5000點 實際獲得725,000多幣',
    awards: '儲值立即送',
    exp: '依活動期間為主',
    notice: '※詳情請以遊戲官網或粉絲團公告為主',
    logo: 'logo-06.png',
    url: '',
  },
  {
    title: '土撥鼠Online',
    time: '依活動期間為主',
    content:
      '活動期間內<br>購買GASH點數儲值指定面額<br>並成功儲值至土撥鼠Online<br>即可獲得最高45%優惠<br><br>單筆150點	 實際獲得16,800 土幣<br>單筆300點	 實際獲得34,500 土幣<br>單筆600點	 實際獲得70,800 土幣<br>單筆1,000點	 實際獲得120,000 土幣<br>單筆1,500點	 實際獲得183,000 土幣<br>單筆3,000點	  實際獲得375,000土幣<br>單筆5,000點	  實際獲得700,000土幣',
    awards: '儲值立即送',
    exp: '依活動期間為主',
    notice: '※詳情請以遊戲官網或粉絲團公告為主',
    logo: 'logo-07.png',
    url: '',
  },
  {
    title: '王牌俱樂部',
    time: '111/10/5 00:00 - 111/10/18 23:59 止',
    content:
      '使用【GASH點數卡】儲值指定面額<br>加贈精選機皇福袋<br>期間限定加碼再抽【iPhone13】<br>豐富虛寶讓您機皇一把抓、大獎開不停！<br><br>單筆300點<br>加贈【精選銀福袋】x2<br>【iPhone好運福袋】x1<br><br>單筆500點<br>加贈【精選銀福袋】x4<br>【iPhone好運福袋】x2<br><br>單筆1,000點<br>加贈【精選金福袋】x1<br>【iPhone好運福袋】x4<br><br>單筆3,000點<br>加贈【精選金福袋】x4<br>【iPhone好運福袋】x12<br><br>單筆5,000點<br>加贈【精選鑽福袋】x1<br>【iPhone好運福袋】x20',
    awards: '儲值立即送',
    exp: '儲值後7天遊戲內領取',
    notice: '※詳情請以遊戲官網或粉絲團公告為主',
    logo: 'logo-08.png',
    url: 'https://act.aceclub.com.tw/point-event/gash',
  },
  {
    title: '角子共玩',
    time: '111/10/4 00:00 - 111/10/18 23:59 止',
    content:
      '活動期間內<br>使用【GASH】儲值指定面額<br>至【角子共玩】遊戲<br>可額外獲得【龍王超級昇龍卡】！<br><br>NTD 1,000贈送<br>龍王超級昇龍卡-押注 15,000,000 *1張)<br><br>NTD 3,000 贈送<br>龍王超級昇龍卡-押注 45,000,000 *1張)<br><br>NTD 5,000 贈送<br>龍王超級昇龍卡-押注 90,000,000 *1張)',
    awards: '儲值立即送',
    exp: '儲值後7天遊戲內領取',
    notice: '※詳情請以遊戲官網或粉絲團公告為主',
    logo: 'logo-09.png',
    url: '',
  },
  {
    title: '錢多多娛樂城',
    time: '111/10/4  - 111/11/1',
    content:
      '活動期間內<br>使用GASH儲值指定面額<br>至【錢多多娛樂城】<br>就有機會抽中Iphone 14<br><br>單筆儲值GASH 1,000點，贈送福袋1個<br>單筆儲值GASH 3,000點，贈送福袋4個<br><br>獎項內容: (獎項隨機取一)<br>1	實體	iPhone 14<br>2	實體	家樂福2000<br>3	實體	王品1200即享券卡<br>4	實體	陶板屋套餐即享券卡<br>5	實體	遠東500即享券卡<br>6	實體	GASH300卡<br>7	金幣	20,000金幣<br>8	金幣	10,000金幣<br>9	金幣	6,000金幣<br>10	金幣	2,000金幣',
    awards: '儲值立即送',
    exp: '儲值後7天遊戲內領取',
    notice: '※詳情請以遊戲官網或粉絲團公告為主',
    logo: 'logo-10.png',
    url: '',
  },
  {
    title: '大福娛樂城',
    time: '111/10/4  - 111/11/1',
    content:
      '活動期間內<br>使用【GASH】儲值指定面額<br>至【大福娛樂城】<br>就送超值禮包<br><br>儲值GASH 1000點送 711豪華包x2<br>儲值GASH 3000點送 711至強包x3<br><br>禮包內容:<br>711豪華包:最高1,000福幣(等價30,000台幣)、無敵百變、普卡百變、隨機5,000~500藍寶石、1,000~10福幣&其他虛寶道具。每包獎勵隨機取一<br>711至強包:最高3,000福幣(等價90,000台幣)、全新魔法票、經典百變、無敵百變、紫晶百變、普卡百變、隨機10,000~500藍寶石、3,000~10福幣&其他虛寶道具。每包獎勵隨機取一',
    awards: '儲值立即送',
    exp: '儲值後7天遊戲內領取',
    notice: '※詳情請以遊戲官網或粉絲團公告為主',
    logo: 'logo-11.png',
    url: '',
  },
  {
    title: '老子有錢',
    time: '111/10/8  - 111/10/31',
    content:
      '儲值GASH 1000點加碼送福袋A x1<br>儲值GASH 3000點加碼送福袋B x1<br>儲值GASH 5000點加碼送福袋B x2<br><br>福袋A:<br>3,000,000老幣、66,666老幣、1,600老幣、五福臨門免費卡(20點)三十日x1、金礦礦工紅利卡(20點)x1、玩具兵團免費卡(16點)x1、東海財寶轉輪卡(體驗5百分)三十日x1、東海財寶炸彈卡(體驗2百分)三十日x1<br><br>				福袋B<br>8,000,000老幣、88,888老幣、3,600老幣、啤酒狂歡節免費卡(60點)x1、金礦礦工紅利卡(50點)x1、玩具兵團免費卡(40點)x1、東海財寶轉輪卡(體驗5百分)三十日x1、東海財寶炸彈卡(體驗2百分)三十日x1',
    awards: '儲值立即送',
    exp: '儲值後7天遊戲內領取',
    notice: '※詳情請以遊戲官網或粉絲團公告為主',
    logo: 'logo-12.png',
    url: '',
  },
];

function updateList(data) {
  data.forEach((item) => {
    const { title, time, content, awards, exp, notice, logo, url } = item;
    gameList.innerHTML += `
      <section class="gameBoard">
          <div class="gameBrand">
              <img src="./images/${logo}" alt="">
              <a href="${url}" target="_blank">
                  <img src="./images/btn-link.png" alt="">
              </a>
          </div>
          <table>
              <tr>
                  <th>遊戲名稱</th>
                  <td>${title}</td>
              </tr>
              <tr>
                  <th>活動時間</th>
                  <td>${time}</td>
              </tr>
              <tr>
                  <th>活動內容</th>
                  <td>${content}</td>
              </tr>
              <tr>
                  <th>贈獎方式</th>
                  <td>${awards}</td>
              </tr>
              <tr>
                  <th>兌換期限</th>
                  <td>${exp}</td>
              </tr>
              <tr>
                  <th>注意事項</th>
                  <td>${notice}</td>
              </tr>
          </table>
      </section>`;
  });
}

function searchKeyword() {
  const keyword = searchInput.value.trim().toLowerCase();
  const result = gameData.filter(({ title }) => title.trim().toLowerCase().match(keyword));

  gameList.innerHTML = '';
  updateList(result);
}

updateList(gameData);
searchInput.addEventListener('keyup', searchKeyword);
searchInput.addEventListener('change', searchKeyword);
