import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID 65KFIgcZMjnG9zGD8eBX0rbA331FuebP8EFePuWsVr8`, // change with your Unsplash API key
    },
    params: {
      query: term,
    },
  });
  console.log(response.data.results);
  return response.data.results;
};

export default searchImages;
