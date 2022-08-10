import React from 'react';
import '../../styles/Project.css';
import AfterlifePlans from '../../assets/afterlife_plans.jpeg';
import AfterlifeSection from '../../assets/afterlife_site_section.jpeg';
import AfterlifeWhatIf from '../../assets/afterlife_what_if_speculations.jpeg';
import AfterlifeSitePlan from '../../assets/afterlife_site_plan.jpeg';

const Afterlife = () => {
  return (
    <div className='project-container'>
      <div className="header">
        <div className="header-number">01</div>
        <div className="header-company">M.Arch Class Project</div>
        <div className="header-subject">Academic</div>
      </div>
      <div className="details-container">
        <div className="title-box">
          <div className="title-title">Project title</div>
          <div className="title-date">2019-2020</div>
          <div className="title-awards">
            <ul>
              <li>Canadian Architect Student Award</li>
              <li>Canadian Architect Student Award of Excellence</li>
              <li>Canadian Architect Student Award</li>
            </ul> 
          </div>
          <div className="title-people">
            <ul>
              <li><span className='title-people-bold'>Partner:</span> Lauren</li>
              <li><span className='title-people-bold'>Supervisor:</span> Nina</li>
            </ul> 
          </div>
        </div>
        <div className="summary-box">
          This thesis explores the relationship between productive 
          landscapes and the machines that shape them. <br /><br />
          Built to draw resources from gridded "peripheries", 
          machines of industry have reshaped the rural north. 
          In tailoring the landscape to the machine, 
          these territories have come to be misunderstood as 
          physically and temporally disjointed sites of extraction. 
          <br /><br />In reality, these places are critical future thresholds 
          for ecosystems in flux, now more than ever in need 
          of succession and connectivity.
          This project proposes an ecology of machines that celebrates 
          complexity in the way we divide and cultivate agricultural 
          landscapes in northern British Columbia.<br />
        </div>
      </div>
      <div className="works-container">
        <ul>
          <li>
            <div className="works-img">
              <img src={AfterlifePlans} alt="" />
            </div>
            <div className="works-title">
              Title
            </div>
          </li>
          <li>
            <div className="works-img">
              <img src={AfterlifeSection} alt="" />
            </div>
            <div className="works-title">
              Title
            </div>
          </li>
          <li>
            <div className="works-img">
              <img src={AfterlifeWhatIf} alt="" />
            </div>
            <div className="works-title">
              Title
            </div>
          </li>
          <li>
            <div className="works-img">
              <img src={AfterlifeSitePlan} alt="" />
            </div>
            <div className="works-title">
              Title
            </div>
          </li>
        </ul>
      </div>
      <div className="buttons-container">
        <div className="back-button">
          Previous
        </div>
        <div className="next-button">
          Next
        </div>
      </div>
    </div>
  )
}

export default Afterlife