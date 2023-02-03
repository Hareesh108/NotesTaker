import { useLoaderData, Form, redirect } from "react-router-dom";
import { deleteNote, getNote } from "../notes";

import "./New.css"
export default function Note() {
  const note = useLoaderData();
  return (
    <div className="text">
      <h1>Details</h1>
      <br />
      <h2>Title - {note.title}</h2>
      <div> Description : {note.content}</div>
      <Form method="post" style={{ marginTop: "2rem" }}>
        <button id="delete" type="submit">Delete</button>
      </Form>
    </div>
  );
}

export async function loader({ params }) {
  const note = await getNote(params.noteId);
  if (!note) throw new Response("", { status: 404 });
  return note;
}

export async function action({ params }) {
  await deleteNote(params.noteId);
  return redirect("/new");
}
