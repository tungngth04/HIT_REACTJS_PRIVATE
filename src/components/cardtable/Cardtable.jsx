import "./cardtable.css";
const Cardtable = ({ posts }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <td>ID</td>
            <td>title</td>
            <td>body</td>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={index}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Cardtable;
