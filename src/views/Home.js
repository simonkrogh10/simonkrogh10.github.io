import "../App.css";
import ProjectCard from "../components/ProjectCard";
import React, { Component } from "react";
import AOS from "aos";

class Home extends Component {
  render() {
    const scrollProject = () => {
      let el = document.querySelector(".project-card-section");
      el.scrollIntoView({ behavior: "smooth" });
    };
    return (
      <div>
        <div className="main-wrapper">
          <div
            className="intro-wrapper grid grid-cols-12 p-10"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="intro-text-container col-span-12 md:col-span-6">
              <h1 className="text-2xl md:text-5xl p-2 text-main font-bold text-custom-yellow">
                Jeg hjælper virksomheder med at skabe en online identitet.
              </h1>
              <p className="p-2 leading-loose">
                Hejsa! mit navn er Simon. Jeg er en webudvikler fra Aalborg. Tag
                et kig på min portfolio som indeholder nogle af de webløsninger
                jeg har realiseret.
              </p>
              <div className="p-2 w-full wordCarousel flex font-normal">
                <p className="text-black font-bold text-lg w-20">Jeg ❤️</p>
                <div className="animate-flip overflow-hidden">
                  <ul className="flip4 text-black text-lg">
                    <li>Uendelige mængder af kaffe</li>
                    <li>React.js</li>
                    <li>Frontend udvikling</li>
                    <li>Interaction Design</li>
                  </ul>
                </div>
              </div>
              <div className="intro-button-container p-1">
                <button
                  onClick={scrollProject}
                  className="rounded main-buttons mr-5 bg-white bg-custom-green hover:text-white text-white font-bold p-2 md:py-2 md:px-6 transition duration-500 ease-in-out hover:bg-black transform hover:-translate-y-1 hover:scale-110"
                >
                  Se projekter
                </button>
                <button className="rounded main-buttons mr-5 bg-white border border-custom-yellow text-black tranisition duration-300 hover:text-white hover:bg-custom-yellow p-2 md:py-2 md:px-6">
                  Kontakt mig
                </button>
              </div>
            </div>
          </div>

          <div className="project-section-wrapper">
            <div className="project-description p-10 grid grid-cols-12 items-end">
              <div className="project-description-wrapper col-span-12 md:col-span-6">
                <h2 className="project-section-title text-3xl font-bold p-2 col-span-12">
                  Webportfolio{" "}
                </h2>
                <p className="p-2 col-span-6  leading-loose">
                  Jeg har udvalgt flere spændende projekter i min hos Structur.
                  Jeg er taknemmelig for den frihed som virksomheden har givet
                  mig i forhold til udvikling og design - det har været en
                  fornøjelse at være med til at udarbejde hver enkelt projekt.
                  Projekterne har samtidigt givet mig muligheden for at møde
                  nogle fantastiske mennesker på vejen.
                </p>
              </div>
              <div className="col-span-12 md:col-start-8 w-6/12 lg:w-full md:col-end-12">
                <img
                  className="transition-opacit"
                  src="https://www.datocms-assets.com/42067/1613220994-open-doodles-unboxing.svg"
                  alt="person-in-a-box"
                />
              </div>
            </div>
            <div
              className="project-card-section"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-duration="1500"
            >
              <ProjectCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    AOS.init();
  }
}

export default Home;
