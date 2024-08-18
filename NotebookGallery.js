import React from 'react';

const NotebookGallery = ({ notebooks, onSelect }) => {
  return (
    <div>
      {notebooks.map((notebook, index) => (
        <div key={index} onClick={() => onSelect(notebook)}>
          {notebook.name}
        </div>
      ))}
    </div>
  );
};

export default NotebookGallery;
