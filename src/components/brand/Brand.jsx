import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt="imagesss"/>
    </div>
    <div>
      <img src={slack}  alt="imagessaa"/>
    </div>
    <div>
      <img src={atlassian} alt="imagessssfff" />
    </div>
    <div>
      <img src={dropbox} alt="imageffff"/>
    </div>
    <div>
      <img src={shopify} alt="imagewww"/>
    </div>
  </div>
);

export default Brand;
