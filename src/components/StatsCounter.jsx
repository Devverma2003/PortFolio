import { useEffect, useState } from "react";

const StatsCounter = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const animateCount = (setState, target) => {
      let count = 0;
      const interval = setInterval(() => {
        count += 1;
        setState(count);
        if (count >= target) clearInterval(interval);
      }, 50);
    };

    animateCount(setExperience, 3);
    animateCount(setProjects, 1);
    animateCount(setClients, 0);
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-12 mt-16 bg-[#acfff8] bg-clip-text text-transparent text-center">

      <div className="text-center">
        <h2 className="text-4xl font-bold">{experience}+</h2>
        <p className="text-lg"> Month Experience</p>
      </div>
      <div className="text-center">
        <h2 className="text-4xl font-bold">{projects}+</h2>
        <p className="text-lg">Projects Completed</p>
      </div>
      <div className="text-center">
        <h2 className="text-4xl font-bold">{clients}+</h2>
        <p className="text-lg">Happy Clients</p>
      </div>
    </div>
  );
};

export default StatsCounter;
