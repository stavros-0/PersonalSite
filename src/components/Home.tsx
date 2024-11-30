import styled from 'styled-components';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-router-dom";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";



const HomeContainer = styled.div `
    background-color: #0a192f;
    align-items: center;
    justify-content: flex-end;
   
`;

const Div1 = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    padding: 0 1rem;
      
    @media (max-width: 768px){
        flex-direction: column;
        height: 100vh;
        
    }
`;
const Div2 = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    height: 100%;
    order: 2;

   @media (max-width: 768px){
        align-items: center;
        
    }
`;
const Header = styled.h2 `
    font-size: 3.25rem;
    font-weight: bold;
    color: white;
    max-width: 25rem;
    margin 0;

    @media (max-width: 768px){
       font-size: 2.75rem;
       align-items: center;
       justify-content: center;
       max-width: 30rem;
       text-align: center;
        
    }
    
`;
const Paragraph = styled.p `
    color: #6b7280;
    max-width: 25rem;
    font-size: 1.25rem;
    margin-top: 0;

    @media (max-width: 768px){
       
        text-align: center;
    }

`;
const PictureContainer = styled.img `
    border-radius: 1rem;
    margin-left: 2%;
    margin-top: 3%;
    width: 25%;
    filter: drop-shadow(5px 5px); 
    flex-direction: row;
    order: 2;

    @media (max-width: 768px){
        margin-left: 0;
        margin-top: 5%;
        width: 40%;
        order: 1;
        
        
        
    }
`;
const StyledLink = styled(Link)`
  display: flex; 
  align-items: center;  
   
  color: white;  
  width: fit-content;  
  padding: 0.75rem 1.5rem;  
  margin: 0.5rem 0;  
  border-radius: 0.375rem;  
  background: linear-gradient(to right, #06b6d4, #3b82f6);  
  cursor: pointer;  
  transition: all 0.3s ease;  

  .arrow {
    margin-left: 1rem;
    transition: transform 0.3s ease; 
  }

  &:hover .arrow {
    transform: rotate(90deg); 
  }
`;
export default function Home() {
        return (
        <HomeContainer>
            <ScrollToHashElement behavior="smooth"/>
            <Div1>
                <Div2>
                    <Header>
                        I'm a Computer Science Student 
                    </Header>
                    <Paragraph>
                        I have experience in Software Development and have built Full Stack projects.
                        I have also experimented with Data ETL Pipelines and Data visualization projects.
                        This website was made 100% using React and it's hosted on Vercel. 
                    </Paragraph>
                    <StyledLink to={`/About`} >
                    About Me 
                        <span>
                            <HiArrowNarrowRight size={25} className="arrow" />
                        </span>
                    </StyledLink>
                </Div2>
                <PictureContainer src={`headshot2.png`} alt="Stavros picture" />
            </Div1>
            
        </HomeContainer>
    );
}