import React from "react";
import { blogPosts } from "../../data/content";
import BlogPost from "../../components/BlogPost";

export default function Blog() {
  const [featuredPost] = React.useState({
    title: "Elegant Wedding Catering: A Culinary Journey",
    date: "June 15, 2023",
    image:
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    summary:
      "Discover how we transformed a traditional wedding into a gastronomic experience.",
    content:
      "Our team of expert chefs created a custom menu that blended the couple's cultural backgrounds while incorporating seasonal, locally-sourced ingredients. From the passed hors d'oeuvres to the five-course dinner, every detail was meticulously planned and executed.",
  });
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-amber-800 text-white py-6 mb-5">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">
            Whisked Root Catering Blog
          </h1>
          <p className="text-center mt-2 text-amber-200">
            Insights, Tips, and Stories from Our Culinary Journey
          </p>
        </div>
      </div>
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 border-b-2 border-amber-300 pb-2">
          Featured Post
        </h2>
        <BlogPost {...featuredPost} />
      </section>

      <section>
        <h2 className="text-3xl font-bold text-amber-800 mb-6 border-b-2 border-amber-300 pb-2">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </section>

      <section className="mt-16 bg-[var(--color-primary)] p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-amber-800 mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-700 mb-6">
          Stay updated with our latest culinary creations, event tips, and
          special offers.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow p-3 border border-amber-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button className="bg-amber-600 p-3 rounded-lg text-white">
            Subscribe
          </button>
        </div>
      </section>
    </main>
  );
}
