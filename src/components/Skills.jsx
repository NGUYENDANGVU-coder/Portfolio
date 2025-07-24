import Marquee from "react-fast-marquee";
import SkillImages from '../assets/img/skill/skillImages';
import { skillsData } from '../data/skill';

function Skills() {
  return (
    <div className="w-full px-4 py-16 mt-4" id="skill">
      <div className="mb-12 text-center">
       <h1 className='ndv__title'>SKILLS</h1>
      </div>
      
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div
                key={id}
                className="flex flex-col items-center justify-center mx-6 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/15 min-w-[140px] group"
              >
                <div className="flex items-center justify-center w-16 h-16 p-2 mb-4 transition-all duration-300 rounded-lg bg-white/10 group-hover:bg-white/20"
                >
                  <img
                    src={SkillImages[skill]}
                    alt={skill}
                    className="object-contain w-full h-full filter brightness-110"
                  />
                </div>
                <h3 className="text-sm font-semibold text-center transition-colors duration-300 text-white/90 group-hover:text-white">
                  {skill}
                </h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skills;