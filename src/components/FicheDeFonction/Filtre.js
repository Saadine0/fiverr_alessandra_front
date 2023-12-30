import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

export default class Filtre extends Component {
  render() {
    return (
      <div
        className="modal fade ml-32 mt-20"
        id="Filtre"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className=" flex flex-row justify-between px-3 pt-3">
              <h2
                className="modal-title font-bold  text-sky-700 "
                id="exampleModalLabel"
              >
                Filtre
              </h2>
              <div className="flex items-center text-gray-500 font-semibold">
                <FontAwesomeIcon icon={faTrash} size={25} className="mr-2" />
                <span className="text-xs ">tout effacer</span>
              </div>
            </div>
            <div className="modal-body flex flex-col ">
              <div className=" w-fullflex flex-col">
                <div className="w-full flex flex-col mb-4">
                  <div className="flex w-full items-end mb-3">
                    <span className="text-xs font-semibold text-gray-400">
                      Client{" "}
                    </span>
                    <hr className="mt-1 ml-2 w-full font-bold text-gray-500 border-1" />
                  </div>
                  <div className="grid grid-cols-3 row-gap-1 column-gap-2">
                    <button className="text-xs text-black border-gray-200 border-2  rounded-2xl px-2 py-2">
                      Hotel
                    </button>
                    <button className="text-xs bg-blue-100 text-black  border-sky-700  border-2  rounded-2xl px-2 py-2">
                      Restaurant
                    </button>
                    <button className="text-xs text-black  border-gray-200 border-2  rounded-2xl px-2 py-2">
                      New guest
                    </button>
                    <button className="text-xs text-black  border-gray-200 border-2 rounded-2xl px-2 py-2">
                      Repeater guest
                    </button>
                  </div>
                </div>
                <div className="w-full flex flex-col mb-4">
                  <div className="flex w-full items-end mb-3">
                    <span className="text-xs font-semibold text-gray-400">
                      Statue
                    </span>
                    <hr className="mt-1 ml-2 w-full font-bold text-gray-500 border-1" />
                  </div>
                  <div className="grid grid-cols-4 row-gap-1 column-gap-2">
                    <button className="text-xs bg-blue-100 text-black  border-sky-700  border-2  rounded-2xl px-2 py-2">
                      Validé
                    </button>
                    <button className="text-xs  text-black  border-gray-200 border-2  rounded-2xl px-2 py-2">
                      Visualisé
                    </button>
                    <button className="text-xs text-black  border-gray-200 border-2  rounded-2xl px-2 py-2">
                      En cours
                    </button>
                    <button className="text-xs text-black  border-gray-200 border-2 rounded-2xl px-2 py-2">
                      En attente
                    </button>
                    <button className="text-xs text-black  border-gray-200 border-2 rounded-2xl px-2 py-2">
                      A faire
                    </button>
                    <button className="text-xs text-black  border-gray-200 border-2 rounded-2xl px-2 py-2">
                      Annulé
                    </button>
                  </div>
                </div>
                <div className="w-full flex justify-end">
                  <button className="bg-sky-700  text-xs font-bold text-white rounded-lg py-2 px-5">
                    Rechercher
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
