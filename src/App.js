import "./App.css";
import Description from "./components/Description";
import FootLocker from "./components/FootLocker";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import RelatedProduct from "./components/RelatedProduct";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      <Header />
      <FootLocker />
      <Description />
      <RelatedProduct />
      <Footer />
    </>
  );
}

export default App;
