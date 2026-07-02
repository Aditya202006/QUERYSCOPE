function QueryScore({ queryScore }) {

    if (!queryScore) return null;

    const score = queryScore.score;

    const scoreColor =
        score >= 90
            ? "text-green-600"
            : score >= 75
            ? "text-yellow-500"
            : "text-red-500";

    const progressColor =
        score >= 90
            ? "bg-green-500"
            : score >= 75
            ? "bg-yellow-500"
            : "bg-red-500";

    return (

        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                {/* LEFT */}

                <div className="flex flex-col items-center">

                    <div
                        className={`w-40 h-40 rounded-full border-8 flex items-center justify-center
                        ${score >= 90
                            ? "border-green-500"
                            : score >= 75
                            ? "border-yellow-500"
                            : "border-red-500"
                        }`}
                    >

                        <span
                            className={`text-5xl font-bold ${scoreColor}`}
                        >
                            {score}
                        </span>

                    </div>

                    <h2 className="text-3xl font-bold mt-6">

                        {queryScore.grade}

                    </h2>

                    <p className="text-gray-500 mt-2">

                        Query Quality Score

                    </p>

                </div>

                {/* RIGHT */}

                <div className="flex-1 w-full">

                    <div className="flex justify-between mb-2">

                        <span className="font-semibold">

                            Overall Performance

                        </span>

                        <span className={scoreColor}>

                            {score}/100

                        </span>

                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">

                        <div

                            className={`${progressColor} h-4 rounded-full transition-all duration-700`}

                            style={{
                                width: `${score}%`
                            }}

                        />

                    </div>

                    <div className="grid grid-cols-1 gap-4 mt-8">

                        {queryScore.reasons.map((item, index) => (

                            <div

                                key={index}

                                className="flex items-center gap-4 bg-gray-50 border rounded-xl p-4 hover:shadow-md transition"

                            >

                                <div className="text-2xl">

                                    {item.type === "success" && "✅"}

                                    {item.type === "warning" && "⚠️"}

                                    {item.type === "info" && "ℹ️"}

                                </div>

                                <div>

                                    <p className="font-medium">

                                        {item.text}

                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>

    );

}

export default QueryScore;  