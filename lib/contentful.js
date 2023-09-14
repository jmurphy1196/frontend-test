import { createClient } from "contentful";

export function createContentfulClient() {
  return createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.API_KEY,
  });
}
