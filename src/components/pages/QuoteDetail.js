import { useParams } from "react-router-dom";
import Card from "../UI/Card";
import HighlightedQuote from "../quotes/HighlightedQuote";
import { Link, Route, useRouteMatch } from "react-router-dom";
import CommentsList from "../comments/CommentsList";
import Comments from "../comments/Comments";
import { useSelector } from "react-redux";
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
  const comments = useSelector((state) => state.comments.comments);

  const params = useParams();
  const comms = comments[params.quoteId] || [];
  const quotes = useSelector((state) => state.quotes.quotes);
  const match = useRouteMatch();
  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest, params.quoteId]);

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
      <Route path={match.path} exact>
        <Link className="btn--flat centered" to={`${match.url}/comments`}>
          Load Comments
        </Link>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments id={+params.quoteId}></Comments>
        <CommentsList comments={comms}></CommentsList>
      </Route>
    </Card>
  );
};
export default QuoteDetail;
