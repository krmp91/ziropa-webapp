import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import DeleteProducts from "./DeleteProducts";

//Kasper

export default function Products() {
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
    <div>
      {products.length === 0 ? (
        <p>No product found!</p>
      ) : (
        products.map(
          ({ id, title, description, price, imageUrl, createdAt }) => (
            <Box
              sx={{
                display: "flex",
                width: "300px",
                m: 0,
                mt: 2,
                p: 2,
                pb: 3,
                backgroundColor: "hsl(0, 0%, 0%, 0.40)",
                borderRadius: "6px",
              }}
              key={id}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignSelf: "center",
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

                  <Typography
                    variant="p"
                    sx={{ fontSize: 14, mb: 2, color: "whitesmoke" }}
                  >
                    Produkt oprettet: {createdAt.toDate().toDateString()} <br />
                  </Typography>
                  <DeleteProducts id={id} imageUrl={imageUrl} />
                </Box>
              </div>
            </Box>
          )
        )
      )}
    </div>
  );
}
