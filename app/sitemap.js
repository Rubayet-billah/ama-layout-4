export const dynamic = "force-dynamic";
import { fetchAllReports, fetchCategories } from "@/utils/fetchFunctions";

export default async function sitemap() {
  const now = new Date();
  const firstDayOfMonth = new Date(
    now.getFullYear(),
    now.getMonth(),
    1,
    12,
    0,
    0
  );

  function getFirstDayOfCurrentWeekNoon() {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
    const diffToMonday = (dayOfWeek + 6) % 7; // Calculate difference to get to Monday (considering Monday as the first day of the week)

    const firstDayOfWeek = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - diffToMonday,
      12,
      0,
      0
    ); // Set time to 12:00 PM

    return firstDayOfWeek.toISOString();
  }

  const BASE_URL = process.env.BASE_URL;

  let categories = [];
  let reports = [];

  try {
    // Fetch categories
    const catRes = await fetch(`${process.env.API_URL}/api/categories`, {
      cache: "no-cache",
    });

    if (!catRes.ok) {
      throw new Error(`Failed to fetch categories: ${catRes.statusText}`);
    }

    const catData = await catRes.json();
    categories = catData.data || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
  }

  try {
    // Fetch reports
    const reportData = await fetchAllReports({
      query: {
        page: 1,
      },
    });

    if (reportData.totalCount > 20) {
      const allReports = await fetchAllReports({
        query: {
          page: 1,
          limit: reportData.totalCount, // reportData.totalCount,
        },
      });
      reports = allReports.data;
    } else {
      reports = reportData.data || [];
    }
  } catch (error) {
    console.error("Error fetching reports:", error);
  }

  // Construct the sitemap
  const sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: firstDayOfMonth.toISOString(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: firstDayOfMonth.toISOString(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...categories.map((cat) => ({
      url: `${BASE_URL}/industries/${cat.link}`,
      lastModified: getFirstDayOfCurrentWeekNoon(),
      changeFrequency: "weekly",
      priority: 0.8,
    })),
    ...reports.map((report) => ({
      url: `${BASE_URL}/reports/${report.slug}`,
      lastModified: report.updatedAt,
      changeFrequency: "weekly",
      priority: 1,
    })),
  ];

  return sitemap;
}
