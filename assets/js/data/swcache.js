const resource = [ /* --- CSS --- */ '/site-teologia/assets/css/style.css', /* --- PWA --- */ '/site-teologia/app.js', '/site-teologia/sw.js', /* --- HTML --- */ '/site-teologia/index.html', '/site-teologia/404.html', '/site-teologia/categories/', '/site-teologia/tags/', '/site-teologia/archives/', '/site-teologia/about/', /* --- Favicons & compressed JS --- */ '/site-teologia/assets/img/favicons/android-chrome-192x192.png', '/site-teologia/assets/img/favicons/android-chrome-512x512.png', '/site-teologia/assets/img/favicons/apple-touch-icon.png', '/site-teologia/assets/img/favicons/favicon-16x16.png', '/site-teologia/assets/img/favicons/favicon-32x32.png', '/site-teologia/assets/img/favicons/favicon.ico', '/site-teologia/assets/img/favicons/mstile-150x150.png', '/site-teologia/assets/js/dist/categories.min.js', '/site-teologia/assets/js/dist/commons.min.js', '/site-teologia/assets/js/dist/misc.min.js', '/site-teologia/assets/js/dist/page.min.js', '/site-teologia/assets/js/dist/post.min.js' ]; /* The request url with below domain will be cached */ const allowedDomains = [ 'jocile.com/site-teologia', 'fonts.gstatic.com', 'fonts.googleapis.com', 'cdn.jsdelivr.net', 'polyfill.io' ]; /* Requests that include the following path will be banned */ const denyUrls = [ ];
