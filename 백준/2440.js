// https://www.acmicpc.net/problem/2440, 별 찍기 - 3
// node 2440
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (a) {

    /**
     * 백준 컴퓨터가 a에다가 변수 넣어줌.
     * 아래에 코드를 작성하세요.
     */

    // 코드 작성, 매개변수 a

    for(let i = a; i > 0; i--) {
      let star = '';
      for (let j = 0; j <= a - 1; j++) {
          star += j >= i ? ' ' : '*';
      }
      console.log(star);
    }
  rl.close();
}).on('close', function () {
  process.exit();
});
