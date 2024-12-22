import { Link } from "react-router-dom";
import styled from "styled-components";
import {useState} from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin

} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';


const Navigation = styled.nav `
    position: fixed;
    width: 97vw;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 2%;
    background-color: #0a192f;
    color: #d1d5db;
    

`;
const Unordered = styled.ul `
    display: none;
    list-style: none;
    font-size: 1.25rem;
    
    @media (min-width: 768px ){
        display: flex;
        gap: 2rem;
        
    }
`;
interface UnorderedMobileProps {
    isOpen: boolean;
  }

  const UnorderedMobile = styled.ul.withConfig({
    shouldForwardProp: (prop) => prop !== "isOpen",
  })<UnorderedMobileProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0a192f;
  display: ${({ isOpen = true }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  
`;
interface Socials {
    isVisible?: boolean;
}
const Socials = styled.div `
  display: none;
  @media (min-width: 1024px){
    display: flex;
  }
  position: fixed;
  flex-direction: column;
  top: 35%;
  left: 0;
`;
const Hamburger = styled.div `
    z-index: 10;
    display: block;
    @media (min-width: 768px){
        display: none;

    }
`;
const List = styled.li `
    padding: 1.5rem 0;
    font-size: 2.25rem;
    list-style: none;
`;
interface SocialListProps {
    bgColor: string;
  }

const SocialList = styled.li<SocialListProps>`
  width: 120px;
  height: 80px;
  display: flex;
  margin-left: -100px; 
  justify-content: flex-end;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  transition: margin-left 0.4s ease;
  
`;

const A = styled.a`
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    color: inherit;
    gap: 20px;
    padding-right: 15px;
    &:hover {
    justify-content: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  justify-content-right;
`;



// Nav component rendering a list of navigation links using react-router-dom's Link component
export default function Nav() {
    const [nav,setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        
        <Navigation>
            <Unordered>
                <li >
                    <StyledLink to={`/`}>Home</StyledLink>
                </li>
                
                <li>
                    <StyledLink to={`/Projects`}>Projects</StyledLink>
                </li>
                <li>
                    <StyledLink to={`/Courses`}>Courses</StyledLink>
                </li>
                <li>
                    <StyledLink to={`/Experiences`}>Experiences</StyledLink>
                </li>
                
                <li>
                    <StyledLink to={`/Books`}>Books</StyledLink>
                </li>
            </Unordered>
            <Hamburger onClick={handleClick}>
                {!nav ? <FaBars /> : <FaTimes />}
            </Hamburger>
            <UnorderedMobile isOpen={nav}>
                <List>
                    <Link onClick={handleClick} to={`/`}></Link>
                </List>
                <List>
                    <Link onClick={handleClick} to={`/Books`}>Books</Link>
                </List>
                <List>
                    <Link onClick={handleClick} to={`/Projects`}>Projects</Link>
                </List>
                <List>
                    <Link onClick={handleClick} to={`/Courses`}>Courses</Link>
                </List>
                <List>
                    <Link onClick={handleClick} to={`/Education`}>Education</Link>
                </List>
                <List>
                    <Link onClick={handleClick} to={`/Experiences`}>Experiences</Link>
                </List>
                
            </UnorderedMobile>
            <Socials>
                <ul>
                    <SocialList bgColor="#2563eb">
                        <A href='https://www.linkedin.com/in/stavros-antonios-constantinou' target="_blank" rel="noopener noreferrer"> <FaLinkedin size={30}/> </A>
                    </SocialList>
                    <SocialList bgColor="#333333">
                        <A href='https://github.com/stavros-0'target="_blank" rel="noopener noreferrer">  <FaGithub size={30}/> </A>
                    </SocialList>
                    <SocialList bgColor="#6fc2b0">
                        <A href='/'> <HiOutlineMail size={30}/>  </A>
                    </SocialList>
                    <SocialList bgColor="#565f69">
                        <A href='/'> <BsFillPersonLinesFill size={30}> </BsFillPersonLinesFill></A>
                    </SocialList>
                </ul>
            </Socials>
        </Navigation>
        
    );
};
