import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

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
        <Typography>No products found!</Typography>
      ) : (
        products.map((id, title, description, imageUrl, createdAt) => (
          <Box key={id}>
            div
            <Box>
              <Box>
                <img
                  src={imageUrl}
                  alt="title"
                  sx={{ height: "180", width: "180" }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "var(--H2size)",
                    textDecoration: "bold",
                    pt: 1,
                    color: "whitesmoke",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="p"
                  sx={{ fontSize: 14, mb: 2, color: "whitesmoke" }}
                >
                  Produkt oprettet: {createdAt.toDate().toString()} <br />
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: 15,
                    pt: 2,
                    pb: "22px",
                    color: "whitesmoke",
                  }}
                >
                  {description}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))
      )}
    </div>
  );
}
