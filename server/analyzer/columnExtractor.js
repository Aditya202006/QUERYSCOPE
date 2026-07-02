function getColumns(ast) {

    if (!ast.columns) {
        return [];
    }

    return ast.columns.map((column) => ({

        table: column.expr.table || "-",

        column: column.expr.column

    }));

}

module.exports = getColumns;