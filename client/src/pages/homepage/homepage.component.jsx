import React from "react";

import "./homepage.styles.scss";

import Heading from '../../components/heading/heading.component'
import Directory from '../../components/directory/directory.component'

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <Heading/>
      <div className="cards-wrapper">
        <h3 className="cards-wrapper__header">Most popular teams</h3>
        <Directory/>
      </div>
    </div>
  );
};

export default HomePage;
