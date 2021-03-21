import "twin.macro";
import { useEffect } from "react";
import { careerDB } from "src/db/career";

const Portfolio = () => {
  useEffect(() => {
    careerDB.get().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div tw="bg-yellow-50">
      <p>susiyaki portfolio</p>
    </div>
  );
};

export default Portfolio;
