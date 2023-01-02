import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebase";
import { toast } from "react-toastify";
import { Button, TextField, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";

//Kasper

export default function AddRecipe() {
  const [formData, setFormData] = useState({
    title: "",
    comment: "",
    recipe: "",
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
    if (
      !formData.title ||
      !formData.comment ||
      !formData.recipe ||
      !formData.description ||
      !formData.image
    ) {
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
          comment: "",
          recipe: "",
          description: "",
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Articles");
          addDoc(articleRef, {
            title: formData.title,
            comment: formData.comment,
            recipe: formData.recipe,
            description: formData.description,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              toast("Product added successfully", { type: "success" });
              setProgress(0);
            })
            .catch((error) => {
              toast("Error adding product", { type: "error" });
              console.log(error);
            });
        });
      }
    );
  };

  return (
    <Container
      sx={{
        maxWidth: "40vh",
        p: 1,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          p: 2,
        }}
      >
        Opret produkt
      </Typography>
      <Box
        Container
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
        }}
      >
        {/*title on drink*/}
        <Box sx={{ py: 1 }}>
          <TextField
            sx={{ minWidth: "100%" }}
            id="outlined-textarea"
            label="Title til opskrift"
            name="title"
            multiline
            defaultValue="Normal"
            value={formData.title}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => handleChange(e)}
          />
        </Box>
        {/*comment to title*/}
        <Box sx={{ py: 1 }}>
          <TextField
            sx={{ minWidth: "100%" }}
            id="outlined-textarea"
            label="Kommentar til opskrift"
            name="comment"
            multiline
            defaultValue="Normal"
            value={formData.comment}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => handleChange(e)}
          />
        </Box>
        {/*recipe*/}
        <Box sx={{ py: 1 }}>
          <TextField
            sx={{ minWidth: "100%" }}
            id="outlined-textarea"
            label="Opskrift"
            name="recipe"
            multiline
            defaultValue="Normal"
            rows={4}
            value={formData.recipe}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => handleChange(e)}
          />
        </Box>
        {/*description*/}
        <Box sx={{ py: 1 }}>
          <TextField
            sx={{ minWidth: "100%" }}
            id="outlined-textarea"
            label="Fremgangsmetode"
            name="description"
            multiline
            defaultValue="Normal"
            rows={4}
            value={formData.description}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => handleChange(e)}
          />
        </Box>

        {/* image */}
        <Box sx={{ py: 1 }}>
          <TextField
            sx={{ minWidth: "100%" }}
            label="Indsæt billede"
            type="file"
            name="image"
            accept="image/*"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => handleImageChange(e)}
          />
        </Box>
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
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{
            border: "var(--border)",
            color: "var(--addBtnColor)",
            backgroundColor: "var(--addBtnBGColor)",
            marginTop: 1,
          }}
          onClick={handleCreateProducts}
        >
          Tilføj Produkt
        </Button>
      </Box>
    </Container>
  );
}
