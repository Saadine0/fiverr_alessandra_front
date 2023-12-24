import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Component } from "react";

import UpdateArticle from "../update_article/UpdateArticle";
export default class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      articleToPut: null,
    };
  }

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps) {
    // Check if the newArticle prop has changed
    if (prevProps.newArticle !== this.props.newArticle) {
      // Update the state by creating a new array with the newArticle
      this.setState((prevState) => ({
        articles: [...prevState.articles, this.props.newArticle],
      }));
    }
  }
  getArticles = () => {
    axios
      .get("http://localhost:9000/articles")
      .then((response) => {
        this.setState({
          articles: response.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  };

  deleteArticle = (id) => {
    axios.delete(`http://localhost:9000/articles/${id}`).then((response) => {
      this.setState((prevState) => ({
        articles: prevState.articles.filter((article) => article.id !== id),
      }));
      console.log(
        "Article deleted Successfully : status code => " + response.status
      );
    });
  };
  // Function to update an article in the list
  updateArticleInList = (index, updatedArticle) => {
    this.setState((prevState) => {
      const updatedArticles = [...prevState.articles];
      updatedArticles[index] = updatedArticle;
      return { articles: updatedArticles };
    });
  };

  render() {
    return (
      <div
        style={{ height: 500 + "px" }}
        className="container  border-2  shadow rounded-lg px-12 py-3 w-7/12  overflow-y-auto "
      >
        <table className="w-full text-start">
          <thead className="border-b-2 border-blue-800 text-sm text-blue-800">
            <tr>
              <th className="text-start pr-20 py-2">Article</th>
              <th className="text-start pr-20 py-2">Description</th>
              <th className="text-start pr-8 py-2">Prix</th>
              <th className="text-start pr-8 py-2"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-medium">
            {this.state.articles.map((article, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="pt-2">{article.name}</td>
                <td className="pt-2">{article.description}</td>
                <td className="pt-2">{article.price}$ / U</td>
                <td className="py-2">
                  <div className="border rounded-xl  border-blue-800 flex justify-between px-2 py-1">
                    <FontAwesomeIcon
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo"
                      onClick={() => this.setState({ articleToPut: index + 1 })}
                      className="text-blue-800"
                      size="1x"
                      icon={faEdit}
                    />
                    <FontAwesomeIcon
                      onClick={() => this.deleteArticle(article.id)}
                      className="text-blue-800"
                      size="1x"
                      icon={faTrash}
                    />
                  </div>
                  <UpdateArticle
                    updateArticleInList={this.updateArticleInList}
                    articles={this.state.articles}
                    index={this.state.articleToPut}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
