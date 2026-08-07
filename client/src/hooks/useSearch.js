import { useMemo } from "react";
import { tools } from "@/data/tools";

export default function useSearch(query) {
  const results = useMemo(() => {
    if (!query.trim()) return [];

    const search = query.toLowerCase();

    return tools.filter((tool) => {
      return (
        tool.title.toLowerCase().includes(search) ||
        tool.category.toLowerCase().includes(search) ||
        tool.keywords?.some((keyword) =>
          keyword.toLowerCase().includes(search)
        )
      );
    });
  }, [query]);

  return results;
}