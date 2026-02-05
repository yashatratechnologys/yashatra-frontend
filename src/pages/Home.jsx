import Footer from "../components/common/Footer";
import Carousel from "../components/Carousel/Carousel";
import DepartmentsPage from "../components/Hero/Department";
import TechCarousel from "../components/TechCarousel/TechCarousel";

export default function Home() {
  return (
    <>
      <Carousel />
      <DepartmentsPage />
      <TechCarousel />
      <Footer />
    </>
  );
}
