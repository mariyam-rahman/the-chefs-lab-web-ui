export const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;
if (!VITE_SERVER_URL) {
  throw new Error("VITE_SERVER_URL env variable was not found");
}

export default {
  VITE_SERVER_URL,
};
