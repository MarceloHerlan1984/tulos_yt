// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity";
import { client } from "./client";

const token =
  process.env.SANITY_API_TOKEN ||
  "skxSo1YLHPXbwYAVr07ORJYQ6l2cEawQqaTcSmrVb7Se5cmId8N3VWvYoxha0YAZe3Co8oIZwazPw59wmgMrFfdTWMCZd3Iv8psiEtvq0kNqtXuPHcJgm64rqvmKQUqv2KjRMKZet0V2gmgkPJi2SmAYdr2z7P9yZWk6vkA1VQQEIhvNsdWK";

if (!token) {
  throw new Error("missing SANITY_API_READ_TOKEN");
}

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
  fetchOptions: {
    revalidate: 0,
  },
});
