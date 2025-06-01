// Image utility for properly handling paths in different environments (Vercel, GitHub Pages, local)
const useImagePath = () => {
  /**
   * Returns the correct image path for the current environment
   * @param {string} path - The relative image path from the public folder
   * @returns {string} - The properly formatted image path
   */
  const getImagePath = (path) => {
    // If path already includes http or https, it's an external image
    if (path.startsWith('http')) {
      return path;
    }
    
    // For local paths, ensure they start with / and don't have /PortfolioReact
    if (path.startsWith('/PortfolioReact/')) {
      return path.replace('/PortfolioReact/', '/');
    }
    
    return path;
  };

  return { getImagePath };
};

export default useImagePath;
