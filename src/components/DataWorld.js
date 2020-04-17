import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const DataWorld = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="my-5">
            <h2>Laporan kasus COVID-19 di Dunia</h2>
          </div>
          <DataAPi />
        </div>
      </div>
    </div>
  );
};

const DataAPi = () => {
  return (
    <div className="row mb-5 d-flex justify-content-center">
      <img
        className="img-thumbnail"
        width="854px"
        height="480px"
        src={"https://covid19.mathdro.id/api/og"}
      />
    </div>
  );
};

export default DataWorld;
