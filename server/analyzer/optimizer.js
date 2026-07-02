function getOptimizationSuggestions(ast) {

    const suggestions = [];

    // Rule 1

    if (
        ast.columns &&
        ast.columns.some(
            col => col.expr.column === "*"
        )
    ) {

        suggestions.push({

            type: "warning",

            title: "Avoid SELECT *",

            description:
                "Retrieve only the columns you need."

        });

    }

    // Rule 2

    if (!ast.where) {

        suggestions.push({

            type: "warning",

            title: "Missing WHERE Clause",

            description:
                "Entire table may be scanned."

        });

    }

    // Rule 3

    if (ast.orderby) {

        suggestions.push({

            type: "info",

            title: "ORDER BY Detected",

            description:
                "Sorting large datasets can be expensive."

        });

    }

    // Rule 4

    if (ast.from && ast.from.length > 3) {

        suggestions.push({

            type: "warning",

            title: "Multiple JOINs",

            description:
                "Too many joins may reduce performance."

        });

    }

    return suggestions;

}

module.exports = getOptimizationSuggestions;