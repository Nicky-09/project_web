// import '../style/NavBar.css';
import Header from './Header';
import Quiz from './Quiz';

const NavBar = () => (
    <>
    <header className='navbar'>
        <div className='navbar__title navbar__item'>Quizzo</div>
        <div className='navbar__item'>My Score</div>
        <div className='navbar__item'>About Us</div>
        <div className='navbar__item'>Contact Us</div>
        {/* <div className='navbar__item'>Download</div>
        <div className='navbar__item'>Subscribe</div>         */}
    </header>
    {/* <Header/> */}<Quiz/>
    </>
);

export default NavBar;