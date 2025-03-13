// function fetchedData() {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }
// fetchedData();

async function fetchedData() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const response = await data.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

fetchedData();
