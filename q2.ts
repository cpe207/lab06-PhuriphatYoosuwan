// const axios = require("axios");
import axios from "axios";
import { getLineAndCharacterOfPosition } from "typescript";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  try {
    const res_todo = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todo_data = res_todo.data; //todo data
    const user_id = todo_data.userId; //id
    const res_user = await axios.get(`https://jsonplaceholder.typicode.com/users/${user_id}`);
    const user = res_user.data;
    return {
      owner: user.name,
      title: todo_data.title,
      completed: todo_data.completed
    }
  }
  catch (error) {
    return "INVALID TODO ID";
  }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;

/*
รหัส นศ.: 660610784

ชื่อ-สกุล : ภูริภัฏ อยู่สุวรรณ
*/