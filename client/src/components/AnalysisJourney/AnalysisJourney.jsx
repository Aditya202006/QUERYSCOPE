import { useEffect, useState } from "react";

const stages = [
    "📖 Parsing SQL...",
    "🌳 Building AST...",
    "📊 Calculating Query Score...",
    "⚙️ Detecting Optimizations...",
    "🤖 Generating AI Interview Questions...",
    "✅ Preparing Dashboard..."
];

function AnalysisJourney({ isAnalyzing }) {

    const [currentStage, setCurrentStage] = useState(0);

    useEffect(() => {

        if (!isAnalyzing) {

            setCurrentStage(0);
            return;

        }

        let index = 0;

        const interval = setInterval(() => {

            index++;

            if (index < stages.length) {

                setCurrentStage(index);

            }

        }, 350);

        return () => clearInterval(interval);

    }, [isAnalyzing]);

    if (!isAnalyzing)
        return null;

    return (

        <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-6 mt-6">

            <h2 className="text-2xl font-bold mb-6">

                ⚡ QueryScope Analysis Engine

            </h2>

            <div className="space-y-3">

                {stages.map((stage,index)=>(

                    <div
                        key={index}
                        className={`

                        p-3
                        rounded-lg

                        ${

                        index<=currentStage

                        ?

                        "bg-green-600"

                        :

                        "bg-slate-700"

                        }

                        `}
                    >

                        {stage}

                    </div>

                ))}

            </div>

        </section>

    );

}

export default AnalysisJourney;