function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatMessages = document.getElementById('chat-messages');

    if (userInput.value.trim() !== "") {
        const userMessage = document.createElement('div');
        userMessage.textContent = userInput.value;
        userMessage.className = 'user-message';
        chatMessages.appendChild(userMessage);

        // Aquí puedes agregar la lógica para la respuesta del chatbot
        const botMessage = document.createElement('div');
        botMessage.textContent = "Esta es una respuesta de MissI.";
        botMessage.className = 'bot-message';
        chatMessages.appendChild(botMessage);

        userInput.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
