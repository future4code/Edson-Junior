import { FooterContainer, FooterRights, FooterSocial, FooterSocialImg, SocialLinks } from "./stylesFooter"
import Facebook from "../../assets/images/facebook.png"
import Instagram from "../../assets/images/instagram.png"
import Twitter from "../../assets/images/twitter.png"



const Footer = () => {
    return (
        <FooterContainer>
            
            <FooterRights>
                © 2021 LabeX todos direitos reservados.
            </FooterRights>

            <FooterSocial>
                <SocialLinks href="">
                    <FooterSocialImg src={Facebook} alt={"Facebook"} />
                </SocialLinks>

                <SocialLinks href="">
                    <FooterSocialImg src={Instagram} />
                </SocialLinks>
                
                <SocialLinks href="">
                    <FooterSocialImg src={Twitter} />
                </SocialLinks>
                
            </FooterSocial>
        </FooterContainer>
    )
}

export default Footer