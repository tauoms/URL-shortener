import { useState } from "react";
import axios from "axios";

const Middle = () => {
  const [inputUrl, setInputUrl] = useState("");

  const handleChange = (event) => {
    const longUrl = event.target.name;
    const value = event.target.value;
    setInputUrl((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8005/api/", inputUrl);
    // console.log(inputUrl);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label for="longUrl">Enter URL to shorten:</label>
        <br />
        <input
          type="text"
          id="longUrl"
          name="longUrl"
          required
          onChange={handleChange}
        />
        <br />
        <button type="submit">Shorten URL</button>
      </form>
    </section>
  );
};

export default Middle;
