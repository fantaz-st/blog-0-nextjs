const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'cbabic',
        mongodb_password: 'over9000',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'blog_messages-dev',
      },
    };
  }
  return {
    env: {
      mongodb_username: 'cbabic',
      mongodb_password: 'over9000',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'blog_messages',
    },
  };
};
