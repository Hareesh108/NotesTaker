import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root, { loader as rootLoader } from "./Components/Root";
import NewNote, { action as newNoteAction } from "./Components/New";
import Note, {
  loader as noteLoader,
  action as noteAction,
} from "./Components/Note";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "new",
        element: <NewNote />,
        action: newNoteAction,
      },
      {
        path: "note/:noteId",
        element: <Note />,
        loader: noteLoader,
        action: noteAction,
        errorElement: <h2>Note not found</h2>,
      },
    ],
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function App() {
  return <RouterProvider router={router} />;
}

