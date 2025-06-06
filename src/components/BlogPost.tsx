type BlogPostProps = {
  title: string;
  date: string;
  image: string;
  summary: string;
  content: string;
};

const BlogPost = ({ title, date, image, summary, content }: BlogPostProps) => {
  return (
    <div className="mb-12 p-6 bg-white rounded-lg shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-bold text-amber-800 mb-2">{title}</h2>
      <p className="text-gray-500 mb-4">{date}</p>
      <p className="text-gray-700 font-semibold mb-4">{summary}</p>
      <div className="text-gray-600 mb-6">{content}</div>
      <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded transition duration-300">
        Read More
      </button>
    </div>
  );
};
export default BlogPost;
