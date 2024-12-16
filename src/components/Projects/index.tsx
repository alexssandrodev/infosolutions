
import { projects } from '@/constants/projects';
import './projects.css';
import { Project } from '@/types/Project';
import { ProjectItem } from '../Projecttem';

function Projects() {
    const projectList = projects;
    return (
        <section className="projects__container container" id='projects'>
            <h3>Projetos desenvolvidos</h3>
            <div className="project_list">
                {projectList.map((project: Project) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export { Projects };
