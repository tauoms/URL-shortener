import React from "react";

const Middle = () => {
  return (
    <section>
      <form method="post">
        <label for="longUrl">Enter URL to shorten:</label>
        <br />
        <input type="text" id="longUrl" name="longUrl" required />
        <br />
        <button type="submit">Shorten URL</button>
      </form>
    </section>
  );
};

export default Middle;
