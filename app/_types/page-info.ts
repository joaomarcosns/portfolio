import type { RichTextContent } from "@graphcms/rich-text-types";
import { KnownTech, Project } from "./projects";
import { WorkExperience } from "./work-experience";

export type SocialMedias = {
  url: string;
  iconSvg: string;
};

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent;
  };
  technologies: KnownTech[];
  profilePicture: {
    url: string;
  };
  socialMedias: SocialMedias[];
  knownTechs: KnownTech[];
  highlightProjects: Project[];
};

export type ProjectsPageData = {
  projects: Project[];
};

export type HomePageData = {
  home: HomePageInfo;
  workExperiences: WorkExperience[];
};
