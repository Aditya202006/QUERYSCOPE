function DatabaseBrain({ steps }) {

    if (!steps) return null;

    return (

        <section className="bg-white rounded-xl shadow-sm p-6 mt-6">

            <h2 className="text-2xl font-bold mb-6">
                🧠 Database Brain
            </h2>

            <div className="space-y-4">

                {steps.map((step, index) => (

                    <div
                        key={index}
                        className="border rounded-lg p-4 hover:bg-slate-50 transition"
                    >

                        <h3 className="font-semibold text-lg">

                            {step.icon} {step.title}

                        </h3>

                        <p className="text-gray-600 mt-1">

                            {step.message}

                        </p>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default DatabaseBrain;