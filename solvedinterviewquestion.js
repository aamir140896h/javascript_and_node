//?  Generator Function

// function* countUp() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const counter = countUp();
// console.log(counter.next()); // 1
// console.log(counter.next()); // 2
// console.log(counter.next()); // 3
// console.log(counter.next()); // true (no more values)

// ? Generator function using promise ////////////////////////////

// function fetchUserData() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ id: 1, name: "John Doe" }), 1000);
//   });
// }

// function fetchUserPosts(userId) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1000);
//   });
// }

// // Generator function to handle asynchronous flow
// function* getUserInfo() {
//   console.log("Fetching user data...");
//   const user = yield fetchUserData(); // Wait for user data
//   console.log("User:", user);

//   console.log("Fetching user posts...");
//   const posts = yield fetchUserPosts(user.id); // Wait for user's posts
//   console.log("Posts:", posts);
// }

// // Helper function to run the generator and handle Promises
// function runGenerator(generator) {
//   const iterator = generator();

//   function handle(iteratorResult) {
//     if (iteratorResult.done) return;

//     const { value } = iteratorResult;
//     if (value instanceof Promise) {
//       // If the yielded value is a Promise, wait for it to resolve and pass result back into generator
//       value.then((result) => handle(iterator.next(result)));
//     }
//   }

//   handle(iterator.next());
//   //   console.log(iterator.next(), "iterator");
// }

// // Run the generator
// runGenerator(getUserInfo);

// ? Closures

// function outerFunction() {
//   let outerVariable = "I am from outer function!";

//   function innerFunction() {
//     console.log(outerVariable); // Accessing outer variable
//   }

//   return innerFunction; // Return the inner function
// }

// const closureExample = outerFunction(); // outerFunction returns innerFunction
// closureExample(); // Logs: 'I am from outer function!'

//? HOC  /////////////////////////////////////////////////

// function UserComponent({ data }) {
//   return <div>User: {data.name}</div>;
// }

// function withLoading(Component) {
//   return function WithLoadingComponent({ isLoading, ...props }) {
//     if (isLoading) return <div>Loading...</div>;
//     return <Component {...props} />;
//   };
// }

// const UserWithLoading = withLoading(UserComponent);

// // Render the enhanced component
// function App() {
//   const user = { name: "John Doe" };
//   return <UserWithLoading isLoading={false} data={user} />;
// }

// App();

// ? object Methods

// ! 1. object.assign()

// copies one or more than object in single object
// const target = {};
// const obj1 = { a: 1 };
// const obj2 = { b: 2 };
// const obj3 = { c: 3 };
// const obj4 = { d: 4 };

// const assignFunc = Object.assign(target, obj1, obj2, obj3, obj4);
// console.log(assignFunc);

// ! 2. object.keys()

// // it returns an array of keys of an object
// const obj1 = { name: "Aamir", age: 28 };
// const deepObject = {
//   a: 1,
//   b: {
//     c: 2,
//   },
// };
// const keysFunc = Object.keys(deepObject);
// console.log(keysFunc);

// ! 3. object.values()

// it returns an array of values of an object
// const obj1 = { name: "Aamir", age: 28 };
// const valuesFunc = Object.values(obj1);
// console.log(valuesFunc);

// ! 4. object.entries()

// // it returns an arrays of key value pair of an object
// const obj1 = { name: "Aamir", age: 28 };
// const entriesFunc = Object.entries(obj1);
// console.log(entriesFunc);

// ! 4. object.fromEntries()

// // converts the array of key value pair into an object
// const arrayOfKeyValuePair = [
//   ["name", "Aamir"],
//   ["age", 28],
// ];
// const fromEntriesFunc = Object.fromEntries(arrayOfKeyValuePair);
// console.log(fromEntriesFunc);

// ! 4. object.freeze()

// freez() is immutable usnig this method u can not modify the object
// const obj1 = { name: "Aamir", age: 28 };
// Object.freeze(obj1);
// console.log(obj1);
// obj1.name = "Hussain";
// console.log(obj1);

// const user = {
//   name: "Alice",
//   details: {
//     city: "Wonderland",
//   },
// };

// Object.freeze(user);
// user.details.city = "New York"; // This change is allowed because `details` is not frozen

// console.log(user.details.city);

// ! 5. object.seal()

const subjects = [
  "Free Prize Worth Millions",
  "Ten Tips For A Carefree Lifestyle",
];

// const spamWord = ["Free", "Money", "Win", "Millions"];

// const detectSpamEmail = (subjects, spamWord) => {
//   const spamWords = new Set(spamWord.map((items) => items.toLowerCase()));
//   const result = [];
//   console.log(spamWords, "spamWords");
//   subjects.forEach((s) => {
//     const subject = s.toLowerCase().split(/\s+/);
//     let count = 0;
//     console.log(spamWords.has(subject), "subject");
//     subject.forEach((word) => {
//       console.log(word);
//       if (spamWords.has(word)) {
//         count++;
//       }
//     });
//     result.push(count >= 2 ? "spam" : "not_spam");
//   });
//   return result;
// };

// const result = detectSpamEmail(subjects, spamWord);
// console.log(result, "result");
