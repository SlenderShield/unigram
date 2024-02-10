// src/App.jsx
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Login from './pages/Login';
import SignUp from './pages/SignUp'
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
