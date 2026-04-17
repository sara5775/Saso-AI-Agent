function sendMessage() {
  let input = document.getElementById("userInput");
  let message = input.value.trim();
  if (!message) return;

  addMessage(message, "user");
  input.value = "";

  setTimeout(() => {
    let reply = generateReply(message);
    addMessage(reply, "bot");
  }, 500);
}

function addMessage(text, type) {
  let chatBox = document.getElementById("chatBox");

  let div = document.createElement("div");
  div.classList.add("message", type);
  div.innerText = text;

  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateReply(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("budget")) {
    return "Typical wedding budget depends on guests. For 200 guests, expect ₹5–15 lakhs.";
  }
  if (msg.includes("guest")) {
    return "Create guest list early and categorize: family, friends, colleagues.";
  }
  if (msg.includes("idea")) {
    return "You can try theme weddings like royal, beach, floral, or minimalist style.";
  }
  if (msg.includes("schedule")) {
    return "Start planning 6–12 months before wedding for best results.";
  }

  return "I can help with budget, guests, ideas, or schedule. Ask me anything!";
}
