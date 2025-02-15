function fetchedData(callback) {
  console.log("Loding data ....");

  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 2000);
}

fetchedData(() => {
  console.log("📢 Processing data...");
});
