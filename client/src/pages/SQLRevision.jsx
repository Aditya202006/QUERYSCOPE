import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import revisionData from "../components/Data";
import TopicCard from "../components/Revision/TopicCard";
import RevisionSidebar from "../components/Sidebar/RevisionSidebar";

function SQLRevision() {

    const [selectedTopic, setSelectedTopic] = useState(revisionData[0]);

    return (

        <div className="min-h-screen bg-slate-100 flex">

            <RevisionSidebar
                selectedTopic={selectedTopic}
                setSelectedTopic={setSelectedTopic}
            />

            <div className="flex-1 flex flex-col">

                <Navbar />

                <main className="flex-1 max-w-6xl mx-auto w-full px-8 py-10">

                    <h1 className="text-4xl font-bold">

                        📚 SQL Revision

                    </h1>

                    <p className="text-gray-600 mt-2 mb-8">

                        Click any topic from the sidebar to revise it quickly.

                    </p>

                    <TopicCard
                        topic={selectedTopic}
                    />

                </main>

                <Footer />

            </div>

        </div>

    );

}

export default SQLRevision;