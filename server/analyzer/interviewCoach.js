function generateInterviewQuestions(ast) {

    const questions = [];

    if (ast.where) {

        questions.push({

            question:
                "Why is WHERE executed before SELECT?",

            answer:
                "WHERE filters rows before SELECT projects the required columns."

        });

    }

    if (
        ast.from &&
        ast.from.some(table => table.join)
    ) {

        questions.push({

            question:
                "Explain INNER JOIN.",

            answer:
                "INNER JOIN returns only rows that match in both tables."

        });

    }

    if (ast.orderby) {

        questions.push({

            question:
                "Why is ORDER BY expensive?",

            answer:
                "ORDER BY sorts rows, which increases execution cost for large datasets."

        });

    }

    if (ast.groupby) {

        questions.push({

            question:
                "Difference between GROUP BY and DISTINCT?",

            answer:
                "GROUP BY groups rows for aggregation, while DISTINCT only removes duplicates."

        });

    }

    return questions;

}

module.exports = generateInterviewQuestions;