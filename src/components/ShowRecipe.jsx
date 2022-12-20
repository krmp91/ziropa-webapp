import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./ShowProducts.css";

//Kasper

export default function DisplayRecipe() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  }, []);

  return (
    <div className="main-section">
      {articles.length === 0 ? (
        <p>No inspiration found!</p>
      ) : (
        articles.map(
          ({
            id,
            title,
            comment,
            recipe,
            description,
            imageUrl,
            createdAt,
          }) => (
            <Box
              sx={{
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
                    style={{ height: 246, paddingTop: "15px" }}
                  />
                </div>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      fontSize: "var(--H3size)",
                      textDecoration: "bold",
                      pt: 1,
                      color: "whitesmoke",
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: 20,
                      pt: 2,
                      pb: "22px",
                      color: "whitesmoke",
                    }}
                  >
                    {comment}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: 20,
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
                      fontSize: 20,
                      pt: 2,
                      pb: "22px",
                      color: "whitesmoke",
                    }}
                  >
                    {recipe}
                  </Typography>
                </Box>
              </div>
            </Box>
          )
        )
      )}
    </div>
  );
}
