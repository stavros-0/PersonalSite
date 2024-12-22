import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 500px;
  background-color:rgb(190, 199, 214);
  color: white;
  border: 2px solidrgb(84, 94, 96);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 12%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: rgb(15,15,15);
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color:rgb(15, 15, 15);
  text-align: center;
  margin: 1% 5%;
`;

export default function ProjectCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  const handleCardClick = () => {
    window.open(link, "_blank"); // Opens the link in a new tab
  };

  return (
    <Card onClick={handleCardClick}>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
}
