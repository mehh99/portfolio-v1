import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <br />
      <EduIntro style={{ marginLeft: '2rem' }}>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title} style={{ marginLeft: '2rem' }}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg  = [
  {
    title: "[+] Universitas Putra Indonesia YPTK Padang ",
    desc: "2020 - 2024",
  },
];

export default Education;
