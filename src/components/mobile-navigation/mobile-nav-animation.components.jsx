export const MOBILE_LINKS = [
  { id: 0, navTitle: "Pricing", path: "/pricing" },
  { id: 1, navTitle: "Demo", path: "/demo" },
  { id: 2, navTitle: "Why Arcana", path: "/why-arcana" },
  { id: 3, navTitle: "Log-in", path: "/log-in" },
  { id: 4, navTitle: "Sign-up", path: "/sign-up" },
];

export const MOBILE_DD_LINKS = [
  { id: 0, navTitle: "Messaging", path: "/messaging" },
  { id: 1, navTitle: "Reviews", path: "/reviews" },
  { id: 2, navTitle: "WebChat", path: "/webchat" },
  { id: 3, navTitle: "Payments", path: "/payments" },
];

export const mobileMenuVariant = {
  opened: {
    y: "0%",
    transition: {
      delay: 0.15,
      duration: 1.1,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
  closed: {
    y: "-100%",
    transition: {
      delay: 0.35,
      duration: 0.63,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
};

export const ulVariant = {
  opened: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.18,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

export const liVariant = {
  opened: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.63,
      ease: "easeOut",
    },
  },
  closed: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

export const MobileFeaturesDD = {
  opened: {
    height: "auto",
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.32, 0, 0.19, 0.45],
    },
  },
  closed: {
    height: "0px",
    opacity: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.32, 0, 0.19, 0.45],
    },
  },
};

export const mobileUlVariant = {
  opened: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.12,
      staggerDirection: -1,
    },
  },
};

export const mobileLiVariant = {
  opened: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.32,
      ease: "easeOut",
    },
  },
  closed: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.15,
      ease: "easeInOut",
    },
  },
};
