import styled from 'styled-components';


const HomeContainer = styled.div `
    height: 88vh;
    width: 100vw;
    display: flex;
    background-color: #0a192f;
    align-items: center;
    justify-content: center;

`;

const Outline = styled.div`
    display: flex;
    flex-direction: column;
    
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    
    background-color: lightblue;
    filter: drop-shadow(5px 5px); 
    @media (max-width: 768px){
        width: 70%;
        
    }
`;
const Outline2 = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    

`;
const Paragraph = styled.p `
    color: black;
    font-size: 2.25rem;
    font-weight: 700;
    text-align: center;
    display: flex;
    flex-direction: column;
    border-bottom: 4px solid #06b6d4;
`;
const Paragraph2 = styled.p`
    color: black;
    font-size: 1.5rem;
    text-align: center;
    
`;
const ParagraphContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    
    max-width: 60%;
    
    
`;

export default function About() {
    
    return(

        <HomeContainer id="about">
            <Outline>
                <Outline2>
                    <ParagraphContainer>
                    <Paragraph>About</Paragraph>
                    <Paragraph2> I have experience in Software Development and have built Full Stack projects.
                        I have also experimented with Data ETL Pipelines and Data visualization projects.
                        This website was made 100% using React and it's hosted on Vercel. 
                    </Paragraph2>
                    </ParagraphContainer>
                </Outline2>

            </Outline>
        </HomeContainer>
)
}