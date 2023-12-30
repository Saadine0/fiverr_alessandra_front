import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Component } from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Article from "../modals/Article";

export default class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      articleToPut: null,
      articleName: "",
      articleDescription: "",
      articlePrice: "",
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
      .get("http://localhost:9003/articles")
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
    axios.delete(`http://localhost:9003/articles/${id}`).then((response) => {
      this.setState((prevState) => ({
        articles: prevState.articles.filter((article) => article.id !== id),
      }));
      console.log(
        "Article deleted Successfully : status code => " + response.status
      );
    });
  };
  // Function to update an article in the list
  // updateArticleInList = (index, updatedArticle) => {
  //   this.setState((prevState) => {
  //     const updatedArticles = [...prevState.articles];
  //     updatedArticles[index] = updatedArticle;
  //     return { articles: updatedArticles };
  //   });
  // };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  updateArticle = () => {
    const { articleName, articleDescription, articlePrice, articleToPut } =
      this.state;

    if (articleToPut !== null) {
      const id = this.state.articles[articleToPut].id; // Get the id of the article to update

      const updatedArticle = new Article(
        articleName,
        articleDescription,
        articlePrice
      );

      // Update the article using Axios
      axios
        .put(`http://localhost:9003/articles/${id}`, updatedArticle)
        .then((response) => {
          this.getArticles();
          // Reset state after successful update
          this.setState({
            articleToPut: null,
            articleName: "",
            articleDescription: "",
            articlePrice: "",
          });
        })
        .catch((error) => {
          console.error("Error updating article:", error);
        });
    }
  };

  render() {
    return (
      <div
        style={{ height: 500 + "px" }}
        className="container  border-2   rounded-lg px-12 py-3 w-7/12  overflow-y-auto "
      >
        <table className="w-full text-start">
          <thead className="border-b-2 border-sky-700 text-sm text-sky-700">
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
                  <div className="border rounded-xl  border-sky-700 flex justify-between px-2 py-1">
                    <FontAwesomeIcon
                      type="button"
                      onClick={() => {
                        this.setState({
                          articleToPut: index,
                          articleName: article.name,
                          articleDescription: article.description,
                          articlePrice: article.price,
                        });
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo"
                      className="text-sky-700"
                      size="1x"
                      icon={faEdit}
                    />
                    <FontAwesomeIcon
                      onClick={() => this.deleteArticle(article.id)}
                      className="text-sky-700"
                      size="1x"
                      icon={faTrash}
                    />
                  </div>

                  <div
                    className="modal fade ml-80 mt-60"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className=" flex flex-row justify-between px-3 pt-3">
                          <h2
                            className="modal-title  text-sky-700"
                            id="exampleModalLabel"
                          >
                            Modifier l'article
                          </h2>
                          <FaArrowRightFromBracket
                            data-bs-dismiss="modal"
                            size={25}
                          />
                        </div>
                        <div className="modal-body flex flex-col items-center">
                          <div className="grid grid-cols-6 gap-2 mb-6">
                            <div className="flex flex-col col-span-2 mr-2">
                              <label className="text-gray-700 text-xs font-semibold mb-2">
                                Article
                              </label>
                              <input
                                name="articleName"
                                value={this.state.articleName}
                                onChange={this.handleInputChange}
                                className="border rounded focus-within:outline-none focus-v:shadow-2xl pl-2 py-1"
                                type="text"
                              />
                            </div>
                            <div className="flex flex-col mr-2 col-span-3">
                              <label className="text-gray-700 text-xs font-semibold mb-2">
                                Description
                              </label>
                              <input
                                name="articleDescription"
                                value={this.state.articleDescription}
                                onChange={this.handleInputChange}
                                className="border rounded focus-within:outline-none  pl-2 py-1"
                                type="text"
                              />
                            </div>
                            <div className="flex flex-col">
                              <label className="text-gray-700 text-xs font-semibold mb-2">
                                Prix
                              </label>
                              <input
                                name="articlePrice"
                                value={this.state.articlePrice}
                                onChange={this.handleInputChange}
                                className="border rounded focus-within:outline-none pl-2 py-1"
                                type="number"
                              />
                            </div>
                          </div>
                          <button
                            onClick={() => this.updateArticle(index)}
                            className={`bg-sky-700 rounded disabled: w-2/6 py-3 text-white ${
                              !this.state.articleName ||
                              !this.state.articleDescription ||
                              !this.state.articlePrice
                                ? "pointer-events-none opacity-50"
                                : ""
                            }`}
                            data-bs-dismiss="modal"
                          >
                            Appliquer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <UpdateArticle
                    updateArticleInList={this.updateArticleInList}
                    articles={this.state.articles}
                    index={this.state.articleToPut}
                  /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
