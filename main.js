function sleep(ms)  {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}

sleep(3000);
window.location.href = 'https://av3lla.github.io/schoolhelper';