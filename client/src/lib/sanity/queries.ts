import { client } from "@/lib/sanity/client";
import { groq } from "./fetch";

export async function getSite() {
  return await client.fetch(groq``);
}
