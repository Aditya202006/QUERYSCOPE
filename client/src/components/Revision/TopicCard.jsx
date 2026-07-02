function TopicCard({ topic }) {

    return (

        <div className="bg-white rounded-xl shadow-sm border p-8">

            <h2 className="text-3xl font-bold text-blue-600 mb-8">

                {topic.title}

            </h2>

            <div className="space-y-8">

                <section>

                    <h3 className="text-xl font-semibold mb-2">

                        📖 Definition

                    </h3>

                    <p className="text-gray-700 leading-7">

                        {topic.definition}

                    </p>

                </section>

                <section>

                    <h3 className="text-xl font-semibold mb-2">

                        💻 Syntax

                    </h3>

                    <pre className="bg-slate-100 rounded-lg p-4 overflow-x-auto">

                        <code>

                            {topic.syntax}

                        </code>

                    </pre>

                </section>

                <section>

                    <h3 className="text-xl font-semibold mb-2">

                        🧪 Example

                    </h3>

                    <pre className="bg-slate-100 rounded-lg p-4 overflow-x-auto">

                        <code>

                            {topic.example}

                        </code>

                    </pre>

                </section>

                <section>

                    <h3 className="text-xl font-semibold mb-2">

                        💡 Explanation

                    </h3>

                    <p className="text-gray-700 leading-7">

                        {topic.explanation}

                    </p>

                </section>

                {

                    topic.execution && (

                        <section>

                            <h3 className="text-xl font-semibold mb-2">

                                ⚙️ Execution

                            </h3>

                            <p className="text-gray-700 leading-7">

                                {topic.execution}

                            </p>

                        </section>

                    )

                }

                <section>

                    <h3 className="text-xl font-semibold mb-2">

                        🎯 Interview Tip

                    </h3>

                    <p className="text-gray-700 leading-7">

                        {topic.interviewTip}

                    </p>

                </section>

                <section>

                    <h3 className="text-xl font-semibold mb-2">

                        ❌ Common Mistakes

                    </h3>

                    <ul className="list-disc ml-6 space-y-2">

                        {

                            topic.mistakes.map((item, index) => (

                                <li key={index}>

                                    {item}

                                </li>

                            ))

                        }

                    </ul>

                </section>

            </div>

        </div>

    );

}

export default TopicCard;