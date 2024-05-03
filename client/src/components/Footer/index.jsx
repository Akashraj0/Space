import "./index.scss";
const Footer = () => {
  return (
    <div className="Layout--Box3">
      <div className="Contact--Box">
        <div className="Contact--hyper">
          <a href="/">Home</a>
          <a href="/discover">Discover</a>
          <a href="/travel">Book a Ride</a>
          <a href="/about">About</a>
        </div>
        <div className="footer-comment">
          <h6>GET IN TOUCH </h6>
          <h6>Have a question?</h6>
          <p>
            Connect with a Safari expert to get started. Whether it is a
            hyperluminal query (or) a query related to the multiverse (or)
            careers at Solar Safari, we are here to help.
            <div>Headquarters : Esc Avenue, Solar Safari Inc., The Moon.</div>
            <div> Contact : +MO 1023456789</div>
            <div>e-Mail : info@solarsafari.com</div>
          </p>
        </div>
        <div className="Contact--hyper">
          <a href="/">Instagram</a>
          <a href="/">Face Book</a>
          <a href="/">Twitter</a>
          <a href="/">Threads</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
