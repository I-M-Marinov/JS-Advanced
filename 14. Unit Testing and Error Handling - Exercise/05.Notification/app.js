function notify(message) {
  const notificationElement = document.getElementById('notification');

  if (!notificationElement) {
      console.error('Notification element not found!');
      return;
  }

  notificationElement.textContent = message;
  notificationElement.style.display = 'block';

  notificationElement.addEventListener('click', () => {
      notificationElement.style.display = 'none';
  }, true); 
}