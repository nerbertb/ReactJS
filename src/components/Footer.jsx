import React from "react";

const year = new Date();
const currentYear = year.getFullYear();
const copy = "Copyright ©";

function Footer() {
  return (
    <footer>
      <p>{`${copy} ${currentYear}`}</p>
    </footer>
  );
}
export default Footer;
