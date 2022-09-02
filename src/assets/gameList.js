import { gameData } from './gameData.js';

const gameList = document.querySelector('.gameList');
const searchInput = document.querySelector('#searchInput');

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
