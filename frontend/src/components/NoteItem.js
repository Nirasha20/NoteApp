function NoteItem({ note, onDelete, onEdit, onTogglePin }) {
  return (
    <div style={{
      ...styles.noteItem,
      background: note.isPinned 
        ? 'linear-gradient(135deg, #ffd89b 0%, #19547b 100%)' 
        : 'white',
      color: note.isPinned ? 'white' : '#333'
    }}>
      <div style={styles.header}>
        <h3 style={styles.title}>
          {note.isPinned && <span style={styles.pinIcon}>📌</span>}
          {note.title}
        </h3>
      </div>
      <p style={styles.content}>{note.content}</p>
      <small style={{
        ...styles.date,
        color: note.isPinned ? 'rgba(255,255,255,0.9)' : '#888'
      }}>
        🕐 {new Date(note.createdAt).toLocaleString()}
      </small>
      <div style={styles.buttons}>
        <button 
          onClick={() => onEdit(note)} 
          style={styles.editButton}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          ✏️ Edit
        </button>
        <button 
          onClick={() => onTogglePin(note._id)} 
          style={styles.pinButton}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          {note.isPinned ? '📍 Unpin' : '📌 Pin'}
        </button>
        <button 
          onClick={() => onDelete(note._id)} 
          style={styles.deleteButton}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

const styles = {
  noteItem: {
    border: 'none',
    padding: '25px',
    marginBottom: '20px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    animation: 'slideUp 0.4s ease-out',
    cursor: 'pointer'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px'
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: '600',
    margin: '0 0 10px 0'
  },
  pinIcon: {
    marginRight: '8px',
    fontSize: '1.2rem'
  },
  content: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '15px',
    textAlign: 'left'
  },
  date: {
    display: 'block',
    marginBottom: '15px',
    fontSize: '0.85rem'
  },
  buttons: { 
    marginTop: '15px',
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap'
  },
  editButton: { 
    padding: '8px 16px',
    cursor: 'pointer',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
  },
  pinButton: { 
    padding: '8px 16px',
    cursor: 'pointer',
    backgroundColor: '#f39c12',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 8px rgba(243, 156, 18, 0.3)'
  },
  deleteButton: { 
    padding: '8px 16px',
    cursor: 'pointer',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 8px rgba(231, 76, 60, 0.3)'
  }
};

export default NoteItem;