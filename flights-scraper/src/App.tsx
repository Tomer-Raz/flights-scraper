import "./App.css";
import PageHeaderContainer from "./components/pageHeaderContainer/pageHeaderContainer";
import ProductList from "./components/content/products/productList";
import ServicesList from "./components/content/services/serviceList";
import ClientList from "./components/content/clients/clientList";
import Technologies from "./components/content/technologies/technologies";
import TeamList from "./components/content/team/teamList";
import ContactForm from "./components/content/contactForm/contactForm";
import Footer from "./components/footer/footer";
import { Element } from "react-scroll";
import ParticalBackground from "../src/particals/partical-background.js"

const App = () => {

  return (
    <div className="App">
      <ParticalBackground/>
      <Element name="PageHeaderContainer">
        <PageHeaderContainer />
      </Element>
      <Element name="ProductList">
        <ProductList />
      </Element>
      <Element name="ServicesList">
        <ServicesList />
      </Element>
      <Element name="ClientList">
        <ClientList />
      </Element>
      <Element name="Technologies">
        <Technologies />
      </Element>
      <Element name="TeamList">
        <TeamList />
      </Element>
      <Element name="ContactForm">
        <ContactForm />
      </Element>
      <Element name="Footer">
        <Footer />
      </Element>
    </div>
  );
};

export default App;
