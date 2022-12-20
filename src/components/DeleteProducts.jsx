import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { db, storage } from "../firebase";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// Kasper
export default function DeleteProduct({ id, imageUrl }) {
  const productDelete = async () => {
    try {
      await deleteDoc(doc(db, "Products", id));
      toast("Product deleted successfully", { type: "success" });
      const storageRef = ref(storage, imageUrl);
      await deleteObject(storageRef);
    } catch (error) {
      toast("Error deleting product", { type: "error" });
    }
  };
  return (
    <div>
      <Button
        startIcon={<DeleteIcon />}
        sx={{
          border: "var(--DeleteBorder)",
          backgroundColor: "var(--Delete)",
          mt: 2,
          p: 1.2,
          color: "var(--DeleteColor)",
        }}
        onClick={productDelete}
      >
        Slet produkt
      </Button>
    </div>
  );
}
