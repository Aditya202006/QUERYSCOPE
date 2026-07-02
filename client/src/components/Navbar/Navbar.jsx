import { Link, useLocation } from "react-router-dom";

function Navbar() {

    const location = useLocation();

    return (

        <nav className="bg-white border-b border-gray-300 h-25 flex items-center">

            <div className="w-full px-8 flex justify-end items-center gap-5">

                <Link
                    to="/"
                    className={`px-5 py-3 rounded-xl font-semibold transition ${
                        location.pathname === "/"
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 hover:bg-slate-100"
                    }`}
                >
                    🏠 SQL Analyzer
                </Link>

                <Link
                    to="/revision"
                    className={`px-5 py-3 rounded-xl font-semibold transition ${
                        location.pathname === "/revision"
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 hover:bg-slate-100"
                    }`}
                >
                    📚 SQL Revision
                </Link>

            </div>

        </nav>

    );

}

export default Navbar;