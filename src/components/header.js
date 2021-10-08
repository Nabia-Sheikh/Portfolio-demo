function Header() {
    return(
        <>
        
  <header id="header" className="fixed-top">
    <div className="container-fluid d-flex justify-content-between align-items-center">

      <h1 className="logo"><a href="index.html">Nabia</a></h1>
    
      <a href="index.html" className="logo"><img src="./assets/img/logo.png" alt="" className="img-fluid"/></a>

      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li className="active"><a href="#hero">Home</a></li>
          <li ><a href="#about">About</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="https://nabiasheikh.netlify.app/
" target="_blank" rel="noreferrer">Portfolio</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </nav>

      <div className="header-social-links">
        
      </div>

      </div>

  </header>
        </>
    );
}
export default Header ;