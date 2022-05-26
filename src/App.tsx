import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import ViewOne from './views/viewOne';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ViewOne />} />
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
