function fetchedData() {
  return new Promise((resolve, reject) => {
    console.log("data is Loading...");
    setTimeout(() => {
      resolve("data Fetched");
    }, 1000);
  });
}

fetchedData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
