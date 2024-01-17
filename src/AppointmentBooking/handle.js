import axios from "axios";

function handleFirstName(e, setData, data) {
  setData({ ...data, firstName: e.target.value });
}
function handleLastName(e, setData, data) {
  setData({ ...data, lastName: e.target.value });
}
function handleEmail(e, setData, data) {
  setData({ ...data, email: e.target.value });
}
function handleDoctor(e, setData, data) {
  setData({ ...data, doctor: e.target.value });
}

function handleWhere(e, setData, data) {
  if (e.target.checked) {
    setData({ ...data, where: e.target.value });
  }
}
function handleTime(e, setData, data) {
  setData({ ...data, dateTime: e.target.value });
}
async function handleSubmit(e, data, setLoading, loading) {
  e.preventDefault();
  setLoading(true);
  let result = await postData(data, setLoading);
  return result;
}

async function postData(data, setLoading) {
  //   let res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
  //     data: JSON.stringify(data),
  //   });
  //   ******************** OR ********************
  let res = await axios.request({
    url: "https://jsonplaceholder.typicode.com/posts?delay=5000",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  });
  if (res.status == 201 || res.status == 200) {
    setLoading(false);
    return true;
  } else {
    return false;
  }
}

function handleComplete(setComplete, setLoading, loading, setData) {
  setComplete(false);
  setLoading(!loading);
  setData({
    firstName: "",
    lastName: "",
    email: "",
    doctor: "",
    where: "",
    dateTime: "",
  });
}
export {
  handleFirstName,
  handleLastName,
  handleEmail,
  handleDoctor,
  handleWhere,
  handleTime,
  handleSubmit,
  handleComplete,
};
