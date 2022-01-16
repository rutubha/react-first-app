import './App.css';
import Header from './MyComponent/Header';
import Footer from './MyComponent/Footer';
import Body from './MyComponent/Body';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './MyComponent/About';
import { Contact } from './MyComponent/Contact';
 

const App = () => {
  return (
    <div>
    {/* <Header />
    <Body />
    <Footer /> */}
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact-us" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}


export default App;
