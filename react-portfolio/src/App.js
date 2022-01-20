import Header from './components/Header'
import Info from './components/Info'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import './App.css';

import PortfolioContainer from './components/PortfolioContainer';

// <Portfolio projects={projects}/> 
function App() {
  return (
    <div className="App">
      <PortfolioContainer />
    </div>
  );
}

export default App;
