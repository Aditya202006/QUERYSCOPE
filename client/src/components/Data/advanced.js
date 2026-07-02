const advanced = [

  {
    category: "Advanced SQL",
    title: "Subquery",

    definition:
      "A subquery is a query written inside another SQL query.",

    syntax:
      `SELECT name
FROM Employee
WHERE salary >
(
    SELECT AVG(salary)
    FROM Employee
);`,

    example:
      "Find employees earning more than the average salary.",

    explanation:
      "The inner query executes first. Its result is then used by the outer query.",

    interviewTip:
      "Subqueries are one of the most frequently asked SQL interview topics.",

    mistakes: [
      "Returning multiple rows when only one is expected.",
      "Writing unnecessary nested subqueries."
    ]
  },

  {
    category: "Advanced SQL",
    title: "Correlated Subquery",

    definition:
      "A correlated subquery depends on the outer query.",

    syntax:
      `SELECT e.name
FROM Employee e
WHERE salary >
(
    SELECT AVG(salary)
    FROM Employee
    WHERE department_id = e.department_id
);`,

    example:
      "Find employees earning more than the average salary in their department.",

    explanation:
      "The inner query runs once for every row of the outer query.",

    interviewTip:
      "Correlated subqueries are usually slower than normal subqueries.",

    mistakes: [
      "Using correlated subqueries when JOIN is better.",
      "Not understanding that the inner query executes repeatedly."
    ]
  },

  {
    category: "Advanced SQL",
    title: "EXISTS",

    definition:
      "EXISTS checks whether the subquery returns any rows.",

    syntax:
      `SELECT *
FROM Employee e
WHERE EXISTS
(
    SELECT *
    FROM Department d
    WHERE d.id = e.department_id
);`,

    example:
      "Show employees whose department exists.",

    explanation:
      "EXISTS returns TRUE if the subquery finds at least one row.",

    interviewTip:
      "EXISTS usually performs better than IN for large datasets.",

    mistakes: [
      "Confusing EXISTS with IN.",
      "Returning unnecessary columns inside EXISTS."
    ]
  },

  {
    category: "Advanced SQL",
    title: "IN",

    definition:
      "IN checks whether a value exists in a list or subquery.",

    syntax:
      `SELECT *
FROM Employee
WHERE department_id IN (1,2,3);`,

    example:
      `SELECT *
FROM Employee
WHERE department_id IN
(
    SELECT id
    FROM Department
);`,

    explanation:
      "IN compares a value against multiple possible values.",

    interviewTip:
      "Use IN when checking against a small list of values.",

    mistakes: [
      "Using IN with huge subqueries unnecessarily.",
      "Ignoring NULL values."
    ]
  },

  {
    category: "Advanced SQL",
    title: "ANY",

    definition:
      "ANY returns TRUE if the condition matches at least one value.",

    syntax:
      `SELECT *
FROM Employee
WHERE salary > ANY
(
    SELECT salary
    FROM Employee
    WHERE department_id = 2
);`,

    example:
      "Find employees earning more than at least one employee in department 2.",

    explanation:
      "Only one comparison needs to be TRUE.",

    interviewTip:
      "ANY is rarely used but interviewers may ask its difference from ALL.",

    mistakes: [
      "Confusing ANY and ALL."
    ]
  },

  {
    category: "Advanced SQL",
    title: "ALL",

    definition:
      "ALL returns TRUE only if the condition matches every value.",

    syntax:
      `SELECT *
FROM Employee
WHERE salary > ALL
(
    SELECT salary
    FROM Employee
    WHERE department_id = 2
);`,

    example:
      "Find employees earning more than everyone in department 2.",

    explanation:
      "Every comparison must be TRUE.",

    interviewTip:
      "ALL is opposite to ANY.",

    mistakes: [
      "Using ALL when ANY is required."
    ]
  },

  {
    category: "Advanced SQL",
    title: "UNION",

    definition:
      "UNION combines results of two queries and removes duplicates.",

    syntax:
      `SELECT city FROM Customers
UNION
SELECT city FROM Suppliers;`,

    example:
      "Show unique cities from both tables.",

    explanation:
      "Duplicate rows are automatically removed.",

    interviewTip:
      "Both queries must return the same number of columns.",

    mistakes: [
      "Different column counts.",
      "Different data types."
    ]
  },

  {
    category: "Advanced SQL",
    title: "UNION ALL",

    definition:
      "UNION ALL combines results without removing duplicates.",

    syntax:
      `SELECT city FROM Customers
UNION ALL
SELECT city FROM Suppliers;`,

    example:
      "Return every city including duplicates.",

    explanation:
      "Faster than UNION because no duplicate checking is performed.",

    interviewTip:
      "Prefer UNION ALL when duplicate removal isn't needed.",

    mistakes: [
      "Using UNION instead of UNION ALL."
    ]
  },
        {
        category: "Advanced SQL",
        title: "Views",

        definition:
        "A View is a virtual table created using a SQL query.",

        syntax:
        `CREATE VIEW EmployeeView AS
    SELECT name, salary
    FROM Employee;`,

        example:
        "Create a view to show employee names and salaries.",

        explanation:
        "Views don't store data. They store the SQL query and show updated results whenever accessed.",

        interviewTip:
        "Views improve security by hiding unnecessary columns.",

        mistakes: [
        "Thinking views store data.",
        "Updating complex views directly."
        ]
    },

    {
        category: "Advanced SQL",
        title: "Indexes",

        definition:
        "Indexes make searching data much faster.",

        syntax:
        `CREATE INDEX idx_salary
    ON Employee(salary);`,

        example:
        "Create an index on salary.",

        explanation:
        "Indexes work like a book index. Instead of checking every row, SQL directly jumps to matching data.",

        interviewTip:
        "Indexes speed up SELECT but slow down INSERT, UPDATE and DELETE.",

        mistakes: [
        "Creating indexes on every column.",
        "Ignoring index maintenance."
        ]
    },

    {
        category: "Advanced SQL",
        title: "Primary Key",

        definition:
        "A Primary Key uniquely identifies every row in a table.",

        syntax:
        `CREATE TABLE Employee(
    id INT PRIMARY KEY
    );`,

        example:
        "Employee ID.",

        explanation:
        "Primary Keys cannot contain NULL values or duplicates.",

        interviewTip:
        "Every table should ideally have one Primary Key.",

        mistakes: [
        "Using duplicate values.",
        "Allowing NULL."
        ]
    },

    {
        category: "Advanced SQL",
        title: "Foreign Key",

        definition:
        "A Foreign Key creates a relationship between two tables.",

        syntax:
        `FOREIGN KEY(department_id)
    REFERENCES Department(id);`,

        example:
        "Employee.department_id references Department.id.",

        explanation:
        "It maintains referential integrity between tables.",

        interviewTip:
        "Foreign Keys prevent invalid relationships.",

        mistakes: [
        "Referencing non-existing rows.",
        "Deleting parent rows without handling child rows."
        ]
    },

    {
        category: "Advanced SQL",
        title: "Constraints",

        definition:
        "Constraints are rules that keep database data accurate.",

        syntax:
        "PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, NOT NULL",

        example:
        "salary CHECK(salary > 0)",

        explanation:
        "Constraints help maintain valid and consistent data.",

        interviewTip:
        "Know the difference between UNIQUE and PRIMARY KEY.",

        mistakes: [
        "Using wrong constraint.",
        "Ignoring validation."
        ]
    },

    {
        category: "Advanced SQL",
        title: "Normalization",

        definition:
        "Normalization organizes tables to reduce duplicate data.",

        syntax:
        "1NF → 2NF → 3NF → BCNF",

        example:
        "Separate Employee and Department into different tables.",

        explanation:
        "Normalization reduces redundancy and improves data consistency.",

        interviewTip:
        "3NF is one of the most frequently asked interview topics.",

        mistakes: [
        "Over-normalizing.",
        "Keeping repeated data."
        ]
    },

    {
        category: "Advanced SQL",
        title: "Transactions",

        definition:
        "A transaction is a group of SQL statements executed as one unit.",

        syntax:
        `BEGIN;
    UPDATE Employee...
    COMMIT;`,

        example:
        "Bank money transfer.",

        explanation:
        "If one step fails, the entire transaction can be rolled back.",

        interviewTip:
        "Remember COMMIT and ROLLBACK.",

        mistakes: [
        "Forgetting COMMIT.",
        "Leaving transactions open."
        ]
    },

    {
        category: "Advanced SQL",
        title: "ACID Properties",

        definition:
        "ACID makes database transactions reliable.",

        syntax:
        "Atomicity, Consistency, Isolation, Durability",

        example:
        "Online payment system.",

        explanation:
        "ACID ensures transactions are safe even during failures.",

        interviewTip:
        "ACID is one of the most common DBMS interview questions.",

        mistakes: [
        "Forgetting the four properties."
        ]
    },

    {
        category: "Advanced SQL",
        title: "Window Functions",

        definition:
        "Window functions perform calculations without grouping rows.",

        syntax:
        `SELECT name,
    RANK() OVER(ORDER BY salary DESC)
    FROM Employee;`,

        example:
        "Rank employees based on salary.",

        explanation:
        "Unlike GROUP BY, rows remain separate while calculations are performed.",

        interviewTip:
        "Know ROW_NUMBER(), RANK(), and DENSE_RANK().",

        mistakes: [
        "Confusing GROUP BY with Window Functions."
        ]
    },

    {
        category: "Advanced SQL",
        title: "CTE (Common Table Expression)",

        definition:
        "A CTE creates a temporary named result set.",

        syntax:
        `WITH Emp AS (
    SELECT * FROM Employee
    )
    SELECT * FROM Emp;`,

        example:
        "Break a complex query into smaller parts.",

        explanation:
        "CTEs improve readability and simplify complex SQL queries.",

        interviewTip:
        "CTEs are easier to read than deeply nested subqueries.",

        mistakes: [
        "Using CTEs unnecessarily for simple queries."
        ]
    },

    {
        category: "Advanced SQL",
        title: "Recursive CTE",

        definition:
        "A Recursive CTE repeatedly executes itself until a condition is met.",

        syntax:
        `WITH RECURSIVE ...`,

        example:
        "Employee hierarchy.",

        explanation:
        "Useful for hierarchical or tree-like data.",

        interviewTip:
        "Frequently asked in advanced SQL interviews.",

        mistakes: [
        "Missing the termination condition."
        ]
    },

    {
        category: "Advanced SQL",
        title: "Stored Procedures",

        definition:
        "Stored Procedures are reusable SQL programs stored inside the database.",

        syntax:
        "CREATE PROCEDURE ...",

        example:
        "Monthly salary calculation.",

        explanation:
        "Procedures reduce duplicate SQL code and improve maintainability.",

        interviewTip:
        "Stored Procedures improve code reuse and security.",

        mistakes: [
        "Writing overly complex procedures."
        ]
    },

    {
        category: "Advanced SQL",
        title: "Triggers",

        definition:
        "Triggers automatically execute when database events occur.",

        syntax:
        "CREATE TRIGGER ...",

        example:
        "Automatically log deleted employees.",

        explanation:
        "Triggers run automatically after INSERT, UPDATE or DELETE operations.",

        interviewTip:
        "Triggers are useful for auditing and logging.",

        mistakes: [
        "Writing triggers that perform heavy operations."
        ]
    }

    ];

    export default advanced;