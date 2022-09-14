let newURL = 'https://av3lla.github.io/schoolhelper';

function sleep(ms)  {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}

function redirect() {
    window.location.href = newURL;
}

console.log('이 페이지는 더이상 사용되지 않습니다. 3초 후 새 주소로 이동합니다.');
console.log('https://av3lla.github.io/schoolhelper');
console.log('Redirected from "random-seat-generator" to "schoolhelper"');
setTimeout(redirect, 3000);