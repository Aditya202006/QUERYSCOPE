require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function askGemini(prompt) {

    const MAX_RETRIES = 3;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {

        try {

            const response = await ai.models.generateContent({

                model: "gemini-2.5-flash",

                contents: prompt,

            });

            return response.text;

        } catch (error) {

            const status = error.status || error.code;

            console.error(`Gemini Error (Attempt ${attempt}/${MAX_RETRIES})`);

            console.error(error);

            // Retry only when Gemini servers are busy
            if (status === 503 && attempt < MAX_RETRIES) {

                console.log(`Retrying in ${attempt * 2} seconds...`);

                await delay(attempt * 2000);

                continue;

            }

            // Friendly message for overloaded servers
            if (status === 503) {

                throw new Error(
                    "Gemini servers are currently busy. Please try again in a few moments."
                );

            }

            // Invalid API key
            if (status === 401 || status === 403) {

                throw new Error(
                    "Invalid Gemini API Key. Please verify your .env configuration."
                );

            }

            // Too many requests
            if (status === 429) {

                throw new Error(
                    "Gemini rate limit exceeded. Please wait a few seconds and try again."
                );

            }

            // Any other unexpected error
            throw new Error(
                error.message || "Unexpected error while communicating with Gemini."
            );

        }

    }

}

module.exports = askGemini;