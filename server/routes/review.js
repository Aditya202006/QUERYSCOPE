const express = require("express");
const router = express.Router();

const askGemini = require("../ai/gemini");
const reviewPrompt = require("../prompts/reviewPrompt");

router.post("/", async (req, res) => {

    try {

        const { query } = req.body;

        const prompt = reviewPrompt(query);

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