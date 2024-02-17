const BASE_URL = "https://places.googleapis.com/v1/places";
const CLERK_PUBLISHABLE_KEY =
  process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY || "";
const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_KEY || "";

export { BASE_URL, CLERK_PUBLISHABLE_KEY, GOOGLE_KEY };
