const skillsData = require('../data/_skills.json');

const SkillCard = () => {
  return (
    <div className="skill-wrapper grid grid-cols-12 md:gap-x-18">
      {skillsData.map((skill) => (
        <div
          className="p-12 m-6 bg-white rounded-xl shadow-lg flex flex-col col-span-12 md:col-span-6 transition duration-500 ease-in-out transform hover:bg-gray-100 hover:scale-105"
          key={skill.id}
        >
          <div>
            <div className="skill-preview">
              <h2 className="text-2xl p-1 font-bold">{skill.title}</h2>
            </div>
          </div>
          <div className="category-wrapper">
            <ul className="flex flex-col text-left">
              {Object.values(skill.skillList).map((skillSet) => (
                <li
                  key={skillSet.id}
                  className="project-category shadow-md rounded-md m-2 p-2 px-5 font-semibold text-xs text-grey tranisition duration-300 hover:bg-custom-green hover:text-white"
                >
                  {skillSet.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
