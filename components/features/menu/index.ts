export const menuItems = [
  {
    id: 1,
    module: "gestion du bia",
    items: [
      {
        name: "Activités",
        href: "/pmco/home",
      },
      {
        name: "Sytèmes d'évaluations",
        href: "/pmco/home",
      },
      {
        name: "Ressources",
        href: "/pmco/home",
      },
    ],
  },
  {
    id: 2,
    module: "gestion des risques",
    items: [
      {
        name: "Activités",
        href: "/pmco/home",
      },
      {
        title: "Paramètres",

        children: [
          {
            name: "Activités",
            href: "/pmco/home",
          },
          {
            name: "Activités",
            href: "/pmco/home",
          },
          {
            name: "Activités",
            href: "/pmco/home",
          },
        ],
      },
    ],
  },
];
