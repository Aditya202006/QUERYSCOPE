function reviewPrompt(query) {

return `
You are a Senior SQL Code Reviewer.

Review this SQL query.

${query}

Return ONLY valid JSON.

{
  "score":95,
  "strengths":[
      "...",
      "..."
  ],
  "issues":[
      "...",
      "..."
  ],
  "suggestions":[
      "...",
      "..."
  ],
  "summary":"..."
}

Rules:

- Score should be between 0 and 100.
- Give 2-4 strengths.
- Give 2-4 issues.
- Give 2-4 suggestions.
- Summary should be 2 sentences.
- No markdown.
`;

}

module.exports = reviewPrompt;