import QuoteList from "../quotes/QuoteList";
import Card from "../UI/Card";
import quotes from "../quotes";

const AllQuotes = () => {
  return (
    <Card>
      <QuoteList quotes={quotes}></QuoteList>
    </Card>
  );
};

export default AllQuotes;
