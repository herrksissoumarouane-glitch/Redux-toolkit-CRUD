import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, addPost, updatePost, deletePost } from "./PostsSlice";
 



const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsData.posts);

  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      dispatch(updatePost({ id: editId, title }));
    } else {
      dispatch(addPost({ title }));
    }
    setTitle("");
    setEditId(null);
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setEditId(post.id);
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  return (
    
    <div className="container mt-5">
  <h2 className="text-center mb-4">
    📝 Posts CRUD with Bootstrap
  </h2>

  <form onSubmit={handleSubmit} className="d-flex gap-2 mb-4">
    <input
      type="text"
      placeholder="Enter title..."
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="form-control"
    />
    <button
      type="submit"
      className={`btn ${editId ? "btn-warning" : "btn-primary"}`}
    >
      {editId ? "Update" : "Add"}
    </button>
  </form>

  <div className="row">
    {posts.map((post) => (
      <div key={post.id} className="col-md-6 mb-3">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <div className="d-flex justify-content-end gap-2">
              <button
                onClick={() => handleEdit(post)}
                className="btn btn-sm btn-outline-warning"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="btn btn-sm btn-outline-danger"
              >
                🗑 Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}

export default Posts;
