const chat = document.getElementById("chat");

function addMessage(text, className) {
  const div = document.createElement("div");
  div.className = "message " + className;
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

async function sendMessage() {
  const input = document.getElementById("input");
  const text = input.value;

  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  addMessage("Typing...", "ai");

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY_HERE"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: text }
      ]
    })
  });

  const data = await response.json();

  chat.lastChild.remove(); // remove "Typing..."

  const reply = data.choices[0].message.content;
  addMessage(reply, "ai");
}