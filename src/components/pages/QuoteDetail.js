import { useParams, Outlet } from "react-router-dom";
import Card from "../UI/Card";
import HighlightedQuote from "../quotes/HighlightedQuote";

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
      <Outlet></Outlet>
    </Card>
  );
};
export default QuoteDetail;
