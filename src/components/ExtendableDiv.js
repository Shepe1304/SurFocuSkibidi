import React, { useState } from "react";
import "./ExtendableDiv.css";
import gif from "../assets/gifs/2.gif";

const ExtendableDiv = () => {
  const [brainrot, setBrainrot] = useState(false);

  return (
    <div className="extendableDiv">
      <button
        onClick={() => {
          setBrainrot(!brainrot);
        }}
      >
        HELP ME FOCUS!
      </button>
      <div className={`extendableDiv--content`}>
        <div
          className={`extendableDiv--text ${
            brainrot ? "extendableDiv--contract" : ""
          }`}
        >
          abc
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          reprehenderit voluptates, voluptas labore ducimus, natus odit est,
          expedita fugit ea ab voluptatum saepe incidunt dolores aliquam? Iste
          dignissimos provident quidem! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolores rem quasi deleniti at molestiae? Natus,
          repellendus tempore! Iusto quae nisi eos incidunt eum, autem harum
          eveniet, optio, cupiditate dolore et? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Ab perferendis enim eaque natus at
          delectus rerum voluptates numquam. Ab error vel iste aliquid odio
          saepe atque eum numquam, earum facilis. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quas reprehenderit corrupti voluptas
          tempore necessitatibus in perferendis architecto, dolorum eius
          aliquam, reiciendis eligendi maiores officiis assumenda laudantium
          rerum ipsam dignissimos. Nemo? */}
        </div>
        {brainrot ? (
          <div className="extendableDiv--brainrot">
            <img src={gif} alt="" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ExtendableDiv;
