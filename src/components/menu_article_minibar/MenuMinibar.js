import React, { Component } from "react";
import AddArticle from "./add_article/AddArticle";
import ArticleList from "./list_articles/ArticleList";
export default class MenuMinibar extends Component {
  render() {
    return (
      <div
        style={{ height: 650 + "px" }}
        className="container rounded flex flex-col px-20  mt-20  ml-16"
      >
        <h1 className="container rounded-t text-white bg-blue-800 px-12  py-3">
          Menu Article Minibar
        </h1>
        <div
          style={{ height: 550 + "px" }}
          className="flex flex-row items-start justify-between pt-8 px-8   bg-white rounded-br rounded-bl"
        >
          <AddArticle />
          <ArticleList />
        </div>
      </div>
    );
  }
}
