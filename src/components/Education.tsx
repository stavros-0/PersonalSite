import styled from 'styled-components';

// Styled container for the profile image and text, aligned side by side
const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;          // Align image and text in a row
    align-items: center;          // Align items vertically in the center

    img {
        max-width: 20%;           // Image takes up 20% of the container width
        height: auto;             // Maintain the aspect ratio of the image
        margin-right: 5%;         // Space between the image and text
        filter: drop-shadow(5px 5px); // Add shadow around the image
        margin-bottom: 5%;        // Space below the image
    }

    @media (max-width: 750px) {
        flex-direction: column;   // Stack image and text vertically on small screens
    }
`;

// Styled component for the text next to the image
const ImageText = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: large;
    border: 2px solid gray;       // Border around the text
    background-color: white;      // White background for the text box
    border-radius: 5px;           // Rounded corners for the text box
    filter: drop-shadow(5px 5px); // Add shadow around the text box
    line-height: 1.8;             // Increased line spacing for readability
    margin-bottom: 5%;            // Space below the text box
    padding: 1.25%;               // Internal padding for the text box
    color: black;

    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;   // Stack text content vertically on smaller screens
        justify-content: flex-end; // Align content at the bottom on smaller screens
    }
`;

// Education component displaying education history with images and descriptions
export default function Education() {
    return (
        <>
            {/* Profile container for Boston University education */}
            <ProfileContainer>
                <img src={`bu.webp`} alt={`BU`} />
                <ImageText>
                    <p>Currently I am a senior at Boston University studying Computer Science</p>
                    <p>The Computer Science classes that I am currently taking are CS 350, CS 357, and CS 391.</p>
                    <p>Other classes that I have taken are CS 330, a course in Computer Algorithms.</p>
                    <p>I have also taken CS 320, a course in functional programming. The language used in this class is OCaml, and at the end of this class I created a language compiler.</p>
                    <p>I have also taken CS 237, which is a class in Probabilities and Statistics in Computing.</p>
                </ImageText>
            </ProfileContainer>

            {/* Profile container for UMASS Amherst education */}
            <ProfileContainer>
                <img src={`umass.jpg`} alt={`UMASS`} />
                <ImageText>
                    <p>For my freshman year I went to UMASS Amherst and I was a Finance Major. After taking some classes in Computer Science and doing research on the major I decided to switch my major.</p>
                </ImageText>
            </ProfileContainer>
        </>
    );
}
