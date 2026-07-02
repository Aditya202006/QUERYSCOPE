const { Parser } = require("node-sql-parser");

const parser = new Parser();

function parseSQL(query) {
    try {

        const ast = parser.astify(query);

        return {
            success: true,
            ast,
        };

    } catch (error) {

        return {
            success: false,
            error: error.message,
        };

    }
}

module.exports = parseSQL;