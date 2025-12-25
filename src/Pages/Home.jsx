import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Carousel from "../components/Carousel/Carousel"; 
// import CourseDetails from "../components/CourseDetails/CourseDetails";
import DepartmentsPage from "../components/Hero/Department";
import TechCarousel from "../components/TechCarousel/TechCarousel"; 


export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      {/* <CourseDetails /> */}
      <DepartmentsPage />
      <TechCarousel />
      <Footer />
    </>
  );
}
