import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p style={{ marginLeft: '2rem' }}>
        Hi, my name is <HighlightSpan>Iqbaltul Ilham</HighlightSpan>!
      </p>
      <p style={{ marginLeft: '2rem' }}>
        I'm <HighlightAlt>a backend developer</HighlightAlt> || <HighlightAlt>a full-stack developer</HighlightAlt> based in Pekanbaru,
        Riau.
      </p>
      <p style={{ marginLeft: '2rem' }}>
       a graduate who is passionate about coding and learning new technologies.
      </p>
    </AboutWrapper>
  );
};

export default About;
