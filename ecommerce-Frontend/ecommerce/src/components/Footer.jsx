
  import FacebookIcon from '@mui/icons-material/Facebook';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import MailOutlineIcon from '@mui/icons-material/MailOutline';
  import PhoneIcon from '@mui/icons-material/Phone';
  import RoomIcon from '@mui/icons-material/Room';
  import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import TwitterIcon from '@mui/icons-material/Twitter';
  import styled from "styled-components";
  
  const Container = styled.div`
    display: flex;
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.a`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    transition: all .5s ease;
    &:hover{
        transform: scale(1.2);
    }
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover{
        transform: scaleY(1.3);
    }
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>AREA51</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </Desc>
          <SocialContainer>
            <SocialIcon href='https://www.facebook.com/apel1151' color="3B5999">
              <FacebookIcon/>
            </SocialIcon>
            <SocialIcon href='https://www.instagram.com/apel1151/' color="E4405F">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon href='#' color="55ACEE">
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon href='https://www.linkedin.com/in/apel1151/' color="E60023">
              <LinkedInIcon />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <RoomIcon style={{marginRight:"10px"}}/> 1207, Shamoly Street, Dhaka, Bangladesh
          </ContactItem>
          <ContactItem>
            <PhoneIcon style={{marginRight:"10px"}}/> +8801734025091
          </ContactItem>
          <ContactItem>
            <MailOutlineIcon style={{marginRight:"10px"}} /> apelmahmud1151@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;