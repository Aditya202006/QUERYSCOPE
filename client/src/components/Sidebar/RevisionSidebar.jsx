import revisionData from "../Data";

function RevisionSidebar({ selectedTopic, setSelectedTopic }) {

    const groupedTopics = {};

    revisionData.forEach((topic) => {

        if (!groupedTopics[topic.category]) {

            groupedTopics[topic.category] = [];

        }

        groupedTopics[topic.category].push(topic);

    });

    return (

        <aside className="w-72 bg-white border-r border-gray-300 sticky top-0 h-screen overflow-y-auto">

            <div className="p-6 border-b border-gray-300">

                <h2 className="text-2xl font-bold text-blue-600">

                    SQL Revision

                </h2>

                <p className="text-gray-500 text-sm mt-1">

                    Interview Notes

                </p>

            </div>

            <div className="p-4">

                {

                    Object.entries(groupedTopics).map(([category, topics]) => (

                        <div
                            key={category}
                            className="mb-6"
                        >

                            <h3 className="font-semibold text-gray-700 mb-3">

                                {category}

                            </h3>

                            <div className="space-y-1">

                                {

                                    topics.map((topic) => (

                                        <button

                                            key={topic.title}

                                            onClick={() => setSelectedTopic(topic)}

                                            className={`w-full text-left px-3 py-2 rounded-lg transition ${selectedTopic.title === topic.title
                                                    ? "bg-blue-600 text-white"
                                                    : "hover:bg-blue-50 hover:text-blue-600"
                                                }`}

                                        >

                                            {topic.title}

                                        </button>

                                    ))

                                }

                            </div>

                        </div>

                    ))

                }

            </div>

        </aside>

    );

}

export default RevisionSidebar;