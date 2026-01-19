import { useState, useEffect } from 'react';
import axios from 'axios';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css';

const API_URL = 'http://localhost:5000/api/notes';

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(API_URL);
      setNotes(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch notes');
      console.error(err);
    }
  };

  const addNote = async (noteData) => {
    try {
      const response = await axios.post(API_URL, noteData);
      setNotes([response.data, ...notes]);
      setError('');
    } catch (err) {
      setError('Failed to add note');
      console.error(err);
    }
  };

  const updateNote = async (id, noteData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, noteData);
      setNotes(notes.map(note => note._id === id ? response.data : note));
      setEditingNote(null);
      setError('');
      fetchNotes(); // Refresh to maintain sort order
    } catch (err) {
      setError('Failed to update note');
      console.error(err);
    }
  };

  const deleteNote = async (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        setNotes(notes.filter(note => note._id !== id));
        setError('');
      } catch (err) {
        setError('Failed to delete note');
        console.error(err);
      }
    }
  };

  const togglePin = async (id) => {
    try {
      await axios.patch(`${API_URL}/${id}/pin`);
      fetchNotes(); // Refresh to update sort order
      setError('');
    } catch (err) {
      setError('Failed to toggle pin');
      console.error(err);
    }
  };

  return (
    <div className="App" style={styles.container}>
      <h1>My Notes</h1>
      {error && <div style={styles.error}>{error}</div>}
      <NoteForm 
        onAddNote={addNote}
        editingNote={editingNote}
        onUpdateNote={updateNote}
        onCancelEdit={() => setEditingNote(null)}
      />
      <NoteList 
        notes={notes}
        onDelete={deleteNote}
        onEdit={setEditingNote}
        onTogglePin={togglePin}
      />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px'
  },
  error: {
    backgroundColor: '#ff6b6b',
    color: 'white',
    padding: '15px 20px',
    marginBottom: '20px',
    borderRadius: '12px',
    fontWeight: '500',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    animation: 'slideUp 0.3s ease-out'
  }
};

export default App;