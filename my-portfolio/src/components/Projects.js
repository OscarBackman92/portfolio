import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  const projects = [
    { name: t('project1'), description: "Description of Project 1", link: "https://github.com/myusername/project1" },
    { name: t('project2'), description: "Description of Project 2", link: "https://github.com/myusername/project2" },
  ];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">{t('myProjects')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-500 mt-2 inline-block">{t('viewGitHub')}</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
