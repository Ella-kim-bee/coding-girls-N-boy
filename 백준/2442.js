// https://www.acmicpc.net/problem/2442, 별 찍기 -5
// node 2442

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

    let output = '';
    for (let i = 1; i <= a; i++) {
      output += ' '.repeat(a - i) + '*'.repeat(i * 2 - 1) + '\n'
    }

    console.log(output);
  rl.close();
}).on('close', function () {
  process.exit();
});
