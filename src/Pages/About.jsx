export default function About() {
  return (
    <main className="min-h-screen bg-gray-800 text-white p-6 sm:p-10 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-300 border-b border-blue-500 pb-2">
          About GlobePeek
        </h1>

        <section>
          <h2 className="text-2xl font-semibold text-blue-400 mb-2">
            What is GlobePeek?
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            GlobePeek is a modern web application that provides detailed
            information about countries around the world — including geographic,
            demographic, and economic data. It was built to deliver a simple,
            intuitive way to explore global insights through interactive and
            responsive design.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-400 mb-2">
            Why this project?
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            This project was created as a personal challenge to practice
            advanced React concepts, work with live API integrations, and
            explore responsive UI development using Tailwind CSS. It combines
            data from REST Countries and Global Bank APIs to offer real-time
            global insights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-400 mb-2">
            Tech Stack
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-300 space-y-1">
            <li>React</li>
            <li>React Router</li>
            <li>Tailwind CSS</li>
            <li>REST Countries API</li>
            <li>Global Bank API</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-400 mb-2">
            About the Developer
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            Made by{" "}
            <span className="text-blue-300 font-semibold underline">
              {" "}
              <a href="https://github.com/MontherALS">MontherALS</a>{" "}
            </span>
          </p>
        </section>
      </div>
    </main>
  );
}
