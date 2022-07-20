import fbicon from "../image/Digital Business Card (Copy) (1)/Facebook Icon.png"
import twittericon from "../image/Digital Business Card (Copy) (1)/Twitter Icon.png"
import igicon from "../image/Digital Business Card (Copy) (1)/Instagram Icon.png"
import ghicon from "../image/Digital Business Card (Copy) (1)/GitHub Icon.png"

export default function Footer(){
    return(
        <footer className="footer-icons">        
        <img src={twittericon} alt="twitter icon"/>
        <img src={fbicon} alt="facebook icon"/>
        <img src={igicon} alt="instagram icon"/>
        <img src={ghicon} alt="github icon"/>
        </footer>
    )
}