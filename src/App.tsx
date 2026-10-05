import snakeImg from './assets/NeuroevolutionSnake1.png'
import nomadGif from './assets/NomadEngine.gif'
import cmp208GameProjectImg from './assets/CMP208GameProject.png'
import abyssalDepthsImg from './assets/AbyssalDepths.png'
import graphicsProjectImg from './assets/CMP301GraphicsProject.png'
import sincantationImg from './assets/Sincantation.png'
import breathingSpaceImg from './assets/BreathingSpace.png'
import bornToKrillImg from './assets/BornToKrill.png'
import speedLichImg from './assets/SpeedLich.png'
import galacticGarageImg from './assets/GalacticGaragePoster.png'
import githubLogo from './assets/GithubLogo.png'
import itchLogo from './assets/ItchLogo.png'
import abertayLogo from './assets/AbertayUniversityWhiteLogo.png'
import renewablePartsLogo from './assets/RenewablePartsLogo.png'
import unityVoxImporterImg from './assets/UnityVoxImporter.png'
import cvPdf from './assets/CV-ToddGontarek.pdf'
import './App.css'
import { useState } from 'react'

class HyperlinkObject {
  imageSrc: string = ""
  link: string = ""
}

function App() {
  const [display_cv, setDisplayCV] = useState(false)

  function handleClick() {
    setDisplayCV(!display_cv)
  }

  return (
    <>
    {/*Header*/}
    <div className="main_div">
      <h1 style={{margin: "auto", padding: "15px", lineHeight:"0.75"}}>Todd A. Gontarek</h1>
      <p style={{margin: "auto", padding: "0px", lineHeight:"0.75"}}>Game Engine Developer & Software Engineer</p>
      <div className="hyperlinkSection">
        <a href="https://github.com/Gontarekt">
          <img
            className="HyperlinkButtons"
            src={githubLogo}
            alt="Github"
          />
        </a>
        <a href="https://gontarekt.itch.io/">
          <img className="HyperlinkButtons" src={itchLogo} alt="Itch" />
        </a>
      </div>
    </div>

    <button style={{marginTop:"10px"}} onClick={handleClick}>DisplayCV</button>
    <DisplayCV display_cv={display_cv} />

    <h1 className="ShowcaseSectionHeaders">University Projects</h1>
    <div className="showcase-grid">
      <ShowcaseBlock
        imageSrc={galacticGarageImg} 
        header="Galactic Garage"
        year="2026" 
        hyperlinks={[{imageSrc: itchLogo, link: "https://zero-bounds-studios.itch.io/galactic-garage"}]}
        highlightedWords={["Godot"]} 
        description="Made for my DES315 Professional Project module, this was created from a brief provided by a client requiring a local co-op party game. In it you work alongside a friend to repair ships whilst repairing malfunctions to your own ship impeding your progress."
      />
      <ShowcaseBlock
        imageSrc={nomadGif} 
        header="Nomad Engine"
        year="2025" 
        hyperlinks={[{imageSrc: githubLogo, link: "https://github.com/Toddynator/NomadEngine"}]} 
        highlightedWords={["C++", "CMake", "Entt", "DirectX11", "Jolt"]} 
        description="A C++ Game Engine with a full Level Editor and Entity Component System. Uses Entt Meta for C++ Reflection."
      />
      <ShowcaseBlock
        imageSrc={abyssalDepthsImg} 
        header="Abyssal Depths"
        year="2023" 
        hyperlinks={[{imageSrc: itchLogo, link: "https://gontarekt.itch.io/abyssal-depths"}]}
        highlightedWords={["SFML"]} 
        description="A roguelike underwater hunting game with multiple paths to progress. Made for my 1st year Games Programming university module."
      />
      {/* {imageSrc: githubLogo, link: "https://github.com/Toddynator/cmp105-groupproject-geodude"} */}
      <ShowcaseBlock
        imageSrc={cmp208GameProjectImg} 
        header="CMP208 PS5 Game Project"
        year="2024" 
        hyperlinks={[]}
        highlightedWords={["PS5", "C++", "Entt"]} 
        description="A game made on the university 'Skateboard' game engine for the Game Programming and System Architectures university module. It was developed using a PS5 Dev kit and runs on both Windows and PS5."
      />
      <ShowcaseBlock
        imageSrc={snakeImg} 
        header="Neuroevolution Snake AI"
        year="2025" 
        hyperlinks={[{imageSrc: githubLogo, link: "https://github.com/Toddynator/Neuroevolution_Snake_AI_Unity/tree/main"}]} 
        highlightedWords={["Unity"]} 
        description="A Genetic Algorithm trained Neural Network for classic snake. Project successfully trained a snake to reach full length."
      />
      <ShowcaseBlock
        imageSrc={graphicsProjectImg} 
        header="CMP301 Graphics Project"
        year="2025" 
        hyperlinks={[]}
        highlightedWords={["C++", "DirectX11"]} 
        description="Made for my Graphics Programming with Shaders university module, I showcase a dynamic post-processing stack as well as dynamic tessellation. Additionally I demonstrate shadows for point, spot & directional lights."
      />
    </div>
      
    <h1 className="ShowcaseSectionHeaders">Game Jams</h1>
    <div className="showcase-grid">
      <ShowcaseBlock
        imageSrc={breathingSpaceImg} 
        header="Breathing Space"
        year="2024" 
        hyperlinks={[{imageSrc: itchLogo, link: "https://linkazen.itch.io/breathing-space"}]}
        highlightedWords={["Godot"]} 
        description="Made for the Abertay Game Development Society's 2024 Fresher jam with the theme 'Finite Space'. Survive for 10 minutes on a spaceship whilst fixing leaks whilst trying to evade a lurking monster."
      />
      <ShowcaseBlock
        imageSrc={sincantationImg} 
        header="Sincantation"
        year="2024" 
        hyperlinks={[{imageSrc: itchLogo, link: "https://jowsey.itch.io/sincantation"}]}
        highlightedWords={["Unity"]} 
        description="Made for the week-long Abertay Game Development Society February Game Jam with the theme 'Two to one'. A roguelike where you combine spells to make powerful incantations to fight enemies in a dungeon."
      />
      <ShowcaseBlock
        imageSrc={bornToKrillImg} 
        header="Born to Krill"
        year="2025" 
        hyperlinks={[{imageSrc: itchLogo, link: "https://aronagox.itch.io/born-to-krill"}]}
        highlightedWords={["Unity"]} 
        description="Made for the 48 hour Global Game jam 2025. You are a krill battling an octopus."
      />
      <ShowcaseBlock
        imageSrc={speedLichImg} 
        header="Speed Lich"
        year="2024" 
        hyperlinks={[{imageSrc: itchLogo, link: "https://linkazen.itch.io/speedlich"}]}
        highlightedWords={["Godot"]} 
        description="Created for the 2024 Halloween Abertay Game Development Society Game Jam. Run around as a lich and try to survive for as long as possible."
      />
    </div>

    <h1 className="ShowcaseSectionHeaders">Personal Projects</h1>
    <div className="showcase-grid">
      <ShowcaseBlock
        imageSrc={unityVoxImporterImg} 
        header="Unity Vox Importer"
        year="2025" 
        hyperlinks={[]}
        highlightedWords={["Unity"]} 
        description="A .Vox (Magicavoxel voxel file) importer I made for Unity due to there being no free importers available. It has options to generate meshes using greedy meshing or simple culling meshing. Also supports different data formats for storing voxels"
      />
      {/*{imageSrc: githubLogo, link: "https://github.com/Gontarekt/VoxelPhysics-Test"}*/}
    </div>

  {/*Work Experience*/}
  <div className="main_div">
    <h2>Work Experience</h2>
    <hr className="solid" />
    <img
      src={abertayLogo}
      style={{ width: "40%", marginBottom: 0 }}
      alt="AbertayUniversity"
    />
    <p>
      Lab Assistant | Graphics Programming with Shaders | Abertay University
    </p>
    <h5>
      2026-Present
    </h5>
    <hr className="solid" style={{ marginBottom: "2.5%" }} />
    <img
      src={renewablePartsLogo}
      style={{ width: "40%", marginBottom: 0, borderRadius: 25 }}
      alt="RenewableParts"
    />
    <p>
      Workshop & Research Assistant | Renewable Parts Ltd.
      </p>
    <h5>
      2022-2026
    </h5>
  </div>
</>
  )
}
export default App

// function MyButtonComponent (buttonText: string, onClick: MouseEventHandler<HTMLButtonElement>) {
//     return (
//         <button onClick={onClick}>
//           {buttonText}
//         </button>
//     );
// }

function DisplayCV({display_cv}: {display_cv: boolean}) {
  if (display_cv)
  {
    return( 
    <embed
      src={cvPdf}
      width="100%"
      height="1200px"
    />);
  }
  else
  {
    return null
  }
}

interface ShowcaseBlockProperties {
  imageSrc: string
  header: string
  year: string
  hyperlinks: HyperlinkObject[]
  highlightedWords: string[]
  description: string
}
function ShowcaseBlock (args: ShowcaseBlockProperties) {
  return (
    <>
    <div className="portfolio_showcase_block">
      <div className="showcase_block_image">
        <img src={args.imageSrc} className="image" />
      </div>
      <hr className="showcase-block-separator" />
      <div className="showcase_block_description_section">
        <div className="showcase_block_header_section">
          <h2 className="showcase_block_left_header">
            {args.header}
          </h2>
          <h5 className="showcase_block_right_header">{args.year}</h5>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: "-20px",
            marginBottom: "-10px"
          }}
        >
          {ListHighlightedWords(args.highlightedWords)}
        </div>
        <p className="showcase_block_paragraph">
          {args.description}
        </p>
      </div>
      <hr className="showcase-block-separator" />
      {args.hyperlinks.length > 0 && (
        <div className="showcase_block_hyperlink_section">    
            {GenerateHyperlinkButtons(args.hyperlinks)} 
        </div>
      )}
    </div>
    </>
  );
}
function GenerateHyperlinkButtons(hyperlinks: HyperlinkObject[]) {
  const listHyperlinks = hyperlinks.map(hyperlink =>
    <li
    key={hyperlink.link}
    >
      <a href={hyperlink.link}>
            <img
              className="HyperlinkButtons"
              style={{ width: "40px", height: "40px" }}
              src={hyperlink.imageSrc}
            />
          </a>
    </li>
  );

  return (
    <ul>{listHyperlinks}</ul>
  );
}
function ListHighlightedWords(highlightedWords: string[]) {
  const ListHighlightedWords = highlightedWords.map(highlightedWord =>
    <li
    key={highlightedWord}
    >
      <h5 style={{ color: "rgb(151, 151, 151)", alignSelf: "center" }}>
            {highlightedWord}
      </h5>
    </li>
  );

  return (
    <ul>{ListHighlightedWords}</ul>
  );
}
