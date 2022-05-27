import { useParams } from "react-router-dom";
import Card from "../UI/Card";
import HighlightedQuote from "../quotes/HighlightedQuote";
import { Link, Route, Routes } from "react-router-dom";
import Comments from "../comments/Comments";
// import { useSelector } from "react-redux";
import NoQuotesFound from "../quotes/NoQuotesFound";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
const QuoteDetail = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getSingleQuote, true);
  // const comments = useSelector((state) => state.comments.comments);

  const params = useParams();
  const { quoteId } = params;
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (!loadedQuotes) {
    return <NoQuotesFound></NoQuotesFound>;
  }
  const quote = loadedQuotes;

  return (
    <Card>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>
      <Routes>
        <Route
          path=""
          exact
          element={
            <Link className="btn--flat centered" to={`comments`}>
              Load Comments
            </Link>
          }
        ></Route>
        <Route
          path={`comments`}
          element={<Comments id={params.quoteId}></Comments>}
        ></Route>
      </Routes>
    </Card>
  );
};
export default QuoteDetail;
