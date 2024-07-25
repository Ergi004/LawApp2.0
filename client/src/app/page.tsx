import processMetadata from "@/lib/processMetadata";
import { fetchSanity, groq } from "@/lib/sanity/fetch";

import Modules from "@/ui/modules";

async function getPage() {
  return await fetchSanity<Sanity.Page>(
    groq`
		`,
    {
      tags: ["homepage"],
    }
  );
}

export default async function Page() {
  const page = await getPage();
  return <Modules modules={page?.modules} />;
}

export async function generateMetadata() {
  const page = await getPage();
  return processMetadata(page);
}
