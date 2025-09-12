self.addEventListener('message', event => {
  if (event.data === 'showNotification') {
    self.registration.showNotification('⏰ 알림', {
      body: '지정된 시간입니다: 2025년 9월 12일 16시 10분!',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Alarm_Clock.svg/1200px-Alarm_Clock.svg.png'
    });
  }
});
