import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const DataInd = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <br></br>
          <div className="mt-5">
            <h2>Laporan kasus COVID-19 di Indonesia</h2>
          </div>
          <DataAPi />
        </div>
      </div>
    </div>
  );
};

const DataAPi = () => {
  const [corona, setCorona] = useState([]);

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api/countries/idn/confirmed")
      .then((result) => {
        console.log(result.data);
        setCorona(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const coronaItem = corona.map((item) => {
    let number = item.confirmed;
    let reverse = number.toString().split("").reverse().join(""),
      thousand = reverse.match(/\d{1,3}/g);
    thousand = thousand.join(".").split("").reverse().join("");
    return (
      <div className="col-md-4 my-5">
        <div className="card text-white bg-dark mb-3">
          <div className="card-header">Total kasus</div>
          <div className="card-body">
            <h5 className="card-title">{thousand}</h5>
          </div>
        </div>
      </div>
    );
  });

  const coronaItem1 = corona.map((item) => {
    let number = item.deaths;
    let reverse = number.toString().split("").reverse().join(""),
      thousand = reverse.match(/\d{1,3}/g);
    thousand = thousand.join(".").split("").reverse().join("");
    return (
      <div className="col-md-4 my-5">
        <div className="card text-white bg-dark mb-3">
          <div className="card-header">Meninggal</div>
          <div className="card-body">
            <h5 className="card-title">{thousand}</h5>
          </div>
        </div>
      </div>
    );
  });

  const coronaItem2 = corona.map((item) => {
    let number = item.recovered;
    let reverse = number.toString().split("").reverse().join(""),
      thousand = reverse.match(/\d{1,3}/g);
    thousand = thousand.join(".").split("").reverse().join("");
    return (
      <div className="col-md-4 my-5">
        <div className="card text-white bg-dark mb-3">
          <div className="card-header">Sembuh</div>
          <div className="card-body">
            <h5 className="card-title">{thousand}</h5>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="row">
      {coronaItem}
      {coronaItem1}
      {coronaItem2}
    </div>
  );
};

export default DataInd;
