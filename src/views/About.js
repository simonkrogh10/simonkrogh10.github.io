import SkillCard from "../components/SkillCard";
import React, { Component } from "react";

class About extends Component {
  
  render() {
    return (
      <div className="about-wrapper">
        <div className="intro-wrapper grid grid-cols-3 p-10 animate__animated animate__fadeIn animate_repeat-1">
          <div className="intro-text-container col-span-3 lg:col-span-2">
            <h1 className="text-4xl p-2 text-main font-bold">Om mig</h1>
            <p className="p-2 text-lg">
              Mit navn er Simon. Jeg er 22 og bor i Aalborg. Jeg har en passion
              for Webudvikling og jeg stræber for at udvikle mig både fagligt og
              professionelt inden for branchen. Det vigtigste for mig er at være
              med til at skabe moderne, digitale løsninger, som er af høj
              kvalitet og tilfredsstillende i forhold til den enkelte kundes
              behov.
            </p>
          </div>
        </div>
        <div className="project-section-wrapper">
          <div className="project-description p-10 py-2 grid grid-cols-12">
            <h2 className="project-section-title text-3xl font-bold p-2 col-span-12 text-custom-green">
              Mine værktøjer
            </h2>
          </div>
          <div className="col-span-12">
            <SkillCard />
          </div>
          <div className="col-span-12 p-10 py-2">
            <h2 className="project-section-title text-3xl font-bold p-2 col-span-12 text-custom-green">
              Uddannelse
            </h2>
            <div>
              <ul className="p-5 py-2">
                <div className="grid grid-cols-12 my-5">
                  <li className="text-black font-bold col-span-12 lg:col-span-6">
                    Professionsbachelor i Webudvikling
                  </li>
                  <li className="text-black col-span-12 lg:col-span-6 text-center">
                    2019-2021
                  </li>
                  <li className="col-span-12">
                    University College Nordjylland
                  </li>
                </div>
                <div className="grid grid-cols-12 my-5">
                  <li className="text-black  font-bold col-span-12 lg:col-span-6">
                    Akademi uddannelse i Multimediedesign
                  </li>
                  <li className="text-black col-span-12 lg:col-span-6 text-center">
                    2017-2019
                  </li>
                  <li className="col-span-12">
                    University College Nordjylland
                  </li>
                </div>
                <div className="grid grid-cols-12 my-5">
                  <li className="text-black font-bold col-span-12 lg:col-span-6">
                    HTX indenfor Bioteknologi
                  </li>
                  <li className="text-black col-span-12 lg:col-span-6 text-center">
                    2014-2017
                  </li>
                  <li className="col-span-12">
                    University College Nordjylland
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="col-span-12 p-10 py-2">
            <h2 className="project-section-title text-3xl font-bold p-2 col-span-12 text-custom-green">
              Erfaring
            </h2>
            <div>
              <div className="grid grid-cols-12 my-5 p-2 py-0">
                <div className="text-black col-span-12 lg:col-span-6">
                  <h3 className="text-xl font-bold text-black">
                    Studiejob som frontend-udvikler hos Structur ApS.
                  </h3>
                  <p className="text-sm leading-loose">
                    Structur, er en virksomhed placereret i Aalborg.
                    Virksomheden assisterer vidt forskellige virksomheder med
                    udvikling og håndtering af designmæssige opgaver,
                    markedsføring, udvikling af en identitet på sociale medier,
                    realisering af webløsninger og meget mere.
                  </p>
                </div>
                <div className="text-black col-span-12 md:col-start-8 text-center w-full md:col-end-12">
                  <img className="m-auto"
                    src="https://www.datocms-assets.com/42067/1613039593-open-doodles-coffee.svg"
                    width="70%"
                    alt=""
                  />
                </div>
                <div className="col-span-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
