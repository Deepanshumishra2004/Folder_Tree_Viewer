## 📁 Folder Tree Viewer

A simple Folder Tree Viewer built using React, TypeScript, and SCSS.
It displays folders and files in a collapsible tree structure using recursive components.

🚀 Features

📁 Collapsible folders

📄 Files shown as leaf nodes

👉 Click a folder to expand/collapse

➡️ Children appear to show hierarchy

🎨 Styled using SCSS

🔁 Fully recursive structure

📦 Tech Stack

React (Vite)

TypeScript

SCSS / SASS

📂 Project Structure
```bash
src/
 ├── components/
 │    └── TreeNode/
 │         ├── TreeNode.tsx
 │         ├── TreeNode.scss
 ├── data/
 │    └── folderData.ts
 ├── type/
 │    └── folder.types.ts
 ├── App.tsx
 └── main.tsx
```

🛠️ Local Installation & Setup

Follow these steps to run the project locally.

1️⃣ Clone the Repository
```bash
git clone https://github.com/Deepanshumishra2004/Folder_Tree_Viewer.git
```


Eg:
```bash
git clone https://github.com/your-username/folder-tree-viewer.git
```

2️⃣ Go Into the Project Folder
cd folder-tree-viewer

3️⃣ Install Dependencies
```bash
npm install
```

This will install React, TypeScript, SCSS, Vite, and all required packages.

4️⃣ Start the Development Server
```bash
npm run dev
```

5️⃣ Open the App in Browser

Vite will show a local URL like:

```bash
http://localhost:5173/
```

Open it in your browser to see the Folder Tree Viewer.

📁 Running SCSS/SASS

No extra steps required — SCSS works automatically via Vite.
Just ensure you import your SCSS file:

```bash
import "./TreeNode.scss";
```
