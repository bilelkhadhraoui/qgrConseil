import Banner from "../components/home1/Banner";
import CoverArea from "../components/home1/CoverArea";
import Header from "../components/header/Header";
import About from "../components/home1/About";
import Footer from "../components/footer/Footer";
import ClientSection from "../components/home1/ClientSection";
import Testimonial from "../components/home1/Testimonial";
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <CoverArea />
      <About />
      <Testimonial />
      <ClientSection />
      <Footer />
    </>
  );
}
