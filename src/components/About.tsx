import styled from 'styled-components';
import {useRef, useEffect} from 'react';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 12%;
`;

const Outline = styled.div`
    display: flex;
    width: 40%;
    min-height: 400px;
    background-color: lightblue;
    filter: drop-shadow(5px 5px); 
    padding: 2rem;
    @media (max-width: 768px){
        width: 70%;
        min-height: 350px;
    }
`;


const Paragraph = styled.p`
    color: black;
    font-size: 2.25rem;
    font-weight: 700;
    text-align: center;
    display: flex;
    flex-direction: column;
    border-bottom: 4px solid #06b6d4;
    margin-bottom: 1rem;
`;

const Paragraph2 = styled.p`
    color: black;
    font-size: 1.5rem;
    text-align: center;
    margin-top: 2rem;
    line-height: 1.6;
`;

const ParagraphContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    width: 100%;
`;

export default function About() {
    const aboutRef = useRef(null);
    useEffect(() => {
        
        if (aboutRef.current) {
            console.log("Scrolling");
            (aboutRef.current as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, []);

    return (
        <HomeContainer ref={aboutRef}>
            <Outline>
                
                    <ParagraphContainer>
                    <Paragraph>About</Paragraph>
                    <Paragraph2> I have experience in Software Development and have built Full Stack projects.
                        I have also experimented with Data ETL Pipelines and Data visualization projects.
                        This website was made 100% using React and it's hosted on Vercel. 
                    </Paragraph2>
                    </ParagraphContainer>
               

            </Outline>
        </HomeContainer>
)
}