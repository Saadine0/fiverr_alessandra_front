import React, { Component } from "react";
import ClientHotelForm from "./ClientForm/ClientHotelForm";

export default class ClientHotel extends Component {
  render() {
    return (
      <div className="flex flex-col px-20  mt-20   ml-16">
        <h4 className="rounded-t text-white bg-blue-800 px-12  py-3">
          Client hotel - Minibar
        </h4>
        <div className="bg-white  pt-12 pb-2 px-16">
          <hr className="border  border-gray-300" />
        </div>
        <ClientHotelForm />
      </div>
    );
  }
}
