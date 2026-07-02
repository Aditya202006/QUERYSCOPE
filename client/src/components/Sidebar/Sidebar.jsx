import { Link } from "react-router-dom";

function Sidebar() {

  const sections = [
    { id: "query-score", label: "⭐ Query Score" },
    { id: "sql-review", label: "📝 AI SQL Review" },
    { id: "execution-flow", label: "⚡ Execution Flow" },
    { id: "database-brain", label: "🧠 Database Brain" },
    { id: "statistics", label: "📊 Statistics" },
    { id: "optimization", label: "🚀 Optimization" },
    { id: "clause-explanation", label: "📖 Clause Explanation" },
    { id: "interview-coach", label: "🤖 Interview Coach" },
    { id: "database-mentor", label: "💬 Database Mentor" }
  ];

  const scrollToSection = (id) => {

    const element = document.getElementById(id);

    if (element) {

      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  };

  return (

    <aside className="w-72 bg-white border-r border-gray-300 sticky top-0 h-screen overflow-y-auto">

      <div className="p-6 border-b border-gray-300">

        <h2 className="text-2xl font-bold text-blue-600">

          QueryScope

        </h2>

        <p className="text-gray-500 text-sm">

          SQL Analyzer

        </p>

      </div>

      <div className="p-4">

        <h3 className="font-semibold mb-3">

          📊 Analysis

        </h3>

        <div className="space-y-2">

          {

            sections.map((item) => (

              <button

                key={item.id}

                onClick={() => scrollToSection(item.id)}

                className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue-50 transition"

              >

                {item.label}

              </button>

            ))

          }

        </div>

        <hr className="my-6" />

        <Link

          to="/revision"

          className="block bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700"

        >

          📚 SQL Revision

        </Link>

      </div>

    </aside>

  );

}

export default Sidebar;