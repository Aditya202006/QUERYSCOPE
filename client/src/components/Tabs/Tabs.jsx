import { useState } from "react";

function Tabs({ tabs }) {

    const [active, setActive] = useState(0);

    return (

        <div className="mt-8">

            <div className="flex gap-3 border-b">

                {tabs.map((tab,index)=>(

                    <button

                        key={index}

                        onClick={()=>setActive(index)}

                        className={`px-5 py-3 rounded-t-xl transition

                        ${active===index

                        ? "bg-blue-600 text-white"

                        : "bg-gray-100"

                        }`}

                    >

                        {tab.label}

                    </button>

                ))}

            </div>

            <div className="mt-6">

                {tabs[active].content}

            </div>

        </div>

    );

}

export default Tabs;