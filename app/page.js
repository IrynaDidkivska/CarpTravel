import ContactUs from "@/components/ContactUs";
import Form from "@/components/Form";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import WeOffer from "@/components/WeOffer";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <main>
      <Menu />
      <WhoWeAre />
      <WeOffer />
      {/* <Form /> */}
      <Gallery />
      <ContactUs />
    </main>
  );
}
