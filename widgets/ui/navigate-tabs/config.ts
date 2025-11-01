export interface NavTab {
  path: string;
  hidden?: boolean;
  label: string;
}

export const NAV_TABS: NavTab[] = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "create-task",
    label: "New Task",
  },
];
