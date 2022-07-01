import Newsapi from './newsapi';
import Footer from './footer';
import Routing from './routes';
function App() {
  return (
    <div className="App">
      
      <Routing/>
      <h2 id='top-headings'><span>T</span>op <span>H</span>eadings</h2>
      <Newsapi />
      <Footer />
    </div>
  );
}

export default App;
