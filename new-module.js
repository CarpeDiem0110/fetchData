import axios from "axios";

 async function fetchData(number){
   const data = await fetch("https://jsonplaceholder.typicode.com/users/" + number);
   const json = await data.json();
    console.log(json)
 }

 export default fetchData;