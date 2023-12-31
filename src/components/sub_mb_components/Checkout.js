import React, { Component, useState, useEffect } from "react";
import "flowbite";
import "./Checkout.css";
import { FaHistory } from "react-icons/fa";
import axios from "axios";
import { FaPrint } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FaFilePdf } from "react-icons/fa";
import PopUp from "./utils/PopUp";
import { FaFilter } from "react-icons/fa";
import { BsCheckSquareFill } from "react-icons/bs";
import { BsFillPinAngleFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { Link } from 'react-router-dom';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: "button1",
      data: [],
      Display: false,
      Display_pin: "button1",
      selectedChambre: "",
      selectedUtilisateur: "",
      selectedType: "",
      fromDate: null,
      toDate: null,
    };
  }

  componentDidMount() {
    this.fetchData(); // Fetch initial data
  }

  fetchData = () => {
    axios
      .get("http://localhost:9000/checkoutPresent")
      .then((response) => {
        // Save the fetched data to state
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  handleButtonClick = (buttonName) => {
    this.setState((prevState) => ({
      activeButton: buttonName,
      Display_pin: buttonName === "button1" || buttonName === "button2",
    }));
  };

  renderTableRows() {
    return this.state.data.map((elm, index) => (
      <tr
        key={index}
        className={index % 2 === 0 ? "bg-white" : "bg-white dark:bg-gray-800"}
      >
        <th
          scope="row"
          className="px-6 py-2 text-sky-700 whitespace-nowrap dark:text-white border-b border-gray-200 font-bold"
        >
          {" "}
          {elm.Chambre}{" "}
        </th>
        <td className="px-6 py-2 border-b border-gray-200">
          {elm.NomDuClient}
        </td>
        <td className="px-6 py-2 border-b border-gray-200">{elm.Article}</td>
      </tr>
    ));
  }
  renderTableRows1() {
    const { selectedType, selectedUtilisateur, selectedChambre, fromDate, toDate } = this.state;
    const data = this.state.data;
    let filteredData = data;
    
    // Apply filters if values are selected in dropdowns
    if (selectedType || selectedUtilisateur || selectedChambre || (fromDate && toDate)) {
        filteredData = data.filter((item) => {
            if (selectedType && item.TypeDeModification !== selectedType) {
                return false;
            }
            if (selectedUtilisateur && item.Utilisateur !== selectedUtilisateur) {
                return false;
            }
            if (selectedChambre && item.Chambre !== selectedChambre) {
                return false;
            }
            if (fromDate && toDate) {
                const itemDate = new Date(item.Date);
                const from = new Date(fromDate);
                const to = new Date(toDate);

                if (itemDate < from || itemDate > to) {
                    return false;
                }
            }
        return true;
    });}

    return filteredData.map((elm, index) => {
      let rowClassName = "";

      switch (elm.TypeDeModification.toLowerCase()) {
        case "annulé":
          rowClassName = "bg-red-200";
          break;
        case "modifié":
          rowClassName = "bg-indigo-200";
          break;
        case "ajouté":
          rowClassName = "bg-emerald-100";
          break;
        default:
          break;
      }

      return (
        <tr key={index} className={`${rowClassName} mb-4`}>
          <td className="px-6 py-4 font-bold text-xs rounded-s-lg ">
            {elm.Date}
          </td>
          <td className="px-6 py-4 text-xs">{elm.Heure}</td>
          <td className="px-6 py-4 text-xs">{elm.Chambre}</td>
          <td className="px-6 py-4 text-xs">{elm.TypeDeModification}</td>
          <td className="px-6 py-4 text-xs">{elm.Description}</td>
          <td className="px-6 py-4 rounded-r-lg text-xs">{elm.Utilisateur}</td>
        </tr>
      );
    });
  }

  render() {
    const data = this.state.data;

    const uniqueTypes = [...new Set(data.map((item) => item.TypeDeModification))];
    const uniqueUtilisateurs = [...new Set(data.map((item) => item.Utilisateur))];
    const uniqueChambres = [...new Set(data.map((item) => item.Chambre))];
    const uniqueDates = [...new Set(data.map((item) => item.Date))];

    return (
      <div class=" w-full">
        <div className="w-full justify-end flex flex-row">
          <button
            type="button"
            onClick={() =>
              this.setState({
                displayHistoryPopup: !this.state.displayHistoryPopup,
              })
            }
            className="bg-white mb-3 px-2 py-1 rounded"
          >
            <div className="flex flex-row items-center justify-between w-full space-x-1">
              <span>Historique</span>
              <FaHistory />
            </div>
          </button>
        </div>
        {this.state.displayHistoryPopup && (
          <PopUp onClose={() => this.setState({ displayHistoryPopup: false })}>
            {/* Input fields */}
            <h1 class="font-bold py-2">HISTORIQUE</h1>
            <div class=" flex justify-between">
              <div class="w-2/4 flex  flex-row bg-green-60">
                <input
                  type="date"
                  value={this.state.fromDate}
                  onChange={(e) => this.setState({ fromDate: e.target.value })}
                  className="my-1 p-2 border rounded-md mr-2 w-40 text-xs"
                />

                <input
                  type="date"
                  value={this.state.toDate}
                  onChange={(e) => this.setState({ toDate: e.target.value })}
                  className="my-1 p-2 border rounded-md mr-2 w-40 text-xs"
                />

                <button
                  type="button"
                  class="h-8 px-4 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-sky-700 rounded-lg focus:shadow-outline hover:bg-sky-700"
                >
                  <FaCheck />
                </button>
              </div>

              <div class="align-items-end  flex flex-row">
                <select
                  id="typeSelect"
                  className="my-1 p-2 border rounded-md mr-2 w-40 text-xs"
                  onChange={(e) =>
                    this.setState({
                      selectedType: e.target.value,
                    })
                  }
                  value={this.state.selectedTypeDeModification} 
                >
                  <option value="" disabled selected>
                    Type de modification
                  </option>
                  {uniqueTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                <select
                  id="utilisateurSelect"
                  value={this.state.selectedUtilisateur}
                  onChange={(e) =>
                    this.setState({ selectedUtilisateur: e.target.value })
                  }
                  className="my-1 p-2 border rounded-md mr-2 w-40 text-xs"
                >
                  <option value="" disabled selected>
                    Utilisateur
                  </option>
                  {uniqueUtilisateurs.map((utilisateur, index) => (
                    <option key={index} value={utilisateur}>
                      {utilisateur}
                    </option>
                  ))}
                </select>

                <select
                  id="chambreSelect"
                  value={this.state.selectedChambre}
                  onChange={(e) =>
                    this.setState({ selectedChambre: e.target.value })
                  }
                  className="my-1 p-2 border rounded-md mr-2 w-40 text-xs"
                >
                  <option value="" disabled selected>
                    Chambre
                  </option>
                  {uniqueChambres.map((chambre, index) => (
                    <option key={chambre} value={chambre}>
                      {chambre}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                 
                  class="h-8 px-4 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-sky-700 rounded-lg focus:shadow-outline hover:bg-sky-700"
                >
                  <FaFilter />
                </button>
              </div>
            </div>
            <div class="flex items-center">
              <span class="text-gray-500 whitespace-nowrap">
                21-11-2011 to 21-11-2011
              </span>
              <hr class="flex-grow h-px my-8 mx-4 bg-gray-200 border-0 dark:bg-gray-700" />
            </div>

            {/* Table for historical data */}
            <div class="overflow-y-auto h-128 ">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-separate border-spacing-y-3">
                <thead className="text-xs py-1 text-gray-700 bg-red-900 dark:bg-red-700 dark:text-gray-400">
                  <tr className="sticky top-0 px-6 bg-white ">
                    <th scope="col" className="px-6 py-1">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-1">
                      Heure
                    </th>
                    <th scope="col" className="px-6 py-1">
                      Chambre
                    </th>
                    <th scope="col" className="px-6 py-1">
                      Type de modification
                    </th>
                    <th scope="col" className="px-6 py-1">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-1">
                      Utilisateur
                    </th>
                  </tr>
                </thead>
                <tbody>{this.renderTableRows1()}</tbody>
              </table>
            </div>
          </PopUp>
        )}

        <div className="button-container">
          {/* Checkout button */}
          <button
            onClick={() => this.handleButtonClick("button1")}
            className={`px-4 py-2 font-bold text-left rounded-t-lg grow ${
              this.state.activeButton === "button1"
                ? "bg-sky-700 text-white"
                : "bg-sky-700 text-white"
            }`}
          >
            <div class="flex justify-between">
              CHECK-OUT{" "}
              {this.state.activeButton === "button1" &&
              this.state.Display_pin ? (
                <BsFillPinAngleFill />
              ) : null}
            </div>
          </button>
          {/* Present button */}
          <button
            onClick={() => this.handleButtonClick("button2")}
            className={`px-4 py-2  font-bold text-left rounded-t-lg grow ${
              this.state.activeButton === "button2"
                ? "bg-green-300 text-gray-700"
                : "bg-green-300 text-gray-700 "
            }`}
          >
            <div class="flex justify-between">
              PRESENT{" "}
              {this.state.activeButton === "button2" &&
              this.state.Display_pin ? (
                <div>
                  <BsFillPinAngleFill />
                </div>
              ) : null}
            </div>
          </button>
        </div>
        <div class="border-2 border-sky-700 rounded-b-lg">
          <div className="table-container border-2">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
              <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr class="sticky top-0 px-6 py-3 bg-white">
                  <th scope="col" className="px-6 py-2">
                    Chambre
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Nom Du Client
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Article
                  </th>
                </tr>
              </thead>
              <tbody>{this.renderTableRows()}</tbody>
            </table>
          </div>
        </div>
        <div className=" pt-2 flex justify-between">
          <Link
            to="/MenuMinibar"
            className="bg-sky-700 text-white mb-3 px-2 py-1 rounded"
          >
            <div className="flex flex-row items-center justify-between w-full space-x-1 p-1">
              <span>Menu Article Minibar</span>
            </div>
          </Link>

          <button
            onClick={() => this.setState({ Display: !this.state.Display })}
            className="mr-4 cursor-pointer "
          >
            ...
          </button>
          {this.state.Display ? (
            <div
              class="fixed card w-1/7 border-sky-700 border-2 bottom-28 bg-white rounded-md"
              style={{ marginLeft: 1015 + "px" }}
            >
              <div class="flex flex-col card-body p-2">
                <button class="card-subtitle mb-2 text-muted justify-center">
                  {" "}
                  <div class=" flex flex-row items-center justify-self-start w-full space-x-1">
                    <FaPrint className="text-sky-700" />
                    <span className="text-sky-700"> Impression Rapide</span>
                  </div>
                </button>

                <button class="card-subtitle mb-2 text-muted">
                  <div class=" flex flex-row items-center justify-self-start w-full space-x-1">
                    <FaFilePdf className="text-sky-700" />
                    <span className="text-sky-700">Exporter en Pdf</span>
                  </div>
                </button>
                <button class="card-subtitle mb-2 text-muted">
                  <div class=" flex flex-row items-center justify-self-start w-full space-x-1">
                    <RiFileExcel2Fill className="text-sky-700" />
                    <span className="text-sky-700">Exporter en Excel</span>
                  </div>
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Checkout;
