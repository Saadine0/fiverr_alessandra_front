import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import PopUp from "../utils/PopUp";
export default class ArticleList extends Component {
  render() {
    return (
      <div
        style={{ height: 500 + "px" }}
        className="container  border-2  shadow rounded-lg px-12 py-3 w-7/12  overflow-y-auto "
      >
        <table className="w-full text-start">
          <thead className="border-b-2 border-blue-800 text-sm text-blue-800">
            <tr>
              <th className="text-start pr-20 py-2">Article</th>
              <th className="text-start pr-20 py-2">Description</th>
              <th className="text-start pr-8 py-2">Prix</th>
              <th className="text-start pr-8 py-2"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-medium">
            {Array.from({ length: 30 }, (_, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="pt-2">Coca-cola</td>
                <td className="pt-2">Boissons</td>
                <td className="pt-2">10$ / U</td>
                <td className="py-2">
                  <div className="border rounded-xl  border-blue-800 flex justify-between px-2 py-1">
                    <FontAwesomeIcon
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo"
                      className="text-blue-800"
                      size="1x"
                      icon={faEdit}
                    />
                    <FontAwesomeIcon
                      className="text-blue-800"
                      size="1x"
                      icon={faTrash}
                    />
                  </div>
                  <PopUp />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
