import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider, Layout } from 'antd';

import store from './redux/store';
import { changeBreakPoint } from './redux/actions/publicActions';

import ScrollToTop from './globaFunctions/scrollToTop';

import './assets/Css/App.css';

import Notification from './components/notification'
import Loading from './components/loading';

import ProtectedRoute from './components/layout/ProtectedRoute';
import Dashboard from './components/Panel/Dashboard/index';

const { Content } = Layout;

const App = () => {

  const handleResize = e => {
    const windowSize = window.innerWidth;
    store.dispatch(changeBreakPoint(windowSize))
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    store.dispatch(changeBreakPoint(window.innerWidth));
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider direction="rtl">

          <Loading />
          <Notification />

          <Layout className="layout" style={{ position: 'relative' }}>

            <Content>
              <ScrollToTop>
                <Switch>

                  <Route path="/" exact>
                    <Redirect to={{ pathname: "/dashboard" }} />
                  </Route>

                  <ProtectedRoute path="/dashboard" exact component={Dashboard} />

                  <Route path="*" render={() =>
                    <React.Fragment>
                      <h1>404 NOT FOUND</h1>
                    </React.Fragment>
                  } />

                </Switch>
              </ScrollToTop>
            </Content>
          </Layout>

        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
