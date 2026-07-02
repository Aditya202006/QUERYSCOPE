import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SQLRevision from "./pages/SQLRevision";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/revision"
          element={<SQLRevision />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;