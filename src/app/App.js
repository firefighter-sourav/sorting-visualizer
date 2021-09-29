import React from "react";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Body from "./components/Body/Body";
import Menu from "./components/Menu/Menu";
import * as Styles from "./styles";
import barReducer from "./store/reducers/barReducer";
import toolbarReducer from "./store/reducers/toolbarReducer";
import Seo from "./components/HOC/Seo";
/*
 * combining all the reducers
 */
const rootReducer = combineReducers({
  bar: barReducer,
  toolbar: toolbarReducer
});

/*
 * composeEnhancers is for chrome dev toolbar which helps us see store management of redux
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/*
 * Creating Store and applying middleware
 */
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);


const App = () => (
  <Provider store={store}>
    <Seo>
      <Styles.PageWrapper>
        <Menu />
        <Body />
      </Styles.PageWrapper> 
    </Seo>
  </Provider>
);

export default App;