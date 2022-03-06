import { Divider, ProjectCardContainer, ProjectImage } from "./styles";

type ProjectCardProps = {
  img: string;
  titleText: string;
  bodyText: string;
};

const ProjectCard = ({ img, titleText, bodyText} : ProjectCardProps) => {
  return(
    <ProjectCardContainer>
      <ProjectImage src={img} />
      <Divider />
      <h1>{titleText}</h1>
      <p>{bodyText}</p>
    </ProjectCardContainer>
  );
};

export default ProjectCard;