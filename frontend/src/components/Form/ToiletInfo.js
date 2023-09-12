import React from "react";
import { useState, useEffect } from "react";

export default function ToiletInfo({
  formData,
  setFormData,
  choose,
  setChoose,
}) {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    const storedFileURL = localStorage.getItem("fileURL");
    if (storedFileURL) {
      setFile(storedFileURL);
    }
  }, []);

  function handleToggleItems(id) {
    setChoose((choose) =>
      choose.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  }

  useEffect(() => {
    if (images.length < 1) return;
    const newImageURLs = [];
    images.forEach((image) => newImageURLs.push(URL.createObjectURL(image)));
    setImageURLs(newImageURLs);
    console.log(newImageURLs);
    setFormData({ ...formData, photo: newImageURLs });
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  return (
    <>
      <div>
        <label for="toilet-name">Toilet’s name</label>
        <input
          id="toilet-name"
          type="text"
          placeholder="Toilet’s name"
          value={formData.toiletName}
          onChange={(e) => {
            setFormData({ ...formData, toiletName: e.target.value });
          }}
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
              onClick={() => setFormData({ ...formData, photo: "" })}
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
            onChange={onImageChange}
          />
        )}
      </div>
      <div>
        <label>Feature</label>
        <div className="select-box">
          {choose.map((choose) => (
            <AccordionItem
              choose={choose}
              onToggleItem={handleToggleItems}
              key={choose.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function AccordionItem({ choose, onToggleItem }) {
  return (
    <div className={`select ${choose.status ? "get-choose" : ""}`}>
      <input
        type="checkbox"
        value={choose.status}
        onChange={() => onToggleItem(choose.id)}
      />
      <span>{choose.name}</span>
    </div>
  );
}
