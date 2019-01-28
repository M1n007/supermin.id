import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./container/Home";

import PostDetail from "./component/PostDetail/PostDetail";
import Header from "./component/header/header";

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      {/* come to papa */}
      <Route path="/" exact component={Home} />
      <Route path="/post/:id" component={PostDetail} />
    </div>
  </Router>
);

export default AppRouter;
