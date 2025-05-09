import { aboutStyle } from "../Styles/Style";
export default function About() {
  return (
    <main className={aboutStyle.main}>
      <div className={aboutStyle.div}>
        <h1 className={aboutStyle.h1}>About GlobePeek</h1>

        <section>
          <h2 className={aboutStyle.h2}>What is GlobePeek?</h2>
          <p className={aboutStyle.p}>
            GlobePeek is a modern web application that provides detailed
            information about countries around the world — including geographic,
            demographic, and economic data. It was built to deliver a simple,
            intuitive way to explore global insights through interactive and
            responsive design.
          </p>
        </section>

        <section>
          <h2 className={aboutStyle.h2}>Why this project?</h2>
          <p className={aboutStyle.p}>
            This project was created as a personal challenge to practice
            advanced React concepts, work with live API integrations, and
            explore responsive UI development using Tailwind CSS. It combines
            data from REST Countries and Global Bank APIs to offer real-time
            global insights.
          </p>
        </section>

        <section>
          <h2 className={aboutStyle.h2}>Tech Stack</h2>
          <ul className={aboutStyle.ul}>
            <li>React</li>
            <li>React Router</li>
            <li>Tailwind CSS</li>
            <li>REST Countries API</li>
            <li>Global Bank API</li>
          </ul>
        </section>

        <section>
          <h2 className={aboutStyle.h2}>About the Developer</h2>
          <p className={aboutStyle.p}>
            Made by
            <span className="text-blue-300 font-semibold underline">
              <a target="_blank" href="https://github.com/MontherALS">
                MontherALS
              </a>{" "}
            </span>
          </p>
        </section>
      </div>
    </main>
  );
}
