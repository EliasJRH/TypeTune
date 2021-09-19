import React from 'react'
import './App.scss';
import Home from './Home';
import Loading from './Loading';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [data, setData] = React.useState("");

  const fetchData = React.useCallback(async () => {
    axios
      .get("http://localhost:4000/")
      .then((response) => setData(response.data));
  }, []);
  React.useEffect(() => {
    fetchData();
  }, [fetchData])
  return (
    <><link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Arvo" /><link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'></link>
    <div className="App">
      <Router>
        <Switch>
          <Route path="/loading">
            <Loading />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
    </>
  );
}
 
export default App;
 
