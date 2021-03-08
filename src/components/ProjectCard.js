import { Link } from "react-router-dom";
const projectsData = require("../data/_projects.json");

const ProjectCard = () => {
  return (
    <div className="project-wrapper grid grid-cols-12 md:gap-x-18">
      {projectsData.map((project) => (
        <div
          className="md:p-12 p-6 m-6 bg-white bg-center rounded-xl shadow-lg flex flex-col col-span-12 md:col-span-6 transition duration-500 ease-in-out transform hover:bg-gray-200 hover:scale-105 cursor-pointer"
          key={project.id}
          style={{ backgroundImage: `url(${project.screenshot})` }}
        >
          <div>
            <div className="blog-preview">
              <h2 className="text-2xl p-1 font-bold">{project.title}</h2>
              <p className="p-1 leading-relaxed text-sm leading-loose">{project.intro}</p>
            </div>
          </div>
          <div className="project-button-container p-1 m-1">
          {/*
            <Link to={"/projects/" + project.slug} key={project.slug}>
              <button className="rounded main-buttons mr-2 bg-custom-yellow text-white text-sm py-1 px-2 transisiton duration-300 ease-in-out transform hover:scale-105 hover:text-black">
                Læs mere
              </button>
            </Link>
          */ }
            {project.siteURL !== null ? (
              <button className="rounded main-buttons mr-2 bg-custom-yellow text-white text-sm py-1 px-4 transisiton duration-300 ease-in-out transform hover:scale-105 hover:text-black">
                <a target="_blank" href={project.siteURL}>
                  Se sitet
                </a>
              </button>
            ) : (
              console.log("did not return true")
            )}
           
          </div>
      
          <div className="category-wrapper">
            <ul className="flex sm:flex-row flex-col text-left">
              {Object.values(project.categories).map((category) => (
                <li
                  key={category.id}
                  className="project-category bg-white opacity-80 shadow-md rounded-md m-2 p-2 px-5 font-semibold text-xs text-grey"
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
