import "./App.css";
import { UserContext } from ".";
import Header from "./components/Header";
import Articles from "./components/ArticlesComponents/Articles";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Topics from "./components/TopicsComponents/Topics";
import SortByTopic from "./components/TopicsComponents/SortByTopic";
import ArticleProvider from "./components/ArticlesComponents/ArticleProvider";
import CommentsPage from "./components/CommentsComponents/CommentsPage";
import Login from "./components/Login";
import { fetchArticles, fetchTopics, fetchUsers } from "./Api.js";
import { CommentsContext } from ".";

function App() {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [users, setUsers] = useState([]);
  const [topicSelect, setTopicSelect] = useState("");
  const [currUser, setCurrUser] = useState(null);
  const [comments, setComments] = useState([{}]);

  useEffect(() => {
    fetchArticles(setArticles);
    fetchTopics(setTopics);
    fetchUsers(setUsers);
  }, []);

  return (
    <UserContext.Provider value={{ currUser, setCurrUser }}>
      <CommentsContext.Provider value={{ setComments, comments }}>
        <section className="App  h-screen flex flex-col">
          <Header />

          {currUser ? <NavBar /> : null}
          <Routes>
            <Route path="/" element={<Login users={users} />} />
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
              element={
                <Articles setArticles={setArticles} articles={articles} />
              }
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
        </section>
      </CommentsContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
