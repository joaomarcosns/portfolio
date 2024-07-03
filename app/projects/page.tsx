import PageIntroduction from "../_components/pages/projects/PageIntroduction";
import ProjectsList from "../_components/pages/projects/ProjectsList";
import { ProjectsPageData } from "../_types/page-info";
import { fetchHygraphQuery } from "../_utils/fetch-hygraph-query";

export const metadata = {
  title: "Projetos",
};

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `;

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24, // 1 day
  );
};

const projects = async () => {
  const { projects } = await getPageData();
  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects} />
    </>
  );
};

export default projects;
