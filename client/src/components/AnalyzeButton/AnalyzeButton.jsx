function AnalyzeButton({ onAnalyze, loading }) {
  return (
    <div className="mt-6 flex justify-center">

      <button
        onClick={onAnalyze}
        disabled={loading}
        className="
        bg-gradient-to-r
        from-blue-600
        to-indigo-600
        hover:from-blue-700
        hover:to-indigo-700
        transition-all
        duration-300
        text-white
        font-semibold
        px-8
        py-4
        rounded-xl
        shadow-lg
        disabled:opacity-60
        disabled:cursor-not-allowed
        "
      >

        {loading ? "Analyzing..." : "🚀 Analyze Query"}

      </button>

    </div>
  );
}

export default AnalyzeButton;