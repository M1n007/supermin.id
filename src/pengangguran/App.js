import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./container/Home";

import PostDetail from "./component/PostDetail/PostDetail";

const AppRouter = () => (
  <Router>
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav> */}

      <Route path="/" exact component={Home} />
      {/* <Route path="/" exact component={Testing} /> */}
      <Route path="/post/:id" component={PostDetail} />
    </div>
  </Router>
);

export default AppRouter;
