import type { RichTextContent } from "@graphcms/rich-text-types";

export type KnownTech = {
  iconSvg: string;
  name: string;
  startDate: string;
};

export type Technology = {
  name: string;
};

export type ProjectSection = {
  title: string;
  titlePt?: string | null;
  image: {
    url: string;
  };
};

export type Project = {
  slug: string;
  thumbnail: {
    url: string;
  };
  title: string;
  shortDescription: string;
  shortDescriptionPt?: string | null;
  technologies: Technology[];
  pageThumbnail: {
    url: string;
  };
  sections: ProjectSection[];
  description: {
    raw: RichTextContent;
    text: string;
  };
  descriptionPt?: {
    raw: RichTextContent;
  } | null;
  liveProjectUrl?: string;
  githubUrl?: string;
};
