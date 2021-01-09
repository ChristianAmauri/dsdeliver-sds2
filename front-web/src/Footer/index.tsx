import "./styles.css";
import { ReactComponent as YouTubeIcon } from "./youtube.svg";
import { ReactComponent as LinkedinIcon } from "./linkedin.svg";
import { ReactComponent as InstagramIcon } from "./instagram.svg";

function Footer() {
  return (
    <footer className="main-footer">
        App desenvolvido durante a 2ª ed. do evento <b>Semana DevSuperior</b>
        <div className="footer-icons">
          <a href="https://www.youtube.com/channel/UCVE4lvHRe0LJG-oJsMHfcDg" target="_new">
            <YouTubeIcon />
            </a>
            <a href="https://www.linkedin.com/in/christian-amauri-b700081b1/" target="_new">
            <LinkedinIcon />
            </a>
            <a href="https://www.instagram.com/christyanamauri/?hl=pt-br" target="_new">
            <InstagramIcon />
            </a>
        </div>
    </footer>
  )
}

export default Footer;