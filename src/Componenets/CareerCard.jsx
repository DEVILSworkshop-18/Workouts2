import React from "react";

const CareerCard = ({element, index}) => {
  return (
    <div key={element.id} style={{display:"inline-block"}}>
      <div className="card m-3" style={{width: "18rem"}}>
        <img src={element.image} className="card-img-top" style={{ width: "18rem", height: "200px" }}/>
        <div className="card-body">
          <h5 className="card-title">{element.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><span><i className="fa-solid fa-indian-rupee-sign"></i></span> {element.t1}</li>
          <li className="list-group-item"><span><i className="fa-solid fa-briefcase"></i></span> {element.t2}</li>
          <li className="list-group-item"><span><i className="fa-solid fa-users"></i></span> {element.t3}</li>
        </ul>
        <div className="card-body">
          <button className="btn btn-primary" style={{margin:"2px"}}>Know More</button>
          <button className="btn btn-primary" style={{margin:"2px"}}>
            Syllabus
            <span>
              <i className="fa-solid fa-download"></i>
            </span>
          </button>
        </div>
      </div>
      </div>
  );
};

export default CareerCard;
