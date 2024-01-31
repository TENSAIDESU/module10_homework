 const messageInput = document.getElementById('messageInput');
    const messageHistory = document.getElementById('messageHistory');

    function sendMessage() {
      const message = messageInput.value;
      displayMessage(message);
      messageInput.value = '';
       
      // const socket = new WebSocket('wss://echo-ws-service.herokuapp.com');
      // socket.onopen = function() {
      //   socket.send(message);
      // };
      // socket.onmessage = function(event) {
      //   const response = event.data;
      //   displayMessage(response);
      // };
    }

    function sendLocation() {
      // Получение геолокации
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const mapLink = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}&zoom=15`;

          displayMessage(mapLink);
        });
      } else {
        alert('Геолокация не поддерживается вашим браузером');
      }
    }

    function displayMessage(message) {
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      messageHistory.appendChild(messageElement);
    }