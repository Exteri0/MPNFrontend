import { useEffect } from "react";
import axios from "axios";

export default function Reset() {
  useEffect(() => {
    axios.delete("http://localhost:3000/reset").then((response) => {
      console.log(response.data);
      console.log("IS THIS WORKING");
    });
  }, []);
  return <h1>DB IS RESET LES GO</h1>;
}
