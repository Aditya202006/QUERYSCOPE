function OptimizationPanel({ optimization }) {

    if (!optimization) {

        return (

            <section className="bg-white rounded-xl shadow-sm p-6">

                <h2 className="text-xl font-semibold mb-4">

                    Optimization Suggestions

                </h2>

                <p className="text-gray-500">

                    Analyze a query first.

                </p>

            </section>

        );

    }

    return (

        <section className="bg-white rounded-xl shadow-sm p-6">

            <h2 className="text-xl font-semibold mb-6">

                Optimization Suggestions

            </h2>

            <div className="space-y-4">

                {optimization.map((item,index)=>(

                    <div
                        key={index}
                        className="
                        border
                        rounded-lg
                        p-4
                        "
                    >

                        <h3 className="font-semibold">

                            {item.title}

                        </h3>

                        <p className="text-gray-600 mt-1">

                            {item.description}

                        </p>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default OptimizationPanel;