import React from 'react';

import './spinner.styles.scss'

const Spinner = () => (
  <div className="spinner">
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
);

export default Spinner;