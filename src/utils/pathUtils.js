// Utility function to handle image paths for both local development and GitHub Pages deployment
export const getImagePath = (imagePath) => {
  // Check if we're in development or production
  const isProduction = process.env.NODE_ENV === 'production';
  const baseUrl = process.env.PUBLIC_URL || '';
  
  // If in production (GitHub Pages), use the base URL, otherwise use relative path
  if (isProduction && baseUrl) {
    return `${baseUrl}${imagePath}`;
  }
  
  // For local development, use the path as-is (relative to public folder)
  return imagePath;
};
