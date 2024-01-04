export type Project = {
  title: string;
  desc: string;
  stack: string[];
  image: string;
  demo?: string;
  github?: string;
};

export type NavLink = {
  name: string;
  path: string;
  icon: any;
};

export type Service = {
  icon: any;
  title: string;
  description: string;
};

export type Credentials = {
  name: string;
  date: string;
  image: string;
  link: string;
};

export type Experience = {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  icon: any;
};
