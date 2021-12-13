import React from "react";
import Seo from "../components/seo/seo";
import logo from '/src/assets/images/logo.png';
// Gatsby uses a default 404 page that overrides your custom 404 page. However, you can
// still preview your 404 page by clicking “Preview custom 404 page”
function NotFoundPage() {
  return (
    <>
    <Seo title="404: Not found" />
      <div className="xl:px-12 sm:pt-56 md:pt-56 w-full max-w-3xl mx-auto bg-darkGray">
        <div className="flex flex-wrap items-center justify-between mx-auto">
        <img
            alt="Ghost getting abducted by aliens"
            className="block mx-auto w-1/2"
            src={logo}
          />
          <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
            Not Found
          </h2>
        </div>
      </div>
      </>

  );
}

export default NotFoundPage;
