const express = require("express");

const analyzeQuery = require("../services/analysisService");

const router = express.Router();

router.post("/", (req, res) => {

    const { query } = req.body;

    const result = analyzeQuery(query);

    if (!result.success) {

        return res.status(400).json(result);

    }

    return res.json(result);

});

module.exports = router;