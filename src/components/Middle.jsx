import { useState } from "react";
import axios from "axios";

const Middle = () => {
  const apiKey = import.meta.env.VITE_API_TOKEN;
  const [inputUrl, setInputUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const currentDate = new Date().toISOString().slice(0, 10);
  let expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + 1);
  expirationDate = expirationDate.toISOString().slice(0, 10);
  const randomAlias = Math.floor(100000 + Math.random() * 900000);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputUrl(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://unelma.io/api/v1/link",
        {
          alias: `${randomAlias}`,
          type: "direct",
          password: null,
          active: true,
          expires_at: expirationDate,
          activates_at: currentDate,
          utm: "utm_source=google&utm_medium=banner",
          domain_id: null,
          title: "Google",
          description: "Search Engine",
          pixels: [495],
          groups: [54],
          rules: [
            {
              type: "geo",
              key: "us",
              value: "https://facebook.com",
            },
          ],
          long_url: inputUrl,
        },
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        setShortenedUrl(response.data.link.short_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <p id="result">{shortenedUrl}</p>

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
