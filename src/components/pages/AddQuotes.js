import QuoteForm from "../quotes/QuoteForm";
import { useNavigate } from "react-router-dom";
import { quotesAction } from "../store/quotes";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useEffect } from "react";
const AddQuotes = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const navigate = useNavigate();
  useEffect(() => {
    if (status === "completed") {
      navigate("/all-quotes");
    }
  }, [status, navigate]);

  const quotes = useSelector((state) => state.quotes.quotes);
  const dispatch = useDispatch((state) => state.quotes);
  const addQuoteHandler = (quote) => {
    const quoteData = { id: quotes.length + 100, ...quote };
    sendRequest(quoteData);
    dispatch(quotesAction.addQuotes(quoteData));
  };
  return (
    <QuoteForm
      isLoading={status === "pending"}
      onAddQuote={addQuoteHandler}
    ></QuoteForm>
  );
};
export default AddQuotes;
