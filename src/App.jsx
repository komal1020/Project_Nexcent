import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import { Header, Footer } from "./components";
import {
  Hero,
  Clients,
  BusinessReinvent,
  DesignSite,
  FeedBack,
  Marketing,
  Demo,
  ManageClients,
  PixelGrade,
} from "./section";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 500,
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <ManageClients />
      <PixelGrade />
      <BusinessReinvent />
      <DesignSite />
      <FeedBack />
      <Marketing />
      <Demo />
      <Footer />
    </>
  );
}

export default App;
