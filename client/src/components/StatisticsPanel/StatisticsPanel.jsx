function StatisticsPanel({ statistics, estimatedCost }) {

    if (!statistics) {

        return (

            <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">

                <h2 className="text-2xl font-bold mb-4">

                    📊 Query Statistics

                </h2>

                <div className="flex items-center justify-center h-48 text-gray-400">

                    Paste an SQL query and click Analyze.

                </div>

            </section>

        );

    }

    return (

        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">

            <h2 className="text-2xl font-bold mb-6">

                📊 Query Statistics

            </h2>

            <div className="grid grid-cols-2 gap-4">

                <div className="bg-slate-50 rounded-xl p-4 border">

                    <p className="text-gray-500 text-sm">

                        Tables

                    </p>

                    <h3 className="text-3xl font-bold mt-2">

                        {statistics.tablesUsed}

                    </h3>

                </div>

                <div className="bg-slate-50 rounded-xl p-4 border">

                    <p className="text-gray-500 text-sm">

                        Columns

                    </p>

                    <h3 className="text-3xl font-bold mt-2">

                        {statistics.columnsSelected}

                    </h3>

                </div>

                <div className="bg-slate-50 rounded-xl p-4 border">

                    <p className="text-gray-500 text-sm">

                        JOINs

                    </p>

                    <h3 className="text-3xl font-bold mt-2">

                        {statistics.joins}

                    </h3>

                </div>

                <div className="bg-slate-50 rounded-xl p-4 border">

                    <p className="text-gray-500 text-sm">

                        WHERE

                    </p>

                    <h3 className="text-2xl font-bold mt-2">

                        {statistics.hasWhere ? "✅ Yes" : "❌ No"}

                    </h3>

                </div>

                <div className="bg-slate-50 rounded-xl p-4 border">

                    <p className="text-gray-500 text-sm">

                        ORDER BY

                    </p>

                    <h3 className="text-2xl font-bold mt-2">

                        {statistics.hasOrderBy ? "✅ Yes" : "❌ No"}

                    </h3>

                </div>

                <div className="bg-slate-50 rounded-xl p-4 border">

                    <p className="text-gray-500 text-sm">

                        GROUP BY

                    </p>

                    <h3 className="text-2xl font-bold mt-2">

                        {statistics.hasGroupBy ? "✅ Yes" : "❌ No"}

                    </h3>

                </div>

            </div>

            <div className="mt-8">

                <h3 className="font-semibold mb-3">

                    ⚡ Estimated Query Cost

                </h3>

                <span

                    className={`px-5 py-2 rounded-full text-white font-semibold

                    ${estimatedCost.color === "green"

                        ? "bg-green-500"

                        : estimatedCost.color === "orange"

                        ? "bg-orange-500"

                        : "bg-red-500"

                    }`}

                >

                    {estimatedCost.level}

                </span>

            </div>

        </section>

    );

}

export default StatisticsPanel;