import logo from './logo.svg';
import Header from './components/Header'
import Info from './components/Info'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import './App.css';
import projects from './projects';


function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <Portfolio projects={projects}/> 
      <Footer />

    </div>
  );
}

export default App;
