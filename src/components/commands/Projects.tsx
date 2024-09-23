// import { useContext, useEffect } from "react";
// import { User, WebsiteName, Wrapper } from "../styles/TerminalInfo.styled";
// import {
//   checkRedirect,
//   getCurrentCmdArry,
//   isArgInvalid,
// } from "../../utils/funcs";
// import {
//   ProjectContainer,
//   ProjectDesc,
//   ProjectsIntro,
//   ProjectTitle,
// } from "../styles/Projects.styled";
// import { termContext } from "../Terminal";
// import Usage from "../Usage";

// const Projects: React.FC = () => {
//   const { arg, history, rerender } = useContext(termContext);

//   /* ===== get current command ===== */
//   const currentCommand = getCurrentCmdArry(history);

//   /* ===== check current command is redirect ===== */
//   useEffect(() => {
//     if (checkRedirect(rerender, currentCommand, "projects")) {
//       projects.forEach(({ id, url }) => {
//         id === parseInt(arg[1]) && window.open(url, "_blank");
//       });
//     }
//   }, [arg, rerender, currentCommand]);

//   /* ===== check arg is valid ===== */
//   const checkArg = () =>
//     isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
//       <Usage cmd="projects" />
//     ) : null;

//     return arg.length > 0 || arg.length > 2 ? (
//       checkArg()
//     ) : (
//       <div data-testid="projects">
//         <ProjectsIntro>
//           <WebsiteName>“Here are some of my projects"</WebsiteName>
//         </ProjectsIntro>
//         <div style={{ marginLeft: '2rem' }}> {/* Menambahkan margin-left di sini */}
//           {projects.map(({ id, title, desc }) => (
//             <ProjectContainer key={id}>
//               <ProjectTitle><WebsiteName>{`${id}. ${title}`}</WebsiteName></ProjectTitle>
//               <ProjectDesc>{desc}</ProjectDesc>
//             </ProjectContainer>
//           ))}
//         </div>
//         <Usage cmd="projects" marginY />
//       </div>
//     );
    
// };

// const projects = [
//   {
//     id: 1,
//     title: "Sat Naing's Blog",
//     desc: "My personal blog where I can write down my thoughts and experiences.",
//     url: "https://satnaing.dev/blog/",
//   },
//   {
//     id: 2,
//     title: "Haru Fashion",
//     desc: "An ecommerce web application where users can browse various products and make purchases.",
//     url: "https://haru-fashion.vercel.app/",
//   },
//   {
//     id: 3,
//     title: "Haru API",
//     desc: "A RESTful API developed for the Haru fashion ecommerce project.",
//     url: "https://satnaing.github.io/haru-api/",
//   },
//   {
//     id: 4,
//     title: "AstroPaper Blog Theme",
//     desc: "A minimal, accessible and SEO-friendly Astro blog theme.",
//     url: "https://astro-paper.pages.dev/",
//   },
// ];

// export default Projects;
import { useContext, useEffect } from "react";
import { User, WebsiteName, Wrapper } from "../styles/TerminalInfo.styled";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4","5","6"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        <WebsiteName>“Here are some of my projects"</WebsiteName>
      </ProjectsIntro>
      <div style={{ marginLeft: '2rem' }}> {/* Menambahkan margin-left di sini */}
        {projects.map(({ id, title, desc, url }) => (
          <ProjectContainer key={id}>
            <ProjectTitle>
              <WebsiteName>
                <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                  {`[${id}] ${title}`}
                </a>
              </WebsiteName>
            </ProjectTitle>
            <ProjectDesc>{desc}</ProjectDesc>
          </ProjectContainer>
        ))}
      </div>
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Fragrance Clustering System Using K-Means Algorithm",
    desc: "developed a system to cluster perfurmes by fragrance notes",
    url: "",
  },
  {
    id: 2,
    title: "Scholarship Recipient Selection using TOPSIS Method",
    desc: "a Decision Support System to rank scholarship candidates using the TOPSIS method",
    url: "",
  },
  {
    id: 3,
    title: "Eligibility Determination for Program Keluarga Harapan (PKH)",
    desc: "a Decision Support System for eligibility determination for program keluarga harapan",
    url: "",
  },
  {
    id: 4,
    title: "To-Do List",
    desc: "Develop a web based task management systems",
    url: "",
  },
  {
    id: 5,
    title: "Point of Sale API",
    desc: "developed a secure API for POS with JWT authentication and email notifications.",
    url: "",
  },
  {
    id: 6,
    title: "Task Management API",
    desc: "developed a secure RESTful API for a Point of Sale system, incorporating JWT authentication for user verification and email notifications through Gmail SMTP. This API includes comprehensive CRUD functionalities for managing categories, products, users, transactions, customers, inventory, and suppliers.",
    url: "",
  },
];

export default Projects;
