self.addEventListener('notificationclick', event => {
  event.notification.close();
  // 클릭 시 특정 페이지로 이동하거나 다른 동작 가능
  event.waitUntil(
    clients.openWindow('/')
  );
});
