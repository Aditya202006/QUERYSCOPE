const intermediate = [

  {
    category: "Intermediate SQL",
    title: "INNER JOIN",

    definition:
      "INNER JOIN returns only the rows that have matching values in both tables.",

    syntax:
      `SELECT *
FROM Employee e
INNER JOIN Department d
ON e.department_id = d.id;`,

    example:
      `SELECT e.name, d.department_name
FROM Employee e
INNER JOIN Department d
ON e.department_id = d.id;`,

    explanation:
      "Only employees having a matching department are returned. If no match exists, that row is ignored.",

    interviewTip:
      "INNER JOIN is the default JOIN. Writing JOIN and INNER JOIN gives the same result.",

    mistakes: [
      "Forgetting the ON condition.",
      "Joining using the wrong column."
    ]
  },

  {
    category: "Intermediate SQL",
    title: "LEFT JOIN",

    definition:
      "LEFT JOIN returns all rows from the left table and matching rows from the right table.",

    syntax:
      `SELECT *
FROM Employee e
LEFT JOIN Department d
ON e.department_id = d.id;`,

    example:
      `SELECT e.name, d.department_name
FROM Employee e
LEFT JOIN Department d
ON e.department_id = d.id;`,

    explanation:
      "Even if an employee doesn't belong to any department, the employee will still appear. Department columns become NULL.",

    interviewTip:
      "LEFT JOIN is commonly asked in interviews. Remember: Left table → Always returned.",

    mistakes: [
      "Confusing LEFT JOIN with INNER JOIN.",
      "Expecting unmatched rows from the right table."
    ]
  },

  {
    category: "Intermediate SQL",
    title: "RIGHT JOIN",

    definition:
      "RIGHT JOIN returns all rows from the right table and matching rows from the left table.",

    syntax:
      `SELECT *
FROM Employee e
RIGHT JOIN Department d
ON e.department_id = d.id;`,

    example:
      `SELECT e.name, d.department_name
FROM Employee e
RIGHT JOIN Department d
ON e.department_id = d.id;`,

    explanation:
      "Every department is shown. If a department has no employee, employee columns become NULL.",

    interviewTip:
      "Many developers prefer LEFT JOIN by swapping table positions because it's easier to read.",

    mistakes: [
      "Thinking RIGHT JOIN behaves exactly like LEFT JOIN.",
      "Using the wrong table as the right table."
    ]
  },

  {
    category: "Intermediate SQL",
    title: "FULL OUTER JOIN",

    definition:
      "FULL OUTER JOIN returns all matching and non-matching rows from both tables.",

    syntax:
      `SELECT *
FROM Employee
FULL OUTER JOIN Department
ON Employee.department_id = Department.id;`,

    example:
      "Shows every employee and every department even if no match exists.",

    explanation:
      "Matching rows are joined. Non-matching rows appear with NULL values.",

    interviewTip:
      "MySQL doesn't directly support FULL OUTER JOIN. It is usually simulated using UNION.",

    mistakes: [
      "Expecting FULL JOIN to work in MySQL.",
      "Ignoring NULL values."
    ]
  },
    {
    category: "Intermediate SQL",
    title: "CROSS JOIN",

    definition:
      "CROSS JOIN returns every possible combination of rows from both tables.",

    syntax:
      `SELECT *
FROM Employee
CROSS JOIN Department;`,

    example:
      "If Employee has 10 rows and Department has 5 rows, the result will contain 50 rows.",

    explanation:
      "Every row from the first table is combined with every row from the second table.",

    interviewTip:
      "CROSS JOIN is also called Cartesian Product.",

    mistakes: [
      "Using CROSS JOIN accidentally.",
      "Forgetting that it can generate huge datasets."
    ]
  },

  {
    category: "Intermediate SQL",
    title: "SELF JOIN",

    definition:
      "A SELF JOIN joins a table with itself.",

    syntax:
      `SELECT e1.name, e2.name
FROM Employee e1
JOIN Employee e2
ON e1.manager_id = e2.id;`,

    example:
      "Find employees along with their managers.",

    explanation:
      "Useful when data in the same table is related to other rows in the same table.",

    interviewTip:
      "Always use aliases in SELF JOIN.",

    mistakes: [
      "Not using table aliases.",
      "Joining on incorrect columns."
    ]
  },

  {
    category: "Intermediate SQL",
    title: "GROUP BY",

    definition:
      "GROUP BY groups rows having the same values into one group.",

    syntax:
      `SELECT department_id, COUNT(*)
FROM Employee
GROUP BY department_id;`,

    example:
      "Count employees in each department.",

    explanation:
      "Rows with the same value are combined into a single group before applying aggregate functions.",

    interviewTip:
      "GROUP BY is executed before HAVING.",

    mistakes: [
      "Selecting columns that are not grouped or aggregated.",
      "Confusing GROUP BY with ORDER BY."
    ]
  },

  {
    category: "Intermediate SQL",
    title: "HAVING",

    definition:
      "HAVING filters groups after GROUP BY.",

    syntax:
      `SELECT department_id, COUNT(*)
FROM Employee
GROUP BY department_id
HAVING COUNT(*) > 5;`,

    example:
      "Show departments having more than 5 employees.",

    explanation:
      "WHERE filters rows. HAVING filters groups.",

    interviewTip:
      "One of the most common SQL interview questions is WHERE vs HAVING.",

    mistakes: [
      "Using aggregate functions in WHERE.",
      "Using HAVING without GROUP BY unnecessarily."
    ]
  },

  {
    category: "Intermediate SQL",
    title: "Aggregate Functions",

    definition:
      "Aggregate functions perform calculations on multiple rows.",

    syntax:
      `COUNT()
    SUM()
    AVG()
    MIN()
    MAX()`,

        example:
        `SELECT AVG(salary)
    FROM Employee;`,

        explanation:
        "Aggregate functions return a single value calculated from multiple rows.",

        interviewTip:
        "COUNT(*) counts every row. COUNT(column) ignores NULL values.",

        mistakes: [
        "Using aggregate functions without GROUP BY when grouping is required.",
        "Confusing COUNT(*) and COUNT(column)."
        ]
    },

    {
        category: "Intermediate SQL",
        title: "CASE",

        definition:
        "CASE is used for conditional logic inside SQL queries.",

        syntax:
        `CASE
    WHEN salary > 50000 THEN 'High'
    ELSE 'Low'
    END`,

        example:
        `SELECT name,
    CASE
    WHEN salary > 50000 THEN 'High'
    ELSE 'Low'
    END AS SalaryLevel
    FROM Employee;`,

        explanation:
        "CASE works like if-else statements in programming languages.",

        interviewTip:
        "CASE is commonly used in reports and dashboards.",

        mistakes: [
        "Forgetting END.",
        "Writing conditions in the wrong order."
        ]
    }

    ];

    export default intermediate;