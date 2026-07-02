function getTables(ast) {

    if (!ast.from)
        return [];

    return ast.from.map(table => ({
        name: table.table,
        alias: table.as || "-"
    }));

}

module.exports = getTables;