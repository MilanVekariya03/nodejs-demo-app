const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    // message: 'Hello! My GitHub Actions CI/CD pipeline is working.',
    message: 'CI/CD pipeline successfully deployed a new version!',
    project: 'Node.js Demo App',
    status: 'success'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

if (require.main === module) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
