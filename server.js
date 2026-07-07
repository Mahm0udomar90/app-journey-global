import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 10000;

// 1. Serve static files from 'dist' FIRST
app.use(express.static(path.join(__dirname, 'dist')));

// 2. SPA fallback: for ANY GET request that doesn't match a static file,
//    send back index.html so React Router can handle the route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});