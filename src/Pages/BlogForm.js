import React, { useState, useEffect } from 'react';
import './BlogForm.css';

const BlogForm = ({ addBlog, editBlog, blogToEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (blogToEdit) {
      setTitle(blogToEdit.title);
      setDescription(blogToEdit.description);
      setImage(blogToEdit.image);
    } else {
      setTitle('');
      setDescription('');
      setImage('');
    }
  }, [blogToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (blogToEdit) {
      editBlog({ title, description, image }, blogToEdit.id);
    } else {
      addBlog({ title, description, image });
    }
    setTitle('');
    setDescription('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="blog-form">
      <h2>{blogToEdit ? 'Edit Blog' : 'Add New Blog'}</h2>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn-submit">
        {blogToEdit ? 'Update Blog' : 'Add Blog'}
      </button>
    </form>
  );
};

export default BlogForm;
