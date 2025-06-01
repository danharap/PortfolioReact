// Utility function to handle image paths for any deployment (Vercel, GitHub Pages, or local)
export const getImagePath = (imagePath) => {
  // For any deployment, use the path as-is (relative to public folder)
  // This works on Vercel without any prefix
  return imagePath;
};
