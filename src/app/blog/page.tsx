import Link from "next/link";

interface Blog {
  id: number;
  title: string;
}

// Fetch blogs at build time (SSG)
async function getBlogs(): Promise<Blog[]> {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

export default async function BlogList() {
  const blogs = await getBlogs();

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="p-4 border rounded shadow">
            <h2 className="font-semibold">{blog.title}</h2>
            <Link href={`/blog/${blog.id}`} className="text-blue-500">Read More</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
