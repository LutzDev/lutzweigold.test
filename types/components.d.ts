type Grid = 'none' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Experience {
  year: number;
  entries: ExperienceItem[];
}
interface ExperienceItem {
  year: number;
  additionalYear: number | string;
  title: string;
  description: string | string[];
  to?: string;
}

interface ScrambleTextItem {
  tl: gsap.core.Timeline;
  delay: number;
}

interface Link {
  name: string;
  to: string;
  title: string;
}

interface ListItem {
  title: string;
  entries: Array<string | Link>;
}

interface PortfolioItem {
  title: string;
  tags: Array<string>;
  to: string;
}

interface ProjectSliderItem {
  left: string;
  center: string;
  right: string;
}

interface ListTitle {
  name: string;
  reverse?: boolean;
}

interface Image {
  src: string;
  alt: string;
}

interface NavigationState {
  [key: string]: boolean;
}

export {
  Grid,
  Experience,
  ExperienceItem,
  ScrambleTextItem,
  Link,
  ListItem,
  ListTitle,
  PortfolioItem,
  Image,
  NavigationState,
  ProjectSlidProjectSliderItem,
};
