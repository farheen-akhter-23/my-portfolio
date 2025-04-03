const isGithubPages = process.env.NODE_ENV === 'production';

const repo = 'my-portfolio'; // replace with your repo name

module.exports = {
  // output: 'export', // required for static export
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
  trailingSlash: true, // optional, helps with GitHub Pages
};
