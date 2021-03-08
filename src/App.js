import Navbar from "./parts/Navbar";
import Footer from "./parts/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Project from "./components/Project";
import ThatNotFoundPage from "./views/ThatNotFoundPage";
import { Helmet } from "react-helmet";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Simon Krogh</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <link
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            rel="stylesheet"
          />
          <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
       
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
        </Helmet>
      </div>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects/:slug">
              <Project />
            </Route>
            <Route>
              <ThatNotFoundPage />
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
