import { useParams } from "react-router-dom";
import Card from "../UI/Card";
import quotes from "../quotes";

import HighlightedQuote from "../quotes/HighlightedQuote";
import CommentsList from "../comments/CommentsList";
import Comments from "../comments/Comments";
import { useSelector } from "react-redux";

const QuoteDetail = () => {
  const comments = useSelector((state) => state.comments.comments);
  const params = useParams();
  const comms = comments[params.quoteId] || [];
  const quote = quotes.find((quote) => quote.id === +params.quoteId);
  return (
    <Card>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>
      <Comments id={+params.quoteId}></Comments>
      <CommentsList comments={comms}></CommentsList>
    </Card>
  );
};
export default QuoteDetail;
