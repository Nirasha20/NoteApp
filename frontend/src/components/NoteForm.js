import { useState } from 'react';

function NoteForm({ onAddNote, editingNote, onUpdateNote, onCancelEdit }) {
  const [title, setTitle] = useState(editingNote?.title || '');
  const [content, setContent] = useState(editingNote?.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingNote) {
      onUpdateNote(editingNote._id, { title, content });
    } else {
      onAddNote({ title, content });
    }
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="📝 Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={styles.input}
        onFocus={(e) => e.target.style.borderColor = '#667eea'}
        onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
      />
      <textarea
        placeholder="✍️ Write your note here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        style={styles.textarea}
        onFocus={(e) => e.target.style.borderColor = '#667eea'}
        onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
      />
      <div>
        <button 
          type="submit" 
          style={styles.button}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
        >
          {editingNote ? '✅ Update Note' : '➕ Add Note'}
        </button>
        {editingNote && (
          <button 
            type="button" 
            onClick={onCancelEdit}
            style={{...styles.button, marginLeft: '10px', backgroundColor: '#95a5a6'}}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            ❌ Cancel
          </button>
        )}
      </div>
    </form>
  );
}

const styles = {
  form: { 
    marginBottom: '30px',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
    animation: 'slideUp 0.5s ease-out'
  },
  input: { 
    width: '100%', 
    padding: '15px 18px', 
    marginBottom: '15px',
    border: '2px solid #e0e0e0',
    borderRadius: '10px',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    outline: 'none',
    fontFamily: 'inherit'
  },
  textarea: { 
    width: '100%', 
    padding: '15px 18px', 
    marginBottom: '15px', 
    minHeight: '120px',
    border: '2px solid #e0e0e0',
    borderRadius: '10px',
    fontSize: '16px',
    resize: 'vertical',
    transition: 'all 0.3s ease',
    outline: 'none',
    fontFamily: 'inherit'
  },
  button: { 
    padding: '12px 30px', 
    cursor: 'pointer',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)'
  }
};

export default NoteForm;