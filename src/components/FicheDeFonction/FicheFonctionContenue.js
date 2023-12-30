import {
    faCircleCheck,
    faCircleChevronDown,
    faCircleChevronUp,
    faEllipsis,
    faEye,
    faFileExcel,
    faFilePdf,
    faPen,
    faPrint,
    faX,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React, { Component } from "react";
  import tinycolor from "tinycolor2";
  
  export default class FicheFonctionContenue extends Component {
    constructor() {
      super();
      this.state = {
        toggleIcon: false,
        hidden: Array.from({ length: 15 }, () => true), // Dynamic initial state with 20 elements
        baseColor: "#3498db",
        treePointsIconClicked: false,
      };
    }
    generateColorVariation = (index) => {
      const baseColor = tinycolor(this.state.baseColor);
      const variation = baseColor
        .spin(index * 50)
        .saturate(10)
        .lighten(43);
      return variation.toHexString();
    };
  
    toggleVisibility = (index) => {
      this.setState((prevState) => {
        const newHidden = [...prevState.hidden];
        newHidden[index] = !newHidden[index];
        return { hidden: newHidden, toggleIcon: !this.state.toggleIcon };
      });
    };
    render() {
      return (
        <div className="relative">
          <div
            style={{ height: 550 + "px" }}
            className=" pt-4 pb-8 px-12  bg-white rounded-br rounded-bl"
          >
            <div className="w-full  h-full flex flex-col text-gray-500  text-sm  font-medium ">
              <div className="flex w-3/4 mb-3  justify-between text-sky-700">
                <span className="pl-3">Client</span>
                <span className="pl-24">Chambre</span>
                <span className="mr-28">Date</span>
              </div>
              <div className="w-full h-full flex flex-col  overflow-y-auto">
                {Array.from({ length: 15 }, (v, index) => (
                  <div key={index} className="flex flex-col w-full ">
                    <div
                      style={{
                        backgroundColor: this.generateColorVariation(index),
                      }}
                      className={`
                          w-full flex px-2 pr-9 items-center  border-gray-500 rounded py-3 ${
                            this.state.hidden[index] ? "mb-2" : "border-2"
                          } justify-between`}
                    >
                      <div className="flex items-center">
                        <img
                          className="rounded-full mr-2"
                          width={35}
                          src="https://media.licdn.com/dms/image/D4E03AQGG_dUBY2odfw/profile-displayphoto-shrink_400_400/0/1671052328516?e=2147483647&v=beta&t=2BWpAto_1t_qM2RL2jkL5kbHcYc2v91gnenAJImHLrA"
                        />
                        <span>Groupe Philips</span>
                      </div>
                      <span>405</span>
                      <span>12/15/2023</span>
                      <FontAwesomeIcon
                        onClick={() => {
                          this.toggleVisibility(index);
                        }}
                        className="text-gray-500 cursor-pointer"
                        size="xl"
                        icon={
                          this.state.toggleIcon
                            ? faCircleChevronUp
                            : faCircleChevronDown
                        }
                      />
                    </div>
                    <div
                      style={{
                        backgroundColor: this.generateColorVariation(index),
                      }}
                      className={`${
                        this.state.hidden[index] ? "hidden" : ""
                      } flex flex-col w-full h-72  rounded rounded-b-2 px-12 py-2 mb-2 items-center `}
                    >
                      <div className="flex flex-col   mb-2 w-full h-52 overflow-y-auto">
                        {Array.from({ length: 8 }, (v, index) => (
                          <div className="w-full text-xs bg-white rounded-lg px-2 py-2 mb-2  flex justify-between">
                            <span className="text-blue-800 font-bold">
                              Dates :
                            </span>
                            <span>15/06/2023</span>
                            <span className="text-blue-800 font-bold">
                              Heure :
                            </span>
                            <span>10h30</span>
                            <span className="text-blue-800 font-bold">
                              Services :
                            </span>
                            <div className="flex flex-col text-xs">
                              <div className="mb-2 flex justify-between items-center">
                                <span className="mr-12">Restaurant</span>
                                <FontAwesomeIcon
                                  size="lg"
                                  icon={faCircleCheck}
                                  style={{ color: "#3cc700" }}
                                />
                              </div>
                              <div className="mb-2 flex justify-between items-center">
                                <span className="mr-12">House Keeping</span>
                                <FontAwesomeIcon
                                  size="lg"
                                  icon={faCircleCheck}
                                  style={{ color: "#3cc700" }}
                                />
                              </div>
                              <div className="mb-2 flex justify-between items-center">
                                <span className="mr-12">Conciergerie</span>
                                <FontAwesomeIcon
                                  size="lg"
                                  icon={faCircleCheck}
                                  style={{ color: "#3cc700" }}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div
                        style={{
                          backgroundColor: this.generateColorVariation(index),
                        }}
                        className={`
                          w-11/12 flex items-center px-2 mb-2 text-xs  border-gray-300 rounded-lg  ${
                            this.state.hidden[index] ? "" : "border"
                          } justify-between`}
                      >
                        <div>
                          <span className="mr-9 font-bold  text-sky-700 ">
                            Date création
                          </span>
                          <span>15/06/2023</span>
                        </div>
                        <div>
                          <span className="mr-9  font-bold   text-sky-700 ">
                            Initials
                          </span>
                          <span>BP</span>
                        </div>
                        <img
                          className="rounded-full mr-2"
                          width={35}
                          src="https://media.licdn.com/dms/image/D4E03AQGG_dUBY2odfw/profile-displayphoto-shrink_400_400/0/1671052328516?e=2147483647&v=beta&t=2BWpAto_1t_qM2RL2jkL5kbHcYc2v91gnenAJImHLrA"
                        />
                      </div>
                      <div
                        className="
                          w-6/12 flex px-2 mb-2 text-gray-700 text-xs font-bold rounded-lg py-2 justify-between"
                      >
                        <button>
                          {" "}
                          <FontAwesomeIcon
                            className="mr-2"
                            size="sm"
                            icon={faPen}
                            style={{ color: "#0448be" }}
                          />
                          Modifier
                        </button>
                        <button>
                          <FontAwesomeIcon
                            className="mr-2"
                            size="sm"
                            icon={faX}
                            style={{ color: "#ff0000" }}
                          />
                          Annuler
                        </button>
                        <button>
                          <FontAwesomeIcon
                            className="mr-2"
                            size="lg"
                            icon={faEye}
                            style={{ color: "#2b2d31" }}
                          />
                          Voir fiche de fonction
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`${
              this.state.treePointsIconClicked ? "" : "hidden"
            } absolute bottom-0 right-0 w-1/6  bg-white p-3 mr-6 mb-2 shadow-md flex flex-col rounded-lg`}
          >
            <div className="w-full flex items-center justify-between mb-2 rounded cursor-pointer hover:text-sky-700  hover:bg-slate-100 p-2">
              <span className="text-sm font-semibold">Impression rapide</span>
              <FontAwesomeIcon className="text-sky-700 " icon={faPrint} />
            </div>
            <div className="w-full flex items-center justify-between mb-2 rounded cursor-pointer hover:bg-slate-100 hover:text-sky-700  p-2">
              <span className="text-sm font-semibold">PDF</span>
              <FontAwesomeIcon className="text-sky-700 " icon={faFilePdf} />
            </div>
            <div className="w-full flex items-center justify-between  rounded cursor-pointer hover:text-sky-700  hover:bg-slate-100 p-2">
              <span className="text-sm font-semibold">Excel</span>
              <FontAwesomeIcon className="text-sky-700 " icon={faFileExcel} />
            </div>
          </div>
          <div className="flex justify-end mt-2 mr-1">
            <div className="bg-sky-700  w-7 h-7 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                onClick={() => {
                  this.setState({
                    treePointsIconClicked: !this.state.treePointsIconClicked,
                  });
                }}
                className="cursor-pointer"
                size="xl"
                icon={faEllipsis}
                style={{ color: "#ffffff" }}
              />
            </div>
          </div>
        </div>
      );
    }
  }
  