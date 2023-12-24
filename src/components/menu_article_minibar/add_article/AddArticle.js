import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from "react";

export default class AddArticle extends Component {
  render() {
    return (
      <div className="flex flex-col w-2/4  mr-20">
        <h4 className="text-blue-800 font-medium">Ajouter un nouvel article</h4>
        <hr className="w-full mb-6" />

        <div className="grid grid-cols-6 gap-2 mb-6">
          <div className="flex flex-col col-span-2 mr-2">
            <label className="text-gray-700 text-xs font-semibold mb-2">
              Article
            </label>
            <input
              className="border rounded focus-within:outline-none focus-v:shadow-2xl pl-2 py-1"
              type="text"
            />
          </div>
          <div className="flex flex-col mr-2 col-span-3">
            <label className="text-gray-700 text-xs font-semibold mb-2">
              {" "}
              Description{" "}
            </label>
            <input
              className="border rounded focus-within:outline-none  pl-2 py-1"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 text-xs font-semibold mb-2">
              {" "}
              Prix{" "}
            </label>
            <input
              className="border rounded focus-within:outline-none pl-2 py-1"
              type="number"
            />
          </div>
        </div>
        <button
          className="bg-blue-800 rounded py-3 text-white"
        
        >
          Ajouter un article
        </button>

     
      </div>
    );
  }
}
