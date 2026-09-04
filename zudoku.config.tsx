import type { ZudokuConfig } from "zudoku";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

const config: ZudokuConfig = {
  site: {
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "Zudoku",
      width: "130px",
    },
  },
  navigation: [
    {
      type: "category",
      label: "Documentation",
      items: [
        {
          type: "category",
          label: "Getting Started",
          icon: "sparkles",
          items: [
            "/introduction",
            {
              type: "link",
              icon: "folder-cog",
              badge: {
                label: "New",
                color: "purple",
              },
              label: "API Reference",
              to: "/api",
            },
          ],
        },
        {
          type: "category",
          label: "Useful Links",
          collapsible: false,
          icon: "link",
          items: [
            {
              type: "link",
              icon: "book",
              label: "Zudoku Docs",
              to: "https://zudoku.dev/docs/",
            },
          ],
        },
      ],
    },
    {
      type: "link",
      to: "/api",
      label: "API Reference",
    },
  ],
  redirects: [{ from: "/", to: "/introduction" }],
  apis: [
    {
      type: "file",
      input: "./apis/openapi.yaml",
      path: "/api",
    },
  ],
  // plugins: [myPlugin],
  build: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
};

export default config;
