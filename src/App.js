import { Route, Switch, Redirect } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AddQuotes from "./components/pages/AddQuotes";
import AllQuotes from "./components/pages/AllQuotes";
import QuoteDetail from "./components/pages/QuoteDetail";
function App() {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/all-quotes"></Redirect>
        </Route>
        <Route path="/add-quotes">
          <AddQuotes></AddQuotes>
        </Route>
        <Route path="/all-quotes" exact>
          <AllQuotes></AllQuotes>
        </Route>
        <Route path="/all-quotes/:quoteId">
          <QuoteDetail></QuoteDetail>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
