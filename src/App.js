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
      console.log("Ton Argonaute est bien pris a bord ");
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
      <div className="argo-parent">
        <div className="title">
          <h1>Mon super équipage</h1>
        </div>

        {data.map((response, index) => {
          return (
            <div className="argonautes">
              <div key={index}>
                <p>{response.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="main-bottom">
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="name"></label> */}
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button className="button" type="submit">
            Ajouter un Argonaute
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
