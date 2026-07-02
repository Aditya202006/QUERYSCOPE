function generateDatabaseBrain(ast) {

    const steps = [];

    // Step 1 - Read Tables
    if (ast.from) {

        const tables = ast.from.map(table => table.table).join(", ");

        steps.push({
            icon: "📖",
            title: "Reading Tables",
            message: `Reading data from ${tables}.`
        });

    }

    // Step 2 - JOIN
    if (
        ast.from &&
        ast.from.some(table => table.join)
    ) {

        steps.push({
            icon: "🔗",
            title: "Joining Tables",
            message: "Combining matching rows using JOIN."
        });

    }

    // Step 3 - WHERE
    if (ast.where) {

        steps.push({
            icon: "🔍",
            title: "Filtering Rows",
            message: "Applying WHERE conditions to remove unwanted rows."
        });

    }

    // Step 4 - GROUP BY
    if (ast.groupby) {

        steps.push({
            icon: "📦",
            title: "Grouping Data",
            message: "Grouping rows with common values."
        });

    }

    // Step 5 - HAVING
    if (ast.having) {

        steps.push({
            icon: "🎯",
            title: "Filtering Groups",
            message: "Filtering grouped rows using HAVING."
        });

    }

    // Step 6 - SELECT
    steps.push({
        icon: "📋",
        title: "Selecting Columns",
        message: "Choosing the requested columns for the final result."
    });

    // Step 7 - ORDER BY
    if (ast.orderby) {

        steps.push({
            icon: "📊",
            title: "Sorting",
            message: "Sorting rows according to ORDER BY."
        });

    }

    // Step 8 - LIMIT
    if (ast.limit) {

        steps.push({
            icon: "✂️",
            title: "Limiting Rows",
            message: "Keeping only the required number of rows."
        });

    }

    // Final Step
    steps.push({
        icon: "✅",
        title: "Returning Result",
        message: "Sending the final result back to the user."
    });

    return steps;

}

module.exports = generateDatabaseBrain;