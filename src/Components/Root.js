import { useLoaderData, Link, Outlet } from 'react-router-dom';
import { getNotes } from '../notes';
import "./New.css"

export async function loader() {
  return getNotes();
}

export default function Root() {
  const notes = useLoaderData();

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ padding: '0 2rem', borderRight: 'solid 1px #ccc' }}>
        <h1>Notes Taker!</h1>
        <br />
        <p>
          <Link to="new"><h3>Create Note</h3></Link>
        </p>
        <br />
        <h4>List of Notes!</h4>
        <ul>
          {notes.map((note) => (
            <li>
              <Link to={`/note/${note.id}`}>{note.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ flex: 1, padding: '0 2rem' }}>
        <Outlet />
      </div>
    </div>
  );
}
