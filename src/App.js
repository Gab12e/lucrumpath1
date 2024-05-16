import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Stats from './components/Stats';
import Why from './components/Why';
import Calculate from './components/Calculate';
import Trade from './components/Trade';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Tradingplan from './components/Tradingplan';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import Demo from './components/Demo';
import MarketIndices from './components/MarketIndices';
import CardOne from './components/CardOne';
import CardTwo from './components/CardTwo';
import CardThree from './components/CardThree';
import PaymentCard from './components/PaymentCard';

const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400
    });
  })

  return (
    <Router>

      <div className='overflow-hidden'>
        <Switch>
          <Route path="/Aboutus">
            <Header />
            <Aboutus />
            <Footer />
          </Route>
          <Route path="/Demo">
          <Header />
            <Demo />
            <Footer />
          </Route>
          <Route path="/MarketIndices">
          </Route>
          <Route path="/Tradingplan">
            <Header />
            <Tradingplan />
            <Footer />
          </Route>
          <Route path="/Faqs">
            <Header />
            <Faqs />
            <Footer />
          </Route>
          <Route path="/Contact">
            <Header />
            <Contact />
            <Footer />
          </Route>
          <Route path="/SignUp">
            <Header />
            <SignUp />
            <Footer />
          </Route>
          <Route path="/SignIn">
            <Navbar />
            <SignIn />
            <Footer />
          </Route>
          <Route path="/PaymentCard">
            <PaymentCard />
          </Route>
           <Route path="/CardOne">
            <Header />
            <Hero />
            <Stats />
            <Why />
            <CardOne />
            <Calculate />
            <Trade />
            <Features />
            <Newsletter />
            <Footer />
          </Route>
          <Route path="/CardTwo">
            <Header />
            <Hero />
            <Stats />
            <Why />
            <CardTwo />
            <Calculate />
            <Trade />
            <Features />
            <Newsletter />
            <Footer />
          </Route>
          <Route path="/CardThree" >
            <Header />
            <Hero />
            <Stats />
            <Why />
            <CardThree />
            <Calculate />
            <Trade />
            <Features />
            <Newsletter />
            <Footer />
          </Route>
          {/* <Route path="/MarketIndices">
            
          </Route>  */}
          <Route path="/">
            <Header />
            <Hero />
            <Stats />
            <Why />
            <MarketIndices />
            <Calculate />
            <Trade />
            <Features />
            <Newsletter />
            <Footer />
          </Route>
          {/* <div className='h-[500px]'></div> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
