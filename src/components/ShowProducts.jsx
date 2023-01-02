import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./ShowProducts.css";

//Kasper

export default function ShowProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const productRef = collection(db, "Products");
    const q = query(productRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(products);
      console.log(products);
    });
  }, []);

  return (
    <div className="main-section">
      {products.length === 0 ? (
        <p>No product found!</p>
      ) : (
        products.map(({ id, title, description, price, imageUrl }) => (
          <Box
            sx={{
              display: "flex",
              m: 2,
              mt: 2,
              p: 3,
              pb: 3,
              backgroundColor: "rgba(171, 118, 2, 0.5)",
              borderRadius: "6px",
            }}
            key={id}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={imageUrl}
                  alt="title"
                  style={{
                    maxWidth: "240px",
                    maxHeight: "240px",
                    paddingTop: "15px",
                  }}
                />
              </div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textSizeAdjust: "auto",
                }}
              >
                <Typography
                  sx={{
                    display: "inline-block",
                    width: "280px",
                    fontSize: 24,
                    textDecoration: "bold",
                    pt: 1,
                    color: "whitesmoke",
                  }}
                >
                  {title}
                </Typography>

                <Typography
                  sx={{
                    textSizeAdjust: "auto",
                    width: "280px",
                    pt: 2,
                    pb: "22px",
                    color: "whitesmoke",
                  }}
                >
                  {description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    width: "100%",
                    fontSize: 14,
                    mb: 2,
                    color: "whitesmoke",
                  }}
                >
                  {price} DKK <br />
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    onClick={() => alert("Tak for handlen")}
                    sx={{
                      border: "var(--addBtnBorder)",
                      backgroundColor: "rgba(95, 71, 49, 0.918)",
                      color: "white",
                      width: "130px",
                    }}
                  >
                    Køb
                  </Button>
                </Box>
              </Box>
            </div>
          </Box>
        ))
      )}
    </div>
  );
}
