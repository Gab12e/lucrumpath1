import React, { useEffect, useState } from 'react';
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
  let [user, setUser] = useState()
  return (
    <Router>
      <div className='overflow-hidden'>
        <Switch>
          <Route path="/Aboutus">
            <Header user={user}/>
            <Aboutus />
            <Footer />
          </Route>
          <Route path="/Demo">
          <Header user={user} />
            <Demo />
            <Footer />
          </Route>
          <Route path="/MarketIndices">
          </Route>
          <Route path="/Tradingplan">
            <Header user={user} />
            <Tradingplan />
            <Footer />
          </Route>
          <Route path="/Faqs">
            <Header user={user} />
            <Faqs />
            <Footer />
          </Route>
          <Route path="/Contact">
            <Header user={user} />
            <Contact />
            <Footer />
          </Route>
          <Route path="/SignUp">
            <Header user={user} />
            <SignUp />
            <Footer />
          </Route>
          <Route path="/SignIn">
            <Navbar />
            <SignIn setUser={setUser} />
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
