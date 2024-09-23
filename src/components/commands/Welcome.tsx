import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
         
        </PreName>
    
        <div>Welcome to my portfolio. (Version 1.0.0)</div>
        <div>Here you can get some information about me.</div>
        <Seperator>---------------------------------------------</Seperator>
          <div>
            For a list of available commands, type `<Cmd>help</Cmd>`.
          </div>
          <br />        
      </div>
      
    </HeroContainer>
  );
};

export default Welcome;
