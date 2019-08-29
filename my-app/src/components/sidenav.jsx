import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBurn } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

const SideNav = () => {
    return (
        <div className="div-nav_main">
        <ul className="ul_main">
            <li className="li_main">                
                <FontAwesomeIcon icon={faHome} id="icon_main_list-active" className="icon_main_list"/><br/>
                <p>Home</p>
            </li>
            <li className="li_main">    
                <FontAwesomeIcon icon={faBurn} className="icon_main_list"/> <br/>
                <p>Tendencies</p>
            </li>
            <li className="li_main">
                <FontAwesomeIcon icon={faYoutube} className="icon_main_list"/> <br/>
               <p>Subscriptions</p>
            </li>
            <li className="li_main">                
                <FontAwesomeIcon icon={faFolder} className="icon_main_list"/><br/>
                <p>TLibrary</p>
            </li>
        </ul>
        </div>
    )
}

export default SideNav;