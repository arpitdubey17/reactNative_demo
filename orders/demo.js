import axios from 'axios';

export const myAxiosGetRequest = async () => {
  const res = await axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts',
  });
  return res;
}

// export const myFetchPostRequest = async data => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });
//   const resJson = await response.json();
//   return resJson;
// };

// export const MyFetchApiRequest = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const resJson = await response.json();
//   return resJson;
// };

