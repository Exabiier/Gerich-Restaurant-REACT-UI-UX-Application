import React from 'react'
import award01 from '../../assets/award01.png';
import award02 from '../../assets/award02.png';
import award03 from '../../assets/award03.png';
import award05 from '../../assets/award05.png';
import './AwardCard.css'

function AwardCards({award}) {

  return (
    
    <div className="app__laurels_awards-card">
        <img src={award.imgUrl} alt="award" />
        <div className="app__laurels_awards-card_content">
            <p className="p_cormorant" style={{ color: '#DCCA87'}}>{award.title}</p>
            <p className="p_cormorant" style={{ color: "var(--color-white)"}}>{award.subtitle}</p>
        </div>
    </div>
 
  )
}

export default AwardCards