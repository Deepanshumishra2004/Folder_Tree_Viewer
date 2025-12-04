import type { FolderNode } from "../type/folder.type";

export const folderData : FolderNode[] = [
     {
    id: 1,
    name: "src",
    type: "folder",
    children: [
      {
        id: 2,
        name: "app",
        type: "folder",
        children: [
          { id: 3, name: "App.tsx", type: "file" },
          {
            id: 4,
            name: "routes",
            type: "folder",
            children: [
              { id: 5, name: "index.tsx", type: "file" }
            ]
          },
        ]
      },
      {
        id: 6,
        name: "components",
        type: "folder",
        children: [
          {
            id: 7,
            name: "Button",
            type: "folder",
            children: [
              { id: 8, name: "Button.tsx", type: "file" },
              { id: 9, name: "Button.module.scss", type: "file" },
              { id: 10, name: "Button.types.ts", type: "file" }
            ]
          },
          {
            id: 11,
            name: "Header",
            type: "folder",
            children: [
              { id: 12, name: "Header.tsx", type: "file" },
              { id: 13, name: "Header.module.scss", type: "file" },
              { id: 14, name: "Header.types.ts", type: "file" }
            ]
          }
        ]
      },
      {
        id: 15,
        name: "features",
        type: "folder",
        children: [
          {
            id: 16,
            name: "auth",
            type: "folder",
            children: [
              { id: 17, name: "Auth.tsx", type: "file" },
              { id: 18, name: "auth.module.scss", type: "file" },
              { id: 19, name: "auth.types.ts", type: "file" }
            ]
          },
          {
            id: 20,
            name: "dashboard",
            type: "folder",
            children: [
              { id: 21, name: "Dashboard.tsx", type: "file" },
              { id: 22, name: "dashboard.module.scss", type: "file" },
              { id: 23, name: "dashboard.types.ts", type: "file" }
            ]
          }
        ]
      },
      {
        id: 24,
        name: "hooks",
        type: "folder",
        children: [
          { id: 25, name: "useFetch.ts", type: "file" },
          { id: 26, name: "useToggle.ts", type: "file" }
        ]
      },
      {
        id: 27,
        name: "styles",
        type: "folder",
        children: [
          { id: 28, name: "globals.scss", type: "file" },
          { id: 29, name: "variables.scss", type: "file" },
          { id: 30, name: "mixins.scss", type: "file" }
        ]
      },
      {
        id: 31,
        name: "utils",
        type: "folder",
        children: [
          { id: 32, name: "helpers.ts", type: "file" },
          { id: 33, name: "constants.ts", type: "file" }
        ]
      },
      { id: 34, name: "main.tsx", type: "file" },
      { id: 35, name: "vite-env.d.ts", type: "file" }
    ]
  },
  {
    id: 36,
    name: "public",
    type: "folder",
    children: [
      { id: 37, name: "index.html", type: "file" }
    ]
  }
]