import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Feild from "./Feild";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  return (
    <section>
      <h1>Fill the form</h1>
      <div>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          name=""
          placeholder="name"
          id=""
        />
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          name=""
          placeholder="email"
          id=""
        />
        <button onClick={addData}>+</button>
      </div>
      <div className="data">
        <div className="data-val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Check</h4>
        </div>
        {data.map((element, index) => {
          return (
            <Feild
              key={index}
              name={element.name}
              email={element.email}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
}

export default App;
