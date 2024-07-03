import ProjectDetails from "@/app/_components/pages/project/ProjectDetails";
import ProjectSections from "@/app/_components/pages/project/ProjectSections";
import {
  ProjectPageData,
  ProjectsPageStaticData,
} from "@/app/_types/page-info";
import { fetchHygraphQuery } from "@/app/_utils/fetch-hygraph-query";
import { notFound } from "next/navigation";

type ProjectProps = {
  params: {
    slug: string;
  };
};

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
  query ProjectQuery() {
    project(where: {slug: "${slug}"}) {
      pageThumbnail {
        url
      }
      thumbnail {
        url
      }
      sections {
        title
        image {
          url
        }
      }
      title
      shortDescription
      description {
        raw
        text
      }
      technologies {
        name
      }
      liveProjectUrl
      githubUrl
    }
  }
  `;
  const data = fetchHygraphQuery<any>(
    query,
    1000 * 60 * 60 * 24, // 1 day
  );

  return data;
};

const Project = async ({ params: { slug } }: ProjectProps) => {
  const { project } = await getProjectDetails(slug);

  if (!project?.title) return notFound();

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  );
};

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery() {
      projects(first: 100) {
        slug
      }
    }
  `;
  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query);

  return projects;
}

export default Project;
