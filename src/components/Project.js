import React from "react";
import { useParams } from "react-router";
import ThatNotFoundPage from "../views/ThatNotFoundPage";

const projectsData = require("../data/_projects.json");

export default function Project() {
  var { slug } = useParams(),
    project = findPostBySlug(slug);
  if (project)
    return (
      <div className="main-wrapper p-10 grid grid-cols-12">
        <h1 className="title text-3xl font-bold col-span-12 py-4">
          {project.title}
        </h1>
        <ul className="flex sm:flex-row flex-col text-left col-span-12">
          {Object.values(project.categories).map((category) => (
            <li
              key={category.id}
              className="project-category shadow-md bg-gray-100 rounded-md m-2 p-1 px-4 font-semibold text-xs text-grey"
            >
              {category.name}
            </li>
          ))}
        </ul>
        <content className="lg:col-span-6 col-span-12 text-lg p-2">
          <div>
          {project.description}
          </div>
        </content>
        <content className="lg:col-start-1 col-span-12 lg:col-span-6 text-md my-10 p-2">
          <p className="w-100">{project.presentation1}</p>
       
        </content>
      </div>
    );
  else {
    return <ThatNotFoundPage />;
  }
}

function findPostBySlug(slug) {
  return projectsData.find((o) => o.slug === slug);
}
