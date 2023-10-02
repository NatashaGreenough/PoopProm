import toiletData from "./fake-data";
import "./search.css";
import React, { useState } from "react";

function Search() {
  const [selectedToiletTypes, setSelectedToiletTypes] = useState([]);
  const [selectedReviewStar, setSelectedReviewStar] = useState("");
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toiletTypes = [
    "Bidet spray",
    "Squat toilet",
    "Auto toilet",
    "Handicap toilet",
  ];

  const toggleToiletType = (type) => {
    setSelectedToiletTypes((prevSelectedTypes) =>
      prevSelectedTypes.includes(type)
        ? prevSelectedTypes.filter((t) => t !== type)
        : [...prevSelectedTypes, type]
    );
    // setShow((show) => !show);
  };

  const handleShow = (event) => {
    setShow((show) => !show);
  };

  const handleReviewStarChange = (event) => {
    setSelectedReviewStar(event.target.value);
    // setShow((show) => !show);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredToilets = toiletData.filter(
    (toilet) =>
      selectedToiletTypes.every((selectedType) =>
        toilet.toiletTypes.some(
          (type) => type.name === selectedType && type.status
        )
      ) &&
      (selectedReviewStar === "" ||
        toilet.reviewStar === parseInt(selectedReviewStar) ||
        toilet.reviewStar >= parseInt(selectedReviewStar)) &&
      (searchQuery === "" ||
        toilet.toiletName.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="main">
      <div className="search-bar">
        <div className="search-box">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            placeholder="Search"
          />
          <div>
            <button className="btn-search" onClick={handleShow}>
              <span>&#9776;</span>
            </button>
            <div className={show ? "extent-box" : "extent-box show"}>
              <ReviewStarSelect
                value={selectedReviewStar}
                onChange={handleReviewStarChange}
              />

              <ToiletTypeButtons
                selectedToiletTypes={selectedToiletTypes}
                toggleToiletType={toggleToiletType}
                toiletTypes={toiletTypes}
              />
            </div>
          </div>
        </div>
        <div className="main-box scrollable">
          {filteredToilets.map((toilet) => (
            <Detail
              key={toilet.id}
              name={toilet.toiletName}
              value={toilet.reviewStar}
              type={toilet.toiletTypes}
              address={toilet.address}
              district={toilet.district}
              province={toilet.province}
              zipCode={toilet.zipCode}
            />
          ))}
        </div>
      </div>
      <div class="box overlay"></div>
      <div className="map-side">map</div>
    </div>
  );
}

export default Search;

function Detail({ name, value, type, address, district, province, zipCode }) {
  const trueTypes = type.filter((toiletType) => toiletType.status);
  const fullAddress = `${address}, ${district}, ${province}, ${zipCode}`;
  return (
    <div className="name-box">
      <h3>{name}</h3>
      <div className="review-box">
        <span>{value}</span>
        <StarRating value={value} />
      </div>
      <p>{fullAddress}</p>
      <div className="feature-list">
        {console.log(trueTypes)}
        {trueTypes.map((toiletType) => (
          <span key={toiletType.id} className="feature">
            {toiletType.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function StarRating({ value }) {
  const stars = [];
  const filledStars = Math.round(value);
  for (let i = 0; i < 5; i++) {
    if (i < filledStars) {
      stars.push(
        <span key={i} className="star">
          &#9733;
        </span>
      );
    } else {
      stars.push(<span key={i}>&#9734;</span>);
    }
  }
  return <div className="star-rating">{stars}</div>;
}

function ReviewStarSelect({ value, onChange }) {
  return (
    <div>
      <select value={value} onChange={onChange}>
        <option value=""></option>
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </select>
    </div>
  );
}

function ToiletTypeButtons({
  selectedToiletTypes,
  toggleToiletType,
  toiletTypes,
}) {
  return (
    <div className="feature-btn-box">
      {toiletTypes.map((type) => {
        const words = type.split(" ");
        const firstWord = words[0];

        return (
          <button
            key={firstWord}
            onClick={() => toggleToiletType(type)}
            className={
              selectedToiletTypes.includes(type)
                ? "selected feature-btn"
                : "feature-btn"
            }
          >
            {firstWord}
          </button>
        );
      })}
    </div>
  );
}