import React, { useState } from 'react';
import { FaShareAlt } from 'react-icons/fa'; // Importing share icon from react-icons

function CommunityPost() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      avatar: "/Images/Doctor.webp",
      username: "Dr.SATH",
      timeAgo: "20 hr. ago",
      title: "Daily Medical Questions Thread - September 03, 2024",
      link: "https://www.medisense.com/r/Medical/comments/1f7v8qx/daily_medical_questions_thread_september_03_2024/",
      content: "Welcome to the r/Medical Daily Questions Thread. This is the place to ask all your medical-related questions, whether it's about symptoms, treatment options, or general health advice. Community members are encouraged to share their knowledge and experiences to help others. Please ensure your questions are clear and respectful, and remember to consult a professional for serious medical concerns.",
      upvotes: 29,
      comments: 291,
    },
    {
      id: 2,
      avatar: "/Images/Doctor.webp",
      username: "Dr.SARTHAK",
      timeAgo: "2 days ago",
      title: "Moronic Monday - Your Weekly Basic Medical Questions Thread",
      content: "It’s Moronic Monday, your chance to ask any basic or \"stupid\" medical questions without fear of judgment. Whether you're curious about common symptoms, over-the-counter medications, or general health tips, this is the place to ask. Remember, no question is too simple, and the community is here to help. Please check the FAQ and do a quick search before asking your question to see if it has already been answered.",
      upvotes: 40,
      comments: 377,
    },
    {
      id: 3,
      avatar: "/Images/Doctor.webp",
      username: "Dr.Rohan",
      timeAgo: "2 days ago",
      title: "Daily Medical Questions Thread - September 02, 2024",
      content: "This is the r/Medical Daily Questions Thread for September 02, 2024. Whether you have questions about medical conditions, treatment options, or general health inquiries, this thread is open to all. Share your questions, offer your advice, and help others navigate their health journeys. Please keep the discussions respectful and informative.",
      upvotes: 29,
      comments: 291,
    },
  ]);

  const [newPost, setNewPost] = useState({
    username: '',
    title: '',
    content: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.username && newPost.title && newPost.content) {
      const newPostData = {
        id: posts.length + 1,
        avatar: "/Images/Doctor.webp", // Default avatar
        username: newPost.username,
        timeAgo: "Just now",
        title: newPost.title,
        content: newPost.content,
        upvotes: 0,
        comments: 0,
      };
      setPosts([newPostData, ...posts]);
      setNewPost({ username: '', title: '', content: '' }); // Clear form
    }
  };

  return (
    <div className="bg-gray-800 min-h-screen py-8 px-4 sm:px-6 lg:px-8 mt-[5rem]">
      {/* Post Submission Form */}
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-white text-lg font-semibold mb-4">Create a Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              value={newPost.username}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full p-2 rounded-lg bg-gray-700 text-gray-300 placeholder-gray-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="title"
              value={newPost.title}
              onChange={handleInputChange}
              placeholder="Post Title"
              className="w-full p-2 rounded-lg bg-gray-700 text-gray-300 placeholder-gray-400"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="content"
              value={newPost.content}
              onChange={handleInputChange}
              placeholder="Post Content"
              className="w-full p-2 rounded-lg bg-gray-700 text-gray-300 placeholder-gray-400"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Post
          </button>
        </form>
      </div>

      {/* Displaying Posts */}
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-900 rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <img src={post.avatar} alt="Doctor Avatar" className="w-8 h-8 rounded-full" /> {/* Doctor Avatar Image */}
            <span className="ml-4 text-gray-300 text-sm">{post.username} • {post.timeAgo}</span>
          </div>
          <h2 className="text-white text-lg font-semibold mb-4">{post.title}</h2>
          <p className="text-gray-400">{post.content}</p>
          <div className="flex items-center mt-4">
            <span className="text-gray-400 mr-4">{post.upvotes} Upvotes</span>
            <span className="text-gray-400 mr-4">{post.comments} Comments</span>
            <button className="text-gray-400 hover:text-white flex items-center">
              <FaShareAlt className="mr-2" /> Share
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommunityPost;
