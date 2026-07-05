type ProjectTagsProps = {
  tags: string[];
};

export default function ProjectTags({ tags }: ProjectTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}