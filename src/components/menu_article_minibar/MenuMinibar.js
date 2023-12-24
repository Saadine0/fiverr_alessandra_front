import React, { Component } from "react";
import ArticleForm from "./add_article/ArticleForm";
export default class MenuMinibar extends Component {
  render() {
    return (
      <div className="flex flex-col px-20  mt-20  ml-16">
        <h4 className="rounded-t text-white bg-blue-800 px-12  py-3">
          Menu Article Minibar
        </h4>
        <ArticleForm />
      </div>
    );
  }
}
