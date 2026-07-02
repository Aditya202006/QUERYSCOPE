function getExecutionOrder(ast) {

    const order = [];

    if (ast.from) {
        order.push("FROM");
    }

    // JOINs are stored inside ast.from
    if (
        ast.from &&
        ast.from.some(table => table.join)
    ) {
        order.push("JOIN");
    }

    if (ast.where) {
        order.push("WHERE");
    }

    if (ast.groupby) {
        order.push("GROUP BY");
    }

    if (ast.having) {
        order.push("HAVING");
    }

    order.push("SELECT");

    if (ast.orderby) {
        order.push("ORDER BY");
    }

    if (ast.limit) {
        order.push("LIMIT");
    }

    return order;
}

module.exports = getExecutionOrder;