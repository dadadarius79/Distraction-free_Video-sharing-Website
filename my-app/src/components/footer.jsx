import React from 'react';

const Footer = () => {
    return(
        <>
        <footer className="footer_main">
            <p className="p_footer">Romania</p>
                <nav className="nav_footer_main"> 
                    <ul className="ul_footer">
                        <span className="nav_right">
                        <li className="list_footer-r"><a href="url" className="link_footer-l">Advertising</a></li>
                        <li className="list_footer-r"><a href="url" className="link_footer-l">Bussiness</a></li>
                        <li className="list_footer-r"><a href="url" className="link_footer-l">How it works</a></li>
                        </span>
                        <span className="nav_left">
                        <li className="list_footer-l"><a href="url" className="link_footer-r">link text</a></li>
                        <li className="list_footer-l"><a href="url" className="link_footer-r">link text</a></li>
                        <li className="list_footer-l"><a href="url" className="link_footer-r">link text</a></li>
                        </span>
                    </ul>
                </nav>
        </footer>
        </>
    )
}

export default Footer;