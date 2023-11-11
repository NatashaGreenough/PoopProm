// import React from "react";

// export default function Step4({ formData, handleChange }) {
//   return (
//     <div className="Toilet-info-container">
//       <div className="map-box">map</div>
//       <div>
//         <label>Long</label>
//         <input
//           type="text"
//           name="longitude"
//           disabled
//           value={formData.longitude}
//         />
//       </div>
//       <div>
//         <label>Lang</label>
//         <input type="text" name="latitude" disabled value={formData.latitude} />
//       </div>
//     </div>
//   );
// }

/* global nostra */

import React, { useEffect, useState } from "react";

export default function Step4({ formData, handleChange }) {
  const [latitude, setLatitude] = useState(formData.latitude || "");
  const [longitude, setLongitude] = useState(formData.longitude || "");
  let pointLayer;

  useEffect(() => {
    // Check if the script is already loaded
    if (!window.nostra) {
      console.log("Map already load");
      const script = document.createElement("script");
      script.src =
        "//api.nostramap.com/nostraapi/v2.0?key=GDdAoW1Vs(48(1ni3MvBQyXGF(HgoA3Xy4LhYd1tJ1N)BwfaEO0k)lySSnEV9(gn2wfgYAToSXKYfCpy2DC9O60=====2";
      script.async = true;
      script.onload = initializeMap;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } else {
      // Nostra API is already loaded, directly initialize the map
      console.log("Starrt new load");
      initializeMap(); // Pass initial values here
    }
  },);

  const initializeMap = () => {
    // const mapContainer = document.getElementById("map");

    // console.log(formData);
    // const key_word = formData.address + " " + formData.district + " " + formData.province + " " + formData.zipCode
    // console.log(key_word);

    searchAddressByKeyword();

    // nostra.onready = function () {
    //   map = new nostra.maps.Map("map", {
    //     id: "mapTest",
    //     logo: true,
    //     scalebar: false,
    //     basemap: "streetmap",
    //     slider: true,
    //     level: 15,
    //     lat: 13.722944,
    //     lon: 100.530449,
    //     country: "TH",
    //   });

    //   pointLayer = new nostra.maps.layers.GraphicsLayer(map, {
    //     id: "pointLayer",
    //     mouseOver: false,
    //   });
    //   map.addLayer(pointLayer);

    //   map.events.click = function (e) {
    //     handleMapClick(e);
    //   };
    // };
  };

  const searchAddressByKeyword = () => {
    const keyword = formData.address + " " + formData.district + " " + formData.province + " " + formData.zipCode;
    const numReturn = 1;
  
    fetch(`http://api.nostramap.com/Service/V2/Location/addressSearch?key=GDdAoW1Vs(48(1ni3MvBQyXGF(HgoA3Xy4LhYd1tJ1N)BwfaEO0k)lySSnEV9(gn2wfgYAToSXKYfCpy2DC9O60=====2&keyword=${keyword}&numReturn=${numReturn}`)
      .then((response) => response.json())
      .then((data) => {
        // Handle the address search results
        console.log("Address search results:", data);
  
        // Process the results as needed and update your component state
        // Example: Update state with the first result
        if (data.results && data.results.length > 0) {
          const firstResult = data.results[0];
          console.log("First result:", firstResult);
          const locationID = firstResult.LocationID;
          console.log(locationID)

          if (locationID) {
            getLocationDetails(locationID);
          } else {
            console.error("Location ID is undefined");
          }
  
          // Update state or perform any other actions based on the result
        }
      })
      .catch((error) => {
        console.error("Address search error:", error);
      });
  };

  const getLocationDetails = (locationID) => {
    console.log(locationID)

    const apiUrl = "http://api.nostramap.com/Service/V2/Location/addressSearchDetail?key=GDdAoW1Vs(48(1ni3MvBQyXGF(HgoA3Xy4LhYd1tJ1N)BwfaEO0k)lySSnEV9(gn2wfgYAToSXKYfCpy2DC9O60=====2&locationID=" + locationID + '&language=${"L"}'
    
    console.log(apiUrl)

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Handle the location details
        console.log("Location details1:", data);

        // Process the details as needed and update your component state
        // Example: Update state with the details
        if (data.results) {
          const locationDetails = data.results;
          console.log("Location details2:", locationDetails);
          const latLonString = locationDetails.LAT_LON;
          console.log("Location latitude longitude:", locationDetails.LAT_LON);

          if (latLonString) {
            const [latitudeStart, longitudeStart] = latLonString.split(',').map(coord => parseFloat(coord.trim()));
            console.log(latitudeStart, longitudeStart)
            openeMap(latitudeStart, longitudeStart);
            
          }
          
        }
      })
      .catch((error) => {
        console.error("Location details error:", error);
      });

  const openeMap = (latitudeStart, longitudeStart) => {
    let map;
    console.log("map open")

    nostra.onready = function () {
      map = new nostra.maps.Map("map", {
        id: "mapTest",
        logo: false,
        scalebar: false,
        basemap: "streetmap",
        slider: true,
        level: 18,
        lat: latitudeStart,
        lon: longitudeStart,
        country: "TH",
      });


      pointLayer = new nostra.maps.layers.GraphicsLayer(map, {
        id: "pointLayer",
        mouseOver: false,
      });
      map.addLayer(pointLayer);

      setLatitude(latitudeStart.toFixed(8));
      setLongitude(longitudeStart.toFixed(8));

      handleChange({
        target: { name: "latitude", value: latitudeStart.toFixed(8) },
      });
      handleChange({
        target: { name: "longitude", value: longitudeStart.toFixed(8) },
      });

      console.log("Latitude change", latitude);
      console.log("Longitude change", longitude);

      map.events.click = function (e) {
        handleMapClick(e);
      };
    };
  };

  const handleMapClick = (e) => {
    const coordinates = e.mapPoint;
    const clickedLatitude = coordinates.y;
    const clickedLongitude = coordinates.x;

    // console.log(clickedLatitude, clickedLongitude);

    pointLayer.clear();

    setLatitude(clickedLatitude.toFixed(8));
    setLongitude(clickedLongitude.toFixed(8));

    console.log(clickedLatitude.toFixed(8), clickedLongitude.toFixed(8));
    // console.log(latitude, longitude);

    handleChange({
      target: { name: "latitude", value: clickedLatitude.toFixed(8) },
    });
    handleChange({
      target: { name: "longitude", value: clickedLongitude.toFixed(8) },
    });

    addMarker(clickedLatitude, clickedLongitude);
  };
  
  const addMarker = (latitude, longitude) => {
    try {
      const pointMarker = new nostra.maps.symbols.Marker({
        url: "",
        width: 60,
        height: 60,
        onClick: function () {
          console.log("Marker clicked!");
        },
      });

      pointLayer.addMarker(latitude, longitude, pointMarker);
    } catch (error) {
      console.error("Error adding marker:", error);
    }
  };

  };

  return (
    <div className="Toilet-info-container">
      <div id="map" style={{ height: "600px", width: "600px" }}></div>
      <div></div>
      <div>
        <label>Latitude</label>
        <input
          type="text"
          name="latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <label>Longitude</label>
        <input
          type="text"
          name="longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
      </div>
    </div>
  );
}
