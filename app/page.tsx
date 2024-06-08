import HeroSection from "./_components/pages/home/HeroSection";
import HighlightedProjects from "./_components/pages/home/HighlightedProjects";
import KnownTechs from "./_components/pages/home/KnownTechs";
import WorkExperience from "./_components/pages/home/WorkExperience";
import { HomePageData } from "./_types/page-info";
import { fetchHygraphQuery } from "./_utils/fetch-hygraph-query";

export const metadata = {
  title: "Home",
};

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      home(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socialMedias {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          technologies {
            name
          }
        }
      }
      workExperiences(orderBy: startDate_DESC) {
        companyLogo {
          url
        }
        role
        companyName
        companyUrl
        startDate
        endDate
        description {
          raw
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

const Home = async () => {
  const { home: data, workExperiences } = await getPageData();
  return (
    <>
      <HeroSection homeInfo={data} />
      <KnownTechs techs={data.knownTechs} />
      <HighlightedProjects projects={data.highlightProjects} />
      <WorkExperience experiences={workExperiences} />
    </>
  );
};

export default Home;
