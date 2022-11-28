module.exports = {
  env: {
    baseUrl: "https://aws-ssr-pokemon.ibrahimcesar.cloud",
    NEXT_PUBLIC_GA_ID: "G-0H4982YVLL"
  },
    webpack: (config, { dev }) => {
      if (!dev) {
        config.optimization.splitChunks.cacheGroups = {};
        config.optimization.minimize = true;
      }

      return config;
    },
    images: {
    domains: ['raw.githubusercontent.com'],
  },
}
