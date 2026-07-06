import type { InternalProject } from "../../types/project";
import ProjectPreview from "./ProjectPreview";

type ProjectListProps = {
  projects: InternalProject[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid gap-8">
      {projects.map((project) => (
        <ProjectPreview
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}