import { useState, useEffect, useRef } from "react";
import api from "../../services/api";
import ChatMessage from "./ChatMessage";

function DatabaseMentor({ query }) {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  const quickQuestions = [
    "Why is ORDER BY expensive?",
    "Explain JOIN.",
    "How can I optimize this query?",
    "Why is WHERE executed before SELECT?",
    "Which indexes should I create?"
  ];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);

  const askMentor = async (text = question) => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text
      }
    ]);

    setQuestion("");

    setLoading(true);

    try {
      const response = await api.post("/ai/mentor", {
        query,
        question: text
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "mentor",
          text:
            `${response.data.answer}\n\n` +
            `💡 Real World Intuition\n\n${response.data.intuition}\n\n` +
            `🎯 Interview Tip\n\n${response.data.tip}`
        }
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "mentor",
          text: "❌ AI is currently unavailable. Please try again."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white rounded-xl shadow-sm p-6 mt-6">
      <h2 className="text-2xl font-bold">
        🧠 Database Mentor
      </h2>

      <p className="text-gray-500 mt-2">
        Ask anything about your current SQL query.
      </p>

      {/* Quick Questions */}

      <div className="flex flex-wrap gap-2 mt-5">
        {quickQuestions.map((q, index) => (
          <button
            key={index}
            onClick={() => askMentor(q)}
            className="px-3 py-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Chat Window */}

      <div className="mt-6 border rounded-xl p-4 max-h-[500px] overflow-y-auto bg-slate-50 space-y-4">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            role={msg.role}
            text={msg.text}
          />
        ))}

        {loading && (
          <ChatMessage
            role="mentor"
            text="Thinking..."
          />
        )}

        <div ref={bottomRef}></div>
      </div>

      {/* Input */}

      <textarea
        className="w-full border rounded-xl mt-5 p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={4}
        placeholder="Ask your SQL question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            askMentor();
          }
        }}
      />

      {/* Button */}

      <button
        onClick={() => askMentor()}
        disabled={loading}
        className="bg-blue-600 text-white px-5 py-3 rounded-xl mt-4 hover:bg-blue-700 disabled:opacity-50 transition"
      >
        {loading ? "Thinking..." : "Ask Mentor"}
      </button>
    </section>
  );
}

export default DatabaseMentor;