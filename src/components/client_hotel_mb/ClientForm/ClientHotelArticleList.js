import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Component } from "react";

export default class ClientHotelArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articlestoRoom: [],
    };
  }

  componentDidMount() {
    this.getAllArticlesRoom();
  }

  componentDidUpdate(prevProps) {
    // Check if the newArticle prop has changed
    if (prevProps.newArticle !== this.props.newArticle) {
      // Update the state by creating a new array with the newArticle
      this.setState((prevState) => ({
        articlestoRoom: [...prevState.articlestoRoom, this.props.newArticle],
      }));
    }
  }

  deleteArticle(id) {
    axios.delete(`http://localhost:9003/articlesToRoom/${id}`).then(() => {
      this.setState((prevState) => ({
        articlestoRoom: prevState.articlestoRoom.filter(
          (article) => article.id !== id
        ),
      }));
    });
  }

  getAllArticlesRoom() {
    axios
      .get("http://localhost:9003/articlesToRoom")
      .then((response) => {
        this.setState({
          articlestoRoom: response.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }

  render() {
    return (
      <div
        style={{ height: 425 + "px" }}
        className="container  border-2   rounded-lg px-12 py-3 w-7/12  overflow-y-auto "
      >
        <table className="w-full text-center">
          <thead className="border-b-2 border-sky-700 text-sm text-sky-700">
            <tr>
              <th className="text-start py-2 text-sky-700">Article</th>
              <th className="text-center py-2 pr-20 text-sky-700">Nombre</th>
              <th className="text-start pr-8 py-2 text-sky-700">Facturation</th>
              <th className="text-center pr-8 py-2 text-sky-700"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-medium">
            {this.state.articlestoRoom.map((elm, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-2 text-start">{elm.name}</td>
                <td className="py-2 pr-20">{elm.nombre}U</td>
                <td className="py-2 text-start">{elm.facturaction}</td>
                <td className=" py-2 ">
                  <div className="border shadow-sm w-8 py-1 rounded text-center bg-">
                    <FontAwesomeIcon
                      onClick={() => {
                        this.deleteArticle(elm.id);
                      }}
                      className="text-sky-700 "
                      size="1x"
                      icon={faTrash}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
