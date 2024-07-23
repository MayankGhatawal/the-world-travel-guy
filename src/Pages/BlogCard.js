// src/components/BlogCard.js
import React from 'react';
import './BlogCard.css';

const BlogCard = ({ blog, onDelete, onEdit }) => {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} className="blog-card__image" />
      <div className="blog-card__content">
        <h2 className="blog-card__title">{blog.title}</h2>
        <p className="blog-card__description">{blog.description}</p>
        <div className="blog-card__actions">
          <button onClick={() => onEdit(blog)} className="blog-card__edit-button">Edit</button>
          <button onClick={() => onDelete(blog.id)} className="blog-card__delete-button">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
