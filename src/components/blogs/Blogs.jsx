import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {
    const blogs = useLoaderData();
  return (
    <div>
      <section className="py-6 sm:py-12 bg-white text-[#131313]">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-4xl font-bold text2">Books</h2>
            
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {
                blogs.map((blog,idx)=> <Blog key={idx} blog={blog}></Blog>)
            }
            
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
