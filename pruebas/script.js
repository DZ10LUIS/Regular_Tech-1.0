

const userInput = document.getElementById('user-input');
const chatMessages = document.getElementById('chat-messages');

async function getCompletion(prompt) {
 // Utiliza una variable de entorno para la clave API

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini', // Puedes cambiar el modelo si deseas
      messages: [{
        "role": "user",
        "content": prompt
      }],
      max_tokens: 2048,
      temperature: 1
    })
  });

  if (!res.ok) {
    throw new Error("Failed to fetch completion:", await res.text());
  }

  return res.json();
}

async function sendMessage() {
  if (userInput.value.trim() !== "") {
    const userMessage = document.createElement('div');
    userMessage.textContent = userInput.value;
    userMessage.className = 'user-message';
    chatMessages.appendChild(userMessage);

    try {
      const response = await getCompletion(userInput.value);
      const botMessage = document.createElement('div');
      botMessage.textContent = response.choices[0].message.content;
      botMessage.className = 'bot-message';
      chatMessages.appendChild(botMessage);
    } catch (error) {
      console.error("Error:", error);
      // Manejar el error aquí, por ejemplo, mostrar un mensaje de error al usuario
    }

    userInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}