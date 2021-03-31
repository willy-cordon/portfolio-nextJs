import React from 'react'

const Navbar = () => {
    return (
        <>
            <header className="main-header main-header-overlay">
			
            <div className="mainbar-wrap">
              <div className="megamenu-hover-bg"></div>
              <div className="container mainbar-container">
                <div className="mainbar">
                  <div className="row mainbar-row align-items-lg-stretch px-4">
                    
                    <div className="col-auto">
        
                      <div className="navbar-header">
                         <a className="navbar-brand" href="index.html" rel="home">
                          <span className="navbar-brand-inner">
                            <img className="logo-dark" src="./assets/img/logo/logo-1.svg" alt="Ave HTML Template" />
                            <img className="logo-sticky" src="./assets/img/logo/logo-1.svg" alt="Ave HTML Template" />
                            {/* <img className="mobile-logo-default" src="./assets/img/logo/logo-1.svg" alt="Ave HTML Template" /> */}
                            <span className='mobile-logo-default'>WC</span>
                            <img className="logo-default" src="./assets/img/logo/logo-light.svg" alt="Ave HTML Template" />
                          </span>
                        </a> 
                        <button type="button" className="navbar-toggle collapsed nav-trigger style-mobile" data-toggle="collapse" data-target="#main-header-collapse" aria-expanded="false" data-changeclassnames='{ "html": "mobile-nav-activated overflow-hidden" }'>
                          <span className="sr-only">Toggle navigation</span>
                          <span className="bars">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                          </span>
                        </button>
                      </div>
        
                    </div>
        
                    <div className="col">
        
                      <div className="collapse navbar-collapse" id="main-header-collapse">
                        
                        <ul className="main-nav main-nav-hover-underline-2 nav align-items-lg-stretch justify-content-lg-start" data-submenu-options='{ "toggleType":"fade", "handler":"mouse-in-out" }' data-localscroll="true">
                          
                          <li className="current-menu-item">
                            <a href="#content">
                              <span className="link-icon"></span>
                              <span className="link-txt">
                                <span className="link-ext"></span>
                                <span className="txt">Home</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#about">
                              <span className="link-icon"></span>
                              <span className="link-txt">
                                <span className="link-ext"></span>
                                <span className="txt">About</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#portfolio">
                              <span className="link-icon"></span>
                              <span className="link-txt">
                                <span className="link-ext"></span>
                                <span className="txt">Portfolio</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#testimonials">
                              <span className="link-icon"></span>
                              <span className="link-txt">
                                <span className="link-ext"></span>
                                <span className="txt">Testimonials</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#contact">
                              <span className="link-icon"></span>
                              <span className="link-txt">
                                <span className="link-ext"></span>
                                <span className="txt">Contact</span>
                              </span>
                            </a>
                          </li>
                        
                        </ul>
                      
                      </div>
        
                    </div>
                  
                  <div className="col text-right">
        
                    <div className="header-module">
                      <a href="#" className="btn btn-default text-uppercase btn-sm btn-bordered border-thick font-size-13 font-weight-bold ltr-sp-2 px-3">
                        <span>
                          <span className="btn-txt">Buy Now</span>
                        </span>
                      </a>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          
        </header>
        <style jsx>
          {`
            .txt{
              font-size:20px !important
            }
            .main-header .main-nav{
              backgraund: white !important;
              color:black
            }
          
          `}
        </style>
        </>
    )
}

export default Navbar
