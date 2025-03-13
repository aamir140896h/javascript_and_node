// async function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data, fetched");
//       resolve("data received");
//     }, 1000);
//   });
// }

// async function process() {
//   console.log("⏳ Fetching...");
//   const data = await fetchData();
//   console.log("📢 Processing:", data);
// }
// process();

async function fetchData() {
  try {
    const resolve = await Promise.resolve("promise resolved");
    console.log(resolve);
  } catch (error) {
    console.log(error);
  }
}
fetchData();
