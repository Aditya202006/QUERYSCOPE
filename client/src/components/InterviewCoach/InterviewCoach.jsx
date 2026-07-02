function InterviewCoach({ questions }) {

    if (!questions) return null;

    return (

        <section className="bg-white rounded-xl shadow-sm p-6 mt-6">

            <h2 className="text-3xl font-bold mb-6">

                🎯 Interview Coach

            </h2>

            <div className="space-y-4">

                {questions.map((item,index)=>(

                    <details
                        key={index}
                        className="
                        border
                        rounded-xl
                        p-5
                        bg-slate-50
                        hover:shadow-md
                        transition
                        "
                    >

                        <summary
                            className="cursor-pointer font-semibold"
                        >

                            {item.question}

                        </summary>

                        <p className="mt-3 text-gray-600">

                            {item.answer}

                        </p>

                    </details>

                ))}

            </div>

        </section>

    );

}

export default InterviewCoach;