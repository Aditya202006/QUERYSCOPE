function SQLReview({ review }) {
  if (!review) return null;

  const scoreColor = () => {
    if (review.score >= 90) return "text-green-600";
    if (review.score >= 75) return "text-yellow-500";
    return "text-red-500";
  };

  const progressColor = () => {
    if (review.score >= 90) return "bg-green-500";
    if (review.score >= 75) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mt-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

        <div>

          <h2 className="text-3xl font-bold">

            📝 AI SQL Review

          </h2>

          <p className="text-gray-500 mt-2">

            AI-powered analysis of your SQL query.

          </p>

        </div>

        <div className="text-center">

          <div className={`text-6xl font-bold ${scoreColor()}`}>

            {review.score}

          </div>

          <div className="text-gray-500 mt-2">

            Review Score

          </div>

        </div>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="flex justify-between mb-2">

          <span className="font-medium">

            Overall Quality

          </span>

          <span className={scoreColor()}>

            {review.score}/100

          </span>

        </div>

        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">

          <div
            className={`${progressColor()} h-4 rounded-full transition-all duration-700`}
            style={{
              width: `${review.score}%`,
            }}
          />

        </div>

      </div>

      {/* Review Cards */}

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        {/* Strengths */}

        <div className="bg-green-50 border border-green-200 rounded-xl p-5">

          <h3 className="font-bold text-green-700 text-lg mb-4">

            ✅ Strengths

          </h3>

          <ul className="space-y-3">

            {review.strengths.map((item, index) => (

              <li
                key={index}
                className="flex gap-2"
              >

                <span>✔</span>

                <span>{item}</span>

              </li>

            ))}

          </ul>

        </div>

        {/* Issues */}

        <div className="bg-red-50 border border-red-200 rounded-xl p-5">

          <h3 className="font-bold text-red-700 text-lg mb-4">

            ⚠ Issues

          </h3>

          <ul className="space-y-3">

            {review.issues.map((item, index) => (

              <li
                key={index}
                className="flex gap-2"
              >

                <span>⚠</span>

                <span>{item}</span>

              </li>

            ))}

          </ul>

        </div>

        {/* Suggestions */}

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">

          <h3 className="font-bold text-blue-700 text-lg mb-4">

            🚀 Suggestions

          </h3>

          <ul className="space-y-3">

            {review.suggestions.map((item, index) => (

              <li
                key={index}
                className="flex gap-2"
              >

                <span>➜</span>

                <span>{item}</span>

              </li>

            ))}

          </ul>

        </div>

      </div>

      {/* Summary */}

      <div className="mt-10 bg-slate-50 border rounded-xl p-6">

        <h3 className="text-xl font-bold mb-3">

          📌 AI Summary

        </h3>

        <p className="text-gray-700 leading-7">

          {review.summary}

        </p>

      </div>

    </section>
  );
}

export default SQLReview;