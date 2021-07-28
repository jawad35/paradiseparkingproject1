import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AdminPanel, Checkout, HomePage, Login, Register } from "./Components";
import { runScripts } from "./Components/HomePage/homePageScripts";
import PrivateRoute from "./Components/PrivateRouting";
import AdminRoute from "./Components/PrivateRouting/AdminRoute";
import Userpanel from "./Components/userPanel/Userpanel";
import LoadingComponent from "./Loading Animation/Loading";
import Inovice from "./Components/userPanel/userPanelMenus/Inovice";
import MessengerCustomerChat from "react-messenger-customer-chat";
// import  blog

import CreateBlog from "./Components/AdminPanel/AdminBlog/Blog/CreateBlogPost/CreateBlog";
import Blog from "./Components/AdminPanel/AdminBlog/Blog/AllBlogPost/BlogPostPage";

const App = () => {
  useEffect(() => {
    runScripts();
  }, []);

  return (
    <BrowserRouter>
      <MessengerCustomerChat pageId="101621921567417" appId="932788690836898" />
      <Suspense fallback={<LoadingComponent />}>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={Register} />
        {/* blog routes */}
        <Route exact path="/userdashboard/blog-post" component={Blog} />
        <AdminRoute exact path="/adminpanel" component={AdminPanel} />
        <AdminRoute exact path="/create-post" component={CreateBlog} />
        <PrivateRoute exact path="/checkout" component={Checkout} />
        <PrivateRoute exact path="/userdashboard" component={Userpanel} />
        <PrivateRoute
          exact
          path="/userdashboard/invoice"
          component={Inovice}
        />{" "}
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
