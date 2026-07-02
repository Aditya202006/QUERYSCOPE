const basics = [
  {
    category: "SQL Basics",
    title: "SELECT",

    definition:
      "SELECT is used to choose the columns you want to display from a table.",

    syntax:
      "SELECT column_name FROM table_name;",

    example:
      "SELECT name, salary FROM Employee;",

    explanation:
      "The database reads the table and returns only the selected columns. Avoid using SELECT * unless you really need every column.",

    interviewTip:
      "Interviewers often ask why SELECT * is bad. It fetches unnecessary data and reduces performance.",

    mistakes: [
      "Using SELECT * everywhere.",
      "Selecting columns that are not required."
    ]
  },

  {
    category: "SQL Basics",
    title: "FROM",

    definition:
      "FROM tells SQL which table the data should come from.",

    syntax:
      "SELECT * FROM Employee;",

    example:
      "SELECT name FROM Employee;",

    explanation:
      "Without FROM, SQL doesn't know where to get the data. This is usually the first logical step in query execution.",

    interviewTip:
      "Remember: SQL logically starts execution from the FROM clause.",

    mistakes: [
      "Misspelling table names.",
      "Using the wrong table."
    ]
  },

  {
    category: "SQL Basics",
    title: "WHERE",

    definition:
      "WHERE filters rows based on a condition.",

    syntax:
      "SELECT * FROM Employee WHERE salary > 50000;",

    example:
      "SELECT name FROM Employee WHERE department='IT';",

    explanation:
      "Only rows that satisfy the condition are returned. Filtering early improves performance.",

    interviewTip:
      "WHERE filters rows before GROUP BY. HAVING filters groups after GROUP BY.",

    mistakes: [
      "Using aggregate functions inside WHERE.",
      "Forgetting comparison operators."
    ]
  },

  {
    category: "SQL Basics",
    title: "DISTINCT",

    definition:
      "DISTINCT removes duplicate values from the result.",

    syntax:
      "SELECT DISTINCT department_id FROM Employee;",

    example:
      "SELECT DISTINCT city FROM Customers;",

    explanation:
      "If multiple rows have the same value, DISTINCT keeps only one.",

    interviewTip:
      "DISTINCT may slow down large queries because SQL needs to remove duplicates.",

    mistakes: [
      "Using DISTINCT to hide duplicate data caused by incorrect JOINs.",
      "Using DISTINCT unnecessarily."
    ]
  },
    {
    category: "SQL Basics",
    title: "ORDER BY",

    definition:
      "ORDER BY is used to sort the result in ascending (ASC) or descending (DESC) order.",

    syntax:
      "SELECT * FROM Employee ORDER BY salary DESC;",

    example:
      "SELECT name, salary FROM Employee ORDER BY salary DESC;",

    explanation:
      "SQL first prepares the result and then sorts it based on the specified column.",

    interviewTip:
      "Sorting large tables can be expensive. An index on the sorting column can improve performance.",

    mistakes: [
      "Forgetting ASC or DESC when needed.",
      "Expecting SQL to return sorted data without ORDER BY."
    ]
  },

  {
    category: "SQL Basics",
    title: "LIMIT",

    definition:
      "LIMIT restricts the number of rows returned.",

    syntax:
      "SELECT * FROM Employee LIMIT 10;",

    example:
      "SELECT name FROM Employee LIMIT 5;",

    explanation:
      "LIMIT is useful for pagination, previews, and fetching only a few records.",

    interviewTip:
      "Use ORDER BY with LIMIT to get consistent and predictable results.",

    mistakes: [
      "Using LIMIT without ORDER BY.",
      "Assuming LIMIT always returns the same rows."
    ]
  },

  {
    category: "SQL Basics",
    title: "Aliases",

    definition:
      "Aliases give temporary names to tables or columns.",

    syntax:
      "SELECT e.name FROM Employee e;",

    example:
      "SELECT salary AS EmployeeSalary FROM Employee;",

    explanation:
      "Aliases make SQL queries shorter and easier to read, especially when working with JOINs.",

    interviewTip:
      "Using table aliases is considered a good SQL coding practice.",

    mistakes: [
      "Using confusing alias names.",
      "Forgetting aliases in JOIN queries."
    ]
  },

  {
    category: "SQL Basics",
    title: "Comments",

    definition:
      "Comments are used to explain SQL queries. They are ignored by the database.",

    syntax:
      "-- Single-line comment\n/* Multi-line comment */",

    example:
      "-- Fetch employees with salary above 50000",

    explanation:
      "Comments help other developers understand the purpose of a query without affecting execution.",

    interviewTip:
      "Write comments only when they improve understanding. Avoid obvious or outdated comments.",

    mistakes: [
      "Leaving incorrect comments after modifying a query.",
      "Writing unnecessary comments for simple queries."
    ]
  }

];

export default basics;