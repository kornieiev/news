import { Suspense } from "react";
import NewsList from "@/components/news-list/news-list";
import {
  getAllNews,
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

async function FilteredNews({ year, month }) {
  let news;
  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period</p>;

  if (!year && !month) {
    news = await getAllNews();

    newsContent = <NewsList news={news} />;
  }

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

export default async function FilteredNewsPage({ params }) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let years = await getAvailableNewsYears();
  let months = getAvailableNewsMonths(selectedYear);

  if (
    (selectedYear && !years.includes(selectedYear)) ||
    (selectedMonth && !months.includes(selectedMonth))
  ) {
    throw new Error("Invalid filter");
  }

  return (
    <>
      <header id='archive-header'>
        <nav>
          <ul>
            {years.map((year) => (
              <li key={year}>
                <Link href={`/archive/${year}`}>{year}</Link>
              </li>
            ))}
          </ul>
          <ul>
            {months.map((month) => (
              <li key={month}>
                <Link href={`/archive/${selectedYear}/${month}`}>{month}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Suspense fallback={<p>Loadinf news . . .</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
