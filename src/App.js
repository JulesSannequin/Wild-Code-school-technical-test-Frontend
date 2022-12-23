import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
// const config = {
//   headers: {
//     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
//     "Access-Control-Allow-Origin": "https://localhost:3001/",
//     "Content-Type": "application/json",
//   },
// };

function App() {
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);

  try {
  } catch (error) {}
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get("http://localhost:3000/");
        setData(response.data);
        console.log(response.data);
        setisLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.response);
    }
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

// function App() {
//   useEffect(() => {
//     axios.get("http://localhost:3000/", config).then((response) => {
//       console.log(response.data);
//     });
//   }, []);

//   return (
//     <div className="App">
//       <h2>Hello world</h2>
//     </div>
//   );
// }

export default App;
