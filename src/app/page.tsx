import BlogList from "./blog/page";

export default function Home() {
  return (
    <main className="p-10 text-center">
      <h1 className="text-3xl font-bold">Welcome to the Blog Site</h1>
      <p className="mt-4 text-gray-600">Explore the latest blogs from the FakeStore API.</p>
      <BlogList />
    </main>
  );
}
