import dev from "@/lib/env";

export const BASE_URL = dev ? "http://localhost:3000" : process.env.NEXT_FE_URL;

export default function procesUrl(
  page: Sanity.PageBase,
  {
    base = true,
    params,
    // lang,
  }: {
    base?: boolean;
    params?: string;
    // lang?: Languages;
  } = {}
) {
  const slug = page.metadata?.slug?.current;
  const path = slug === "index" ? null : slug;

  return (
    (base ? `${BASE_URL}/` : "/") + [path, params].filter(Boolean).join("/")
  );
}
