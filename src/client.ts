import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "5c238sko",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: true,
});
