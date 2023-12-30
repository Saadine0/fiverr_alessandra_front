import {
  faChevronRight,
  faCirclePlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FicheFonctionContenue from "./FicheFonctionContenue";

import React, { Component } from "react";

export default class FicheFonction extends Component {
  render() {
    return (
      <div className="flex flex-col px-40  mt-10  ml-16">
        <div className="flex flex-row w-full mb-6">
          <div className="flex flex-row w-3/5  ">
            <div className=" w-3/5 flex items-center justify-between mr-16">
              <input
                type="text"
                className="w-full text-xs font-semibold placeholder-gray-500  py-2 rounded-l-lg px-6 focus-within:outline-none focus-v:shadow-2xl"
                placeholder="Que recherchez-vous ?"
              />
              <FontAwesomeIcon
                className="py-2 px-4 bg-white rounded-r-lg  text-gray-500 cursor-pointer"
                size=""
                icon={faSearch}
              />
            </div>

            <div className="w-2/5 flex justify-end">
              <div className="w-full cursor-pointer flex flex-row justify-between items-center text-gray-500  text-xs py-2 font-medium px-9 rounded bg-white mr-6">
                <span className="mr-3"> Filtre</span>
                <FontAwesomeIcon size="2xs" icon={faChevronRight} />
              </div>
              <select className="text-gray-500 font-medium text-xs cursor-pointer py-2 px-9 rounded">
                <option>Trier par</option>
                <option>opt 2</option>
                <option>opt 3</option>
              </select>
            </div>
          </div>
          <div className="w-2/5 text-xs font-semibold text-blue-800  flex justify-end">
            <button className=" px-6 bg-green-300 rounded-xl">
              <FontAwesomeIcon className="mr-3" size="lg" icon={faCirclePlus} />
              Nouvelle fiche
            </button>
          </div>
        </div>
        <h4 className="rounded-t font-semibold text-white bg-blue-800 px-12  py-3">
          Fiche de fonction
        </h4>
        <FicheFonctionContenue />
      </div>
    );
  }
}
