function interviewPrompt(query) {

return `
You are a senior SQL interviewer.

A student wrote the following SQL query.

${query}

Generate exactly THREE interview questions.

Return ONLY valid JSON.

Format:

{
  "questions":[
    {
      "question":"",
      "answer":"",
      "difficulty":"Easy | Medium | Hard"
    }
  ]
}

Do not include markdown.

Do not include explanation outside JSON.
`;

}

module.exports = interviewPrompt;