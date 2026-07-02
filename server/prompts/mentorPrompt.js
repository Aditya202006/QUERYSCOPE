function mentorPrompt(query, question) {
  return `
You are an expert SQL Database Mentor.

The student's SQL query is:

${query}

The student's question is:

${question}

Answer ONLY about this SQL query.

Your response should:
1. Explain in simple language.
2. Give a real-world analogy.
3. Give one interview tip.
4. Keep the explanation beginner friendly.

Return ONLY valid JSON.

Format:

{
  "answer": "",
  "intuition": "",
  "tip": ""
}
`;
}

module.exports = mentorPrompt;