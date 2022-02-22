// import image from '../../img/logo-white.png';

function Footer(){
    return(
        <div className="footer">
            {/* <img src={image} alt="Kenatour" className="" /> */}
            <ul className="footer__nav">
                <li> 
                    <a href="/">About Us</a>
                </li>
                <li> 
                    <a href="/">Become a guide</a>
                </li>
                <li> 
                    <a href="/">Careers</a>
                </li>
                <li> 
                    <a href="/">Contact</a>
                </li>
                <li> 
                    <a href="/"> Contact</a>
                </li>
            </ul>
        <p className="footer__copyright"> &copy; By Franck Kabasele</p>
        </div>
    )
}

export default Footer;

// footer.footer
//   .footer__logo
//     img(src='/img/logo-white.png' alt='Kenatour logo')
//   ul.footer__nav
//     li: a(href='#') About us
//     li: a(href='#') Download apps
//     li: a(href='#') Become a guide
//     li: a(href='#') Careers
//     li: a(href='#') Contact
//   p.footer__copyright &copy; by Franck Kabasele