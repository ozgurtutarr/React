import React from "react";
import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import ImageList from "./components/ImageList";

const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      Search for Images
      <ImageList images={images} />
    </div>
  );
};

export default App;
