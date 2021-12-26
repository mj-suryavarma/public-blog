import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {faFeatherAlt} from '@fortawesome/free-solid-svg-icons';
import './footer.css';

function Footer() {
    return (
        <div className='footer_area' id="Contactus">
          <div className='footer_container pt-5'>
            <div className='footer_company'>
                     <h4 className='footer_logo'>yourWords
                      <FontAwesomeIcon icon={faFeatherAlt} />
                       </h4>
                     <div className='footer_details'>
                      <p>Sed porttitor lectus nibh. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. </p>
                     </div>
            </div>
                 <div className='footer_company_details mt-3'>
                  <ul>
                    <h4>About</h4> 
                   <li>
                       <a href='#'>Terms</a>
                   </li>
                   <li>
                       <a href='#'>conditions</a>
                   </li>
                   <li>
                       <a href='#'>history</a>
                   </li>
                   <li>
                       <a href='#'>how it works</a>
                   </li>
                   <li>
                       <a href='#'>why us?</a>
                   </li>

                  </ul>
                </div>

                <div className='footer_business_contact mt-3'>
                      <h4>Contact Me</h4>
                    <ul>
                       <li>
                           <a href='mailto:mjsuryavarma@gamil.com' rel="send mail">email</a>
                       </li>
                       <li>
                           <a href='https://www.linkedin.com/in/m-jithendra-suryavarma-9b245020a/' rel="norefferer">Linkedin</a>
                       </li>
                       <li>
                           <a href='https://twitter.com/mj_suryavarma' rel="twitter account">Twitter</a>
                       </li>
                       <li>
                           <a href='https://www.facebook.com/mjithendrasuryavarma/' rel="facebook account">Facebook</a>
                       </li>
                       <li>
                           <a href='https://www.instagram.com/mj_suryavarma/' rel='developer instagram account ' >instagram</a>
                       </li>
                    </ul>
                </div>
            </div>
                <div className='copy_rights'>
                       <h6>&copy; 2022 @ yourwords.com   
                               </h6>
                             <h6>
                               all rights received
                               </h6>
                </div>
        </div>
    )
}

export default Footer
