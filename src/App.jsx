import "./App.css";
import Header from "./components/Header";
import Articles from "./components/ArticlesComponents/Articles";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Topics from "./components/TopicsComponents/Topics";
import SortByTopic from "./components/TopicsComponents/SortByTopic";

function App() {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [topicSelect, setTopicSelect] = useState("");

  const fetchArticles = () => {
    fetch("https://news-api-ryanfoo.herokuapp.com/api/articles").then((res) => {
      res.json().then((articlesArr) => {
        setArticles(articlesArr);
      });
    });
  };

  const fetchTopics = () => {
    fetch("https://news-api-ryanfoo.herokuapp.com/api/topics").then((res) => {
      res.json().then((topicsArr) => {
        setTopics(topicsArr);
      });
    });
  };

  useEffect(() => {
    fetchArticles();
    fetchTopics();
  }, []);

  return (
    <div className="App bg-orange-300">
      <Header />
      <NavBar />
      <Routes>
        <Route
          path="/topics"
          element={
            <Topics
              articles={articles}
              topics={topics}
              setTopicSelect={setTopicSelect}
            />
          }
        >
          Topics
        </Route>
        <Route
          path="/articles"
          element={<Articles setArticles={setArticles} articles={articles} />}
        ></Route>
        <Route
          path="topics/:topic"
          element={
            <SortByTopic
              setTopicSelect={setTopicSelect}
              topics={topics}
              articles={articles}
              topicSelect={topicSelect}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
