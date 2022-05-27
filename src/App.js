import { Route, Routes, Link, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import Layout from "./components/layout/layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
const AddQuotes = React.lazy(() => import("./components/pages/AddQuotes"));
const QuoteDetail = React.lazy(() => import("./components/pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./components/pages/NotFound"));
const Comments = React.lazy(() => import("./components/comments/Comments"));
const AllQuotes = React.lazy(() => import("./components/pages/AllQuotes"));
function App() {
  return (
    <div>
      <Layout>
        <Suspense
          fallback={
            <div>
              <LoadingSpinner></LoadingSpinner>
            </div>
          }
        >
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
            >
              <Route path={"comments"} element={<Comments></Comments>}></Route>
              <Route
                path={""}
                element={
                  <Link className="btn--flat centered" to={`comments`}>
                    Load Comments
                  </Link>
                }
              ></Route>
            </Route>

            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
