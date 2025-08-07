import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
const okUrl = "http://localhost:3000/photos?_page=1&_limit=100";
const notFoundErrorUrl = "https://httpstat.us/404";
const forbiddenErrorUrl = "https://httpstat.us/403";
const serverErrorUrl = "https://httpstat.us/500";

function PhotoList() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  function userFriendlyError(error) {
    console.log("api to log raw error", error);
    return "there was an error loading the photos";
  }

  useEffect(() => {
    setLoading(true);

    fetch(notFoundErrorUrl)
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        setError(null);
        setPhotos(data);
        setLoading(false);
      })
      .catch((error) => {
        const userError = userFriendlyError(error);
        setError(userError);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <p>{error.statusText}</p>;
  } else if (loading) {
    return <div>loading...</div>;
  } else {
    return (
      <div>
        {photos.map((photo) => {
          return (
            <ul key={photo.id}>
              <li>
                <img src={photo.thumbnailUrl} alt={photo.title} />
                <h3>{photo.title}</h3>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<PhotoList />);
