import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
          Find your land from millions of acres
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Search Locations' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Composites</button>
            <button>Cheapland</button>
            <button>Homesteads</button>
            <button>Unrestricted</button>
          </div>
        </div>
        <div className="right">
       
        </div>
      </div>
    </div>
  );
}

export default Featured;
