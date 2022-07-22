import React from "react";
import CardMedia from "@mui/material/CardMedia";

interface ImageData {
    url: string,
    name?: string
}

export default function ImageItem({ name, url }:ImageData) {
  return (
    <CardMedia
      component="img"
      height="194"
      image={url}
      alt={name}
    />
  );
}

ImageItem.defaultProps = {
  name: "",
};
