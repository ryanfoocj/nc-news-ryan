import "./App.css";
import Header from "./components/Header";
import Articles from "./components/ArticlesComponents/Articles";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/articles"
          element={<Articles setArticles={setArticles} articles={articles} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
