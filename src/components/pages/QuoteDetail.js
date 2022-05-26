import { useParams } from "react-router-dom";
import Card from "../UI/Card";
import HighlightedQuote from "../quotes/HighlightedQuote";
import { Link, Route, useRouteMatch } from "react-router-dom";
import CommentsList from "../comments/CommentsList";
import Comments from "../comments/Comments";
import { useSelector } from "react-redux";
import NoQuotesFound from "../quotes/NoQuotesFound";

const QuoteDetail = () => {
  const comments = useSelector((state) => state.comments.comments);
  const params = useParams();
  const comms = comments[params.quoteId] || [];
  const quotes = useSelector((state) => state.quotes.quotes);
  const match = useRouteMatch();

  const quote = quotes.find((quote) => quote.id === +params.quoteId);
  const quoteDetail = quote ? (
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
  ) : (
    <NoQuotesFound></NoQuotesFound>
  );
  return quoteDetail;
};
export default QuoteDetail;
