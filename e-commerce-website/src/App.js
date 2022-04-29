import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() { 
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" component={Header} />


          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
