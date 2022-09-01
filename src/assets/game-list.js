import { listContent } from './list.js';
const gameListContent = document.querySelector('.gameListContent');

listContent.forEach((item, key) => {
  const { title, time, content, awards, exp, notice, url } = item;
  gameListContent.innerHTML += `
        <section>
            <div class="gameInfoImg">
                <img src="./images/logo-${key + 1 < 10 ? '0' : ''}${key + 1}.png" alt>
                <a href="${url}" target="_blank">
                    <img src="./images/btn-link.png" alt>
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
