const express = require('express');

const app = express()

require('./routes/web')(app)

// Handle production
if(process.env.NODE_ENV === 'production'){//這個東西只是分辨你是上架後的東西嗎 如果是才會跑下面的東西
    // Static folder
    app.use(express.static(__dirname + '/public/'));//指定你的靜態資源在哪
    
    // Handle SPA
    app.get('/sitemap.xml', (req, res) => res.sendFile(__dirname + '/sitemap.xml') )//指定路由
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html') )//指定路由
}

// How to listen
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));