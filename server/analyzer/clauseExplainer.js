function explainClauses(ast) {

    const explanations = [];

    // FROM
    if (ast.from) {

        explanations.push({

            clause: "FROM",

            explanation:
                "Reads data from the specified table(s)."

        });

    }

    // JOIN
    if (
        ast.from &&
        ast.from.some(table => table.join)
    ) {

        explanations.push({

            clause: "JOIN",

            explanation:
                "Combines rows from multiple tables."

        });

    }

    // WHERE
    if (ast.where) {

        explanations.push({

            clause: "WHERE",

            explanation:
                "Filters rows before SELECT is applied."

        });

    }

    // GROUP BY
    if (ast.groupby) {

        explanations.push({

            clause: "GROUP BY",

            explanation:
                "Groups rows sharing common values."

        });

    }

    // HAVING
    if (ast.having) {

        explanations.push({

            clause: "HAVING",

            explanation:
                "Filters grouped rows after GROUP BY."

        });

    }

    // SELECT
    explanations.push({

        clause: "SELECT",

        explanation:
            "Chooses which columns appear in the result."

    });

    // ORDER BY
    if (ast.orderby) {

        explanations.push({

            clause: "ORDER BY",

            explanation:
                "Sorts the final output."

        });

    }

    // LIMIT
    if (ast.limit) {

        explanations.push({

            clause: "LIMIT",

            explanation:
                "Restricts the number of rows returned."

        });

    }

    return explanations;

}

module.exports = explainClauses;