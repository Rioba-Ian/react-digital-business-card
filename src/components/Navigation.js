import photo from "../image/selfie-ian.jpg"
import email from "../image/Mail.png"
import linkedin from "../image/linkedin.png"

export default function Navigation() {
    return (
        <div className="topSection">
            <header className="image-header">
                <img src={photo} style={{ backgroundSize: "cover" }} alt="profile" />
            </header>
            <div className="info--bio">
                <h1 className="name-profile" >Rioba Ian</h1>
                <p style={{ color: "#f3bf99" }}>Software Developer</p>
                <a className="website-link" href="https://github.com/Rioba-Ian" ><p>rioba-ian.com</p></a>
                <div className="socials">
                    <button className="mail-btn"><img className="icon-img" src={email} alt="mail icon" />Email</button>
                    <button className="linkedin-btn"><img className="icon-img" src={linkedin} alt="mail icon" />Linkedin</button>
                </div>
            </div>
        </div>
    )
}