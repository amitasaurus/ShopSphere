import { createClient } from 'next-sanity';

export default createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  apiVersion: 'v2024-03-12',
});
