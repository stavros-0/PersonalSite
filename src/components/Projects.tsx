import styled from "styled-components";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
`;

// Styled component for the text block containing project descriptions
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
        margin-bottom: 2%;       
    }

    @media (max-width: 750px) {
        flex-direction: column;   // Stack image and text vertically on smaller screens
    }
`;

// Projects component that displays information about different projects
export default function Projects() {
    return (
        <HomeContainer>
            {/* Text block describing the first project */}
            <ImageText>
                <p>Here is a javascript project completed in September 2024.</p>
            </ImageText>

            {/* Text block describing the blog project */}
            <ImageText>
                <p>A project that I have started in September 2024, is a blog web app.</p>
                <p>This is a full stack project that uses python and Flask.</p>
                <p>So far the backend is more developed than the frontend. Users are able to make an account, follow other
                accounts,</p>
                <p>write their own blog, and explore blogs from the explore page.</p>
            </ImageText>

            {/* Container for the blog project image */}
            <ProfileContainer>
                <img src={`Screenshot%202024-09-20%20at%2010.21.39%E2%80%AFAM.png`} alt={`Blog`} />
            </ProfileContainer>
        </HomeContainer>
    )
}
