import logo from '../../../src/logo.svg';

const user = {};
function Header() {
   console.log(user)
  return (
    <div className="header">
         {/* {user ? ( ) : ( )} */}
         <nav className='nav nav--tours'>
             <a href="/" className="nav__el"> All Tours</a>
         </nav>
        <div className="header__logo">
            <img src={logo} alt="Kenatour logo"></img>
        </div>
        
            {
                user ? (
                <nav className="nav nav--user">
                    <a href="/" className="nav__el nav__el--logout">
                                        Log Out
                    </a>
                    <a href="/" className="nav__el">
                        <img src="" alt="" className="nav__user-img">
                            {/* <span>{user?.name.split[0]}</span> */}
                        </img>
                    </a>
                </nav>
                ) : (
                <nav className="nav nav--user">
                    <a href="/login" className="nav__el"> Log in</a>
                    <a href="/signup" className="nav__el nav__el--cta"> Sign Up</a>
                </nav>         
                )
            }

       
   
    </div>
  );
}
// nav.nav.nav--user
    // if user
    //   a.nav__el.nav__el--logout Log out
    //   a.nav__el(href='/me')
    //     img.nav__user-img(src=`/img/users/${user.photo}` alt=`Photo of ${user.name}`)
    //     span= user.name.split(' ')[0]
    // else
    //   a.nav__el(href='/login') Log in
    //   a.nav__el.nav__el--cta(href='/signup') Sign up

export default Header;


