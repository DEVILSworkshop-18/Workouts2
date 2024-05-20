import React from "react";
const Cards = ({ element, index }) => {
  return (
    <div
      key={element.id}
      style={{ display: "inline-block", width: "18rem", height: "395px" }}>
      <div className="card m-3 ">
        <div className="card h-100">
        <img
          src={element.image}
          className="card-img-top"
          style={{ width: "16rem", height: "200px" , maxWidth:"16rem"}}
        />
        </div>
        <div className="card-body">
          <h5 className="card-title" style={{ wordWrap: "break-word" }}>
            {element.title}
          </h5>
          <p className="card-text">{element.author}</p>
        </div>
        <div className="card-body">
          <p className="card-text">{element.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
