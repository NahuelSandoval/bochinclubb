import React from "react";
import logoface from "../logos/logoface.png"
import logoyoutube from "../logos/logoyoutube.png"
import "./footer.css";

const Footer = () => {
return(
<footer className="pie bg-dark text-light">
            <p>© 2022 Copyright</p>
            <p>Todos los derechos reservados</p>
            <div className="linkdelpie">
                <a href="https://www.facebook.com/fraternidadbochinclub" className="btn btn-primary bg-light logo"><img src={logoface} className="logoimg" alt="ir a face"/></a>
                <a href="https://www.youtube.com/user/fraternidadbochinclu" className="btn btn-primary bg-light logo"><img src={logoyoutube} className="logoimg" alt="ir a youtube"/></a>
            </div>
        </footer>
)
}

export default Footer;