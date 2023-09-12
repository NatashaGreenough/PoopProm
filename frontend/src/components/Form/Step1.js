// Step1.js
import React from "react";

export default function Step1({
  formData,
  handleChange,
  toggleToiletTypeStatus,
}) {
  return (
    <div className="Toilet-info-container">
      <div>
        <label>Toilet Name</label>
        <input
          type="text"
          name="toiletName"
          value={formData.toiletName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="info-photo">
        <h5>Photo (optional)</h5>

        {formData.photo !== "" ? (
          <div className="img-box">
            <img src={formData.photo} alt="inserted img" />
            <button
              className="close"
              // onClick={() => setFormData({ ...formData, photo: "" })}
            >
              &times;
            </button>
          </div>
        ) : (
          <input
            className="photo-input"
            type="file"
            multiple
            accept="image/*"
            // onChange={onImageChange}
          />
        )}
      </div>
      <div>
        <label>Feature</label>
        <div className="select-box">
          {formData.toiletTypes.map((type) => (
            <div
              key={type.id}
              className={`select ${type.status ? "get-choose" : ""}`}
            >
              <input
                type="checkbox"
                name={`toiletTypes-${type.id}`}
                checked={type.status}
                onChange={() => toggleToiletTypeStatus(type.id)}
              />
              <label>{type.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
