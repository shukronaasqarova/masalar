// promise

// topshiriq 1

// const urls = [
//     "https://jsonplaceholder.typicode.com/posts/1",
//     "https://jsonplaceholder.typicode.com/posts/2",
//     "https://jsonplaceholder.typicode.com/posts/3",
//   ];
  
//   function test1(url: string): Promise<void> {
//     console.log(`Fetching from URL: ${url}`);
//     return fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//             console.log("xatolik bor");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(`Result:`, data);
//       })
//       .catch((error) => {
//         console.log(`Error fetching from ${url}:`, error.message);
//       });
//   }
  
//   function test2(urls: string[]) {
//     let promise = Promise.resolve(); 
  
//     urls.forEach((url) => {
//       promise = promise.then(() => test1(url)); 
//     });
  
//     return promise; 
//   }

//   test2(urls);
  

// topshiriq 2

// const url1 = "https://jsonplaceholder.typicode.com/users";
// const url2 = "https://jsonplaceholder.typicode.com/posts";

// function fetchData(url: string): Promise<any> {
//   return fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         console.log("xatolik bor");
//         return null;
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       console.log(`Error fetching from ${url}:`, error.message);
//       return null;
//     });
// }

// Promise.all([fetchData(url1), fetchData(url2)])
//   .then((results) => {
//     console.log("Fetched data:");
//     console.log(results);
//   });


// topshiriq 3

// const url1 = "https://jsonplaceholder.typicode.com/photos";
// const url2 = "https://jsonplaceholder.typicode.com/todos";
// const url3 = "https://jsonplaceholder.typicode.com/comments";

// function test(url: string): Promise<any> {
//   return fetch(url)
//     .then((response) => (response.ok ? response.json() : null))
//     .catch(() => null);
// }

// Promise.race([test(url1), test(url2), test(url3)])
//   .then(result =>{
//         console.log(result);
// })

// Async/await

// topshiriq 1

// const urls = [
//     "https://jsonplaceholder.typicode.com/posts/1",
//     "https://jsonplaceholder.typicode.com/posts/2",
//     "https://jsonplaceholder.typicode.com/posts/3",
//   ];
  
//   async function fetchData(url: string) {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`xatolik bor ${response.status}`);
//       }
//       const data = await response.json();
//       console.log(`Result from ${url}:`, data);
//     } catch (error) {
//         console.log(error);
//     }
//   }
  
//   async function test(urls: string[]) {
//     for (const url of urls) {
//       await fetchData(url);
//     }
//   }
  
//   test(urls);
  
// topshiriq 2

// const url1 = "https://jsonplaceholder.typicode.com/users";
// const url2 = "https://jsonplaceholder.typicode.com/posts";

// async function fetchData(url: string) {
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error("xatolik bor");
//   }
//   return response.json();
// }

// async function fetchParallel() {
//   try {
//     const [users, posts] = await Promise.all([fetchData(url1), fetchData(url2)]);
//     console.log("Fetched data:", [users, posts]);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchParallel();

// 3-topshiq

// interface Photo {
//     id: number;
//     title: string;
//     url: string;
//   }
  
//   interface Todo {
//     id: number;
//     title: string;
//     completed: boolean;
//   }
  
//   interface Comment {
//     id: number;
//     name: string;
//     body: string;
//   }
  
//   const url1 = "https://jsonplaceholder.typicode.com/photos";
//   const url2 = "https://jsonplaceholder.typicode.com/todos";
//   const url3 = "https://jsonplaceholder.typicode.com/comments";
  
//   async function fetchData(url: string): Promise<any> {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("xatolik bor");
//     }
//     return response.json();
//   }
  
//   async function fetchFirstSuccess() {
//     const urls = [url1, url2, url3];
  
//     for (let i = 0; i < urls.length; i++) {
//       try {
//         const result = await fetchData(urls[i]);
//         console.log("First successful request result:", result);
//         return; 
//       } catch (error) {
//         console.log(error);
//       }
//     }
  
//     console.log("Barcha so‘rovlar xato bilan tugadi.");
//   }
  
//   fetchFirstSuccess();
  

// generic

// 1-topshiriq

// function wrapData<T>(data: T): { status: string; data: T } {
//     return { 
//       status: "success", 
//       data 
//     };
//   }
  
//   const wrapString = wrapData("Hello, world!");
//   console.log(wrapString);
  
//   const wrapNumber = wrapData(42);
//   console.log(wrapNumber);
  
//   const wrapObject = wrapData({ name: "Alice", age: 30 });
//   console.log(wrapObject);
  
// 2-topshiriq

// function test<T>(arr1: T[], arr2: T[]): T[] {
//     return arr1.filter(element => arr2.includes(element));
//   }
  
//   const numbers1 = [1, 2, 3, 4];
//   const numbers2 = [3, 4, 5, 6];
  
//   const commonNumbers = test(numbers1, numbers2);
//   console.log(commonNumbers);
  
//   const strings1 = ["apple", "banana", "cherry"];
//   const strings2 = ["banana", "cherry", "date"];
  
//   const commonStrings = test(strings1, strings2);
//   console.log(commonStrings);
  

