import { Blog } from "../hooks";
import Appbar from "./Appbar";
import { Avatar } from "./BlogCard";

const BlogPost = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="grid grid-cols-12 xl:px-40 lg:px-20 px-5 w-full pt-10 ">
        <div className=" col-span-12 lg:col-span-8">
          <div className="text-5xl font-black">{blog.title}</div>
          <div className="pt-3 text-lg text-slate-500 font-normal">
            Posted on August 24, 2023
          </div>
          <div className="pt-3 font-normal text-xl">{blog.content}</div>
        </div>
        <div className=" col-span-4 pl-4">
          <div className="font-medium">Author</div>
          <div className="pt-3 flex justify-center items-center">
            <div>
              <Avatar name={blog.author.name || "Anonymous"} size="big" />
            </div>
            <div className="pl-4">
              <div className="font-extrabold text-2xl">
                {blog.author.name || "Anonymous"}
              </div>
              <div className="font-medium text-md text-slate-500 pt-3">
                Empowering others to realize life comes from within, inspiring
                self-growth and personal leadership.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
