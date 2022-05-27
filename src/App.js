import { Route, Routes, Navigate } from "react-router-dom";

import AddQuotes from "./components/pages/AddQuotes";
import AllQuotes from "./components/pages/AllQuotes";
import QuoteDetail from "./components/pages/QuoteDetail";
import Layout from "./components/layout/layout";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/all-quotes"></Navigate>}
          ></Route>
          <Route path="/add-quotes" element={<AddQuotes></AddQuotes>}></Route>
          <Route path="/all-quotes" element={<AllQuotes></AllQuotes>}></Route>
          <Route
            path="/all-quotes/:quoteId/*"
            element={<QuoteDetail></QuoteDetail>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
