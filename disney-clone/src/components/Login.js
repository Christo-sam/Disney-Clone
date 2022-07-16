import styled from 'styled-components';

const Login = (props) => {
    return (
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src='/images/cta-logo-one.svg' alt=""/>
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee with
                    a Disney+ susbcription. As of 03/26/22, the price of Disney+ and the Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
            <BgImage />
        </Content>
    </Container>
    )
        
};


const Container = styled.section`
    overflow:hidden;
    display:flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-botom:10vw;
    width:100%;
    position:relative;
    min-height:100vh;
    box-sizing: border-box;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction:column; 
    padding: 80px 40px;
    height: 100%;
`;   


const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    flex-wrap; wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top:0;
    align-items: center;
    text-align:center;
    margin: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;
`;

const SignUp = styled.a`
    font-weight:bold;
    color:white;
    background-color: #0063e5;
    margin-bottom:12px;
    width:100%;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    font-sixe: 18px;
    letter-spacing: 1.5px;
    
    &:hover{
    background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: hsla(0, 01, 95.31, 1);
    font-szize:11px;
    margin: 0 0;
    line-height: 1.5em;  
`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width:600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;


const CTALogoTwo = styled.img`
    max-width: 600px; 
    margin-bottom: 20px;
    display: inliine-block;
    vertical-align: bottom;
    width: 100%;
`;
            
const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover; 
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;





export default Login;