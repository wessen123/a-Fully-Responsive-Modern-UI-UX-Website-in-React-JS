import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack}  alt="image"/>
    </div>
    <div>
      <img src={atlassian} alt="image" />
    </div>
    <div>
      <img src={dropbox} alt="image"/>
    </div>
    <div>
      <img src={shopify} alt="image"/>
    </div>
  </div>
);

export default Brand;
