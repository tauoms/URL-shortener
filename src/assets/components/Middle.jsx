import { useState } from "react";
import axios from "axios";

const Middle = () => {
  const apiKey = process.env.REACT_APP_API_TOKEN;
  const [inputUrl, setInputUrl] = useState("");
  const [dataForApi, setDataForApi] = useState({
    type: "direct",
    password: apiKey,
    active: true,
    expires_at: "2024-05-06",
    activates_at: "2024-03-25",
    utm: "utm_source=google&utm_medium=banner",
    domain_id: null,
    long_url: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setInputUrl(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDataForApi({ ...dataForApi, long_url: inputUrl });
    axios
      .post("https://unelma.io/api/v1/link/", dataForApi)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(dataForApi);
    console.log(inputUrl);
  };

  return (
    <>
      <p id="result">{inputUrl}</p>

      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="longUrl">Enter URL to shorten:</label>
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
    </>
  );
};

export default Middle;
