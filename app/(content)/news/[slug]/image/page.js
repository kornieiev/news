import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsItem } from "@/lib/news";

export default async function ImagePage({ params }) {
  const newsItemSlug = params.slug;

  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div>
      <hr />
      <h2>ImagePage</h2>
      <hr />

      <p style={{ color: "yellow" }}>Intercepted Image Page</p>

      <div className='fullscreen-image'>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </div>
    </div>
  );
}
