import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem;
`;

// Projects component that displays information about different projects
export default function Projects() {
    return (
    <ProjectsContainer>
      <ProjectCard
        title="Blog Site"
        description="Blog Platform where users can create, follow, and view other blog posts from people they follow, or from the Explore page."
        link="https://github.com/stavros-0/blog"
      />
      <ProjectCard
        title="Personal Website"
        description="The source code for this website, built using React and Typescript."
        link=""
      />
      <ProjectCard
        title="Data Science Project"
        description="A data science project that uses SQL and Tableau to generate insights from the COVID-19 pandemic."
        link="https://github.com/stavros-0/DataProject"
      />
      <ProjectCard
        title="OWASP Cheat Sheet"
        description="Open Source Contributions to OWASP Cheat Sheet Series."
        link="https://github.com/stavros-0/CheatSheetSeries"
      />
      
    </ProjectsContainer>
  );
}
