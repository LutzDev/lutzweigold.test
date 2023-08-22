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

interface ListTitle {
  name: string;
  reverse?: boolean;
}

interface ListItem {
  title: string;
  entries: Array<string | Link>;
}

export { Grid, Experience, ExperienceItem, ScrambleTextItem, Link, ListTitle, ListItem };
