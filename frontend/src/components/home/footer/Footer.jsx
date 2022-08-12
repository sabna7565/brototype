import "./Footer.scss";
import logo from "../../../images/home/logo.jpeg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="firstcol">
          <div className="footer-logo">
            <img src={logo} className="img-fluid" alt="logo" />
          </div>
          <p className="brodesc">
            Brocamp (former SPS) helps the young Indian generation who had
            benefited nothing from our country’s poor education system by
            providing an intensive industry relevant training on the leading
            software technologies.
          </p>
        </div>
        <div className="secondcol">
          <div className="footer-widget-heading">
            <h3>Useful Links</h3>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/ernakulam">Branches</Link>
            </li>
            <li>
            <Link to="/placements">Placements</Link>
            </li>
          </ul>
        </div>
        <div className="thirdcol">
          <div className="footer-widget-heading">
            <h3>Office Spaces</h3>
          </div>
          <ul>
            <li>
              <a href="#">InfoPark Kochi,</a>
            </li>
            <li>
              <a href="#">KINFRA Calicut</a>
            </li>
            <li>
              <a href="#">Dotspace Thiruvananthapuram</a>
            </li>
            <li>
              <a href="#">Kubz Padamugal</a>
            </li>
          </ul>
        </div>
        <div className="fourthcol">
          <div className="footer-social-icon">
            <span>Follow us</span>
            <a href="https://www.instagram.com/brototype.malayalam/">
              <InstagramIcon />
            </a>
            <a href="https://m.facebook.com/brototypemalayalam/">
              <FacebookIcon />
            </a>
            <a href="https://www.youtube.com/c/BrototypeMalayalam">
              <YouTubeIcon />
            </a>
            <a href="https://github.com/nikhilkilivayil">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/company/brototype/mycompany/">
              <LinkedInIcon />
            </a>
          </div>
          <div className="numberemail">
            <ul>
              <li style={{ marginTop: "10px" }}>
                <a href="#" style={{ paddingLeft: "29px" }}>
                  +91 7902606117
                </a>
              </li>
              <li>
                <a href="#">admissions@brototype.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <p>
          Copyright &copy; 2022, All Right Reserved{" "}
          <a href="#">Brototype</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
