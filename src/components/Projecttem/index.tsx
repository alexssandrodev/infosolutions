
import { Project } from '@/types/Project';
import './project_item.css';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectItemProps {
    project: Project;
}

function ProjectItem({ project }: ProjectItemProps) {
    return (
        <section className="project__container">
            <div className="project">
                <Image className='image_project' src={project.image} width={200} height={200} alt='Imagem' />
                <div className="project_infos">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
                <div className="links">
                    <ul>
                        <Link className='button-fill' href={project.githubLink} target='_blank'><li>Github</li></Link>
                        <Link className='button' href={project.siteLink} target='_blank'><li>Ver site</li></Link>
                    </ul>
                </div>
                <div className="tags">
                    {project.techTags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { ProjectItem };
