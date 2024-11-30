import styled from "styled-components";
const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
        max-width: 25%;
        height: auto;
        margin-right: 5%;
        filter: drop-shadow(5px 5px);
        margin-bottom: 5%;

    }
    @media (max-width: 750px) {
        flex-direction: column;
    }
`;
const ImageText = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: large;
    border: 2px solid gray;
    background-color: white;
    border-radius: 5px;
    filter: drop-shadow(5px 5px);
    line-height: 1.8;
    margin-bottom: 5%;
    padding: 1.25%;
    color: black;

    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
`;
export default function Experiences() {
    return (
        <>
            <ProfileContainer>
                <img src={`Lemma Legal.svg`} alt={`Lemma Legal`}/>
                <ImageText>
                    <p>I am currently working at Lemma Legal, which is a legal tech company. I began working for the
                        company
                        in May 2023 and since then I have worked year round at the company.</p>
                    <p>It has allowed me to take on projects that are used by clients of different backgrounds.</p>
                </ImageText>
            </ProfileContainer>
            <ProfileContainer>
                <img src={`slab.jpg`} alt={`SlabStox`}/>
                <ImageText>
                    <p>I also work for a social media brand where I generate graphics and content for their daily
                        newsletter.</p>
                    <p>It gives me an opprotunity to research trends in social media and to execute different techniques
                        to
                        keep the audience engaged in the newsletter.</p>
                </ImageText>
            </ProfileContainer>
        </>
    )
}