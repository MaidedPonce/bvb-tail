import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PasswordRecovery from "../pages/PasswordRecovery";
import SendEmail from "../pages/SendEmail";
import NewPassword from "../pages/NewPassword";
import MyAccount from "../pages/MyAccount";
import CreateAccount from "../pages/CreateAccount";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import NotFound from "../pages/NotFound";
import BvB from "../containers/BvB"
import Information from "@pages/Information.jsx"
import Payment from "@pages/Payment.jsx"
import Sucess from "@pages/Sucess.jsx"
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import "../styles/global.scss";

const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/password-recovery" component={PasswordRecovery} />
          <Route exact path="/send-email" component={SendEmail} />
          <Route exact path="/new-password" component={NewPassword} />
          <Route exact path="/account" component={MyAccount} />
          <Route exact path="/signup" component={CreateAccount} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/bvb-notices" component={BvB} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/checkout/information" component={Information} />
          <Route exact path="/checkout/payment" component={Payment} />
          <Route exact path="/checkout/sucess" component={Sucess} />
          <Route exact path="/checkout" component={Checkout} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
