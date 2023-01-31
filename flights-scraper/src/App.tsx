import "./App.css";
import PageHeaderContainer from "./components/pageHeaderContainer/pageHeaderContainer";
import ServicesList from "./components/content/services/serviceList";
import ClientList from "./components/content/clients/clientList";
import Technologies from "./components/content/technologies/technologies";
import TeamList from "./components/content/team/teamList";
import ContactForm from "./components/content/contactForm/contactForm";
import Footer from "./components/footer/footer";
import { Element } from "react-scroll";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import MultiStepForm from "./components/content/products/MultiStepForm";

const App = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );

  return (
    <div className="App">
      <Element name="PageHeaderContainer">
        <PageHeaderContainer />
      </Element>
      <Element name="ProductList">
        <MultiStepForm />
      </Element>
      <Element name="ClientList">
        <ClientList />
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
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: false,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 10,
              random: true,
              anim: {
                enable: false,
                speed: 0.5,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 500,
              color: "#ffffff",
              opacity: 0.5,
              width: 2,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "bottom",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default App;
