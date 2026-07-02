function AIInterviewCoach({ questions }) {

    if (!questions.length)
        return null;

    const difficultyColor = (difficulty) => {

        switch (difficulty) {

            case "Easy":
                return "bg-green-100 text-green-700";

            case "Medium":
                return "bg-yellow-100 text-yellow-700";

            case "Hard":
                return "bg-red-100 text-red-700";

            default:
                return "bg-gray-100";

        }

    };

    return (

        <section className="bg-white rounded-xl shadow-sm p-6 mt-6">

            <h2 className="text-2xl font-bold mb-6">

                🤖 AI Interview Coach

            </h2>

            <div className="space-y-5">

                {questions.map((item,index)=>(

                    <details
                        key={index}
                        className="border rounded-xl p-4"
                    >

                        <summary
                            className="
                            cursor-pointer
                            flex
                            justify-between
                            items-center
                            "
                        >

                            <span className="font-semibold">

                                {item.question}

                            </span>

                            <span
                                className={`
                                px-3
                                py-1
                                rounded-full
                                text-sm
                                ${difficultyColor(item.difficulty)}
                                `}
                            >

                                {item.difficulty}

                            </span>

                        </summary>

                        <p className="mt-4 text-gray-600">

                            {item.answer}

                        </p>

                    </details>

                ))}

            </div>

        </section>

    );

}

export default AIInterviewCoach;