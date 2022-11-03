import { useState } from "react";

const fetchArticles = (setArticles) => {
  fetch("https://news-api-ryanfoo.herokuapp.com/api/articles").then((res) => {
    res.json().then((articlesArr) => {
      setArticles(articlesArr);
    });
  });
};

const fetchTopics = (setTopics) => {
  fetch("https://news-api-ryanfoo.herokuapp.com/api/topics").then((res) => {
    res.json().then((topicsArr) => {
      setTopics(topicsArr);
    });
  });
};

const fetchUsers = (setUsers) => {
  fetch("https://news-api-ryanfoo.herokuapp.com/api/users").then((res) => {
    res.json().then((data) => {
      setUsers(data);
    });
  });
};

const fetchComments = (setComments, article_id) => {
  fetch(
    `https://news-api-ryanfoo.herokuapp.com/api/articles/${article_id}/comments`
  ).then((res) => {
    res.json().then((data) => {
      setComments(data);
    });
  });
};

export { fetchArticles, fetchTopics, fetchUsers, fetchComments };
