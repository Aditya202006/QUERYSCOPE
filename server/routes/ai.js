const express = require("express");
const router = express.Router();

const askGemini = require("../ai/gemini");
const interviewPrompt = require("../prompts/interviewPrompt");

router.post("/interview", async (req, res) => {

    try {

        const { query } = req.body;

        const prompt = interviewPrompt(query);

        const response = await askGemini(prompt);

        const cleaned = response
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        res.json(JSON.parse(cleaned));

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});

module.exports = router;