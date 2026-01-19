function NoteItem({ note, onDelete, onEdit, onTogglePin }) {
  return (
    <div style={{
      ...styles.noteItem,
      backgroundColor: note.isPinned ? '#fffacd' : '#f9f9f9'
    }}>
      <h3>{note.title} {note.isPinned && '📌'}</h3>
      <p>{note.content}</p>
      <small>Created: {new Date(note.createdAt).toLocaleString()}</small>
      <div style={styles.buttons}>
        <button onClick={() => onEdit(note)} style={styles.button}>Edit</button>
        <button onClick={() => onTogglePin(note._id)} style={styles.button}>
          {note.isPinned ? 'Unpin' : 'Pin'}
        </button>
        <button onClick={() => onDelete(note._id)} style={styles.deleteButton}>
          Delete
        </button>
      </div>
    </div>
  );
}

const styles = {
  noteItem: {
    border: '1px solid #ddd',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '5px'
  },
  buttons: { marginTop: '10px' },
  button: { marginRight: '10px', padding: '5px 10px', cursor: 'pointer' },
  deleteButton: { 
    marginRight: '10px', 
    padding: '5px 10px', 
    cursor: 'pointer',
    backgroundColor: '#ff4444',
    color: 'white',
    border: 'none'
  }
};

export default NoteItem;