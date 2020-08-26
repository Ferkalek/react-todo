import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>About page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel beatae
        eaque labore. Unde at nam eveniet vel voluptatum? Laudantium, molestiae?
        Accusamus atque fugiat explicabo laborum assumenda in voluptates soluta
        perferendis.
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Go to home
      </button>
    </>
  );
};
