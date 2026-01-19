import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onEdit, onTogglePin }) {
  if (notes.length === 0) {
    return <p>No notes yet. Create your first note!</p>;
  }

  return (
    <div>
      {notes.map(note => (
        <NoteItem
          key={note._id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
          onTogglePin={onTogglePin}
        />
      ))}
    </div>
  );
}

export default NoteList;