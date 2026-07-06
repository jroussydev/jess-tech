export type InternalProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  status: string;

  gallery: string[];
  video?: string;

  learnings: string[];
  challenges: string[];
};