import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onEdit, onTogglePin }) {
  if (notes.length === 0) {
    return (
      <div style={styles.emptyState}>
        <div style={styles.emptyIcon}>📝</div>
        <p style={styles.emptyText}>No notes yet. Create your first note!</p>
      </div>
    );
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

const styles = {
  emptyState: {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    animation: 'slideUp 0.5s ease-out'
  },
  emptyIcon: {
    fontSize: '4rem',
    marginBottom: '20px'
  },
  emptyText: {
    fontSize: '1.2rem',
    color: '#666',
    margin: 0
  }
};

export default NoteList;