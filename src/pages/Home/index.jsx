import { FaLinkedinIn } from "react-icons/fa";
import { DiGithubAlt } from "react-icons/di";

import "./styles.scss";

export function Home() {
  return (
    <div className="homeContainer">
      <div className="homeContent">
        <h1>
          Ivny <span className="detailTitle">Xavier</span> Metzker
        </h1>
        <p>
          Estudante de tecnologia com experiência em desenvolvimento web
          front-end. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nobis recusandae id laborum.
        </p>
        <div className="iconsLink">
          <div className="iconLink">
            <FaLinkedinIn size={20} />
          </div>
          <div className="iconLink">
            <DiGithubAlt size={25} />
          </div>
        </div>
      </div>
      <div className="containerImage">
        <img
          src="https://png.pngtree.com/background/20230617/original/pngtree-isolated-white-background-ai-robot-finger-point-in-3d-render-picture-image_3704502.jpg"
          alt="Imagem da autora do site, uma mulher morena de cabelos castanhos com um óculos de realidade aumentada."
        />

        <div className="detailImage one">💻 Development</div>
        <div className="detailImage two">✨ Ui/Ux Design</div>
        <div className="detailImage three">🛸 Technology</div>
        <div className="detailImage four">🚀 Software Engineering</div>
      </div>
    </div>
  );
}
