import type { InternalProject } from "../../types/project";
import ProjectPreview from "./ProjectPreview";

type ProjectListProps = {
  projects: InternalProject[];
  onSelectProject: (project: InternalProject) => void;
};

export default function ProjectList({
  projects,
  onSelectProject,
}: ProjectListProps) {
  return (
    <div className="grid gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          onClick={() => onSelectProject(project)}
          className="cursor-pointer"
        >
          <ProjectPreview project={project} />
        </div>
      ))}
    </div>
  );
}