import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Header/Header.js'
import Navigation from './Navigation/Navigation.js';
import Article from './Article/Article.js';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <aside>
            <Navigation />
          </aside>
          <section>
            <Article />
          </section>
        </main>
        <footer>
          dsa
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
