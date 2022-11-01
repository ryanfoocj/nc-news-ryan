import "./App.css";
import Header from "./components/Header";
import Articles from "./components/ArticlesComponents/Articles";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Topics from "./components/TopicsComponents/Topics";
import SortByTopic from "./components/TopicsComponents/SortByTopic";
import ArticleProvider from "./components/ArticlesComponents/ArticleProvider";
import CommentsPage from "./components/ArticlesComponents/CommentsPage";
import { fetchArticles, fetchTopics } from "./Api.js";

function App() {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [topicSelect, setTopicSelect] = useState("");

  useEffect(() => {
    fetchArticles(setArticles);
    fetchTopics(setTopics);
  }, []);

  return (
    <div className="App bg-orange-200">
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
        />
        <Route
          path="/topics/:topic"
          element={
            <SortByTopic
              setTopicSelect={setTopicSelect}
              topics={topics}
              articles={articles}
              topicSelect={topicSelect}
            />
          }
        />
        <Route
          path="/articles/:article_id/comments"
          element={<CommentsPage />}
        />
        <Route
          path="/articles/:article_id"
          element={<ArticleProvider articles={articles} />}
        />
      </Routes>
    </div>
  );
}

export default App;
