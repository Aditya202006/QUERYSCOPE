function estimateCost(ast) {

    let score = 0;

    // SELECT *
    if (
        ast.columns &&
        ast.columns.some(col => col.expr.column === "*")
    ) {
        score += 20;
    }

    // Missing WHERE
    if (!ast.where) {
        score += 25;
    }

    // ORDER BY
    if (ast.orderby) {
        score += 15;
    }

    // JOIN
    if (
        ast.from &&
        ast.from.filter(table => table.join).length > 0
    ) {
        score += 20;
    }

    // GROUP BY
    if (ast.groupby) {
        score += 15;
    }

    if (score <= 20)
        return {
            level: "Low",
            color: "green"
        };

    if (score <= 50)
        return {
            level: "Medium",
            color: "orange"
        };

    return {
        level: "High",
        color: "red"
    };

}

module.exports = estimateCost;