import { Route, Switch, Redirect } from "react-router-dom";
import AddQuotes from "./components/pages/AddQuotes";
import AllQuotes from "./components/pages/AllQuotes";
import QuoteDetail from "./components/pages/QuoteDetail";
import Layout from "./components/layout/layout";
import NotFound from "./components/pages/NotFound";
function App() {
  return (
    <div>
      <Layout>
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
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
