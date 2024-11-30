import styled from 'styled-components';

// Styled container for profile image and text, aligned side by side
const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;          // Arrange image and text in a row
    align-items: center;          // Align items vertically in the center

    img {
        max-width: 20%;           // Image takes up 20% of the container
        height: auto;             // Maintain aspect ratio
        margin-right: 5%;         // Space between image and text
        filter: drop-shadow(5px 5px); // Add shadow around the image
        margin-bottom: 5%;        // Space below the image
    }
`;

// Styled component for the text next to the image
const ImageText = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: large;
    border: 2px solid gray;       // Border around the text
    background-color: white;      // White background for the text box
    border-radius: 5px;           // Rounded corners for the text box
    filter: drop-shadow(5px 5px); // Shadow around the text box
    line-height: 1.8;             // Increased line spacing for readability
    margin-bottom: 5%;            // Space below the text box
    padding: 1.25%;               // Internal padding inside the text box
    color: black;
`;

// Courses component that lists different courses with images and descriptions
export default function Courses() {
    return (
        <>
            {/* Profile container for CS 391 web development course */}
            <ProfileContainer>
                <img src={`webdev.webp`} alt={`CS 391`} />
                <ImageText>
                    <p>CS 391 is a web development class that teaches a variety of programming languages for web development.</p>
                    <p>Languages that are taught in this class include HTML, JS, CSS, React, and Node.js</p>
                </ImageText>
            </ProfileContainer>

            {/* Profile container for CS 350 distributed systems course */}
            <ProfileContainer>
                <img src={`system.png`} alt={`CS 350`} />
                <ImageText>
                    <p>CS 350 is a course on distributed system and the coding assignments are in C. According to the description of the class, the course discusses system design principles, performance analysis, communication and synchronization primitives, concurrency control, database transactions, and data consistency.</p>
                </ImageText>
            </ProfileContainer>

            {/* Profile container for CS 357 information security course */}
            <ProfileContainer>
                <img src={`infosec.avif`} alt={`CS 357`} />
                <ImageText>
                    <p>CS 357 is a course on information security. According to the description of the class, the course discusses basic concepts needed for understanding information security. Discusses vulnerabilities, design principles, basic algorithms, security definitions, and analytical methods. Covers system security, network security, web security, cryptography, and data privacy.</p>
                </ImageText>
            </ProfileContainer>
        </>
    );
}
