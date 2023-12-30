import React, { Component } from "react";

import {
  faCirclePlus,
  faPenToSquare,
  faTrashCan,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class NouvelleFonction extends Component {
  render() {
    return (
      <div
        className="modal fade  h-5/6 overflow-hidden"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl ">
          <div className="modal-content ">
            <div className="w-full px-9 pt-3 mb-2">
              <div className="flex mb-3 justify-between items-center">
                <span
                  className="text-xs font-bold text-sky-700  modal-title fs-5"
                  id="exampleModalLabel"
                >
                  Nouvelle fiche de fonction
                </span>
                <div
                  data-bs-dismiss="modal"
                  className="cursor-pointer w-6 h-6 rounded-full font-bold text-white bg-sky-700  flex justify-center items-center"
                >
                  <FontAwesomeIcon size="xs" icon={faX} />
                </div>
              </div>
              <hr className=" border-2 border-gray-900" />
            </div>
            <div className="modal-bodytext-xs font-semibold px-9">
              <div className="w-full h-full  flex flex-col">
                <div className="flex justify-between items-end">
                  <div className="w-1/3 flex flex-col">
                    <span className="mb-1 text-xs font-bold">Nom</span>
                    <input
                      type="text"
                      className="border  rounded focus-within:outline-none focus-v:shadow-2xl pl-2 py-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="mb-1  text-xs font-bold">Chambre</span>
                    <input
                      type="text"
                      className="border  rounded focus-within:outline-none focus-v:shadow-2xl pl-2 py-1"
                    />
                  </div>
                  <div className="flex items-center mb-2">
                    PM <input type="checkbox" className="ml-2" />
                  </div>
                  <div className="flex items-center  mb-1">
                    Couleur{" "}
                    <input
                      type="color"
                      value="#C8FF00"
                      className="ml-2 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-between mt-3">
                  <div className="w-3/4 h-full ">
                    <div className="flex flex-col">
                      <h4 className="text-sm text-sky-700 ">
                        Ajouter des services
                      </h4>
                      <div className="flex  w-full h-full justify-between mt-3">
                        <div className="w-2/4 flex h-full flex-col ">
                          <div className="flex flex-col mb-4">
                            <span className="text-sm mb-2">Conciergerie</span>
                            <div className="flex ml-12 mb-2 text-sky-700 ">
                              <FontAwesomeIcon
                                className="mr-3"
                                size="lg"
                                icon={faCirclePlus}
                              />
                              <span className="underline underline-offset-2">
                                Voiturie
                              </span>
                            </div>
                            <div className="flex ml-12 text-sky-700 ">
                              <FontAwesomeIcon
                                className="mr-3"
                                size="lg"
                                icon={faCirclePlus}
                              />
                              <span className="underline underline-offset-2">
                                Concierge
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col mb-4">
                            <span className="text-sm mb-2">Réception</span>
                            <div className="flex ml-12 mb-2 text-sky-700 ">
                              <FontAwesomeIcon
                                className="mr-3"
                                size="lg"
                                icon={faCirclePlus}
                              />
                              <span className="underline underline-offset-2">
                                Réciptionist
                              </span>
                            </div>
                            <div className="flex  ml-12 mb-2 text-sky-700 ">
                              <FontAwesomeIcon
                                className="mr-3"
                                size="lg"
                                icon={faCirclePlus}
                              />
                              <span className="underline underline-offset-2">
                                Night
                              </span>
                            </div>
                            <div className="flex  ml-12 text-sky-700 ">
                              <FontAwesomeIcon
                                className="mr-3"
                                size="lg"
                                icon={faCirclePlus}
                              />
                              <span className="underline underline-offset-2">
                                Guest Relation
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col mb-4">
                            <span className="text-sm mb-2">Spa</span>
                            <div className="flex ml-12 mb-2 text-sky-700 ">
                              <FontAwesomeIcon
                                className="mr-3"
                                size="lg"
                                icon={faCirclePlus}
                              />
                              <span className="underline underline-offset-2">
                                Thérapeute
                              </span>
                            </div>
                            <div className="flex  ml-12 mb-2 text-sky-700 ">
                              <FontAwesomeIcon
                                className="mr-3"
                                size="lg"
                                icon={faCirclePlus}
                              />
                              <span className="underline underline-offset-2">
                                Maitre nageur
                              </span>
                            </div>
                            <div className="flex  ml-12 text-sky-700 ">
                              <FontAwesomeIcon
                                className="mr-3"
                                size="lg"
                                icon={faCirclePlus}
                              />
                              <span className="underline underline-offset-2">
                                Standardiste
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="w-2/4 flex h-full flex-col ">
                          <div className="flex flex-col mb-4">
                            <span className="text-sm mb-2">Restaurant</span>
                            <div className="flex ml-12 mb-2  text-sky-700 ">
                              <FontAwesomeIcon
                                className="mr-3"
                                size="lg"
                                icon={faCirclePlus}
                              />
                              <span className="underline underline-offset-2">
                                Salle
                              </span>
                            </div>
                            <div className="flex  ml-12 mb-2 text-sky-700 ">
                              <FontAwesomeIcon
                                className="mr-3"
                                size="lg"
                                icon={faCirclePlus}
                              />
                              <span className="underline underline-offset-2">
                                Cuisine
                              </span>
                            </div>
                            <div className="flex  ml-12 text-sky-700 ">
                              <FontAwesomeIcon
                                className="mr-3"
                                size="lg"
                                icon={faCirclePlus}
                              />
                              <span className="underline underline-offset-2">
                                Bar
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col mb-4">
                            <span className="text-sm mb-2">Housekeeping</span>
                            <div className="flex ml-12 mb-2 text-sky-700 ">
                              <FontAwesomeIcon
                                className="mr-3"
                                size="lg"
                                icon={faCirclePlus}
                              />
                              <span className="underline underline-offset-2">
                                Femme de chambre
                              </span>
                            </div>
                            <div className="flex  ml-12 text-sky-700 ">
                              <FontAwesomeIcon
                                className="mr-3"
                                size="lg"
                                icon={faCirclePlus}
                              />
                              <span className=" underline underline-offset-2">
                                Technique
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col mb-4">
                            <span className="text-sm mb-2">Direction</span>
                            <div className="flex ml-12 mb-2 text-sky-700 ">
                              <FontAwesomeIcon
                                className="mr-3"
                                size="lg"
                                icon={faCirclePlus}
                              />
                              <span className="underline underline-offset-2">
                                Directeur
                              </span>
                            </div>
                            <div className="flex  ml-12 text-sky-700 ">
                              <FontAwesomeIcon
                                className="mr-3"
                                size="lg"
                                icon={faCirclePlus}
                              />
                              <span className="underline underline-offset-2">
                                Directeur adjoint
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-2/4 flex flex-col">
                    <div className="w-full border rounded h-96 px-6 py-3 mb-4 ">
                      <div className="w-full flex h-full flex-col overflow-y-auto  ">
                        <div className="w-full bg-green-100 mb-1 px-2 py-1 rounded flex items-center justify-between">
                          <span className="underline text-xs font-normal text-gray-500 underline-offset-2">
                            Voiturier
                          </span>
                          <div className="flex items-center text-sky-700 ">
                            <FontAwesomeIcon
                              className="mr-2 "
                              icon={faPenToSquare}
                            />
                            <FontAwesomeIcon icon={faTrashCan} />
                          </div>
                        </div>
                        <div className="w-full bg-green-100 mb-1 px-2 py-1 rounded flex items-center justify-between">
                          <span className="underline text-xs font-normal text-gray-500 underline-offset-2">
                            Voiturier
                          </span>
                          <div className="flex items-center text-sky-700 ">
                            <FontAwesomeIcon
                              className="mr-2 "
                              icon={faPenToSquare}
                            />
                            <FontAwesomeIcon icon={faTrashCan} />
                          </div>
                        </div>
                        <div className="w-full bg-green-100 mb-1 px-2 py-1 rounded flex items-center justify-between">
                          <span className="underline text-xs font-normal text-gray-500 underline-offset-2">
                            Voiturier
                          </span>
                          <div className="flex items-center text-sky-700">
                            <FontAwesomeIcon
                              className="mr-2 "
                              icon={faPenToSquare}
                            />
                            <FontAwesomeIcon icon={faTrashCan} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="text-white text-sm font-bold bg-sky-700 rounded-lg py-2 mb-3">
                      Valider
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
