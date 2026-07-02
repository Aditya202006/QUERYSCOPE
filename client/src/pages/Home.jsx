import { useState } from "react";
import api from "../services/api";

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

import SqlEditor from "../components/SqlEditor/SqlEditor";
import AnalyzeButton from "../components/AnalyzeButton/AnalyzeButton";
import QueryScore from "../components/QueryScore/QueryScore";
import ExecutionFlow from "../components/ExecutionFlow/ExecutionFlow";
import DatabaseBrain from "../components/DatabaseBrain/DatabaseBrain";
import StatisticsPanel from "../components/StatisticsPanel/StatisticsPanel";
import OptimizationPanel from "../components/OptimizationPanel/OptimizationPanel";
import ClauseCards from "../components/ClauseCards/ClauseCards";
import AIInterviewCoach from "../components/AIInterviewCoach/AIInterviewCoach";
import AnalysisJourney from "../components/AnalysisJourney/AnalysisJourney";
import DatabaseMentor from "../components/DatabaseMentor/DatabaseMentor";
import SQLReview from "../components/SQLReview/SQLReview";

function Home() {
  const [query, setQuery] = useState(`SELECT e.name, d.department_name
FROM Employee e
JOIN Department d
ON e.department_id = d.id
WHERE e.salary > 50000
ORDER BY e.salary DESC;`);

  const [analysis, setAnalysis] = useState(null);
  const [aiQuestions, setAiQuestions] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [review, setReview] = useState(null);

  const handleAnalyze = async () => {
    try {
      setIsAnalyzing(true);

      const response = await api.post("/analyze", {
        query,
      });

      setAnalysis(response.data);

      const aiResponse = await api.post("/ai/interview", {
        query,
      });

      setAiQuestions(aiResponse.data.questions);

      try {
        const reviewResponse = await api.post("/review", {
          query,
        });

        setReview(reviewResponse.data);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
          <SqlEditor
            query={query}
            setQuery={setQuery}
          />

          <AnalyzeButton
            onAnalyze={handleAnalyze}
            loading={isAnalyzing}
          />

          <AnalysisJourney isAnalyzing={isAnalyzing} />

          <div id="query-score">
            <QueryScore queryScore={analysis?.queryScore} />
          </div>

          <div id="sql-review">
            <SQLReview review={review} />
          </div>

          <div id="execution-flow">
            <ExecutionFlow executionOrder={analysis?.executionOrder} />
          </div>

          <div id="database-brain">
            <DatabaseBrain steps={analysis?.databaseBrain} />
          </div>

          <div id="statistics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <StatisticsPanel
                statistics={analysis?.statistics}
                estimatedCost={analysis?.estimatedCost}
              />

              <div id="optimization">
                <OptimizationPanel optimization={analysis?.optimization} />
              </div>
            </div>
          </div>

          <div id="clause-explanation">
            <ClauseCards clauseExplanation={analysis?.clauseExplanation} />
          </div>

          <div id="interview-coach">
            <AIInterviewCoach questions={aiQuestions} />
          </div>

          <div id="database-mentor">
            <DatabaseMentor query={query} />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Home;