import QuoteForm from "../quotes/QuoteForm";
import quotes from "../quotes";
const addQuoteHandler = (quote) => {
  const val = { id: quotes.length + 100, ...quote };
  quotes.push(val);
};
const AddQuotes = () => {
  return <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>;
};
export default AddQuotes;
