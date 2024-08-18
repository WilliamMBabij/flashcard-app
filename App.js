import React, { useState } from 'react';
import FloatingIcon from './FloatingIcon';
import Card from './Card';
import NotebookGallery from './NotebookGallery';

function App() {
  const [mode, setMode] = useState('gallery');
  const [notebooks, setNotebooks] = useState([]);
  const [selectedNotebook, setSelectedNotebook] = useState(null);

  // Sample logic for handling different modes
  const renderContent = () => {
    switch (mode) {
      case 'gallery':
        return <NotebookGallery notebooks={notebooks} onSelect={(notebook) => setSelectedNotebook(notebook)} />;
      case 'quiz':
        // Logic for rendering quiz
        return <Card question='Sample Question' answer='Sample Answer' />;
      // Add other cases here
      default:
        return <div>Content</div>;
    }
  };

  return (
    <div>
      <FloatingIcon onClick={() => setMode('gallery')} />
      {renderContent()}
    </div>
  );
}

export default App;
