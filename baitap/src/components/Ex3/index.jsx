import React from "react";
import { useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Circles } from "react-loader-spinner";

const Ex3 = () => {
  const [data, setData] = useState({});
  const [valueInput, setValueInput] = useState("");
  const [shrtco, setShrtco] = useState(false);
  const [qr, setQr] = useState(false);
  const [shiny, setShiny] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const SubmitForm = (e) => {
    e.preventDefault();
    shrtcodeAPI(valueInput);
  };

  // api
  const shrtcodeAPI = async (URL) => {
    try {
      setLoading(true);
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${URL}`);
      const data = await res.json();
      setData(data.result);
      alert("Đã thành công");
      setLoading(false);
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <div className="main">
      <h1>
        The <span> privacy-friendly</span> URL Shortener
      </h1>
      <div className="content">
        <h2>Link Shortener</h2>
        <form onSubmit={SubmitForm}>
          Enter a Link :
          <input
            type="text"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
          <button>
            {isLoading ? (
              <Circles color="black" height={18} width={18} />
            ) : (
              "Enter"
            )}
          </button>
        </form>
        <div className="short-domain">
          <span>Short domain :</span>
          <button onClick={() => setShrtco(!shrtco)}>shrtco.de</button>
          <button onClick={() => setQr(!qr)}>9pr.de</button>
          <button onClick={() => setShiny(!shiny)}>shiny.link</button>
        </div>
      </div>
      <h2>Link generated!</h2>
      <div className="result">
        {shrtco && <p>{data.full_share_link}</p>}
        {qr && <p>{data.full_short_link2}</p>}
        {shiny && <p>{data.short_link3}</p>}
      </div>
    </div>
  );
};

export default Ex3;
