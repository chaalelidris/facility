export type Item = {
  id: string;
  name: string;
  label: string;
  imageUrl?: string;
  href?: string;
  icon?: React.ReactNode;
};

export type Navigation = {
  name: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
};
