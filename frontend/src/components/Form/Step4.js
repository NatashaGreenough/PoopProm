import React from "react";

export default function Step4({ formData, handleChange }) {
  return (
    <div className="Toilet-info-container">
      <div className="map-box">map</div>
      <div>
        <label>Long</label>
        <input
          type="text"
          name="longitude"
          disabled
          value={formData.longitude}
        />
      </div>
      <div>
        <label>Lang</label>
        <input type="text" name="latitude" disabled value={formData.latitude} />
      </div>
    </div>
  );
}
