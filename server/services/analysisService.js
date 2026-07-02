const parseSQL = require("../parser/sqlParser");

const getExecutionOrder = require("../analyzer/executionOrder");
const getStatistics = require("../analyzer/statistics");
const getTables = require("../analyzer/tableExtractor");
const getColumns = require("../analyzer/columnExtractor");
const getOptimizationSuggestions = require("../analyzer/optimizer");
const estimateCost = require("../analyzer/costEstimator");
const explainClauses = require("../analyzer/clauseExplainer");
const generateDatabaseBrain = require("../analyzer/databaseBrain");
const getQueryScore = require("../analyzer/queryScore");
const generateInterviewQuestions = require("../analyzer/interviewCoach");

function analyzeQuery(query) {

    const parsedResult = parseSQL(query);

    if (!parsedResult.success) {
        return parsedResult;
    }

    const ast = Array.isArray(parsedResult.ast)
        ? parsedResult.ast[0]
        : parsedResult.ast;

    return {

        success: true,

        executionOrder: getExecutionOrder(ast),

        statistics: getStatistics(ast),

        tables: getTables(ast),

        columns: getColumns(ast),

        optimization: getOptimizationSuggestions(ast),

        estimatedCost: estimateCost(ast),

        clauseExplanation: explainClauses(ast),

        databaseBrain: generateDatabaseBrain(ast),

        queryScore: getQueryScore(ast),

        interviewQuestions: generateInterviewQuestions(ast),

        ast

    };

}

module.exports = analyzeQuery;