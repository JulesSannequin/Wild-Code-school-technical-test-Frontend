import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const addArgonaute = { name };
    console.log(addArgonaute);

    fetch("http://localhost:3000/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addArgonaute),
    }).then(() => {
      console.log("Ton Argonaute est bien pris a bord");
    });
  };

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
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      {data.map((response, index) => {
        return (
          <div className="argonautes" key={index}>
            <p>{response.name}</p>
          </div>
        );
      })}
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="name"></label> */}
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Ajouter un Argonaute</button>
      </form>
    </div>
  );
}

export default App;
