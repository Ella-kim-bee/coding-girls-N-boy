// https://www.acmicpc.net/problem/2439, 별 찍기 - 2
// node 2439
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

    for(let i = 0; i < a; i++) {
      let star = '';
      for (let j = 0; j <= a - 1; j++) {
        star += j <= i ? '*' : ' ';
      }
      console.log(별);
    }
  rl.close();
}).on('close', function () {
  process.exit();
});
