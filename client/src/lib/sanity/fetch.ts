import dev from "@/lib/env";
import { client } from "@/lib/sanity/client";
import type { QueryParams, ResponseQueryOptions } from "next-sanity";
// import { draftMode } from 'next/headers'

export { default as groq } from "groq";

export function fetchSanity<T = object>(
  query: string,
  {
    params,
    ...next
  }: {
    params?: QueryParams & {
      // lang: Languages;
    };
  } & ResponseQueryOptions["next"]
) {
  const preview = dev;
  // || draftMode().isEnabled

  return client.fetch<T>(
    query,

    { ...params },
    preview
      ? {
          perspective: "previewDrafts",
          token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
          useCdn: false,
          next: {
            revalidate: 0,
            ...next,
          },
        }
      : {
          perspective: "published",
          useCdn: true,
          next: {
            revalidate: 300, // 5 minutes
            ...next,
          },
        }
  );
}
