import NewsList from "@/components/news-list/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <main>
      <h1>NewsPage:</h1>
      <NewsList news={news} />
    </main>
  );
}
