import React from 'react';

import {images, data } from '../../constants'
import { SubHeading } from '../../components'
import './Laurels.css';

import award01 from '../../assets/award01.png';
import award02 from '../../assets/award02.png';
import award03 from '../../assets/award03.png';
import award05 from '../../assets/award05.png';
import AwardCards from './AwardCard';




const AwardCard = ({award}) => {
  <div className="app__laurels_awards-card">
    <img src={award.images} alt="award" />
    {console.log(award.imgUrl)};
  </div>
}

function Laurels () {

  const awardss = [
    {
      imgUrl: award02,
      title: 'Bib Gourmond',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      imgUrl: award01,
      title: 'Rising Star',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      imgUrl: award05,
      title: 'AA Hospitality',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      imgUrl: award03,
      title: 'Outstanding Chef',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
  ];
  
  return(
  <div className="app__bg app___wrapper section__padding" id="awards">
    <div className="app__laurels_award_and_img"> 
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="app__laurels_awards">
          {/* {data.awards.map((award) => <AwardCard  award={award} key={award.title}/>)} */}
          {awardss.map((award) => <AwardCards  award={award} key={award.title + "1"}/>)}
        </div>
      </div>
      <div className="app__wrapper_img">
          <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  </div>
  )
  };

export default Laurels;
