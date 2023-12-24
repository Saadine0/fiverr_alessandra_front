import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from "react";
import ArticleList from "../list_articles/ArticleList";
import Article from "../modals/Article";

export default class ArticleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleName: "",
      articleDescription: "",
      articlePrice: null,
      newArticle: null, // List to store articles
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAddArticle = () => {
    const { articleName, articleDescription, articlePrice } = this.state;
    const newArticle = new Article(
      articleName,
      articleDescription,
      articlePrice
    );
    axios
      .post("http://localhost:9000/articles", newArticle)
      .then((response) => {
        console.log("Article Added Successfully : " + response.status);
        this.setState((prevState) => ({
          newArticle: newArticle,
          articleName: "",
          articleDescription: "",
          articlePrice: 0,
        }));
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout de l'article :", error);
        const errorMessage =
          "Erreur lors de l'ajout de l'article. Veuillez réessayer.";
        this.setState({ errorMessage });
      });
  };
  render() {
    return (
      <div
        style={{ height: 550 + "px" }}
        className="flex flex-row items-start justify-between pt-8 px-12   bg-white rounded-br rounded-bl"
      >
        <div className="flex flex-col w-2/4  mr-20">
          <h4 className="text-blue-800 font-medium">
            Ajouter un nouvel article
          </h4>
          <hr className="w-full mb-6" />

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
            onClick={this.handleAddArticle}
            className={`bg-blue-800 rounded py-3 text-white ${
              !this.state.articleName ||
              !this.state.articleDescription ||
              !this.state.articlePrice
                ? "pointer-events-none opacity-50"
                : ""
            } `}
          >
            Ajouter un article
          </button>
        </div>
        <ArticleList newArticle={this.state.newArticle} />
      </div>
    );
  }
}
