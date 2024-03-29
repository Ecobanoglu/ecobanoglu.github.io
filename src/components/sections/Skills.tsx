import { ProgressBar, Section, List, Card } from "@/components/ui";

export default function About() {
  const knowledgeItems: string[] = [
    "Bootstrap, Tailwind CSS",
    "React, NextJs",
    "CSS, SCSS",
    "Gulp, Webpack",
    "NPM, Git",
  ];
  const knowledgeProgramItems: string[] = [
    "VS Code, Netbeans",
    "Visual Studio",
    "Adobe XD, Figma",
    "Jira, Asana, Trello",
    "Github, Jenkins",
  ];

  const interestItems: string[] = [
    "React (Redux, Hooks), NextJS",
    "Typescript",
    "RESTful API",
    "UI Frameworks",
    "Testing Tools",
  ];

  return (
    <Section
      title="Beceriler"
      id="knowledge"
      className="bg-white dark:bg-gray-900"
      data-wheel
    >
      {/*
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-16">
        <div className="grid gap-4 lg:gap-8">
          <ProgressBar title="HTML" value={95} />
          <ProgressBar title="CSS/SCSS" value={85} />
          <ProgressBar title="Javascript" value={80} />
          <ProgressBar title="Tailwind CSS" value={90} />
        </div>
        <div className="grid gap-4 lg:gap-8">
          <ProgressBar title="React" value={65} />
          <ProgressBar title="Next JS" value={50} />
          <ProgressBar title="Typescript" value={30} />
          <ProgressBar title="RESTful Api" value={40} />
        </div>
      </div>
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
        <div className="flex">
          <Card
            variant="about"
            title="10+"
            description="Yıl deneyimi"
            color="primary"
          />
        </div>
        <div className="flex">
          <Card
            variant="about"
            title="200+"
            description="Tamamlanan Proje"
            color="primary"
          />
        </div>
        <div className="flex">
          <Card
            variant="about"
            title="100K+"
            description="Kod Satırı"
            color="primary"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-16 mt-6 lg:mt-16">
        <div className="lg:col-span-2">
          <h3 className="text-2xl lg:text-3xl/small font-bold mb-4 lg:mb-6">
            Bildiklerim
          </h3>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-6">
            <List items={knowledgeItems} />
            <List items={knowledgeProgramItems} />
          </div>
        </div>
        <div>
          <h3 className="text-2xl lg:text-3xl/small font-bold mb-4 lg:mb-6">
            İlgilendiklerim
          </h3>
          <List items={interestItems} />
        </div>
      </div>
    </Section>
  );
}
