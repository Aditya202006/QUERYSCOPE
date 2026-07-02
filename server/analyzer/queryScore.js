function getQueryScore(ast) {

    let score = 100;
    const reasons = [];

    // SELECT *
    if (
        ast.columns &&
        ast.columns.some(col => col.expr.column === "*")
    ) {
        score -= 20;
        reasons.push({
            type: "warning",
            text: "Avoid using SELECT *."
        });
    } else {
        reasons.push({
            type: "success",
            text: "Explicit columns selected."
        });
    }

    // WHERE
    if (ast.where) {
        reasons.push({
            type: "success",
            text: "WHERE clause is present."
        });
    } else {
        score -= 15;
        reasons.push({
            type: "warning",
            text: "Missing WHERE clause."
        });
    }

    // JOIN
    const joins =
        ast.from?.filter(t => t.join).length || 0;

    if (joins > 2) {
        score -= 10;
        reasons.push({
            type: "warning",
            text: "Multiple JOINs may reduce performance."
        });
    }

    // ORDER BY
    if (ast.orderby) {
        score -= 5;
        reasons.push({
            type: "info",
            text: "ORDER BY requires sorting."
        });
    }

    let grade = "Excellent";

    if (score < 90)
        grade = "Good";

    if (score < 75)
        grade = "Average";

    if (score < 60)
        grade = "Needs Improvement";

    return {
        score,
        grade,
        reasons
    };
}

module.exports = getQueryScore;