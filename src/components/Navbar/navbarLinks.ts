type NavbarLink = {
  id: number;
  title: string;
  route: string;
};

export const navbarLinks: NavbarLink[] = [
  {
    id: 1,
    title: "Dropdown",
    route: "/",
  },
  {
    id: 2,
    title: "Table",
    route: "/table",
  },
  {
    id: 3,
    title: "Auto Select",
    route: "/auto-select",
  },
  {
    id: 4,
    title: "Media Upload",
    route: "/media-upload",
  },
];
