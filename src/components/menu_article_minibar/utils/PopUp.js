import React, { Component } from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
export default class PopUp extends Component {
  constructor(props) {
    super(props);
  }
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
                className="bg-blue-800 rounded w-2/6 py-3 text-white"
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
