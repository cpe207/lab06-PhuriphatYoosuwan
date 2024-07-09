// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getUser = async (userId: number) => {
  try {
    const res_user = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = res_user.data;
    return `${user.name}`;
  }
  catch (err) {
    return "INVALID USER ID";
  }
};

//test case
const input1 = 1;
const input2 = 100;

//run
getUser(input1).then((result) => console.log(result));
getUser(input2).then((result) => console.log(result));

// module.exports = getUser;
export default getUser;

/*
รหัส นศ.: 660610784

ชื่อ-สกุล : ภูริภัฏ อยู่สุวรรณ
*/