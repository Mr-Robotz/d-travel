import Header from "@/components/Header";
import Services from "@/components/Services";
import Explore from "@/components/Explore";
import Features from "@/components/Features";
import Partners from "@/components/Partners";
import PopularCities from "@/components/PopularCities";
import Testimonials from "@/components/Testimonials";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="font-poppins">
      <Header />
      <Services />
      <Explore />
      <Features />
      <Partners />
      <PopularCities />
      <Testimonials />
      <Subscribe />
      <Footer />
    </main>
  );
}
