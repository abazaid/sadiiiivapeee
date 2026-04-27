export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = decodeURIComponent(url.pathname || "/");

    // Ù‡Ø°Ù‡ Ø§Ù„ØµÙØ­Ø© ØªÙØ¹Ø±Ø¶ ÙÙ‚Ø· Ø¹Ù„Ù‰ /ÙÙŠØ¨ ÙˆÙ…Ø§ ØªØ­ØªÙ‡Ø§
    if (path === "/ÙÙŠØ¨" || path.startsWith("/ÙÙŠØ¨/")) {

      const html = `<!DOCTYPE html>


      <!DOCTYPE html>
      <html lang="ar" dir="rtl">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="canonical" href="https://saudivapes.com/ÙÙŠØ¨" />
          <meta name="robots" content="index, follow">
          <meta name="author" content="Ø³Ø¹ÙˆØ¯ÙŠ ÙÙŠØ¨">
          
          <!-- Primary Meta Tags -->
          <title>ÙÙŠØ¨ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ© | Ø£ÙØ¶Ù„ Ù…ØªØ¬Ø± ÙÙŠØ¨ ÙˆØ´ÙŠØ´Ø© Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ© ÙÙŠ Ø§Ù„Ù…Ù…Ù„ÙƒØ© - Ø³Ø¹ÙˆØ¯ÙŠ ÙÙŠØ¨</title>
          <meta name="title" content="ÙÙŠØ¨ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ© | Ø£ÙØ¶Ù„ Ù…ØªØ¬Ø± ÙÙŠØ¨ ÙˆØ´ÙŠØ´Ø© Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ© ÙÙŠ Ø§Ù„Ù…Ù…Ù„ÙƒØ© - Ø³Ø¹ÙˆØ¯ÙŠ ÙÙŠØ¨">
          <meta name="description" content="Ù…ØªØ¬Ø± Ø³Ø¹ÙˆØ¯ÙŠ ÙÙŠØ¨ Ø§Ù„Ø±Ø§Ø¦Ø¯ ÙÙŠ Ø§Ù„Ù…Ù…Ù„ÙƒØ© âœ“ Ø£Ø¬Ù‡Ø²Ø© ÙÙŠØ¨ Ø£ØµÙ„ÙŠØ© âœ“ Ù†ÙƒÙ‡Ø§Øª Ù…Ø³ØªÙˆØ±Ø¯Ø© âœ“ Ø´ÙŠØ´Ø© Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ© âœ“ Ø³Ø­Ø¨Ø§Øª Ø¬Ø§Ù‡Ø²Ø© âœ“ Ø´Ø­Ù† Ù…Ø¬Ø§Ù†ÙŠ âœ“ Ø¶Ù…Ø§Ù† Ø§Ù„Ø¬ÙˆØ¯Ø© âœ“ Ø®Ø¯Ù…Ø© Ø¹Ù…Ù„Ø§Ø¡ 24/7">
          <meta name="keywords" content="ÙÙŠØ¨ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©, Ø´ÙŠØ´Ø© Ø§Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ©, Ø³Ø­Ø¨Ø©, Ù†ÙƒÙ‡Ø§Øª ÙÙŠØ¨, Ù…ØªØ¬Ø± ÙÙŠØ¨, Ø£Ø¬Ù‡Ø²Ø© ÙÙŠØ¨, ÙÙŠØ¨ Ø§Ù„Ø±ÙŠØ§Ø¶, vape saudi, e-cigarette, Ø³Ø¹ÙˆØ¯ÙŠ ÙÙŠØ¨">
          
          <!-- Open Graph / Facebook -->
          <meta property="og:type" content="website">
          <meta property="og:url" content="https://saudivapes.com/">
          <meta property="og:title" content="ÙÙŠØ¨ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ© | Ø£ÙØ¶Ù„ Ù…ØªØ¬Ø± ÙÙŠØ¨ ÙˆØ´ÙŠØ´Ø© Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ© ÙÙŠ Ø§Ù„Ù…Ù…Ù„ÙƒØ©">
          <meta property="og:description" content="Ù…ØªØ¬Ø± Ø³Ø¹ÙˆØ¯ÙŠ ÙÙŠØ¨ Ø§Ù„Ø±Ø§Ø¦Ø¯ ÙÙŠ Ø§Ù„Ù…Ù…Ù„ÙƒØ© âœ“ Ø£Ø¬Ù‡Ø²Ø© ÙÙŠØ¨ Ø£ØµÙ„ÙŠØ© âœ“ Ù†ÙƒÙ‡Ø§Øª Ù…Ø³ØªÙˆØ±Ø¯Ø© âœ“ Ø´Ø­Ù† Ù…Ø¬Ø§Ù†ÙŠ âœ“ Ø¶Ù…Ø§Ù† Ø§Ù„Ø¬ÙˆØ¯Ø©">
          <meta property="og:image" content="https://cdn.salla.sa/jbXEY/i4MuRKIpBu4YDUt5npRdQUlAfMg7dZhFbgRUD7Nj.png">
          
          <!-- Twitter -->
          <meta property="twitter:card" content="summary_large_image">
          <meta property="twitter:url" content="https://saudivapes.com/">
          <meta property="twitter:title" content="ÙÙŠØ¨ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ© | Ø£ÙØ¶Ù„ Ù…ØªØ¬Ø± ÙÙŠØ¨ ÙˆØ´ÙŠØ´Ø© Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ© ÙÙŠ Ø§Ù„Ù…Ù…Ù„ÙƒØ©">
          <meta property="twitter:description" content="Ù…ØªØ¬Ø± Ø³Ø¹ÙˆØ¯ÙŠ ÙÙŠØ¨ Ø§Ù„Ø±Ø§Ø¦Ø¯ ÙÙŠ Ø§Ù„Ù…Ù…Ù„ÙƒØ© âœ“ Ø£Ø¬Ù‡Ø²Ø© ÙÙŠØ¨ Ø£ØµÙ„ÙŠØ© âœ“ Ù†ÙƒÙ‡Ø§Øª Ù…Ø³ØªÙˆØ±Ø¯Ø© âœ“ Ø´Ø­Ù† Ù…Ø¬Ø§Ù†ÙŠ">
          <meta property="twitter:image" content="https://cdn.salla.sa/jbXEY/i4MuRKIpBu4YDUt5npRdQUlAfMg7dZhFbgRUD7Nj.png">
          
          <!-- Favicon -->
          <link rel="icon" type="image/png" href="https://cdn.salla.sa/jbXEY/i4MuRKIpBu4YDUt5npRdQUlAfMg7dZhFbgRUD7Nj.png">
          <link rel="apple-touch-icon" href="https://cdn.salla.sa/jbXEY/i4MuRKIpBu4YDUt5npRdQUlAfMg7dZhFbgRUD7Nj.png">
          
          <!-- Canonical URL -->
          <link rel="canonical" href="https://saudivapes.com/">
          
          <!-- Structured Data -->
          <script type="application/ld+json">
          {
              "@context": "https://schema.org",
              "@type": "Store",
              "name": "Ø³Ø¹ÙˆØ¯ÙŠ ÙÙŠØ¨",
              "description": "Ù…ØªØ¬Ø± Ø³Ø¹ÙˆØ¯ÙŠ ÙÙŠØ¨ Ø§Ù„Ø±Ø§Ø¦Ø¯ ÙÙŠ Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ© Ù„Ø¨ÙŠØ¹ Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„ÙÙŠØ¨ ÙˆØ§Ù„Ø´ÙŠØ´Ø© Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ© ÙˆØ§Ù„Ù†ÙƒÙ‡Ø§Øª Ø§Ù„Ù…Ø³ØªÙˆØ±Ø¯Ø©",
              "url": "https://saudivapes.com",
              "logo": "https://cdn.salla.sa/jbXEY/i4MuRKIpBu4YDUt5npRdQUlAfMg7dZhFbgRUD7Nj.png",
              "image": "https://cdn.salla.sa/jbXEY/i4MuRKIpBu4YDUt5npRdQUlAfMg7dZhFbgRUD7Nj.png",
              "telephone": "+966500000000",
              "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "SA",
                  "addressRegion": "Ø§Ù„Ø±ÙŠØ§Ø¶"
              },
              "sameAs": [
                  "https://saudivapes.com"
              ]
          }
          </script>
          
          <style>
              /* Reset & Base */
              * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
              }
              
              :root {
                  --primary-color: #007bff;
                  --primary-dark: #0056b3;
                  --secondary-color: #28a745;
                  --accent-color: #17a2b8;
                  --text-dark: #212529;
                  --text-light: #6c757d;
                  --bg-light: #f8f9fa;
                  --bg-white: #ffffff;
                  --border-color: #e9ecef;
                  --shadow: 0 4px 15px rgba(0,0,0,0.1);
                  --shadow-hover: 0 8px 30px rgba(0,0,0,0.15);
                  --gradient-primary: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
                  --gradient-secondary: linear-gradient(135deg, #28a745 0%, #20c997 100%);
              }
              
              html {
                  scroll-behavior: smooth;
                  font-size: 16px;
              }
              
              body {
                  font-family: 'Segoe UI', Tahoma, Arial, sans-serif;
                  line-height: 1.7;
                  color: var(--text-dark);
                  direction: rtl;
                  background: var(--bg-white);
                  overflow-x: hidden;
              }
              
              /* Header */
              .header {
                  background: var(--gradient-primary);
                  padding: 1rem 0;
                  box-shadow: var(--shadow);
                  position: sticky;
                  top: 0;
                  z-index: 1000;
              }
              
              .header-content {
                  max-width: 1200px;
                  margin: 0 auto;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  padding: 0 2rem;
              }
              
              .logo {
                  display: flex;
                  align-items: center;
                  gap: 1rem;
                  color: white;
                  text-decoration: none;
              }
              
              .logo img {
                  width: 50px;
                  height: 50px;
                  border-radius: 50%;
                  border: 3px solid rgba(255,255,255,0.2);
              }
              
              .logo h1 {
                  font-size: 1.8rem;
                  font-weight: 700;
                  margin: 0;
              }
              
              .nav-menu {
                  display: flex;
                  list-style: none;
                  gap: 2rem;
                  margin: 0;
              }
              
              .nav-menu a {
                  color: white;
                  text-decoration: none;
                  font-weight: 500;
                  padding: 0.5rem 1rem;
                  border-radius: 25px;
                  transition: all 0.3s ease;
              }
              
              .nav-menu a:hover {
                  background: rgba(255,255,255,0.2);
                  transform: translateY(-2px);
              }
              
              .mobile-menu {
                  display: none;
                  background: none;
                  border: 2px solid white;
                  color: white;
                  padding: 0.5rem;
                  border-radius: 5px;
                  cursor: pointer;
              }
              
              /* Hero Section */
              .hero {
                  background: linear-gradient(135deg, rgba(0,123,255,0.95) 0%, rgba(0,86,179,0.95) 100%), 
                              url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3BhdHRlcm4+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz4KPHN2Zz4=');
                  color: white;
                  padding: 5rem 0;
                  text-align: center;
                  position: relative;
              }
              
              .hero::before {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%);
              }
              
              .hero-content {
                  max-width: 800px;
                  margin: 0 auto;
                  padding: 0 2rem;
                  position: relative;
                  z-index: 2;
              }
              
              .hero h1 {
                  font-size: clamp(2.5rem, 5vw, 4rem);
                  font-weight: 800;
                  margin-bottom: 1.5rem;
                  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
              }
              
              .hero-subtitle {
                  font-size: clamp(1.2rem, 3vw, 1.5rem);
                  margin-bottom: 2rem;
                  opacity: 0.95;
                  font-weight: 300;
              }
              
              .hero-badges {
                  display: flex;
                  justify-content: center;
                  gap: 1rem;
                  margin-bottom: 3rem;
                  flex-wrap: wrap;
              }
              
              .badge {
                  background: rgba(255,255,255,0.2);
                  padding: 0.5rem 1rem;
                  border-radius: 25px;
                  font-size: 0.9rem;
                  font-weight: 500;
                  backdrop-filter: blur(10px);
                  border: 1px solid rgba(255,255,255,0.3);
              }
              
              /* CTA Buttons */
              .cta-primary {
                  display: inline-block;
                  background: var(--gradient-secondary);
                  color: white;
                  padding: 1rem 2.5rem;
                  border-radius: 50px;
                  text-decoration: none;
                  font-weight: 600;
                  font-size: 1.1rem;
                  transition: all 0.3s ease;
                  box-shadow: var(--shadow);
                  margin: 0.5rem;
              }
              
              .cta-primary:hover {
                  transform: translateY(-3px);
                  box-shadow: var(--shadow-hover);
                  color: white;
              }
              
              .cta-secondary {
                  display: inline-block;
                  background: transparent;
                  color: white;
                  padding: 1rem 2.5rem;
                  border: 2px solid white;
                  border-radius: 50px;
                  text-decoration: none;
                  font-weight: 600;
                  font-size: 1.1rem;
                  transition: all 0.3s ease;
                  margin: 0.5rem;
              }
              
              .cta-secondary:hover {
                  background: white;
                  color: var(--primary-color);
                  transform: translateY(-3px);
              }
              
              /* Container */
              .container {
                  max-width: 1200px;
                  margin: 0 auto;
                  padding: 0 2rem;
              }
              
              /* Section */
              .section {
                  padding: 5rem 0;
              }
              
              .section-header {
                  text-align: center;
                  margin-bottom: 4rem;
              }
              
              .section-title {
                  font-size: clamp(2rem, 4vw, 3rem);
                  font-weight: 700;
                  margin-bottom: 1rem;
                  color: var(--text-dark);
              }
              
              .section-subtitle {
                  font-size: 1.2rem;
                  color: var(--text-light);
                  max-width: 600px;
                  margin: 0 auto;
              }
              
              /* Introduction Section */
              .intro-section {
                  background: var(--bg-light);
              }
              
              .intro-content {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 4rem;
                  align-items: center;
              }
              
              .intro-text {
                  font-size: 1.1rem;
                  line-height: 1.8;
                  text-align: justify;
              }
              
              .intro-text p {
                  margin-bottom: 1.5rem;
              }
              
              .intro-text strong {
                  color: var(--primary-color);
                  font-weight: 600;
              }
              
              .intro-features {
                  display: grid;
                  gap: 1.5rem;
              }
              
              .feature-item {
                  display: flex;
                  align-items: center;
                  gap: 1rem;
                  background: white;
                  padding: 1.5rem;
                  border-radius: 15px;
                  box-shadow: var(--shadow);
                  transition: transform 0.3s ease;
              }
              
              .feature-item:hover {
                  transform: translateY(-5px);
              }
              
              .feature-icon {
                  width: 50px;
                  height: 50px;
                  background: var(--gradient-primary);
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                  font-size: 1.5rem;
              }
              
              /* Products Section */
              .products-grid {
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                  gap: 2rem;
              }
              
              .product-card {
                  background: white;
                  border-radius: 20px;
                  overflow: hidden;
                  box-shadow: var(--shadow);
                  transition: all 0.3s ease;
                  border: 1px solid var(--border-color);
              }
              
              .product-card:hover {
                  transform: translateY(-10px);
                  box-shadow: var(--shadow-hover);
              }
              
              .product-image {
                  width: 100%;
                  height: 250px;
                  object-fit: cover;
              }
              
              .product-info {
                  padding: 2rem;
              }
              
              .product-title {
                  font-size: 1.3rem;
                  font-weight: 600;
                  margin-bottom: 1rem;
                  color: var(--text-dark);
              }
              
              .product-description {
                  color: var(--text-light);
                  margin-bottom: 1.5rem;
                  line-height: 1.6;
              }
              
              .product-link {
                  display: inline-block;
                  background: var(--gradient-primary);
                  color: white;
                  padding: 0.8rem 2rem;
                  border-radius: 25px;
                  text-decoration: none;
                  font-weight: 500;
                  transition: all 0.3s ease;
              }
              
              .product-link:hover {
                  transform: translateY(-2px);
                  box-shadow: 0 5px 15px rgba(0,123,255,0.3);
                  color: white;
              }
              
              /* FAQ Section */
              .faq-container {
                  max-width: 800px;
                  margin: 0 auto;
              }
              
              .faq-item {
                  background: white;
                  margin-bottom: 1rem;
                  border-radius: 15px;
                  overflow: hidden;
                  box-shadow: var(--shadow);
              }
              
              .faq-question {
                  background: var(--bg-light);
                  padding: 1.5rem 2rem;
                  cursor: pointer;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  font-weight: 600;
                  font-size: 1.1rem;
                  transition: background 0.3s ease;
              }
              
              .faq-question:hover {
                  background: #e9ecef;
              }
              
              .faq-icon {
                  transition: transform 0.3s ease;
              }
              
              .faq-answer {
                  padding: 0 2rem 2rem;
                  color: var(--text-light);
                  line-height: 1.7;
              }
              
              /* Stats Section */
              .stats-section {
                  background: var(--gradient-primary);
                  color: white;
              }
              
              .stats-grid {
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                  gap: 2rem;
                  text-align: center;
              }
              
              .stat-item h3 {
                  font-size: 3rem;
                  font-weight: 700;
                  margin-bottom: 0.5rem;
              }
              
              .stat-item p {
                  font-size: 1.1rem;
                  opacity: 0.9;
              }
              
              /* Footer */
              .footer {
                  background: #343a40;
                  color: white;
                  padding: 3rem 0 1rem;
              }
              
              .footer-content {
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                  gap: 2rem;
                  margin-bottom: 2rem;
              }
              
              .footer-section h3 {
                  margin-bottom: 1rem;
                  color: var(--accent-color);
              }
              
              .footer-section a {
                  color: #adb5bd;
                  text-decoration: none;
                  transition: color 0.3s ease;
                  display: block;
                  margin-bottom: 0.5rem;
              }
              
              .footer-section a:hover {
                  color: white;
              }
              
              .footer-bottom {
                  border-top: 1px solid #495057;
                  padding-top: 1rem;
                  text-align: center;
                  color: #adb5bd;
              }
              
              /* Responsive Design */
              @media (max-width: 768px) {
                  .nav-menu {
                      display: none;
                  }
                  
                  .mobile-menu {
                      display: block;
                  }
                  
                  .hero {
                      padding: 3rem 0;
                  }
                  
                  .intro-content {
                      grid-template-columns: 1fr;
                      gap: 2rem;
                  }
                  
                  .products-grid {
                      grid-template-columns: 1fr;
                  }
                  
                  .stats-grid {
                      grid-template-columns: repeat(2, 1fr);
                  }
                  
                  .container {
                      padding: 0 1rem;
                  }
                  
                  .section {
                      padding: 3rem 0;
                  }
              }
              
              @media (max-width: 480px) {
                  .header-content {
                      padding: 0 1rem;
                  }
                  
                  .hero-badges {
                      flex-direction: column;
                      align-items: center;
                  }
                  
                  .stats-grid {
                      grid-template-columns: 1fr;
                  }
                  
                  .footer-content {
                      grid-template-columns: 1fr;
                  }
              }
              
              /* Animation */
              @keyframes fadeInUp {
                  from {
                      opacity: 0;
                      transform: translateY(30px);
                  }
                  to {
                      opacity: 1;
                      transform: translateY(0);
                  }
              }
              
              .fade-in-up {
                  animation: fadeInUp 0.6s ease-out;
              }
              
              /* Utility Classes */
              .text-center { text-align: center; }
              .text-primary { color: var(--primary-color); }
              .text-secondary { color: var(--secondary-color); }
              .bg-light { background: var(--bg-light); }
              .bg-white { background: var(--bg-white); }
              .mt-1 { margin-top: 1rem; }
              .mt-2 { margin-top: 2rem; }
              .mb-1 { margin-bottom: 1rem; }
              .mb-2 { margin-bottom: 2rem; }
          </style>
      </head>
      
      <body>
          <!-- Header -->
          <header class="header">
              <div class="header-content">
                  <a href="https://saudivapes.com" class="logo">
                      <img src="https://cdn.salla.sa/jbXEY/i4MuRKIpBu4YDUt5npRdQUlAfMg7dZhFbgRUD7Nj.png" alt="Ø³Ø¹ÙˆØ¯ÙŠ ÙÙŠØ¨ - Ø´Ø¹Ø§Ø± Ø§Ù„Ù…ØªØ¬Ø±" loading="lazy">
                      <h1>Ø³Ø¹ÙˆØ¯ÙŠ ÙÙŠØ¨</h1>
                  </a>
                  
                  <nav>
                      <ul class="nav-menu">
                          <li><a href="#home">Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©</a></li>
                          <li><a href="#products">Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª</a></li>
                          <li><a href="#about">Ù…Ù† Ù†Ø­Ù†</a></li>
                          <li><a href="#faq">Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©</a></li>
                          <li><a href="#contact">Ø§Ù„ØªÙˆØ§ØµÙ„</a></li>
                      </ul>
                      
                      <button class="mobile-menu" onclick="toggleMobileMenu()">â˜°</button>
                  </nav>
              </div>
          </header>
      
          <!-- Hero Section -->
          <section id="home" class="hero">
              <div class="hero-content">
                  <h1>Ø£ÙØ¶Ù„ Ù…ØªØ¬Ø± ÙÙŠØ¨ ÙˆØ´ÙŠØ´Ø© Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ© ÙÙŠ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©</h1>
                  <p class="hero-subtitle">ØªØ¬Ø±Ø¨Ø© ÙØ±ÙŠØ¯Ø© ÙÙŠ Ø¹Ø§Ù„Ù… Ø§Ù„ÙÙŠØ¨ Ù…Ø¹ Ø£Ø¬ÙˆØ¯ Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Ø§Ù„Ù…Ø³ØªÙˆØ±Ø¯Ø© ÙˆØ£ÙØ¶Ù„ Ø§Ù„Ø£Ø³Ø¹Ø§Ø±</p>
                  
                  <div class="hero-badges">
                      <span class="badge">âœ“ Ù…Ù†ØªØ¬Ø§Øª Ø£ØµÙ„ÙŠØ© 100%</span>
                      <span class="badge">âœ“ Ø´Ø­Ù† Ù…Ø¬Ø§Ù†ÙŠ</span>
                      <span class="badge">âœ“ Ø¶Ù…Ø§Ù† Ø§Ù„Ø¬ÙˆØ¯Ø©</span>
                      <span class="badge">âœ“ Ø®Ø¯Ù…Ø© Ø¹Ù…Ù„Ø§Ø¡ 24/7</span>
                  </div>
                  
                  <div>
                      <a href="https://saudivapes.com" class="cta-primary">ØªØ³ÙˆÙ‚ Ø§Ù„Ø¢Ù†</a>
                      <a href="https://saudivapes.com/offers" class="cta-secondary">Ø§Ø³ØªØ¹Ø±Ø¶ Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª</a>
                  </div>
              </div>
          </section>
      
          <!-- Introduction Section -->
          <section class="intro-section section">
              <div class="container">
                  <div class="intro-content">
                      <div class="intro-text">
                          <h2>Ù…Ø±Ø­Ø¨Ø§Ù‹ Ø¨Ùƒ ÙÙŠ Ù…ØªØ¬Ø± Ø³Ø¹ÙˆØ¯ÙŠ ÙÙŠØ¨</h2>
                          <p>
                              Ù†Ø­Ù† Ù†ÙØ®Ø± Ø¨ÙƒÙˆÙ†Ù†Ø§ Ø§Ù„ÙˆØ¬Ù‡Ø© Ø§Ù„Ø£ÙˆÙ„Ù‰ Ù„Ø¹Ø´Ø§Ù‚ Ø§Ù„ÙÙŠØ¨ ÙˆØ§Ù„Ø´ÙŠØ´Ø© Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ© ÙÙŠ Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©. 
                              Ù…Ù†Ø° Ø§Ù†Ø·Ù„Ø§Ù‚ØªÙ†Ø§ØŒ Ø§Ù„ØªØ²Ù…Ù†Ø§ Ø¨ØªÙ‚Ø¯ÙŠÙ… ØªØ¬Ø±Ø¨Ø© ØªØ³ÙˆÙ‚ Ø§Ø³ØªØ«Ù†Ø§Ø¦ÙŠØ© ØªØ¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„Ø¬ÙˆØ¯Ø© Ø§Ù„Ø¹Ø§Ù„ÙŠØ© ÙˆØ§Ù„Ø®Ø¯Ù…Ø© Ø§Ù„Ù…ØªÙ…ÙŠØ²Ø©.
                          </p>
                          
                          <p>
                              Ù…ØªØ¬Ø±Ù†Ø§ ÙŠØ¶Ù… ØªØ´ÙƒÙŠÙ„Ø© ÙˆØ§Ø³Ø¹Ø© Ù…Ù† <a href="https://saudivapes.com/%D9%86%D9%83%D9%87%D8%A7%D8%AA-%D8%B4%D9%8A%D8%B4%D8%A9-%D9%81%D9%8A%D8%A8/c1363212966"><strong>Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„ÙÙŠØ¨ Ø§Ù„Ø£ØµÙ„ÙŠØ©</strong></a> Ù…Ù† Ø£Ø´Ù‡Ø± Ø§Ù„Ø¹Ù„Ø§Ù…Ø§Øª Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ© Ø§Ù„Ø¹Ø§Ù„Ù…ÙŠØ©ØŒ 
                              Ø¨Ø§Ù„Ø¥Ø¶Ø§ÙØ© Ø¥Ù„Ù‰ Ù…Ø¬Ù…ÙˆØ¹Ø© Ù…Ø°Ù‡Ù„Ø© Ù…Ù† <strong>Ø§Ù„Ù†ÙƒÙ‡Ø§Øª Ø§Ù„Ù…Ø³ØªÙˆØ±Ø¯Ø©</strong> Ø§Ù„ØªÙŠ ØªÙ„Ø¨ÙŠ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø£Ø°ÙˆØ§Ù‚ ÙˆØ§Ù„ØªÙØ¶ÙŠÙ„Ø§Øª. 
                              Ø³ÙˆØ§Ø¡ ÙƒÙ†Øª Ù…Ø¨ØªØ¯Ø¦Ø§Ù‹ ÙÙŠ Ø¹Ø§Ù„Ù… Ø§Ù„ÙÙŠØ¨ Ø£Ùˆ Ø®Ø¨ÙŠØ±Ø§Ù‹ Ù…ØªÙ…Ø±Ø³Ø§Ù‹ØŒ Ø³ØªØ¬Ø¯ Ù„Ø¯ÙŠÙ†Ø§ ÙƒÙ„ Ù…Ø§ ØªØ­ØªØ§Ø¬Ù‡.
                          </p>
                          
                          <p>
                              Ù†Ø¤Ù…Ù† Ø¨Ø£Ù† Ø§Ù„ÙÙŠØ¨ Ù„ÙŠØ³ Ù…Ø¬Ø±Ø¯ Ø¨Ø¯ÙŠÙ„ Ù„Ù„ØªØ¯Ø®ÙŠÙ† Ø§Ù„ØªÙ‚Ù„ÙŠØ¯ÙŠØŒ Ø¨Ù„ Ø£Ø³Ù„ÙˆØ¨ Ø­ÙŠØ§Ø© Ø­Ø¯ÙŠØ« ÙŠÙ…Ù†Ø­Ùƒ Ø§Ù„Ø­Ø±ÙŠØ© ÙÙŠ Ø§Ù„Ø§Ø®ØªÙŠØ§Ø± 
                              Ø¨ÙŠÙ† Ù…Ø¦Ø§Øª Ø§Ù„Ù†ÙƒÙ‡Ø§Øª Ø§Ù„Ù…ØªÙ†ÙˆØ¹Ø© ÙˆÙ…Ø³ØªÙˆÙŠØ§Øª Ø§Ù„Ù†ÙŠÙƒÙˆØªÙŠÙ† Ø§Ù„Ù…Ø®ØªÙ„ÙØ©. ÙØ±ÙŠÙ‚Ù†Ø§ Ø§Ù„Ù…ØªØ®ØµØµ ÙŠØ¹Ù…Ù„ Ø¨Ø¬Ø¯ Ù„Ø¶Ù…Ø§Ù† ÙˆØµÙˆÙ„ 
                              Ø£Ø­Ø¯Ø« Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª ÙˆØ§Ù„Ø§Ø¨ØªÙƒØ§Ø±Ø§Øª ÙÙŠ Ø¹Ø§Ù„Ù… Ø§Ù„ÙÙŠØ¨ Ø¥Ù„Ù‰ Ø¹Ù…Ù„Ø§Ø¦Ù†Ø§ Ø§Ù„ÙƒØ±Ø§Ù… ÙÙŠ Ø¬Ù…ÙŠØ¹ Ø£Ù†Ø­Ø§Ø¡ Ø§Ù„Ù…Ù…Ù„ÙƒØ©.
                          </p>
                      </div>
                      
                      <div class="intro-features">
                          <div class="feature-item">
                              <div class="feature-icon">ðŸšš</div>
                              <div>
                                  <h3>Ø´Ø­Ù† Ø³Ø±ÙŠØ¹ ÙˆÙ…Ø¬Ø§Ù†ÙŠ</h3>
                                  <p>ØªÙˆØµÙŠÙ„ Ù„Ø¬Ù…ÙŠØ¹ Ù…Ø¯Ù† Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø®Ù„Ø§Ù„ 24-48 Ø³Ø§Ø¹Ø©</p>
                              </div>
                          </div>
                          
                          <div class="feature-item">
                              <div class="feature-icon">ðŸ›¡ï¸</div>
                              <div>
                                  <h3>Ø¶Ù…Ø§Ù† Ø§Ù„Ø¬ÙˆØ¯Ø©</h3>
                                  <p>Ø¬Ù…ÙŠØ¹ Ù…Ù†ØªØ¬Ø§ØªÙ†Ø§ Ø£ØµÙ„ÙŠØ© Ù…Ø¹ Ø¶Ù…Ø§Ù† Ø§Ù„Ø§Ø³ØªØ¨Ø¯Ø§Ù„ ÙˆØ§Ù„Ø¥Ø±Ø¬Ø§Ø¹</p>
                              </div>
                          </div>
                          
                          <div class="feature-item">
                              <div class="feature-icon">ðŸ’¬</div>
                              <div>
                                  <h3>Ø®Ø¯Ù…Ø© Ø¹Ù…Ù„Ø§Ø¡ Ù…ØªÙ…ÙŠØ²Ø©</h3>
                                  <p>ÙØ±ÙŠÙ‚ Ù…ØªØ®ØµØµ Ù…ØªØ§Ø­ 24/7 Ù„Ù„Ø¥Ø¬Ø§Ø¨Ø© Ø¹Ù„Ù‰ Ø§Ø³ØªÙØ³Ø§Ø±Ø§ØªÙƒ</p>
                              </div>
                          </div>
                          
                          <div class="feature-item">
                              <div class="feature-icon">ðŸ’³</div>
                              <div>
                                  <h3>Ø·Ø±Ù‚ Ø¯ÙØ¹ Ø¢Ù…Ù†Ø©</h3>
                                  <p>Ø®ÙŠØ§Ø±Ø§Øª Ø¯ÙØ¹ Ù…ØªØ¹Ø¯Ø¯Ø© ÙˆØ¢Ù…Ù†Ø© Ù…Ø¹ Ø­Ù…Ø§ÙŠØ© ÙƒØ§Ù…Ù„Ø© Ù„Ù„Ø¨ÙŠØ§Ù†Ø§Øª</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          <!-- Stats Section -->
          <section class="stats-section section">
              <div class="container">
                  <div class="stats-grid">
                      <div class="stat-item">
                          <h3>50,000+</h3>
                          <p>Ø¹Ù…ÙŠÙ„ Ø±Ø§Ø¶Ù</p>
                      </div>
                      
                      <div class="stat-item">
                          <h3>1,000+</h3>
                          <p>Ù…Ù†ØªØ¬ Ù…ØªÙ†ÙˆØ¹</p>
                      </div>
                      
                      <div class="stat-item">
                          <h3>24/7</h3>
                          <p>Ø®Ø¯Ù…Ø© Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡</p>
                      </div>
                      
                      <div class="stat-item">
                          <h3>99%</h3>
                          <p>Ù…Ø¹Ø¯Ù„ Ø§Ù„Ø±Ø¶Ø§</p>
                      </div>
                  </div>
              </div>
          </section>
      
          <!-- Products Section -->
          <section id="products" class="section">
              <div class="container">
                  <div class="section-header">
                      <h2 class="section-title">Ù…Ù†ØªØ¬Ø§ØªÙ†Ø§ Ø§Ù„Ù…Ù…ÙŠØ²Ø©</h2>
                      <p class="section-subtitle">Ø§ÙƒØªØ´Ù Ø£ÙØ¶Ù„ ØªØ´ÙƒÙŠÙ„Ø© Ù…Ù† Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„ÙÙŠØ¨ ÙˆØ§Ù„Ù†ÙƒÙ‡Ø§Øª ÙˆØ§Ù„Ø¥ÙƒØ³Ø³ÙˆØ§Ø±Ø§Øª ÙÙŠ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©</p>
                  </div>
                  
                  <div class="products-grid">
                      <article class="product-card">
                          <img src="https://cdn.salla.sa/jbXEY/fjavQ3jzYSngOVoTvErDzzwk2Btombt5cVEDAL1F.jpg" alt="Ù†ÙƒÙ‡Ø© Ripe Vapes VCT - ØªÙˆØ¨Ø§ÙƒÙˆ ÙØ§Ù†ÙŠÙ„Ø§ ÙƒØ§Ø³ØªØ±Ø¯" class="product-image" loading="lazy">
                          <div class="product-info">
                              <h3 class="product-title">Ù†ÙƒÙ‡Ø© Ripe Vapes VCT Ø§Ù„Ø´Ù‡ÙŠØ±Ø©</h3>
                              <p class="product-description">
                                  Ù†ÙƒÙ‡Ø© Ø±Ø§Ù‚ÙŠØ© Ù…Ù† Ø±ÙŠØ¨ ÙÙŠØ¨Ø³ ØªØ¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„ØªÙˆØ¨Ø§ÙƒÙˆ Ø§Ù„ÙØ§Ø®Ø± ÙˆØ§Ù„ÙØ§Ù†ÙŠÙ„Ø§ Ø§Ù„ÙƒØ±ÙŠÙ…ÙŠØ© Ù…Ø¹ Ù„Ù…Ø³Ø© Ù…Ù† Ø§Ù„ÙƒØ§Ø³ØªØ±Ø¯. 
                                  ØªØ¹ØªØ¨Ø± Ù…Ù† Ø£Ø´Ù‡Ø± Ø§Ù„Ù†ÙƒÙ‡Ø§Øª Ø§Ù„Ø¹Ø§Ù„Ù…ÙŠØ© ÙˆØ£ÙƒØ«Ø±Ù‡Ø§ Ù…Ø¨ÙŠØ¹Ø§Ù‹. Ù…Ø«Ø§Ù„ÙŠØ© Ù„Ù…Ø­Ø¨ÙŠ Ø§Ù„Ù†ÙƒÙ‡Ø§Øª Ø§Ù„Ù…Ø¹Ù‚Ø¯Ø© ÙˆØ§Ù„ØºÙ†ÙŠØ©.
                              </p>
                              <a href="https://saudivapes.com/%D9%86%D9%83%D9%87%D8%A9-ripe-vapes-vct-%D8%A7%D9%84%D8%B4%D9%87%D9%8A%D8%B1%D8%A9-%D9%88%D8%A7%D9%84%D8%A7%D9%83%D8%AB%D8%B1-%D9%85%D8%A8%D9%8A%D8%B9%D8%A7-%D8%AA%D9%88%D8%A8%D8%A7%D9%83%D9%88-%D9%81%D8%A7%D9%86%D9%8A%D9%84%D8%A7/p672928137" class="product-link">Ø§Ø·Ù„Ø¨Ù‡Ø§ Ø§Ù„Ø¢Ù†</a>
                          </div>
                      </article>
                      
                      <article class="product-card">
                          <img src="https://cdn.salla.sa/jbXEY/7sMUapYXq2xgbyBx0gY35fcfDZMeRFE1LBZF5rYv.jpg" alt="Ù†ÙƒÙ‡Ø© VGOD Lush Ice - Ø¨Ø·ÙŠØ® Ø¨Ø§Ø±Ø¯ Ù„ÙˆØ´ Ø¢ÙŠØ³" class="product-image" loading="lazy">
                          <div class="product-info">
                              <h3 class="product-title">Ù†ÙƒÙ‡Ø© VGOD Ø¨Ø·ÙŠØ® Ø¨Ø§Ø±Ø¯ Lush Ice</h3>
                              <p class="product-description">
                                  Ø§Ù„Ù†ÙƒÙ‡Ø© Ø§Ù„Ø£Ø´Ù‡Ø± Ù…Ù† ÙÙŠ Ø¬ÙˆØ¯! Ù…Ø²ÙŠØ¬ Ù…Ù†Ø¹Ø´ Ù…Ù† Ø§Ù„Ø¨Ø·ÙŠØ® Ø§Ù„Ø¹ØµÙŠØ± Ù…Ø¹ Ù„Ù…Ø³Ø© Ø¨Ø±ÙˆØ¯Ø© Ù‚ÙˆÙŠØ©. 
                                  Ù…Ø«Ø§Ù„ÙŠØ© Ù„Ø£ÙˆÙ‚Ø§Øª Ø§Ù„ØµÙŠÙ ÙˆÙ„Ù…Ø­Ø¨ÙŠ Ø§Ù„Ù†ÙƒÙ‡Ø§Øª Ø§Ù„Ù…Ù†Ø¹Ø´Ø©. Ø¬ÙˆØ¯Ø© Ø¹Ø§Ù„ÙŠØ© ÙˆÙ†ÙƒÙ‡Ø© Ù…Ø±ÙƒØ²Ø© ØªØ¯ÙˆÙ… Ø·ÙˆÙŠÙ„Ø§Ù‹.
                              </p>
                              <a href="https://saudivapes.com/%D9%86%D9%83%D9%87%D8%A9-%D8%B3%D8%AD%D8%A8%D8%A9-%D8%B3%D9%88%D9%84%D8%AA-%D8%A8%D8%B7%D9%8A%D8%AE-%D8%A8%D8%A7%D8%B1%D8%AF-%D9%84%D9%88%D8%B4-%D8%A7%D9%8A%D8%B3-%D8%A7%D9%84%D8%A7%D9%83%D8%AB%D8%B1-%D9%85%D8%A8%D9%8A%D8%B9%D8%A7-vgod-lush-ice/p383415948" class="product-link">ØªØ³ÙˆÙ‚ Ø§Ù„Ø¢Ù†</a>
                          </div>
                      </article>
                      
                      <article class="product-card">
                          <img src="https://cdn.salla.sa/jbXEY/kBJJYvGXQPwFfrN4wPzj5laE3Wulup1He8tVK2le.jpg" alt="Ù†ÙƒÙ‡Ø© VGOD Cubano Brown - Ø§Ù„Ø³ÙŠØ¬Ø§Ø± Ø§Ù„ÙƒÙˆØ¨ÙŠ Ø§Ù„Ø¨Ù†ÙŠ" class="product-image" loading="lazy">
                          <div class="product-info">
                              <h3 class="product-title">Ù†ÙƒÙ‡Ø© VGOD ÙƒÙˆØ¨Ø§Ù†Ùˆ Ø§Ù„Ø¨Ù†ÙŠ</h3>
                              <p class="product-description">
                                  ØªØ¬Ø±Ø¨Ø© Ø£ØµÙŠÙ„Ø© Ù„Ù„Ø³ÙŠØ¬Ø§Ø± Ø§Ù„ÙƒÙˆØ¨ÙŠ Ø§Ù„ÙØ§Ø®Ø± ÙÙŠ Ù†ÙƒÙ‡Ø© ÙÙŠØ¨ Ø§Ø³ØªØ«Ù†Ø§Ø¦ÙŠØ©. Ù…Ø²ÙŠØ¬ ØºÙ†ÙŠ Ù…Ù† Ø§Ù„ØªÙˆØ¨Ø§ÙƒÙˆ Ø§Ù„Ø¨Ù†ÙŠ 
                                  Ù…Ø¹ Ù„Ù…Ø³Ø§Øª Ø®Ø´Ø¨ÙŠØ© Ù†Ø§Ø¹Ù…Ø©. Ù…Ø«Ø§Ù„ÙŠØ© Ù„Ù„Ù…Ø¯Ø®Ù†ÙŠÙ† Ø§Ù„Ø³Ø§Ø¨Ù‚ÙŠÙ† ÙˆÙ…Ø­Ø¨ÙŠ Ø§Ù„Ù†ÙƒÙ‡Ø§Øª Ø§Ù„ØªÙ‚Ù„ÙŠØ¯ÙŠØ© Ø§Ù„Ø±Ø§Ù‚ÙŠØ©.
                              </p>
                              <a href="https://saudivapes.com/%D9%86%D9%83%D9%87%D8%A9-%D8%B3%D8%AD%D8%A8%D8%A9-%D8%B3%D9%88%D9%84%D8%AA-%D8%A7%D9%84%D8%B3%D9%8A%D8%AC%D8%A7%D8%B1-%D8%A7%D9%84%D9%83%D9%88%D8%A8%D9%8A-%D9%83%D9%88%D8%A8%D8%A7%D9%86%D9%88-%D8%A7%D9%84%D8%A7%D9%83%D8%AB%D8%B1-%D9%85%D8%A8%D9%8A%D8%B9%D8%A7-%D8%A8%D9%86%D9%8A-cubano-vgod-brown-%D8%A7%D9%84%D8%A8%D9%86%D9%8A-%D8%A7%D9%84%D8%B3%D9%8A%D8%AC%D8%A7%D8%B1-%D8%A7%D9%84%D9%83%D9%88%D8%A8%D9%8A/p564362900" class="product-link">Ø¬Ø±Ø¨Ù‡Ø§ Ø§Ù„Ø¢Ù†</a>
                          </div>
                      </article>
                      
                      <article class="product-card">
                          <img src="https://cdn.salla.sa/jbXEY/hjpnP5LZJaKzHfnA6WYF74sDVjvfDyGZhk1TaoVA.jpg" alt="Ù†ÙƒÙ‡Ø© VGOD Dry Tobacco - Ø¯Ø±Ø§ÙŠÙ Ø§Ù„ØªÙˆØ¨Ø§ÙƒÙˆ Ø§Ù„Ø¬Ø§ÙØ©" class="product-image" loading="lazy">
                          <div class="product-info">
                              <h3 class="product-title">Ù†ÙƒÙ‡Ø© VGOD Ø§Ù„ØªÙˆØ¨Ø§ÙƒÙˆ Ø§Ù„Ø¬Ø§Ù</h3>
                              <p class="product-description">
                                  Ù†ÙƒÙ‡Ø© ØªÙˆØ¨Ø§ÙƒÙˆ Ù†Ù‚ÙŠØ© ÙˆØ¬Ø§ÙØ© Ø¨Ø¯ÙˆÙ† Ø¥Ø¶Ø§ÙØ§ØªØŒ Ù…ØµÙ…Ù…Ø© Ø®ØµÙŠØµØ§Ù‹ Ù„Ù„Ù…Ø¯Ø®Ù†ÙŠÙ† Ø§Ù„Ø°ÙŠÙ† ÙŠØ¨Ø­Ø«ÙˆÙ† Ø¹Ù† ØªØ¬Ø±Ø¨Ø© 
                                  Ø·Ø¨ÙŠØ¹ÙŠØ© ÙˆØ£ØµÙŠÙ„Ø©. Ø·Ø¹Ù… ØªÙˆØ¨Ø§ÙƒÙˆ Ø­Ù‚ÙŠÙ‚ÙŠ Ø¨Ø¯ÙˆÙ† Ø­Ù„Ø§ÙˆØ© Ø£Ùˆ Ù†ÙƒÙ‡Ø§Øª Ø¥Ø¶Ø§ÙÙŠØ© Ù…ØµØ·Ù†Ø¹Ø©.
                              </p>
                              <a href="https://saudivapes.com/%D9%86%D9%83%D9%87%D8%A9-%D8%B3%D8%AD%D8%A8%D8%A9-%D8%B3%D9%88%D9%84%D8%AA-%D8%AF%D8%B1%D8%A7%D9%8A-%D8%A7%D9%84%D8%AA%D9%88%D8%A8%D8%A7%D9%83%D9%88-%D8%A7%D9%84%D8%AC%D8%A7%D9%81%D8%A9-%D8%A8%D8%AF%D9%88%D9%86-%D8%A5%D8%B6%D8%A7%D9%81%D8%A7%D8%AA-%D9%85%D9%85%D8%AA%D8%A7%D8%B2%D8%A9-%D9%84%D9%84%D9%85%D8%AF%D8%AE%D9%86%D9%8A%D9%86-dry-tobacco-vgod/p1472618379" class="product-link">Ø§Ø­ØµÙ„ Ø¹Ù„ÙŠÙ‡Ø§</a>
                          </div>
                      </article>
                      
                      <article class="product-card">
                          <img src="https://cdn.salla.sa/jbXEY/1ec18188-5f3e-4610-b6ef-563df5131e87-1000x973.52342158859-5QgaJ9pcEeEn5MY46ZGNuAIGIaidu3sWmYnU3zll.png" alt="Ø£Ø¸Ø±Ù Ù†ÙŠÙƒÙˆØªÙŠÙ† ÙˆØ§ÙŠØª ÙÙˆÙƒØ³ White Fox" class="product-image" loading="lazy">
                          <div class="product-info">
                              <h3 class="product-title">Ø£Ø¸Ø±Ù Ù†ÙŠÙƒÙˆØªÙŠÙ† ÙˆØ§ÙŠØª ÙÙˆÙƒØ³</h3>
                              <p class="product-description">
                                  Ø£Ø¸Ø±Ù Ù†ÙŠÙƒÙˆØªÙŠÙ† ÙØ§Ø®Ø±Ø© Ù…Ù† ÙˆØ§ÙŠØª ÙÙˆÙƒØ³ØŒ Ø¨Ø¯ÙŠÙ„ Ù†Ø¸ÙŠÙ ÙˆØµØ­ÙŠ Ù„Ù„ØªØ¯Ø®ÙŠÙ† Ø§Ù„ØªÙ‚Ù„ÙŠØ¯ÙŠ. 
                                  Ø³Ù‡Ù„Ø© Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… ÙˆØ¨Ø¯ÙˆÙ† Ø±Ø§Ø¦Ø­Ø©ØŒ Ù…Ø«Ø§Ù„ÙŠØ© Ù„Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø£ÙˆÙ‚Ø§Øª ÙˆØ§Ù„Ø£Ù…Ø§ÙƒÙ†. ØªØ£Ø«ÙŠØ± Ø³Ø±ÙŠØ¹ ÙˆÙ…Ø±Ø¶ÙŠ.
                              </p>
                              <a href="https://saudivapes.com/%D9%88%D8%A7%D9%8A%D8%AA-%D9%81%D9%88%D9%83%D8%B3-%D8%A7%D8%B8%D8%B1%D9%81-%D9%86%D9%8A%D9%83%D9%88%D8%AA%D9%8A%D9%86-white-fox-nicotine-pouches/p1847489662" class="product-link">Ø§Ø·Ù„Ø¨ Ø§Ù„Ø¢Ù†</a>
                          </div>
                      </article>
                      
                      <article class="product-card">
                          <img src="https://cdn.salla.sa/jbXEY/aaDe1AQauRh6qjVq7S5pEDMFX2rO295eJrBvhrmO.jpg" alt="Ù†ÙƒÙ‡Ø§Øª Ø´ÙŠØ´Ø© ÙÙŠØ¨ Ù…ØªÙ†ÙˆØ¹Ø©" class="product-image" loading="lazy">
                          <div class="product-info">
                              <h3 class="product-title">Ù†ÙƒÙ‡Ø§Øª Ø´ÙŠØ´Ø© ÙÙŠØ¨</h3>
                              <p class="product-description">
                                  ØªØ´ÙƒÙŠÙ„Ø© ÙˆØ§Ø³Ø¹Ø© Ù…Ù† Ø£ÙØ¶Ù„ Ù†ÙƒÙ‡Ø§Øª Ø§Ù„Ø´ÙŠØ´Ø© ÙˆØ§Ù„ÙÙŠØ¨ Ø§Ù„Ù…Ø³ØªÙˆØ±Ø¯Ø© Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø¬ÙˆØ¯Ø©ØŒ ØªØ´Ù…Ù„ Ù†ÙƒÙ‡Ø§Øª Ø§Ù„ÙÙˆØ§ÙƒÙ‡ Ø§Ù„Ø·Ø¨ÙŠØ¹ÙŠØ©ØŒ 
                                  Ø§Ù„Ø­Ù„ÙˆÙ‰ Ø§Ù„Ø´Ù‡ÙŠØ©ØŒ ÙˆØ§Ù„ØªØ¨Øº Ø§Ù„ÙƒÙ„Ø§Ø³ÙŠÙƒÙŠ. Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù†ÙƒÙ‡Ø§Øª Ù…ØªÙˆÙØ±Ø© Ø¨ØªØ±Ø§ÙƒÙŠØ² Ù†ÙŠÙƒÙˆØªÙŠÙ† Ù…Ø®ØªÙ„ÙØ© Ù„ØªÙ†Ø§Ø³Ø¨ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø£Ø°ÙˆØ§Ù‚.
                              </p>
                              <a href="https://saudivapes.com/%D9%86%D9%83%D9%87%D8%A7%D8%AA-%D8%B4%D9%8A%D8%B4%D8%A9-%D9%81%D9%8A%D8%A8/c1363212966" class="product-link">Ø§Ø³ØªØ¹Ø±Ø¶ Ø§Ù„Ù†ÙƒÙ‡Ø§Øª</a>
                          </div>
                      </article>
                      
                      <article class="product-card">
                          <img src="https://cdn.salla.sa/jbXEY/4e28e1eb-875e-49dd-bf9f-180f874b099c-1000x997.92960662526-N31I0WGtsbwo6CBJEreZTcFboTocKdifB0T9Q6zm.png" alt="Ø£Ø¬Ù‡Ø²Ø© Ø´ÙŠØ´Ø© Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ© Ø­Ø¯ÙŠØ«Ø©" class="product-image" loading="lazy">
                          <div class="product-info">
                              <h3 class="product-title">Ø£Ø¬Ù‡Ø²Ø© Ø´ÙŠØ´Ø© Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ©</h3>
                              <p class="product-description">
                                  Ø£Ø­Ø¯Ø« Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„Ø´ÙŠØ´Ø© Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ© Ù…Ù† Ø§Ù„Ø¹Ù„Ø§Ù…Ø§Øª Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ© Ø§Ù„Ø±Ø§Ø¦Ø¯Ø© Ø¹Ø§Ù„Ù…ÙŠØ§Ù‹. ØªØªÙ…ÙŠØ² Ø¨Ø§Ù„ØªØµÙ…ÙŠÙ… Ø§Ù„Ø£Ù†ÙŠÙ‚ØŒ 
                                  Ø§Ù„Ø¨Ø·Ø§Ø±ÙŠØ© Ø·ÙˆÙŠÙ„Ø© Ø§Ù„Ù…Ø¯Ù‰ØŒ ÙˆØ³Ù‡ÙˆÙ„Ø© Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù…. Ù…Ø«Ø§Ù„ÙŠØ© Ù„Ù„Ù…Ø¨ØªØ¯Ø¦ÙŠÙ† ÙˆØ§Ù„Ù…Ø­ØªØ±ÙÙŠÙ† Ø¹Ù„Ù‰ Ø­Ø¯ Ø³ÙˆØ§Ø¡.
                              </p>
                              <a href="https://saudivapes.com/%D8%A3%D8%AC%D9%87%D8%B2%D8%A9-%D8%B4%D9%8A%D8%B4%D8%A9-%D8%A7%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9/c899595428" class="product-link">ØªØ³ÙˆÙ‚ Ø§Ù„Ø£Ø¬Ù‡Ø²Ø©</a>
                          </div>
                      </article>
                      
                      <article class="product-card">
                          <img src="https://cdn.salla.sa/jbXEY/e15N2u01xHvaBYcEqTbnEkl3e5gSRhtE2A1fIYU9.jpg" alt="Ø´ÙŠØ´Ø© Ø¬Ø§Ù‡Ø²Ø© Ù„Ù…Ø±Ø© ÙˆØ§Ø­Ø¯Ø© - Ø³Ø­Ø¨Ø§Øª" class="product-image" loading="lazy">
                          <div class="product-info">
                              <h3 class="product-title">Ø´ÙŠØ´Ø© Ø¬Ø§Ù‡Ø²Ø© Ù„Ù…Ø±Ø© ÙˆØ§Ø­Ø¯Ø©</h3>
                              <p class="product-description">
                                  Ø³Ø­Ø¨Ø§Øª ÙˆØ´ÙŠØ´Ø© Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„ÙÙˆØ±ÙŠØŒ Ù…Ø«Ø§Ù„ÙŠØ© Ù„Ù„Ø³ÙØ± Ø£Ùˆ Ø§Ù„ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ø£ÙˆÙ„Ù‰. Ù…ØªÙˆÙØ±Ø© Ø¨Ù†ÙƒÙ‡Ø§Øª Ù…ØªØ¹Ø¯Ø¯Ø© 
                                  ÙˆØ£Ø­Ø¬Ø§Ù… Ù…Ø®ØªÙ„ÙØ© Ù…Ù† 1500 Ø¥Ù„Ù‰ 7000 Ù†ÙØ³. Ø³Ù‡Ù„Ø© Ø§Ù„Ø­Ù…Ù„ ÙˆØ¹Ù…Ù„ÙŠØ© Ù„Ù„ØºØ§ÙŠØ©.
                              </p>
                              <a href="https://saudivapes.com/%D8%B4%D9%8A%D8%B4%D8%A9-%D8%AC%D8%A7%D9%87%D8%B2%D8%A9-%D9%84%D9%85%D8%B1%D8%A9-%D9%88%D8%A7%D8%AD%D8%AF%D8%A9/c986188502" class="product-link">Ø§Ø·Ù„Ø¨ Ø³Ø­Ø¨ØªÙƒ</a>
                          </div>
                      </article>
                      
                      <article class="product-card">
                          <img src="https://cdn.salla.sa/jbXEY/gGyjQodGEzDTf8hCr3Gc9p6zRQZzwiZCrHmDa27i.jpg" alt="Ø¨ÙˆØ¯Ø§Øª ÙˆÙ‚Ø·Ø¹ ØºÙŠØ§Ø± ÙÙŠØ¨ Ø£ØµÙ„ÙŠØ©" class="product-image" loading="lazy">
                          <div class="product-info">
                              <h3 class="product-title">Ø¨ÙˆØ¯Ø§Øª ÙˆÙ‚Ø·Ø¹ ØºÙŠØ§Ø±</h3>
                              <p class="product-description">
                                  Ø¨ÙˆØ¯Ø§Øª ÙˆÙƒÙˆÙŠÙ„Ø§Øª ÙˆÙ‚Ø·Ø¹ ØºÙŠØ§Ø± Ø£ØµÙ„ÙŠØ© Ù„Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„ÙÙŠØ¨. ØªØ¶Ù…Ù† Ø£Ø¯Ø§Ø¡Ù‹ Ù…Ø«Ø§Ù„ÙŠØ§Ù‹ ÙˆÙ†ÙƒÙ‡Ø© Ù†Ù‚ÙŠØ© Ù„ÙØªØ±Ø© Ø£Ø·ÙˆÙ„. 
                                  Ù…ØªÙˆØ§ÙÙ‚Ø© Ù…Ø¹ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø© ÙÙŠ Ø§Ù„Ø³ÙˆÙ‚ ÙˆØ¨Ø£Ø³Ø¹Ø§Ø± Ù…Ù†Ø§ÙØ³Ø©.
                              </p>
                              <a href="https://saudivapes.com/%D8%A8%D9%88%D8%AF%D8%A7%D8%AA-pods/c1007571033" class="product-link">ØªØ³ÙˆÙ‚ Ø§Ù„Ø¨ÙˆØ¯Ø§Øª</a>
                          </div>
                      </article>
                  </div>
                  
                  <div class="text-center mt-2">
                      <a href="https://saudivapes.com" class="cta-primary">Ø¹Ø±Ø¶ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª</a>
                  </div>
              </div>
          </section>
      
          <!-- Customer Reviews Section -->
          <section class="section bg-light">
              <div class="container">
                  <div class="section-header">
                      <h2 class="section-title">Ù…Ø§Ø°Ø§ ÙŠÙ‚ÙˆÙ„ Ø¹Ù…Ù„Ø§Ø¤Ù†Ø§</h2>
                      <p class="section-subtitle">Ø¢Ø±Ø§Ø¡ Ø­Ù‚ÙŠÙ‚ÙŠØ© Ù…Ù† Ø¹Ù…Ù„Ø§Ø¡ Ø±Ø§Ø¶ÙŠÙ† Ø¹Ù† ØªØ¬Ø±Ø¨ØªÙ‡Ù… Ù…Ø¹ Ø³Ø¹ÙˆØ¯ÙŠ ÙÙŠØ¨</p>
                  </div>
                  
                  <div class="reviews-grid">
                      <div class="review-card">
                          <div class="review-stars">â­â­â­â­â­</div>
                          <blockquote class="review-text">
                              "Ø£ÙØ¶Ù„ Ù…ØªØ¬Ø± ÙÙŠØ¨ Ø¬Ø±Ø¨ØªÙ‡ ÙÙŠ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©! Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Ø£ØµÙ„ÙŠØ© ÙˆØ§Ù„Ø£Ø³Ø¹Ø§Ø± Ù…Ù†Ø§ÙØ³Ø© Ø¬Ø¯Ø§Ù‹. 
                              Ø§Ù„Ø´Ø­Ù† Ø³Ø±ÙŠØ¹ ÙˆØµÙ„ Ø®Ù„Ø§Ù„ ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯ Ù„Ù„Ø±ÙŠØ§Ø¶. Ø®Ø¯Ù…Ø© Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ Ù…Ù…ØªØ§Ø²Ø© ÙˆØ±Ø¯ÙˆØ¯Ù‡Ù… Ø³Ø±ÙŠØ¹Ø©."
                          </blockquote>
                          <div class="reviewer">
                              <strong>Ø£Ø­Ù…Ø¯ Ù…Ø­Ù…Ø¯</strong>
                              <span class="reviewer-location">Ø§Ù„Ø±ÙŠØ§Ø¶</span>
                          </div>
                      </div>
                      
                      <div class="review-card">
                          <div class="review-stars">â­â­â­â­â­</div>
                          <blockquote class="review-text">
                              "ØªØ¬Ø±Ø¨Ø© ØªØ³ÙˆÙ‚ Ø±Ø§Ø¦Ø¹Ø©! Ø·Ù„Ø¨Øª Ù†ÙƒÙ‡Ø© VGOD Lush Ice ÙˆØ¬Ø§Ø¡Øª Ù…ØºÙ„ÙØ© Ø¨Ø´ÙƒÙ„ Ù…Ù…ØªØ§Ø². 
                              Ø§Ù„Ù†ÙƒÙ‡Ø© Ø£ØµÙ„ÙŠØ© 100% ÙˆØ§Ù„Ø·Ø¹Ù… Ù…Ø·Ø§Ø¨Ù‚ Ù„Ù„ØªÙˆÙ‚Ø¹Ø§Øª. Ø³Ø£Ø·Ù„Ø¨ Ù…Ø±Ø© Ø£Ø®Ø±Ù‰ Ø¨Ø§Ù„ØªØ£ÙƒÙŠØ¯."
                          </blockquote>
                          <div class="reviewer">
                              <strong>Ø³Ø§Ø±Ø© Ø¹Ø¨Ø¯Ø§Ù„Ù„Ù‡</strong>
                              <span class="reviewer-location">Ø¬Ø¯Ø©</span>
                          </div>
                      </div>
                      
                      <div class="review-card">
                          <div class="review-stars">â­â­â­â­â­</div>
                          <blockquote class="review-text">
                              "Ù…ØªØ¬Ø± Ù…ÙˆØ«ÙˆÙ‚ ÙˆÙ…Ù†ØªØ¬Ø§Øª Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø¬ÙˆØ¯Ø©. Ø§Ø´ØªØ±ÙŠØª Ø¬Ù‡Ø§Ø² Ø´ÙŠØ´Ø© Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ© Ù…Ø¹ Ø¨ÙˆØ¯Ø§Øª Ø¥Ø¶Ø§ÙÙŠØ©. 
                              Ø§Ù„Ø¬Ù‡Ø§Ø² ÙŠØ¹Ù…Ù„ Ø¨Ø´ÙƒÙ„ Ù…Ù…ØªØ§Ø² ÙˆØ§Ù„Ø¨Ø·Ø§Ø±ÙŠØ© ØªØ¯ÙˆÙ… Ø·ÙˆÙŠÙ„Ø§Ù‹. Ø£Ù†ØµØ­ Ø§Ù„Ø¬Ù…ÙŠØ¹ Ø¨Ø§Ù„ØªØ¹Ø§Ù…Ù„ Ù…Ø¹Ù‡Ù…."
                          </blockquote>
                          <div class="reviewer">
                              <strong>ÙÙ‡Ø¯ Ø§Ù„Ø­Ø§Ø±Ø«ÙŠ</strong>
                              <span class="reviewer-location">Ø§Ù„Ø¯Ù…Ø§Ù…</span>
                          </div>
                      </div>
                  </div>
                  
                  <div class="trust-badges">
                      <div class="badge-item">
                          <div class="badge-icon">ðŸ†</div>
                          <div class="badge-text">
                              <h4>Ø£ÙƒØ«Ø± Ù…Ù† 50,000 Ø¹Ù…ÙŠÙ„ Ø±Ø§Ø¶Ù</h4>
                              <p>ØªÙ‚ÙŠÙŠÙ… 4.9/5 Ù†Ø¬ÙˆÙ…</p>
                          </div>
                      </div>
                      
                      <div class="badge-item">
                          <div class="badge-icon">ðŸ›¡ï¸</div>
                          <div class="badge-text">
                              <h4>Ø¶Ù…Ø§Ù† Ø§Ù„Ø¬ÙˆØ¯Ø© ÙˆØ§Ù„Ø£ØµØ§Ù„Ø©</h4>
                              <p>Ù…Ù†ØªØ¬Ø§Øª Ù…Ø¶Ù…ÙˆÙ†Ø© 100%</p>
                          </div>
                      </div>
                      
                      <div class="badge-item">
                          <div class="badge-icon">ðŸš€</div>
                          <div class="badge-text">
                              <h4>Ø´Ø­Ù† Ø³Ø±ÙŠØ¹ ÙˆÙ…Ø¬Ø§Ù†ÙŠ</h4>
                              <p>ØªÙˆØµÙŠÙ„ Ø®Ù„Ø§Ù„ 24-48 Ø³Ø§Ø¹Ø©</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          <!-- Special Offer Section -->
          <section class="special-offer-section section">
              <div class="container">
                  <div class="offer-content">
                      <div class="offer-text">
                          <h2>Ø¹Ø±Ø¶ Ø®Ø§Øµ Ù„Ù„Ø¹Ù…Ù„Ø§Ø¡ Ø§Ù„Ø¬Ø¯Ø¯!</h2>
                          <p>Ø§Ø­ØµÙ„ Ø¹Ù„Ù‰ Ø®ØµÙ… 15% Ø¹Ù„Ù‰ Ø£ÙˆÙ„ Ø·Ù„Ø¨ Ù„Ùƒ Ø¹Ù†Ø¯ Ø§Ø³ØªØ®Ø¯Ø§Ù… ÙƒÙˆØ¯ Ø§Ù„Ø®ØµÙ…</p>
                          <div class="promo-code">
                              <span class="code-label">ÙƒÙˆØ¯ Ø§Ù„Ø®ØµÙ…:</span>
                              <span class="code-text">HALA</span>
                          </div>
                          <p class="offer-terms">*Ø³Ø§Ø±ÙŠ Ø¹Ù„Ù‰ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª - Ø­Ø¯ Ø£Ø¯Ù†Ù‰ Ù„Ù„Ø·Ù„Ø¨ 200 Ø±ÙŠØ§Ù„</p>
                          <a href="https://saudivapes.com" class="cta-primary">Ø§Ø³ØªØ®Ø¯Ù… Ø§Ù„ÙƒÙˆØ¯ Ø§Ù„Ø¢Ù†</a>
                      </div>
                      
                      <div class="offer-visual">
                          <div class="discount-badge">
                              <span class="discount-percent">15%</span>
                              <span class="discount-text">Ø®ØµÙ…</span>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          <!-- FAQ Section -->
          <section id="faq" class="section bg-light">
              <div class="container">
                  <div class="section-header">
                      <h2 class="section-title">Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©</h2>
                      <p class="section-subtitle">Ø¥Ø¬Ø§Ø¨Ø§Øª Ø´Ø§Ù…Ù„Ø© Ø¹Ù„Ù‰ Ø£Ù‡Ù… Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø­ÙˆÙ„ Ù…Ù†ØªØ¬Ø§ØªÙ†Ø§ ÙˆØ®Ø¯Ù…Ø§ØªÙ†Ø§</p>
                  </div>
                  
                  <div class="faq-container">
                      <div class="faq-item">
                          <div class="faq-question" onclick="toggleFAQ(this)">
                              <span>Ù…Ø§ Ù‡Ùˆ Ø§Ù„ÙÙŠØ¨ ÙˆÙƒÙŠÙ ÙŠØ¹Ù…Ù„ØŸ</span>
                              <span class="faq-icon">+</span>
                          </div>
                          <div class="faq-answer" style="display: none;">
                              Ø§Ù„ÙÙŠØ¨ Ø£Ùˆ Ø§Ù„Ø³ÙŠØ¬Ø§Ø±Ø© Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ© Ù‡Ùˆ Ø¬Ù‡Ø§Ø² ÙŠØ¹Ù…Ù„ Ø¹Ù„Ù‰ ØªØ³Ø®ÙŠÙ† Ø³Ø§Ø¦Ù„ Ø§Ù„Ù†ÙŠÙƒÙˆØªÙŠÙ† (E-liquid) ÙˆØªØ­ÙˆÙŠÙ„Ù‡ Ø¥Ù„Ù‰ Ø¨Ø®Ø§Ø± ÙŠÙ…ÙƒÙ† Ø§Ø³ØªÙ†Ø´Ø§Ù‚Ù‡. 
                              ÙŠØªÙƒÙˆÙ† Ù…Ù† Ø¨Ø·Ø§Ø±ÙŠØ©ØŒ Ø¹Ù†ØµØ± ØªØ³Ø®ÙŠÙ† (ÙƒÙˆÙŠÙ„)ØŒ ÙˆØ®Ø²Ø§Ù† Ù„Ù„Ø³Ø§Ø¦Ù„. ÙŠØ¹ØªØ¨Ø± Ø¨Ø¯ÙŠÙ„Ø§Ù‹ Ø£Ù‚Ù„ Ø¶Ø±Ø±Ø§Ù‹ Ù…Ù† Ø§Ù„ØªØ¯Ø®ÙŠÙ† Ø§Ù„ØªÙ‚Ù„ÙŠØ¯ÙŠ Ø­ÙŠØ« Ù„Ø§ ÙŠÙ†ØªØ¬ Ø¹Ù†Ù‡ Ø§Ø­ØªØ±Ø§Ù‚ Ø£Ùˆ Ø¯Ø®Ø§Ù†ØŒ 
                              Ø¨Ù„ Ø¨Ø®Ø§Ø± Ù…Ø§Ø¦ÙŠ ÙÙ‚Ø·. ÙŠÙ…ÙƒÙ† Ø§Ù„ØªØ­ÙƒÙ… ÙÙŠ Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ù†ÙŠÙƒÙˆØªÙŠÙ† ÙˆØ§Ù„Ù†ÙƒÙ‡Ø© Ø­Ø³Ø¨ Ø§Ù„Ø±ØºØ¨Ø© Ø§Ù„Ø´Ø®ØµÙŠØ©.
                          </div>
                      </div>
                      
                      <div class="faq-item">
                          <div class="faq-question" onclick="toggleFAQ(this)">
                              <span>Ù‡Ù„ Ù…Ù†ØªØ¬Ø§ØªÙƒÙ… Ø£ØµÙ„ÙŠØ© ÙˆÙ…Ø¶Ù…ÙˆÙ†Ø©ØŸ</span>
                              <span class="faq-icon">+</span>
                          </div>
                          <div class="faq-answer" style="display: none;">
                              Ù†Ø¹Ù…ØŒ Ù†Ø­Ù† Ù†ØªØ¹Ø§Ù…Ù„ Ø­ØµØ±ÙŠØ§Ù‹ Ù…Ø¹ Ø§Ù„Ù…ÙˆØ²Ø¹ÙŠÙ† Ø§Ù„Ù…Ø¹ØªÙ…Ø¯ÙŠÙ† Ù„Ù„Ø¹Ù„Ø§Ù…Ø§Øª Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ© Ø§Ù„Ø¹Ø§Ù„Ù…ÙŠØ© Ø§Ù„Ù…Ø´Ù‡ÙˆØ±Ø©. Ø¬Ù…ÙŠØ¹ Ù…Ù†ØªØ¬Ø§ØªÙ†Ø§ Ø£ØµÙ„ÙŠØ© 100% 
                              ÙˆØªØ£ØªÙŠ Ù…Ø¹ Ø§Ù„Ø¶Ù…Ø§Ù† Ø§Ù„Ø±Ø³Ù…ÙŠ Ù…Ù† Ø§Ù„Ø´Ø±ÙƒØ© Ø§Ù„Ù…ØµÙ†Ø¹Ø©. Ù†ÙˆÙØ± Ø³ÙŠØ§Ø³Ø© Ø§Ø³ØªØ¨Ø¯Ø§Ù„ ÙˆØ¥Ø±Ø¬Ø§Ø¹ ÙˆØ§Ø¶Ø­Ø© Ø®Ù„Ø§Ù„ 14 ÙŠÙˆÙ… Ù…Ù† ØªØ§Ø±ÙŠØ® Ø§Ù„Ø§Ø³ØªÙ„Ø§Ù…. 
                              ÙƒÙ…Ø§ Ù†Ù‚Ø¯Ù… Ø´Ù‡Ø§Ø¯Ø§Øª Ø§Ù„Ø£ØµØ§Ù„Ø© Ø¹Ù†Ø¯ Ø§Ù„Ø·Ù„Ø¨ Ù„Ø¶Ù…Ø§Ù† Ø±Ø§Ø­Ø© Ø§Ù„Ø¨Ø§Ù„ Ù„Ø¹Ù…Ù„Ø§Ø¦Ù†Ø§ Ø§Ù„ÙƒØ±Ø§Ù….
                          </div>
                      </div>
                      
                      <div class="faq-item">
                          <div class="faq-question" onclick="toggleFAQ(this)">
                              <span>Ù…Ø§ Ù‡ÙŠ Ù…Ù†Ø§Ø·Ù‚ Ø§Ù„Ø´Ø­Ù† Ø§Ù„Ù…ØªØ§Ø­Ø© ÙˆÙƒÙ… ÙŠØ³ØªØºØ±Ù‚ Ø§Ù„ØªÙˆØµÙŠÙ„ØŸ</span>
                              <span class="faq-icon">+</span>
                          </div>
                          <div class="faq-answer" style="display: none;">
                              Ù†ÙˆÙØ± Ø®Ø¯Ù…Ø© Ø§Ù„ØªÙˆØµÙŠÙ„ Ø§Ù„Ø³Ø±ÙŠØ¹ Ù„Ø¬Ù…ÙŠØ¹ Ù…Ø¯Ù† ÙˆÙ…Ø­Ø§ÙØ¸Ø§Øª Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©. Ø§Ù„ØªÙˆØµÙŠÙ„ Ù…Ø¬Ø§Ù†ÙŠ Ù„Ù„Ø·Ù„Ø¨Ø§Øª Ø£ÙƒØ«Ø± Ù…Ù† 200 Ø±ÙŠØ§Ù„. 
                              Ù…Ø¯Ø© Ø§Ù„ØªÙˆØµÙŠÙ„: Ø§Ù„Ø±ÙŠØ§Ø¶ ÙˆØ¬Ø¯Ø© ÙˆØ§Ù„Ø¯Ù…Ø§Ù… (24-48 Ø³Ø§Ø¹Ø©)ØŒ Ø¨Ø§Ù‚ÙŠ Ø§Ù„Ù…Ø¯Ù† Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ© (2-3 Ø£ÙŠØ§Ù…)ØŒ Ø§Ù„Ù…Ù†Ø§Ø·Ù‚ Ø§Ù„Ù†Ø§Ø¦ÙŠØ© (3-5 Ø£ÙŠØ§Ù…). 
                              Ù†Ø³ØªØ®Ø¯Ù… Ø´Ø±ÙƒØ§Øª Ø§Ù„Ø´Ø­Ù† Ø§Ù„Ù…Ø¹ØªÙ…Ø¯Ø© Ù…Ø«Ù„ Ø£Ø±Ø§Ù…ÙƒØ³ ÙˆØ³Ù…Ø³Ø§ Ù„Ø¶Ù…Ø§Ù† ÙˆØµÙˆÙ„ Ø§Ù„Ø·Ù„Ø¨Ø§Øª ÙÙŠ Ø£ÙØ¶Ù„ Ø­Ø§Ù„Ø©. ÙŠÙ…ÙƒÙ†Ùƒ ØªØªØ¨Ø¹ Ø·Ù„Ø¨Ùƒ Ø¹Ø¨Ø± Ø±Ø§Ø¨Ø· Ø§Ù„ØªØªØ¨Ø¹ Ø§Ù„Ù…Ø±Ø³Ù„ Ø¹Ù„Ù‰ Ø§Ù„Ø¬ÙˆØ§Ù„.
                          </div>
                      </div>
                      
                      <div class="faq-item">
                          <div class="faq-question" onclick="toggleFAQ(this)">
                              <span>Ù…Ø§ Ø£ÙØ¶Ù„ Ø§Ù„Ù†ÙƒÙ‡Ø§Øª Ù„Ù„Ù…Ø¨ØªØ¯Ø¦ÙŠÙ†ØŸ</span>
                              <span class="faq-icon">+</span>
                          </div>
                          <div class="faq-answer" style="display: none;">
                              Ù„Ù„Ù…Ø¨ØªØ¯Ø¦ÙŠÙ† Ù†Ù†ØµØ­ Ø¨Ø§Ù„Ø¨Ø¯Ø¡ Ø¨Ø§Ù„Ù†ÙƒÙ‡Ø§Øª Ø§Ù„Ø®ÙÙŠÙØ© Ù…Ø«Ù„ Ø§Ù„Ù†Ø¹Ù†Ø§Ø¹ Ø§Ù„Ø·Ø§Ø²Ø¬ Ø£Ùˆ Ù†ÙƒÙ‡Ø§Øª Ø§Ù„ÙÙˆØ§ÙƒÙ‡ Ù…Ø«Ù„ Ø§Ù„ØªÙØ§Ø­ ÙˆØ§Ù„Ø¹Ù†Ø¨ ÙˆØ§Ù„Ø¨Ø·ÙŠØ®. 
                              ØªØ¬Ù†Ø¨ Ø§Ù„Ù†ÙƒÙ‡Ø§Øª Ø§Ù„Ù‚ÙˆÙŠØ© ÙÙŠ Ø§Ù„Ø¨Ø¯Ø§ÙŠØ©. Ø¨Ø§Ù„Ù†Ø³Ø¨Ø© Ù„Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ù†ÙŠÙƒÙˆØªÙŠÙ†ØŒ Ø§Ø¨Ø¯Ø£ Ø¨Ù€ 3mg Ø£Ùˆ 6mg Ø¥Ø°Ø§ ÙƒÙ†Øª Ù…Ø¯Ø®Ù†Ø§Ù‹ Ø³Ø§Ø¨Ù‚Ø§Ù‹ØŒ 
                              Ø£Ùˆ 0mg Ø¥Ø°Ø§ Ù„Ù… ØªØ¯Ø®Ù† Ù…Ù† Ù‚Ø¨Ù„. Ù†ÙƒÙ‡Ø§Øª Ø§Ù„ØªØ¨Øº Ø§Ù„Ø®ÙÙŠÙØ© Ù…Ù†Ø§Ø³Ø¨Ø© Ø£ÙŠØ¶Ø§Ù‹ Ù„Ù„Ø§Ù†ØªÙ‚Ø§Ù„ Ù…Ù† Ø§Ù„Ø³Ø¬Ø§Ø¦Ø± Ø§Ù„ØªÙ‚Ù„ÙŠØ¯ÙŠØ©. 
                              ÙØ±ÙŠÙ‚Ù†Ø§ Ù…ØªØ§Ø­ Ù„ØªÙ‚Ø¯ÙŠÙ… Ø§Ø³ØªØ´Ø§Ø±Ø© Ø´Ø®ØµÙŠØ© Ù„Ø§Ø®ØªÙŠØ§Ø± Ø§Ù„Ù†ÙƒÙ‡Ø© Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ùƒ.
                          </div>
                      </div>
                      
                      <div class="faq-item">
                          <div class="faq-question" onclick="toggleFAQ(this)">
                              <span>ÙƒÙŠÙ Ø£Ø®ØªØ§Ø± Ø§Ù„Ø¬Ù‡Ø§Ø² Ø§Ù„Ù…Ù†Ø§Ø³Ø¨ Ù„ÙŠØŸ</span>
                              <span class="faq-icon">+</span>
                          </div>
                          <div class="faq-answer" style="display: none;">
                              Ø§Ø®ØªÙŠØ§Ø± Ø§Ù„Ø¬Ù‡Ø§Ø² ÙŠØ¹ØªÙ…Ø¯ Ø¹Ù„Ù‰ Ø¹Ø¯Ø© Ø¹ÙˆØ§Ù…Ù„: Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ø®Ø¨Ø±Ø©ØŒ Ù†Ù…Ø· Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù…ØŒ ÙˆØ§Ù„Ù…ÙŠØ²Ø§Ù†ÙŠØ©. Ù„Ù„Ù…Ø¨ØªØ¯Ø¦ÙŠÙ† Ù†Ù†ØµØ­ Ø¨Ø§Ù„Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„Ø¨Ø³ÙŠØ·Ø© Ù…Ø«Ù„ Pod Systems 
                              Ø£Ùˆ Ø§Ù„Ø³Ø­Ø¨Ø§Øª Ø§Ù„Ø¬Ø§Ù‡Ø²Ø©. Ù„Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ† Ø§Ù„Ù…ØªÙ‚Ø¯Ù…ÙŠÙ†ØŒ Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„Ù…ÙˆØ¯Ø§Øª Ø§Ù„Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªØ¹Ø¯ÙŠÙ„. Ø§Ø¹ØªØ¨Ø± Ø­Ø¬Ù… Ø§Ù„Ø¨Ø·Ø§Ø±ÙŠØ© (ÙƒÙ„Ù…Ø§ Ø²Ø§Ø¯ ÙƒÙ„Ù…Ø§ Ø¯Ø§Ù… Ø£Ø·ÙˆÙ„)ØŒ 
                              Ø³Ø¹Ø© Ø§Ù„Ø®Ø²Ø§Ù†ØŒ ÙˆØ³Ù‡ÙˆÙ„Ø© Ø§Ù„ØµÙŠØ§Ù†Ø©. Ù†ÙˆÙØ± Ø¯Ù„ÙŠÙ„ Ø´Ø±Ø§Ø¡ Ù…ÙØµÙ„ Ù…Ø¹ ÙƒÙ„ Ù…Ù†ØªØ¬ØŒ ÙˆÙŠÙ…ÙƒÙ† Ø§Ù„ØªÙˆØ§ØµÙ„ Ù…Ø¹ ÙØ±ÙŠÙ‚ Ø§Ù„Ù…Ø¨ÙŠØ¹Ø§Øª Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ø³ØªØ´Ø§Ø±Ø© Ù…Ø¬Ø§Ù†ÙŠØ©.
                          </div>
                      </div>
                      
                      <div class="faq-item">
                          <div class="faq-question" onclick="toggleFAQ(this)">
                              <span>Ù…Ø§ Ù‡ÙŠ Ø·Ø±Ù‚ Ø§Ù„Ø¯ÙØ¹ Ø§Ù„Ù…ØªØ§Ø­Ø©ØŸ</span>
                              <span class="faq-icon">+</span>
                          </div>
                          <div class="faq-answer" style="display: none;">
                              Ù†ÙˆÙØ± Ø·Ø±Ù‚ Ø¯ÙØ¹ Ù…ØªØ¹Ø¯Ø¯Ø© ÙˆØ¢Ù…Ù†Ø© Ù„Ø±Ø§Ø­ØªÙƒÙ…: Ø§Ù„Ø¯ÙØ¹ Ø¹Ù†Ø¯ Ø§Ù„Ø§Ø³ØªÙ„Ø§Ù… (Ù…Ø¬Ø§Ù†Ø§Ù‹)ØŒ Ø§Ù„Ø¨Ø·Ø§Ù‚Ø§Øª Ø§Ù„Ø§Ø¦ØªÙ…Ø§Ù†ÙŠØ© (ÙÙŠØ²Ø§ ÙˆÙ…Ø§Ø³ØªØ±ÙƒØ§Ø±Ø¯)ØŒ 
                              Ù…Ø¯Ù‰ØŒ STCPayØŒ ØªØ­ÙˆÙŠÙ„ Ø¨Ù†ÙƒÙŠØŒ ÙˆØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø¯ÙØ¹ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ Ø§Ù„Ø£Ø®Ø±Ù‰. Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù…Ø¹Ø§Ù…Ù„Ø§Øª Ø§Ù„Ù…Ø§Ù„ÙŠØ© Ù…Ø­Ù…ÙŠØ© Ø¨Ø£Ø­Ø¯Ø« Ø£Ù†Ø¸Ù…Ø© Ø§Ù„ØªØ´ÙÙŠØ± SSL. 
                              Ù„Ø§ Ù†Ø­ØªÙØ¸ Ø¨Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø¨Ø·Ø§Ù‚Ø§Øª Ø§Ù„Ø§Ø¦ØªÙ…Ø§Ù†ÙŠØ© Ø¹Ù„Ù‰ Ø®ÙˆØ§Ø¯Ù…Ù†Ø§ Ù„Ø¶Ù…Ø§Ù† Ø£Ù‚ØµÙ‰ Ø¯Ø±Ø¬Ø§Øª Ø§Ù„Ø£Ù…Ø§Ù†. ÙŠÙ…ÙƒÙ† Ø­ÙØ¸ Ø·Ø±ÙŠÙ‚Ø© Ø§Ù„Ø¯ÙØ¹ Ø§Ù„Ù…ÙØ¶Ù„Ø© Ù„ØªØ³Ù‡ÙŠÙ„ Ø§Ù„Ù…Ø´ØªØ±ÙŠØ§Øª Ø§Ù„Ù…Ø³ØªÙ‚Ø¨Ù„ÙŠØ©.
                          </div>
                      </div>
                      
                      <div class="faq-item">
                          <div class="faq-question" onclick="toggleFAQ(this)">
                              <span>Ù‡Ù„ ÙŠÙ…ÙƒÙ†Ù†ÙŠ Ø¥Ø±Ø¬Ø§Ø¹ Ø£Ùˆ Ø§Ø³ØªØ¨Ø¯Ø§Ù„ Ø§Ù„Ù…Ù†ØªØ¬Ø§ØªØŸ</span>
                              <span class="faq-icon">+</span>
                          </div>
                          <div class="faq-answer" style="display: none;">
                              Ù†Ø¹Ù…ØŒ Ù†ÙˆÙØ± Ø³ÙŠØ§Ø³Ø© Ø¥Ø±Ø¬Ø§Ø¹ ÙˆØ§Ø³ØªØ¨Ø¯Ø§Ù„ Ù…Ø±Ù†Ø© Ø®Ù„Ø§Ù„ 14 ÙŠÙˆÙ… Ù…Ù† ØªØ§Ø±ÙŠØ® Ø§Ù„Ø§Ø³ØªÙ„Ø§Ù…. Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª ÙŠØ¬Ø¨ Ø£Ù† ØªÙƒÙˆÙ† ÙÙŠ Ø­Ø§Ù„ØªÙ‡Ø§ Ø§Ù„Ø£ØµÙ„ÙŠØ© ÙˆØºÙŠØ± Ù…Ø³ØªØ®Ø¯Ù…Ø© 
                              Ù…Ø¹ Ø§Ù„ØªØºÙ„ÙŠÙ Ø§Ù„Ø£ØµÙ„ÙŠ. Ø§Ù„Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„Ù…Ø¹ÙŠØ¨Ø© ÙŠØªÙ… Ø§Ø³ØªØ¨Ø¯Ø§Ù„Ù‡Ø§ ÙÙˆØ±Ø§Ù‹. Ø§Ù„Ù†ÙƒÙ‡Ø§Øª Ù„Ø§ ÙŠÙ…ÙƒÙ† Ø¥Ø±Ø¬Ø§Ø¹Ù‡Ø§ Ù„Ø£Ø³Ø¨Ø§Ø¨ ØµØ­ÙŠØ© Ø¥Ù„Ø§ ÙÙŠ Ø­Ø§Ù„Ø© Ø§Ù„Ø¹ÙŠØ¨ Ø§Ù„ØªØµÙ†ÙŠØ¹ÙŠ. 
                              Ù†ØªØ­Ù…Ù„ ØªÙƒÙ„ÙØ© Ø§Ù„Ø´Ø­Ù† ÙÙŠ Ø­Ø§Ù„Ø§Øª Ø§Ù„Ø¹ÙŠØ¨ Ø§Ù„ØªØµÙ†ÙŠØ¹ÙŠØŒ ÙˆÙÙŠ Ø§Ù„Ø­Ø§Ù„Ø§Øª Ø§Ù„Ø£Ø®Ø±Ù‰ ÙŠØªØ­Ù…Ù„ Ø§Ù„Ø¹Ù…ÙŠÙ„ ØªÙƒÙ„ÙØ© Ø§Ù„Ø¥Ø±Ø¬Ø§Ø¹. ØªØªÙ… Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ø§Ø³ØªØ±Ø¯Ø§Ø¯ Ø®Ù„Ø§Ù„ 3-7 Ø£ÙŠØ§Ù… Ø¹Ù…Ù„.
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          <!-- Contact & CTA Section -->
          <section id="contact" class="section">
              <div class="container">
                  <div class="section-header">
                      <h2 class="section-title">Ø§Ø¨Ø¯Ø£ ØªØ¬Ø±Ø¨ØªÙƒ Ù…Ø¹ Ø³Ø¹ÙˆØ¯ÙŠ ÙÙŠØ¨ Ø§Ù„ÙŠÙˆÙ…</h2>
                      <p class="section-subtitle">Ø§Ù†Ø¶Ù… Ø¥Ù„Ù‰ Ø¢Ù„Ø§Ù Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ Ø§Ù„Ø±Ø§Ø¶ÙŠÙ† ÙˆØ§ÙƒØªØ´Ù Ø¹Ø§Ù„Ù…Ø§Ù‹ Ø¬Ø¯ÙŠØ¯Ø§Ù‹ Ù…Ù† Ø§Ù„Ù†ÙƒÙ‡Ø§Øª Ø§Ù„Ù…Ù…ÙŠØ²Ø©</p>
                  </div>
                  
                  <div class="text-center">
                      <a href="https://saudivapes.com" class="cta-primary">ØªØ³ÙˆÙ‚ Ø§Ù„Ø¢Ù† ÙˆØ£Ø­ØµÙ„ Ø¹Ù„Ù‰ Ø®ØµÙ… 15% Ø¨ÙƒÙˆØ¯ HALA</a>
                      <a href="tel:+966500000000" class="cta-secondary">Ø§ØªØµÙ„ Ø¨Ù†Ø§ Ù„Ù„Ø§Ø³ØªØ´Ø§Ø±Ø©</a>
                  </div>
                  
                  <div class="intro-features mt-2">
                      <div class="feature-item">
                          <div class="feature-icon">ðŸ“ž</div>
                          <div>
                              <h3>Ø®Ø¯Ù…Ø© Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡</h3>
                              <p>Ù…ØªØ§Ø­ÙˆÙ† 24/7 Ù„Ù„Ø¥Ø¬Ø§Ø¨Ø© Ø¹Ù„Ù‰ Ø¬Ù…ÙŠØ¹ Ø§Ø³ØªÙØ³Ø§Ø±Ø§ØªÙƒ</p>
                          </div>
                      </div>
                      
                      <div class="feature-item">
                          <div class="feature-icon">ðŸ†</div>
                          <div>
                              <h3>Ø¬ÙˆØ¯Ø© Ù…Ø¶Ù…ÙˆÙ†Ø©</h3>
                              <p>Ù…Ù†ØªØ¬Ø§Øª Ø£ØµÙ„ÙŠØ© Ù…Ù† Ø£ÙØ¶Ù„ Ø§Ù„Ø¹Ù„Ø§Ù…Ø§Øª Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ© Ø§Ù„Ø¹Ø§Ù„Ù…ÙŠØ©</p>
                          </div>
                      </div>
                      
                      <div class="feature-item">
                          <div class="feature-icon">â­</div>
                          <div>
                              <h3>ØªÙ‚ÙŠÙŠÙ…Ø§Øª Ù…Ù…ØªØ§Ø²Ø©</h3>
                              <p>Ø¢Ù„Ø§Ù Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ Ø§Ù„Ø±Ø§Ø¶ÙŠÙ† ÙŠØ«Ù‚ÙˆÙ† ÙÙŠ Ù…Ù†ØªØ¬Ø§ØªÙ†Ø§ ÙˆØ®Ø¯Ù…Ø§ØªÙ†Ø§</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          <!-- Footer -->
          <footer class="footer">
              <div class="container">
                  <div class="footer-content">
                      <div class="footer-section">
                          <h3>Ø³Ø¹ÙˆØ¯ÙŠ ÙÙŠØ¨</h3>
                          <p>Ù…ØªØ¬Ø±Ùƒ Ø§Ù„Ø£ÙˆÙ„ Ù„Ù„ÙÙŠØ¨ ÙˆØ§Ù„Ø´ÙŠØ´Ø© Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ© ÙÙŠ Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©. Ù†Ù‚Ø¯Ù… Ø£ÙØ¶Ù„ Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Ø¨Ø£Ø¹Ù„Ù‰ Ø¬ÙˆØ¯Ø© ÙˆØ£ÙØ¶Ù„ Ø§Ù„Ø£Ø³Ø¹Ø§Ø±.</p>
                          <div style="margin-top: 1rem;">
                              <img src="https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=50,height=50,onerror=redirect,format=auto/jbXEY/Bv6FKwLWFVbiOi6heH08B3RhVCMM1MkOAkYbQ2YX.png" alt="Ø³Ø¹ÙˆØ¯ÙŠ ÙÙŠØ¨" style="width: 50px; height: 50px; border-radius: 50%;">
                          </div>
                      </div>
                      
                      <div class="footer-section">
                          <h3>Ø§Ù„ØµÙØ­Ø§Øª Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©</h3>
                          <a href="https://saudivapes.com/p/Ù…Ù†-Ù†Ø­Ù†">Ù…Ù† Ù†Ø­Ù†</a>
                          <a href="https://saudivapes.com/p/Ø§Ù„Ø´Ø­Ù†-Ùˆ-Ø§Ù„ØªÙˆØµÙŠÙ„">Ø§Ù„Ø´Ø­Ù† ÙˆØ§Ù„ØªÙˆØµÙŠÙ„</a>
                          <a href="https://saudivapes.com/p/Ø³ÙŠØ§Ø³Ø©-Ø§Ù„Ø¥Ø³ØªØ¨Ø¯Ø§Ù„-Ùˆ-Ø§Ù„Ø¥Ø³ØªØ±Ø¬Ø§Ø¹">Ø§Ù„Ø§Ø³ØªØ¨Ø¯Ø§Ù„ ÙˆØ§Ù„Ø¥Ø±Ø¬Ø§Ø¹</a>
                          <a href="https://saudivapes.com/p/Ø§Ù„Ø£Ø³Ø¦Ù„Ø©-Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©-Ùˆ-Ø§Ù„ÙØ±Ù‚-Ø¨ÙŠÙ†-Ø§Ù„Ø³Ø­Ø¨Ø©-Ùˆ-Ø§Ù„Ø´ÙŠØ´Ø©-Ø§Ù„Ø§Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ©">Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©</a>
                      </div>
                      
                      <div class="footer-section">
                          <h3>ØªØµÙ†ÙŠÙØ§Øª Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª</h3>
                          <a href="https://saudivapes.com/ÙÙŠØ¨/c845735511">Ø£Ø¬Ù‡Ø²Ø© ÙÙŠØ¨</a>
                          <a href="https://saudivapes.com/Ù†ÙƒÙ‡Ø§Øª-ÙÙŠØ¨-0-Ù†ÙŠÙƒÙˆØªÙŠÙ†/c1147643052">Ù†ÙƒÙ‡Ø§Øª ÙÙŠØ¨</a>
                          <a href="https://saudivapes.com/Ø´ÙŠØ´Ø©-Ø§Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ©/c1014784727">Ø´ÙŠØ´Ø© Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ©</a>
                          <a href="https://saudivapes.com/Ø³Ø­Ø¨Ø©-Ø³ÙŠØ¬Ø§Ø±Ø©-vape-pen/c1646342488">Ø³Ø­Ø¨Ø§Øª Ø¬Ø§Ù‡Ø²Ø©</a>
                          <a href="https://saudivapes.com/Ø§Ø¸Ø±Ù-Ù†ÙŠÙƒÙˆØªÙŠÙ†/c423769703">Ø£Ø¸Ø±Ù Ù†ÙŠÙƒÙˆØªÙŠÙ†</a>
                      </div>
                      
                      <div class="footer-section">
                          <h3>Ø§Ù„Ø³ÙŠØ§Ø³Ø§Øª Ø§Ù„Ù‚Ø§Ù†ÙˆÙ†ÙŠØ©</h3>
                          <a href="https://saudivapes.com/p/Ø§Ù„Ø´Ø±ÙˆØ·-ÙˆØ§Ù„Ø£Ø­ÙƒØ§Ù…">Ø§Ù„Ø´Ø±ÙˆØ· ÙˆØ§Ù„Ø£Ø­ÙƒØ§Ù…</a>
                          <a href="https://saudivapes.com/p/Ø§Ù„Ø®ØµÙˆØµÙŠØ©">Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®ØµÙˆØµÙŠØ©</a>
                          <a href="mailto:info@saudivapes.com">Ø§ØªØµÙ„ Ø¨Ù†Ø§</a>
                          <a href="tel:+966500000000">Ø®Ø¯Ù…Ø© Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡</a>
                      </div>
                  </div>
                  
                  <div class="footer-bottom">
                      <p>&copy; 2025 Ø³Ø¹ÙˆØ¯ÙŠ ÙÙŠØ¨ - Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø­Ù‚ÙˆÙ‚ Ù…Ø­ÙÙˆØ¸Ø© | ØªÙ… Ø§Ù„ØªØ·ÙˆÙŠØ± Ø¨ÙˆØ§Ø³Ø·Ø© ÙØ±ÙŠÙ‚ Ø³Ø¹ÙˆØ¯ÙŠ ÙÙŠØ¨ Ø§Ù„ØªÙ‚Ù†ÙŠ</p>
                  </div>
              </div>
          </footer>
      
          <script>
              // Toggle FAQ Items
              function toggleFAQ(element) {
                  const answer = element.nextElementSibling;
                  const icon = element.querySelector('.faq-icon');
                  
                  if (answer.style.display === 'none' || answer.style.display === '') {
                      answer.style.display = 'block';
                      icon.textContent = 'âˆ’';
                      element.style.background = '#e9ecef';
                  } else {
                      answer.style.display = 'none';
                      icon.textContent = '+';
                      element.style.background = '#f8f9fa';
                  }
              }
              
              // Mobile Menu Toggle
              function toggleMobileMenu() {
                  // This would typically show/hide a mobile menu
                  // Implementation depends on your specific needs
                  alert('Mobile menu - ÙŠÙ…ÙƒÙ† ØªØ·ÙˆÙŠØ± Ù‚Ø§Ø¦Ù…Ø© Ø¬Ø§Ù†Ø¨ÙŠØ© Ù„Ù„Ø¬ÙˆØ§Ù„');
              }
              
              // Smooth Scrolling for anchor links
              document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                  anchor.addEventListener('click', function (e) {
                      e.preventDefault();
                      const targetId = this.getAttribute('href').substring(1);
                      const targetElement = document.getElementById(targetId);
                      
                      if (targetElement) {
                          targetElement.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start'
                          });
                      }
                  });
              });
              
              // Add fade-in animation on scroll
              const observerOptions = {
                  threshold: 0.1,
                  rootMargin: '0px 0px -50px 0px'
              };
              
              const observer = new IntersectionObserver(function(entries) {
                  entries.forEach(entry => {
                      if (entry.isIntersecting) {
                          entry.target.classList.add('fade-in-up');
                      }
                  });
              }, observerOptions);
              
              // Observe all major sections
              document.querySelectorAll('.section, .product-card, .feature-item').forEach(el => {
                  observer.observe(el);
              });
              
              // Performance optimization: Lazy load images
              if ('loading' in HTMLImageElement.prototype) {
                  const images = document.querySelectorAll('img[loading="lazy"]');
                  images.forEach(img => {
                      img.src = img.src;
                  });
              } else {
                  // Fallback for browsers that don't support lazy loading
                  const script = document.createElement('script');
                  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
                  document.body.appendChild(script);
              }
          </script>
      </body>

      </html>`;

      return new Response(html, { headers: { "content-type": "text/html; charset=UTF-8" } });
    }

    // Ø£ÙŠ Ù…Ø³Ø§Ø± Ø¢Ø®Ø± â†’ ÙŠÙ…Ø±Ø± Ù„Ù„Ù…ØªØ¬Ø± Ù…Ø¨Ø§Ø´Ø±Ø©
    return fetch(request);
  }
}
