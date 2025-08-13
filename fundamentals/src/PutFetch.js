var okUrl = "http://localhost:3000/photos/5001";
const notFoundErrorUrl = "http://localhost:3000/photos/10000000";

const data = {
  title: "try put",
};

fetch(notFoundErrorUrl, {
  method: "PUT",
  body: JSON.stringify(data),
  headers: new Headers({
    "Content-type": "application/json",
  }),
})
  .then((response) => {
    console.log(response);
    return response;
  })
  .then((response) => {
    if (!response.ok) throw new Error(response.statusText);
    return response;
  })
  .then((response) => response.json())
  .then((response) => console.log("sucess:", JSON.stringify(response)))
  .catch((error) => console.log("makosa", error));
