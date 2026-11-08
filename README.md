# 📝 Noting Yours — A Simple Note-Taking App

A clean, modern, and responsive full-stack note-taking application built with **React, TypeScript, Tailwind CSS, Axios, Node.js, Express, and MongoDB**.

Noting Yours allows users to create, edit, and delete notes through a beautiful interface with a modern glassmorphism design.

## ✨ Features

- ➕ **Create Notes** — Add new notes instantly.
- ✏️ **Edit Notes** — Update existing notes easily.
- 🗑️ **Delete Notes** — Remove unwanted notes with a single click.
- 🔄 **Automatic Refresh** — Note lists update automatically after every action.
- 🎨 **Modern UI** — Beautiful glassmorphism design with Tailwind CSS.
- 📱 **Responsive Design** — Works on desktop, tablet, and mobile devices.
- ⚡ **Type Safety** — TypeScript for better code reliability.
- 🔌 **API Integration** — Axios for seamless communication with the backend.

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Language | TypeScript |
| Styling | Tailwind CSS |
| HTTP Client | Axios |
| Backend | Node.js + Express |
| Database | MongoDB |


## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/MgToeNaingWin/NoteApp_RESTApi.git
cd noting-yours
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Axios

```bash
npm install axios
```

### 4. Configure Environment Variables

Create a `.env` file in your frontend project root:

```env
VITE_API_URL=http://localhost:8000/api
```

Update the URL according to your backend server configuration.

### 5. Start the Development Server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

**Note:** Make sure your backend server and MongoDB database are running before using the application.

## 🔌 Axios Service Layer

All API requests are managed in `src/services/service.ts` using Axios.

This keeps API communication separate from UI components and makes the application easier to maintain.

### Example: `src/services/service.ts`

```typescript
import axios from "axios";
import type { Notes } from "../types/notes";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// GET all notes
export const getNotes = async (): Promise<Notes[]> => {
  const response = await API.get("/notes");
  return response.data;
};

// CREATE a new note
export const createNote = async (title: string): Promise<Notes> => {
  const response = await API.post("/notes", { title });
  return response.data;
};

// UPDATE an existing note
export const updateNote = async (
  id: string,
  title: string
): Promise<Notes> => {
  const response = await API.put(`/notes/${id}`, { title });
  return response.data;
};

// DELETE a note
export const deleteNote = async (id: string): Promise<void> => {
  await API.delete(`/notes/${id}`);
};
```

### Why Axios?

- ✅ Clean and simple syntax.
- ✅ Automatic JSON serialization and response handling.
- ✅ Supports request and response interceptors.
- ✅ Built-in timeout configuration.
- ✅ Structured error handling with `try/catch`.

]
## 📝 TypeScript Interface

### `src/types/notes.ts`

```typescript
export interface Notes {
  _id: string;
  title: string;
  createdAt?: string;
  updatedAt?: string;
}
```

## 🚀 Available Scripts

| Command | Description |
|---|---|
| `npm install` | Install project dependencies |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the application for production |
| `npm run preview` | Preview the production build |

## 🎨 UI Highlights

- Soft glassmorphism cards with gradient backgrounds.
- Pulsing live indicator displaying the current note count.
- Smooth hover animations on note items.
- Interactive edit and delete icon buttons.
- Dynamic submit button displaying Create or Update.
- Friendly empty state when no notes exist.
- Custom slim scrollbar for the notes list.
- Responsive layout for different screen sizes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

To contribute:

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add some amazing feature"
   ```

4. Push your branch:

   ```bash
   git push origin feature/amazing-feature
   ```

5. Open a Pull Request.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 👤 Author

**MgToeNaingWin**



## 🙏 Acknowledgements

Thanks to the open-source community and the developers of React, TypeScript, Tailwind CSS, Axios, Express, and MongoDB for providing the tools used to build this project.

---

⭐ If you like this project, consider giving it a star on GitHub!
