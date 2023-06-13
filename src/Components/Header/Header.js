import React from "react";
import {  Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed-header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tv-shows">TV Shows</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/originals">Originals</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const ContentSection = ({ title, data }) => {
  return (
    <section>
      <h2>{title}</h2>
      <div className="content-grid">
        {data.map((item) => (
          <div className="content-item" key={item.id}>
            <img src={item.poster} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  
  const trendingShows = [
    { id: 1, title: "Show 1", poster: "/path/to/poster1.jpg" },
    { id: 2, title: "Show 2", poster: "/path/to/poster2.jpg" },
   
  ];

  const popularMovies = [
    { id: 1, title: "Movie 1", poster: "/path/to/poster1.jpg" },
    { id: 2, title: "Movie 2", poster: "/path/to/poster2.jpg" },
    
  ];

  const originals = [
    { id: 1, title: "Original 1", poster: "/path/to/poster1.jpg" },
    { id: 2, title: "Original 2", poster: "/path/to/poster2.jpg" },
   
  ];

  return (
    <Router>
      <Header />
      <div className="content-container">
        
          <Route exact path="/">
            <ContentSection title="Trending Now" data={trendingShows} />
            <ContentSection title="Popular Movies" data={popularMovies} />
            <ContentSection title="Originals" data={originals} />
          </Route>
          <Route path="/tv-shows">
            {/* Render TV Shows section */}
          </Route>
          <Route path="/movies">
            {/* Render Movies section */}
          </Route>
          <Route path="/originals">
            {/* Render Originals section */}
          </Route>
      
      </div>
    </Router>
  );
};

export default App;