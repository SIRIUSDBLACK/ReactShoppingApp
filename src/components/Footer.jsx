import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="px-5 py-3 mx-5 mt-auto text-white bg-black">
      <Container>
      <div>
        <p className="text-center mt-auto">
          © 2024{" "}
          <span className="font-bold underline text-gray-500">MMS IT.</span> All
          rights reserved.
        </p>
      </div>
      </Container>
    </footer>
  );
};

export default Footer;
