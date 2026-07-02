function getIcon(step) {

    switch(step){

        case "FROM":
            return "📖";

        case "JOIN":
            return "🔗";

        case "WHERE":
            return "🔍";

        case "GROUP BY":
            return "📦";

        case "SELECT":
            return "📋";

        case "ORDER BY":
            return "📊";

        default:
            return "➡";
    }

}

function ExecutionFlow({ executionOrder }) {

    if(!executionOrder){

        return null;

    }

    return (

        <section className="bg-white rounded-xl shadow-sm p-6 mt-6">

            <h2 className="text-2xl font-bold mb-8">

                ⚡ SQL Execution Pipeline

            </h2>

            <div className="flex flex-col items-center">

                {executionOrder.map((step,index)=>(

                    <div
                        key={index}
                        className="flex flex-col items-center"
                    >

                        <div
                            className="
                            bg-blue-600
                            text-white
                            px-8
                            py-3
                            rounded-xl
                            font-semibold
                            shadow-md
                            min-w-[220px]
                            text-center
                            "
                        >

                            {getIcon(step)} {step}

                        </div>

                        {index !== executionOrder.length-1 && (

                            <div
                                className="
                                text-3xl
                                text-blue-500
                                my-2
                                "
                            >
                                ↓
                            </div>

                        )}

                    </div>

                ))}

            </div>

        </section>

    );

}

export default ExecutionFlow;