// function fetchedData() {
//   return new Promise((resolve, reject) => {
//     console.log("data is Loading...");
//     setTimeout(() => {
//       resolve("data Fetched");
//     }, 1000);
//   });
// }

// fetchedData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const promise = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("promise resolve");
  } else {
    reject("promise reject");
  }
});

promise
  .then((result) => console.log(result, "resolv"))
  .catch((error) => console.log(error, "reject"));
