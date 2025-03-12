import React from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Header";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Best Sizzler</title>
        <meta name="description" content="Welcome to My Website. We offer high-quality products and services." />
        <meta name="keywords" content="best sizzler, food, restaurant, sizzling dishes" />
        <meta name="author" content="Your Name" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Home | My Website" />
        <meta property="og:description" content="Experience the best sizzlers in town." />
        <meta property="og:image" content="https://res.cloudinary.com/dj7wogsju/image/upload/v1741711039/Background_1_ubetof.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content="Home | My Website" />
        <meta name="twitter:description" content="Experience the best sizzlers in town." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dj7wogsju/image/upload/v1741711039/Background_1_ubetof.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Header />
      <section
        className="bg-cover bg-center h-[700px]"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dj7wogsju/image/upload/v1741711039/Background_1_ubetof.png')",
        }}
      ></section>
    </>
  );
}

export default Home;
