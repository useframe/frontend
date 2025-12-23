interface ProjectProps {
  params: Promise<{
    projectId: string;
  }>;
}

const Project = async ({ params }: ProjectProps) => {
  const { projectId } = await params;
  return <div>Project ID: {projectId}</div>;
};

export default Project;
