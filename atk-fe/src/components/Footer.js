import React from 'react';

const Footer = () => {
    return (
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-4 col-lg-3 col-xl-3 mb-md-0 mb-4" style={{"marginLeft": "auto"}}>

                <h1 className="text-uppercase fw-bold mb-4" style={{"font-size": "16px"}}>
                  Contact
                </h1>
                <p><i className="fas fa-home me-3"></i> Addis Ababa, Century Mall, ET</p>
                <p>
                  <a href="mailto:support@atk.com" target="_blank" className="footer-links">
                    <i className="fas fa-envelope me-3"></i>
                      support@atk.com
                  </a>
                </p>
                <p><a href="tel:0930000356" className="footer-links"><i className="fas fa-phone me-3"></i> +251 930000356</a></p>
                <p><a href="tel:0930000570" className="footer-links"><i className="fas fa-print me-3"></i> +251 930000570</a></p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{"backgroundColor": "rgba(0, 0, 0, 0.05)"}}>
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="">ATK</a>
        </div>

      </footer>
    )
}

export default Footer;