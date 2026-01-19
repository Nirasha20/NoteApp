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
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={styles.input}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        style={styles.textarea}
      />
      <div>
        <button type="submit" style={styles.button}>
          {editingNote ? 'Update Note' : 'Add Note'}
        </button>
        {editingNote && (
          <button 
            type="button" 
            onClick={onCancelEdit}
            style={{...styles.button, marginLeft: '10px'}}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

const styles = {
  form: { marginBottom: '20px' },
  input: { width: '100%', padding: '10px', marginBottom: '10px' },
  textarea: { width: '100%', padding: '10px', marginBottom: '10px', minHeight: '100px' },
  button: { padding: '10px 20px', cursor: 'pointer' }
};

export default NoteForm;