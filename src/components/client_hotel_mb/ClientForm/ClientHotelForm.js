import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Component } from "react";
import ClientHotelArticleList from "./ClientHotelArticleList";

export default class ClientHotelForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newArticle: null,
      chambre: "test",
      nomClient: "test",
      produit: "Coca-cola", // Default value
      nombre: 0,
      facturation: "En attente",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addArticleToRoom = () => {
    const { chambre, nomClient, produit, nombre, facturation } = this.state;

    const newArticle = {
      name: produit,
      nombre: nombre,
      facturaction: facturation,
    };

    axios
      .post("http://localhost:9000/articlesToRoom", newArticle)
      .then((response) => {
        console.log("Article added successfully:", response.data);
        this.setState({
          newArticle: newArticle,
          chambre: "test",
          nomClient: "client",
          produit: "Coca-cola", // Reset to default value
          nombre: null,
          facturation: "En attente",
        });
        // You may want to call a method in the parent component to refresh the article list.
      })
      .catch((error) => {
        console.error("Error adding article:", error);
      });
  };

  render() {
    return (
      <div
        style={{ height: 490 + "px" }}
        className="flex flex-row pb-6 px-16   bg-white rounded-br rounded-bl"
      >
        <div className="flex flex-col w-2/5 mr-8 h-full ">
          <h4 className="text-blue-800 font-medium mb-2">
            Ajouter un nouvel article à la chambre
          </h4>
          <div className="flex flex-col">
            <span>Chambre</span>
            <div className="flex flex-row items-center justify-between">
              <input
                name="chambre"
                value={this.state.chambre}
                onChange={this.handleInputChange}
                className="border border-gray-300 mr-3  rounded focus-within:outline-none focus-v:shadow-2xl pl-2 py-1  mb-2"
                type="text"
              />
              <div className="bg-blue-50 py-2 px-6 rounded">
                <label className="mr-2 text-sm font-normal">CHECK OUT</label>
                <input type="radio" className="mr-3" checked />
                <label className="mr-2 text-sm font-normal">PRESENT</label>
                <input className="mr-2" type="radio" />
              </div>
            </div>
            <span>Nom du client</span>
            <input
              name="nomClient"
              value={this.state.nomClient}
              onChange={this.handleInputChange}
              className="border border-gray-300 rounded focus-within:outline-none focus-v:shadow-2xl pl-2 py-1 mb-2"
              type="text"
            />
            <div className="flex flex-row justify-between items-center w-full mb-2">
              <div className="flex w-7/12 flex-col">
                <span className="mb-1">Produit</span>
                <select
                  name="produit"
                  value={this.state.produit}
                  onChange={this.handleInputChange}
                  className="border border-gray-300 rounded focus-within:outline-none focus-v:shadow-2xl pl-2 py-2 "
                >
                  <option value="Coca-cola">Coca-cola</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
              <div className="flex w-1/3 flex-col">
                <span className="mb-1">Nombre</span>
                <input
                  name="nombre"
                  value={this.state.nombre}
                  onChange={this.handleInputChange}
                  className="border border-gray-300 rounded focus-within:outline-none focus-v:shadow-2xl pl-2 py-2"
                  type="number"
                />
              </div>
            </div>
            <span className="mb-1">Facturation</span>
            <select
              name="facturation"
              value={this.state.facturation}
              onChange={this.handleInputChange}
              className="border border-gray-300 rounded focus-within:outline-none focus-v:shadow-2xl px-3 py-2"
            >
              <option value="En attente">En attente</option>
              <option value="Offert">Offert</option>
              <option value="Sur chambre">Sur chambre</option>
            </select>
            <button
              onClick={() => {
                this.addArticleToRoom();
              }}
              className={`bg-blue-800 rounded-lg py-3 text-white mt-16 ${
                !this.state.produit ||
                !this.state.nombre ||
                !this.state.facturation
                  ? "pointer-events-none opacity-50"
                  : ""
              } `}
            >
              Ajouter un article
              <FontAwesomeIcon className="ml-2" size="lg" icon={faCirclePlus} />
            </button>
          </div>
        </div>

        <ClientHotelArticleList newArticle={this.state.newArticle} />
      </div>
    );
  }
}
