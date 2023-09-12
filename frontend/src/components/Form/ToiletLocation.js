import React from "react";
import { UilAngleRight } from "@iconscout/react-unicons";
import { UilMapMarkerAlt } from "@iconscout/react-unicons";

export default function ToiletLocation({ formData, setFormData }) {
  const getHandler = (name) => {
    return (event) => {
      setFormData({ ...formData, [name]: event.target.value });
    };
  };

  return (
    <div className="Toilet-info-container">
      <div>
        <label>Address</label>
        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={getHandler("address")}
          required
        />
      </div>

      <div>
        <label>District / County</label>
        <input
          type="text"
          placeholder="District / County"
          value={formData.district}
          onChange={getHandler("district")}
          required
        />
      </div>
      <div>
        <label>Province</label>
        <input
          type="text"
          placeholder="Province"
          value={formData.province}
          onChange={getHandler("province")}
          required
        />
      </div>
      <div>
        <label>Zip code</label>
        <input
          type="text"
          placeholder="Zip code"
          value={formData.zipCode}
          onChange={getHandler("zipCode")}
          required
        />
      </div>
      <div className="btn-container">
        <button className="map-btn">
          <UilMapMarkerAlt size="24" color="#62C2C0" />
          <span className="btn-text">Choose from the map</span>
          <UilAngleRight size="30" color="#62C2C0" className="end" />
        </button>
      </div>
    </div>
  );
}
