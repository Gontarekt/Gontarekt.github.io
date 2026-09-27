import { useState } from 'react'
import snakeImg from './assets/NeuroevolutionSnake1.png'
import nomadGif from './assets/NomadEngine.gif'
import galacticGarageImg from './assets/GalacticGaragePoster.png'
import githubLogo from './assets/githubLogo.png'
import itchLogo from './assets/itchLogo.png'
import abertayLogo from './assets/AbertayUniversityWhiteLogo.png'
import renewablePartsLogo from './assets/renewablePartsLogo.png'
import './App.css'

class HyperlinkObject {
  imageSrc: string = ""
  link: string = ""
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*Header*/}
    <div className="main_div" style={{ textAlign: "center" }}>
      <h1 style={{ marginBottom: "4px" }}>Todd A. Gontarek</h1>
      <p style={{ marginTop: "4px" }}>Game Engine Developer & Software Engineer</p>
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

    <>
  <div className="showcase_row">
    <ShowcaseBlock
            imageSrc={snakeImg} 
            header="Neuroevolution Snake AI"
            year="2025" 
            hyperlinks={[{imageSrc: githubLogo, link: "https://github.com/Toddynator/Neuroevolution_Snake_AI_Unity/tree/main"}]} 
            highlightedWords={["Unity"]} 
            description="A Genetic Algorithm trained Neural Network for classic snake. Project successfully trained a snake to reach full length."
          />
    <ShowcaseBlock
      imageSrc={nomadGif} 
      header="Nomad Engine"
      year="2025" 
      hyperlinks={[{imageSrc: githubLogo, link: "https://github.com/Toddynator/NomadEngine"}]} 
      highlightedWords={["C++", "CMake", "Entt", "DirectX11"]} 
      description="A C++ Game Engine with a full Level Editor and Entity Component System. Uses Entt Meta for C++ Reflection."
    />
    <ShowcaseBlock
      imageSrc={galacticGarageImg} 
      header="Galactic Garage"
      year="2026" 
      hyperlinks={[{imageSrc: itchLogo, link: "https://zero-bounds-studios.itch.io/galactic-garage"}]}
      highlightedWords={["Godot"]} 
      description="Placeholder"
    />
    <ShowcaseBlock
      imageSrc={snakeImg} 
      header="CMP301 Graphics Project"
      year="2025" 
      hyperlinks={[{imageSrc: githubLogo, link: "https://github.com/Abertay-University-SDI/cmp301_coursework-Toddynator"}]}
      highlightedWords={["C++", "DirectX11"]} 
      description="Placeholder"
    />
  </div>
  <div className="showcase_row">
          <ShowcaseBlock
      imageSrc={snakeImg} 
      header="Abyssal Depths"
      year="2023" 
      hyperlinks={[{imageSrc: itchLogo, link: "https://gontarekt.itch.io/abyssal-depths"}, {imageSrc: githubLogo, link: "https://github.com/Toddynator/cmp105-groupproject-geodude"}]}
      highlightedWords={["SFML"]} 
      description="Placeholder"
    />
    <ShowcaseBlock
      imageSrc={snakeImg} 
      header="CMP208 PS5 Game Project"
      year="2024" 
      hyperlinks={[{imageSrc: githubLogo, link: "https://github.com/Abertay-University-SDI/cmp208-coursework-06_one-in-a-krillion"}]}
      highlightedWords={["PS5", "C++", "Entt"]} 
      description="Placeholder"
    />
  </div>
  <div className="showcase_row">
    <ShowcaseBlock
      imageSrc={snakeImg} 
      header="Breathing Space"
      year="2024" 
      hyperlinks={[{imageSrc: itchLogo, link: "https://linkazen.itch.io/breathing-space"}]}
      highlightedWords={["Godot"]} 
      description="Placeholder"
    />
    <ShowcaseBlock
      imageSrc={snakeImg} 
      header="Sincantation"
      year="2024" 
      hyperlinks={[{imageSrc: itchLogo, link: "https://jowsey.itch.io/sincantation"}]}
      highlightedWords={["Unity"]} 
      description="Placeholder"
    />
    <ShowcaseBlock
      imageSrc={snakeImg} 
      header="Born to Krill"
      year="2024" 
      hyperlinks={[{imageSrc: itchLogo, link: "https://aronagox.itch.io/born-to-krill"}]}
      highlightedWords={["Godot"]} 
      description="Placeholder"
    />
    <ShowcaseBlock
      imageSrc={snakeImg} 
      header="Speed Lich"
      year="2024" 
      hyperlinks={[{imageSrc: itchLogo, link: "https://linkazen.itch.io/speedlich"}]}
      highlightedWords={["Godot"]} 
      description="Placeholder"
    />
  </div>

  <div className="showcase_row">
    <ShowcaseBlock
      imageSrc={snakeImg} 
      header="Unity Vox Importer"
      year="2025" 
      hyperlinks={[{imageSrc: githubLogo, link: "https://github.com/Gontarekt/VoxelPhysics-Test"}]}
      highlightedWords={["Unity"]} 
      description="Placeholder"
    />
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
    <hr className="solid" style={{ marginBottom: "2.5%" }} />
    <img
      src={renewablePartsLogo}
      style={{ width: "40%", marginBottom: 0, borderRadius: 25 }}
      alt="RenewableParts"
    />
    <p>Workshop & Research Assistant | Renewable Parts Ltd.</p>
  </div>
</>

    </>
  )
}
export default App



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
      {/*<hr class="showcase_block_separator" style="justify-content: top;margin-bottom: auto;">*/}
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
      {/*<hr class="showcase_block_separator">*/}
      <div className="showcase_block_hyperlink_section">    
          {GenerateHyperlinkButtons(args.hyperlinks)} 
      </div>
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
