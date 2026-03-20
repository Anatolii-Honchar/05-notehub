import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "../../services/noteService";
import NoteList from "../NoteList/NoteList";
import css from "./App.module.css";

export default function App() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["notes"],
    queryFn: () => fetchNotes(1, ""),
  });

  const notes = data?.notes ?? [];

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {/* SearchBox */}
        {/* Pagination */}
        {/* Button */}
      </header>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading notes</p>}

      {notes.length > 0 && <NoteList notes={notes} />}
    </div>
  );
}
