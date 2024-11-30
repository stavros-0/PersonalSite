import styled from "styled-components";

// Styled component for the text block containing project descriptions
const ImageText = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: large;
    border: 2px solid gray;
    background-color: white;
    border-radius: 5px;
    filter: drop-shadow(5px 5px); // Adds a shadow around the text box
    line-height: 1.8;
    margin-bottom: 5%;            // Space below the text box
    padding: 1.25%;               // Internal padding
    color: black;

    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end; // Align content at the bottom on smaller screens
    }
`;

// Styled container to align the image and text side by side
const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;          // Align image and text in a row
    align-items: center;

    img {
        width: 40%;               // Image takes up 40% of the container
        height: auto;             // Maintain aspect ratio
        margin-right: 5%;         // Space between image and text
        filter: drop-shadow(5px 5px); // Adds a shadow around the image
        margin-bottom: 2%;        // Space below the image
    }

    @media (max-width: 750px) {
        flex-direction: column;   // Stack image and text vertically on smaller screens
    }
`;

// Styled container for the calculator project section
const CalculatorContainer = styled.div`
    padding-top: 1%;              // Space at the top of the container
    justify-content: center;      // Center the content horizontally
    align-items: center;          // Center the content vertically
    display: flex;
    flex-direction: column;
    border: 2px solid gray;       // Border around the container
    background-color: rgb(216, 212, 212); // Light gray background color
    filter: drop-shadow(5px 5px); // Shadow effect on the container
    margin-bottom: 5%;            // Space below the container
    min-height: 15%;              // Minimum height of the container
`;

// Projects component that displays information about different projects
export default function Projects() {
    return (
        <>
            {/* Text block describing the first project */}
            <ImageText>
                <p>Here is a javascript project completed in September 2024.</p>
            </ImageText>

            {/* Container for the calculator project */}
            <CalculatorContainer>
                <Calculator />
            </CalculatorContainer>

            {/* Text block describing the blog project */}
            <ImageText>
                <p>Another Project that I have started in September 2024, is a blog web app.</p>
                <p>This is a full stack project that uses python and Flask.</p>
                <p>So far the backend is more developed than the frontend. Users are able to make an account, follow other
                accounts,</p>
                <p>write their own blog, and explore blogs from the explore page.</p>
            </ImageText>

            {/* Container for the blog project image */}
            <ProfileContainer>
                <img src={`Screenshot%202024-09-20%20at%2010.21.39%E2%80%AFAM.png`} alt={`Blog`} />
            </ProfileContainer>
        </>
    )
}
