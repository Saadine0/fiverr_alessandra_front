import React, { Component } from "react";

import axios from "axios";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Article from "../modals/Article";
export default class UpdateArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleName: "",
      articleDescription: "",
      articlePrice: "",
      errorMsg: null,
    };
  }

  componentDidMount() {
    if (this.props.index) {
      console.log("Props in UpdateArticle:", this.props.index);
      // Other logic related to props.article if needed
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.index !== this.props.index) {
      console.log("Props in UpdateArticle:", this.props.index);
      const articleToUpdate = this.props.articles[this.props.index - 1] || {};

      this.setState({
        articleName: articleToUpdate.name || "",
        articleDescription: articleToUpdate.description || "",
        articlePrice: articleToUpdate.price || "",
      });
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  updateArticle = () => {
    const { index, updateArticleInList } = this.props;
    const { articleName, articleDescription, articlePrice } = this.state;
    if (!articleName || !articleDescription || articlePrice === null) {
      console.error("Veuillez remplir tous les champs");
      this.setState({
        errorMsg: "Veuillez remplir tous les champs",
      });
      return;
    }

    const updatedArticle = new Article(
      articleName,
      articleDescription,
      articlePrice
    );

    // Update the article using Axios
    axios
      .put(`http://localhost:9000/articles/${index}`, updatedArticle)
      .then((response) => {
        // Call the parent's function to update the list
        updateArticleInList(index - 1, response.data);
      })
      .catch((error) => {
        console.error("Error updating article:", error);
        // Handle error, show error message, etc.
      });
  };

  render() {
    return (
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
                className="modal-title  text-blue-800 "
                id="exampleModalLabel"
              >
                Modifier l'article
              </h2>
              <FaArrowRightFromBracket data-bs-dismiss="modal" size={25} />
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
              <div className="text-red-500 text-lg mb-6">
                {this.state.errorMsg}
              </div>
              <button
                onClick={this.updateArticle}
                className={`bg-blue-800 rounded disabled: w-2/6 py-3 text-white ${
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
    );
  }
}
