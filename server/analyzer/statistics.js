function getStatistics(ast) {

    return {

        tablesUsed: ast.from ? ast.from.length : 0,

        columnsSelected: ast.columns
            ? ast.columns.length
            : 0,

        joins: ast.from
            ? ast.from.filter(table => table.join).length
            : 0,

        hasWhere: !!ast.where,

        hasGroupBy: !!ast.groupby,

        hasHaving: !!ast.having,

        hasOrderBy: !!ast.orderby,

        hasLimit: !!ast.limit

    };

}

module.exports = getStatistics;