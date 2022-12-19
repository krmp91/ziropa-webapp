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
        <p>No product found!</p>
      ) : (
        products.map(({ id, title, description, imageUrl, createdAt }) => (
          <Box
            sx={{
              m: 1,
              mt: 2,
              p: 1,
              pb: 3,
              backgroundColor: "hsl(0, 0%, 0%, 0.40)",
              borderRadius: "26px",

              maxWidth: "85vw",
            }}
            key={id}
          >
            <div>
              <div
                style={{
                  ml: "auto",
                  mr: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={imageUrl}
                  alt="title"
                  style={{ height: 180, paddingTop: "15px" }}
                />
              </div>
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
                  sx={{
                    fontSize: 15,
                    pt: 2,
                    pb: "22px",
                    color: "whitesmoke",
                  }}
                >
                  {description}
                </Typography>
                <div className="typoGroup"></div>

                <Typography
                  variant="p"
                  sx={{ fontSize: 14, mb: 2, color: "whitesmoke" }}
                >
                  Produkt oprettet: {createdAt.toDate().toDateString()} <br />
                </Typography>
              </Box>
            </div>
          </Box>
        ))
      )}
    </div>
  );
}
