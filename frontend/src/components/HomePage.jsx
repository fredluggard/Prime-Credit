import NavBar from "./NavBar";
import ImageSlider from "./ImageSlider";
import Services from "./Services";
import BankingPartners from "./BankingPartners";
import SubFooter from "./SubFooter";
import Footer from "./Footer";

function HomePage() {
  return (
    <div>
      <NavBar />
      <ImageSlider />
      <Services />
      <BankingPartners />
      <SubFooter />
      <Footer />
    </div>
  );
}

export default HomePage;
