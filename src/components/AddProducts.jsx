import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebase";
import { toast } from "react-toastify";
import { Button, TextField, Typography, Container } from "@mui/material";
import "./AddProducts.css";
import { Box } from "@mui/system";

export default function AddProducts() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",

    image: "",
    createdAt: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleCreateProducts = () => {
    if (!formData.title || !formData.description || !formData.image) {
      alert("Please fill all the fields");
      return;
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );
    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },

      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          title: "",
          description: "",

          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const titleRef = collection(db, "Produckts");
          addDoc(titleRef, {
            title: formData.title,
            description: formData.description,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              toast("Group created successfully", { type: "success" });
              setProgress(0);
            })
            .catch((error) => {
              toast("Error creating group", { type: "error" });
              console.log(error);
            });
        });
      }
    );
  };

  return (
    <div className="form">
      <h2>Opret gruppe</h2>
      <label htmlFor="">Gruppens Navn: </label>
      <input
        className="form-control"
        type="text"
        name="title"
        value={formData.title}
        onChange={(e) => handleChange(e)}
      />

      {/*description*/}
      <label htmlFor="">Beskrivelse: </label>
      <textarea
        className="form-control"
        id="form-control"
        name="description"
        value={formData.description}
        cols=""
        rows=""
        onChange={(e) => handleChange(e)}
      />

      {/* number of peoples in the group */}
      <TextField
        className="form-control"
        type="number"
        label="Maks antal medlemmer:"
        name="numberOfPeople"
        value={formData.numberOfPeople}
        InputLabelProps={{
          shrink: true,
        }}
        max="50"
        min="1"
        onChange={(e) => handleChange(e)}
      />

      {/* image */}
      <label htmlFor=""> Billede </label>
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={(e) => handleImageChange(e)}
      />

      {progress === 0 ? null : (
        <div className="progress">
          <div
            className="progess-bar progress-bar-striped mt-2"
            style={{ width: `${progress}%` }}
          >
            {`uploading image ${progress}%`}
          </div>
        </div>
      )}
      <Button
        sx={{
          border: "var(--border)",
          color: "var(--addBtnColor)",
          backgroundColor: "var(--addBtnBGColor)",
          marginTop: 4,
        }}
        className="form-control-btn"
        onClick={handleCreateProducts}
      >
        Tilføj Gruppe
      </Button>
    </div>
  );
}
