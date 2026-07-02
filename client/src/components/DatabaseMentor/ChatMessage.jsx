function ChatMessage({ role, text }) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-[80%] rounded-xl px-4 py-3 shadow ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        <div className="font-semibold mb-2">
          {isUser ? "🙂 You" : "🧠 Database Mentor"}
        </div>

        <p className="whitespace-pre-wrap">
          {text}
        </p>
      </div>
    </div>
  );
}

export default ChatMessage;