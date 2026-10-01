import { projects } from "../projects-data";
import ProjectClientPage from "./project-client";
import { notFound } from "next/navigation";

// Statically prerender all project slugs during the build phase
export async function generateStaticParams() {
  return projects.map((project) => ({
    title: encodeURIComponent(project.title.replace(/\s+/g, "-")),
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const resolvedParams = await params;
  const postTitle = resolvedParams.title;

  const decodedTitle = decodeURIComponent(postTitle).replace(/-/g, " ");
  const project = projects.find((p) => p.title === decodedTitle) || projects[0];

  if (!project) {
    notFound();
  }

  // Pass down the pre-calculated project data to the client layer
  return <ProjectClientPage project={project} />;
}
