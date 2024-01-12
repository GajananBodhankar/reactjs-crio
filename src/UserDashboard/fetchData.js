// async function fetchApiData(value) {
//   let res = await fetch(`https://reqres.in/api/users/${value}`);
//   try {
//     if (res) {
//       let data = await res.json();
//       return data;
//     }
//     return null;
//   } catch (e) {
//     return e;
//   }
// }

import axios from "axios";
async function fetchApiData(value) {
  try {
    let res = await axios.get(`https://reqres.in/api/users/${value}`);
    if (res.data) {
      return res.data;
    }
    return null;
  } catch (e) {
    return e;
  }
}

export { fetchApiData };
