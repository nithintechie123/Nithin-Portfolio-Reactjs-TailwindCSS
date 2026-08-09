import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { initialPosts, storageKey } from "../data/blogPosts";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Trash2, Search, ArrowLeft, Filter, AlertTriangle } from "lucide-react";
import cn from "../lib/utils";

const Blog = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState(() => {
    if (typeof window === "undefined") return initialPosts;
    const stored = window.localStorage.getItem(storageKey);
    return stored ? JSON.parse(stored) : initialPosts;
  });
  
  const [form, setForm] = useState({ title: "", excerpt: "", content: "", author: "", category: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(storageKey, JSON.stringify(posts));
    }
  }, [posts]);

  const selectedPost = useMemo(() => posts.find((post) => post.slug === slug) || null, [posts, slug]);

  // Extract unique categories dynamically from the posts list
  const categories = useMemo(() => {
    const cats = new Set();
    posts.forEach((p) => {
      if (p.category) cats.add(p.category);
    });
    return ["All", ...Array.from(cats)];
  }, [posts]);

  // Filter posts based on search and category selection
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.title || !form.content || !form.author) {
      return;
    }

    const nextPost = {
      id: Date.now(),
      slug: form.title.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
      title: form.title,
      excerpt: form.excerpt || form.content.slice(0, 140) + (form.content.length > 140 ? "..." : ""),
      content: form.content,
      author: form.author,
      category: form.category || "General",
      createdAt: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    };

    setPosts((current) => [nextPost, ...current]);
    setForm({ title: "", excerpt: "", content: "", author: "", category: "" });
    navigate(`/blog/${nextPost.slug}`);
  };

  const handleDeletePost = (id) => {
    if (window.confirm("Are you sure you want to delete this article? This action cannot be undone.")) {
      setPosts((current) => current.filter((post) => post.id !== id));
      if (slug) {
        navigate("/blog");
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main className="container pt-32 pb-20">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 text-left">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Blog & Articles</p>
            <h1 className="text-4xl font-semibold sm:text-5xl">Write, publish, and share your ideas</h1>
            <p className="mt-4 max-w-2xl text-lg text-foreground/70">
              Create posts for your portfolio, showcase your thinking, and keep your audience updated with fresh articles.
            </p>
          </div>
          <div className="flex gap-3">
            {selectedPost && (
              <Link to="/blog" className="px-5 py-2 rounded-full border border-border hover:bg-secondary/40 text-foreground transition-all duration-300 flex items-center gap-2 text-sm font-semibold">
                <ArrowLeft size={16} /> All Posts
              </Link>
            )}
            <Link to="/" className="cosmic-button inline-flex items-center text-sm">
              Back home
            </Link>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="space-y-6">
            {selectedPost ? (
              <article className="rounded-3xl border border-border/70 bg-card/80 p-8 text-left shadow-lg relative group">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/60">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">{selectedPost.category}</span>
                    <span>{selectedPost.createdAt}</span>
                    <span>By {selectedPost.author}</span>
                  </div>
                  <button
                    onClick={() => handleDeletePost(selectedPost.id)}
                    className="p-2 rounded-lg border border-red-500/20 text-red-500/80 hover:text-red-500 hover:bg-red-500/10 transition-all duration-300 cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                    title="Delete post"
                  >
                    <Trash2 size={15} /> Delete Post
                  </button>
                </div>
                <h2 className="text-3xl font-semibold">{selectedPost.title}</h2>
                <p className="mt-4 text-lg text-foreground/70 font-medium italic border-l-2 border-primary/40 pl-4">{selectedPost.excerpt}</p>
                <div className="mt-6 whitespace-pre-line text-base leading-8 text-foreground/80">{selectedPost.content}</div>
              </article>
            ) : (
              <div className="space-y-6">
                {/* Search and Tag Filtering Controls */}
                <div className="p-6 rounded-3xl border border-border/70 bg-card/80 space-y-4 shadow-sm text-left">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
                      <Search size={18} />
                    </span>
                    <input
                      type="text"
                      placeholder="Search articles by title, content, or author..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-full border border-border bg-background/50 focus:outline-hidden focus:ring-2 focus:ring-primary text-sm text-foreground text-left"
                    />
                  </div>

                  {/* Category Selection chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={cn(
                          "px-3.5 py-1 text-xs font-semibold rounded-full border transition-all duration-300 cursor-pointer",
                          selectedCategory === cat
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background text-foreground/80 border-border hover:border-primary/50 hover:bg-secondary/20"
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {filteredPosts.length > 0 ? (
                  <div className="grid gap-4">
                    {filteredPosts.map((post) => (
                      <article key={post.id} className="rounded-3xl border border-border/70 bg-card/80 p-6 text-left shadow-sm hover:border-primary/30 transition-all duration-300 relative group">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="space-y-2 flex-1">
                            <div className="flex items-center gap-3 text-xs text-foreground/50">
                              <span className="text-primary font-semibold">{post.category}</span>
                              <span>•</span>
                              <span>{post.createdAt}</span>
                              <span>•</span>
                              <span>By {post.author}</span>
                            </div>
                            <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                              {post.title}
                            </h2>
                            <p className="text-foreground/70 text-sm max-w-2xl">{post.excerpt}</p>
                          </div>
                          <div className="flex sm:flex-col items-center sm:items-end gap-3 justify-end mt-2 sm:mt-0">
                            <button
                              onClick={() => handleDeletePost(post.id)}
                              className="p-2.5 rounded-full border border-red-500/10 text-red-500/70 hover:text-red-500 hover:bg-red-500/10 transition-all duration-300 cursor-pointer"
                              title="Delete article"
                            >
                              <Trash2 size={16} />
                            </button>
                            <Link to={`/blog/${post.slug}`} className="cosmic-button text-xs py-1.5 px-4">
                              Read more
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 rounded-3xl border border-dashed border-border p-6 bg-card/20">
                    <Filter className="mx-auto h-12 w-12 text-muted-foreground/60 mb-3" />
                    <h3 className="text-lg font-semibold text-foreground">No articles found</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Try searching for a different keyword or category.
                    </p>
                  </div>
                )}
              </div>
            )}
          </section>

          <aside className="rounded-3xl border border-border/70 bg-card/80 p-6 text-left shadow-lg h-fit">
            <h2 className="text-2xl font-semibold">Create a new post</h2>
            <p className="mt-2 text-foreground/70 text-sm">
              Add a title, short summary, full article, and author details. Your new entry will appear instantly in the blog list.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <input
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none ring-0 focus:ring-2 focus:ring-primary text-sm"
                placeholder="Title"
                value={form.title}
                onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))}
                required
              />
              <input
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none ring-0 focus:ring-2 focus:ring-primary text-sm"
                placeholder="Short excerpt"
                value={form.excerpt}
                onChange={(event) => setForm((current) => ({ ...current, excerpt: event.target.value }))}
              />
              <textarea
                className="min-h-40 w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none ring-0 focus:ring-2 focus:ring-primary text-sm"
                placeholder="Write your article here"
                value={form.content}
                onChange={(event) => setForm((current) => ({ ...current, content: event.target.value }))}
                required
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none ring-0 focus:ring-2 focus:ring-primary text-sm"
                  placeholder="Your name"
                  value={form.author}
                  onChange={(event) => setForm((current) => ({ ...current, author: event.target.value }))}
                  required
                />
                <input
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none ring-0 focus:ring-2 focus:ring-primary text-sm"
                  placeholder="Category"
                  value={form.category}
                  onChange={(event) => setForm((current) => ({ ...current, category: event.target.value }))}
                />
              </div>
              <button type="submit" className="cosmic-button w-full justify-center py-2.5 cursor-pointer">
                Publish article
              </button>
            </form>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;

