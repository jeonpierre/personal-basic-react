import './App.scss';
import Header from './components/home.js';
import Footer from './components/Footer.js';
import Hometext from  './components/Hometext.js';
import Homepage from './Homepage.js';
import { Routes, Route} from 'react-router-dom';
import { ReactDOM } from 'react';
import Layout from './index Layout.js';

function App() {
  
  return (
    <>
    <Routes>
      <Route path = "/" element= {<Layout />} />
      <Route path = "Home" element= {<Homepage/> } /> 
      <Route path = "#" element= {<Hometext /> } />
      <Route path = "#" element= {<Footer /> } />
    </Routes>
    
    </>
  );
}

export default App;

// How can i Get the Route Path Home & Homepage and Layout on the same page? i.e '/'?