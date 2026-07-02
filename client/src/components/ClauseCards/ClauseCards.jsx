function ClauseCards({ clauseExplanation }) {

    if (!clauseExplanation) {

        return null;

    }

    return (

        <section className="bg-white rounded-xl shadow-sm p-6 mt-6">

            <h2 className="text-2xl font-semibold mb-6">

                Clause Explanation

            </h2>

            <div className="grid md:grid-cols-2 gap-4">

                {clauseExplanation.map((item,index)=>(

                    <div
                        key={index}
                        className="
                        bg-slate-50
                        border
                        rounded-xl
                        p-5
                        hover:shadow-md
                        transition
                        "
                    >

                        <h3 className="font-bold text-blue-600">

                            {item.clause}

                        </h3>

                        <p className="text-gray-600 mt-2">

                            {item.explanation}

                        </p>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default ClauseCards;