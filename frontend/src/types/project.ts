export type InternalProject = {
  id: string;

  title: string;
  summary: string;
  description: string;

  category: string;
  status: string;

  tags: string[];

  featuredImage?: string;
  gallery: string[];
  video?: string;

  learnings: string[];
  challenges: string[];

  github?: string;
  demo?: string;

  startedAt?: string;
  completedAt?: string;
};