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
                           <a href='mailto:mjs@gamil.com'>email</a>
                       </li>
                       <li>
                           <a href='#'>Linkedin</a>
                       </li>
                       <li>
                           <a href='#'>Twitter</a>
                       </li>
                       <li>
                           <a href='#'>Facebook</a>
                       </li>
                       <li>
                           <a href='#'>instagram</a>
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
