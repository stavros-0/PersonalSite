import styled from 'styled-components';

// Styled component for profile container, aligning image and text side by side
const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;  // Image and text in a row layout
    align-items: center;

    img {
        max-width: 20%;   // Image occupies up to 20% of the container width
        height: auto;     // Maintain the aspect ratio of the image
        margin-right: 5%; // Space between image and text
        filter: drop-shadow(5px 5px); // Add shadow effect to the image
        margin-bottom: 5%; // Add space below the image
    }

    @media (max-width: 750px) {
        flex-direction: column;  // Stack image and text vertically on small screens
    }
`;

// Styled component for text associated with the image
const ImageText = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: large;
    border: 2px solid gray;      // Border around the text
    background-color: white;     // Background color for the text box
    border-radius: 5px;          // Rounded corners
    filter: drop-shadow(5px 5px); // Shadow around the text box
    line-height: 1.8;            // Increase spacing between lines
    margin-bottom: 5%;           // Space below the text box
    padding: 1.25%;              // Internal padding inside the text box
    color: black;

    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end; // Align content to the end on smaller screens
    }
`;

// Books component displaying book summaries with associated images
export default function Books() {
    return (
        <>
            {/* Profile container for Snowball book */}
            <ProfileContainer>
                <img src={`snowball.jpg`} alt={"Snowball"} />
                <ImageText>
                    <p>Snowball by Alice Shroeder is an 832 page book that goes through the life of Warren Buffett.</p>
                    <p>Buffett is regarded as the best investor by most people interested in the financial world.</p>
                    <p>He studied under the legendary Benjamin Graham that is known for his value investing strategy.</p>
                    <p>Overall this book takes a deep dive in some of Buffett's successes and failures and allows the reader to learn from his life.</p>
                </ImageText>
            </ProfileContainer>

            {/* Profile container for The Intelligent Investor book */}
            <ProfileContainer>
                <img src={`investor.webp`} alt={"The Intelligent Investor"} />
                <ImageText>
                    <p>The Intelligent Investor is another long book that goes into detail the investing strategy of Benjamin Graham.</p>
                    <p>Benjamin Graham became one of the most well known investors during the Great Depression.</p>
                    <p>His investment style is a reflection of the difficult time period that he lived through.</p>
                    <p>After the Great Depression and the crash of the stock market, people lost their trust in the stock market.</p>
                    <p>However, Graham was able to find a bullet proof investment principle that buys companies for less than what they were worth.</p>
                </ImageText>
            </ProfileContainer>

            {/* Profile container for Third Door book */}
            <ProfileContainer>
                <img src={`door.png`} alt={"Third Door"} />
                <ImageText>
                    <p>Third Door is about the principle that everything in life has 3 doors. The first being the most conventional door where everyone lines up and waits outside of.</p>
                    <p>The second door is for the VIPs and people that have the connections already to help them past the ordinary crowd looking for success.</p>
                    <p>The third and last door is for the people that take the risk to leave the first two doors and to find another way into the doors of success.</p>
                    <p>In the book the author interviews major celebrities like Bill Gates, Steve Wozniak, Maya Angelou, Larry King, Steven Spielberg, and much more.</p>
                </ImageText>
            </ProfileContainer>
        </>
    );
}
