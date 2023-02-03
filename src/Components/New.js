import { Form, redirect } from "react-router-dom";
import { createNote } from "../notes";
import "./New.css"

export default function NewNote() {
  return (
    <Form method="post">
      <div className="text">
      <h3>Add a Note!!</h3>
      <br />
      <p>
        <label>Title</label>
          
          <br />
          <input placeholder="header" type="text" name="title" />
        
      </p>
      <br />
      <p>
        <label htmlFor="content">Start Writing</label>
        <br />
        <textarea placeholder="write here.." name="content" rows="10" cols="30" id="content" />
      </p>
      <p>
        <button id="save" type="submit">Save</button>
      </p>

      </div>
    </Form>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const note = await createNote({
    title: formData.get("title"),
    content: formData.get("content"),
  });
  return redirect(`/note/${note.id}`);
}
