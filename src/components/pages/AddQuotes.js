import QuoteForm from "../quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import { quotesAction } from "../store/quotes";
import { useDispatch, useSelector } from "react-redux";

const AddQuotes = () => {
  const history = useHistory();
  const quotes = useSelector((state) => state.quotes.quotes);
  const dispatch = useDispatch((state) => state.quotes);
  const addQuoteHandler = (quote) => {
    const val = { id: quotes.length + 100, ...quote };
    dispatch(quotesAction.addQuotes(val));
    history.push("/all-quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>;
};
export default AddQuotes;
