import About from "../components/About";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Product />
      <Category/>
    </>
  );
}

export default Home;
