export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const rawSlug = url.pathname.replace('/ar/blog/og/', '').replace('.png', '');
    const slug = decodeURIComponent(rawSlug);

    if (!slug) {
      return new Response('No slug provided', { status: 400 });
    }

    // Per-slug prompts — each generates a professional featured image matching the blog topic
    const prompts = {
      // === أدلة شراء (Buying Guides) ===
      'انواع-الفيب-في-السعودية': 'A collection of modern vaping devices including pod systems, box mods, and disposable vapes arranged on a dark surface, neon blue and purple lighting, 3D render style, professional product photography, clean composition, e-cigarette showcase, dark moody background',

      'انواع-السيجارة-الالكترونية-واسعارها': 'Modern e-cigarette devices of different sizes arranged on a display stand, price tags visible, soft studio lighting, professional product photography, 3D render style, clean white background, shopping concept, variety of vape devices',

      'ارخص-فيب-في-السعودية': 'Multiple affordable vaping devices and disposable vapes arranged on a clean surface with a golden coins and savings concept, warm lighting, professional product photography, value and budget theme, 3D render style, modern composition',

      'اشكال-الشيشة-الالكترونية': 'Various shaped vaping devices arranged artistically — pen style, box mod, pod system, disposable — on a rotating display, dramatic shadows, professional product photography, 3D render style, dark elegant background, device variety showcase',

      'افضل-نكهة-تبغ-للفيب': 'Rich tobacco leaves arranged beside premium vape devices, warm amber lighting, wooden surface, professional photography, 3D render style, tobacco and vanilla tones, luxury atmosphere, dark background',

      'فوائد-الشيشة-الالكترونية': 'Modern lifestyle composition showing a clean vaping device with positive elements like a savings piggy bank and fresh leaves, bright professional studio lighting, 3D render style, health and wellness concept, clean white and green tones',

      'الشيشة-الالكترونية-للمبتدئين': 'A simple clean beginner vape device on a pastel surface with helpful elements like a guide book and numbered steps, soft lighting, welcoming composition, professional product photography, 3D render style, beginner friendly theme',

      'اظرف-نيكوتين-في-السعودية': 'White nicotine pouches arranged neatly in a modern tin container, mint leaves and ice crystals around, clean clinical presentation, professional product photography, 3D render style, white and blue color scheme, fresh modern look',

      'نكهات-معسل-الكتروني': 'Colorful collection of e-liquid bottles with dripping flavor extracts, fruit slices and dessert garnishes around, vibrant studio lighting, professional product photography, 3D render style, rich colors on dark background, flavor variety showcase',

      // === مراجعات (Reviews) ===
      'أفضل-نكهات-الفيب-الباردة': 'Icy blue vape device with frost and ice crystals, cold vapor swirling, frozen mint leaves, blue and white color scheme, extreme cold atmosphere, professional product photography, 3D render style, refreshing and cooling visual',

      'أفضل-نكهات-ناستي-للسحبة-الالكترونية': 'Nasty brand e-liquid bottles with tropical fruit visuals, bold black and neon green branding, pitaya and grape motifs, dark background with vibrant neon lighting, professional product photography, 3D render style',

      'أفضل-5-نكهات-فيب-من-فيقود-للشيشة-الإلكترونية': 'Vgod brand e-liquid bottles in a row, purple and pink branding colors, smoke effects, professional product photography, 3D render style, dark moody background, flavorful presentation',

      'افضل-6-نكهات-سولت-من-فيقود-للسحبة-الالكترونية': 'Vgod salt nicotine e-liquid bottles collection, purple gradient lighting, small pod device next to bottles, professional product photography, 3D render style, dark background, salt nicotine series showcase',

      'افضل-نكهات-الفيب-في-الرياض': 'Modern vape shop interior with colorful e-liquid display wall, warm ambient lighting, shelves of products, professional photography, 3D render style, Riyadh city vibe, organized retail display',

      'نكهة-vct-في-سي-تي-ريب-فيب': 'Premium vanilla custard and tobacco e-liquid bottle, warm golden tones, vanilla beans and tobacco leaves decoration, luxury dark background, professional product photography, 3D render style, Ripe Vapes brand aesthetic',

      // === أدلة قانونية (Legal Guides) ===
      'قانون-الفيب-في-السعودية': 'Law and justice concept with a gavel and modern vaping devices, dark mahogany desk, dramatic lighting, professional photography, legal theme, Saudi Arabia flag colors subtly in background, 3D render',

      'هل-الفيب-مسموح-في-السعودية': 'A balanced scale of justice with a vape device on one side and law books on the other, warm courtroom lighting, professional photography, legal concept, Saudi Arabian theme, 3D render style',

      // === مقارنات (Comparisons) ===
      'افضل-شيشة-الكترونية-2025': 'Two premium vape devices side by side for comparison, split lighting design — one blue one purple, professional product photography, 3D render style, dark background, versus concept, detailed product shot',

      'مقارنة-بين-أنواع-الشيشة-فيب': 'Multiple vaping devices arranged in a comparison grid layout, different sizes and styles, clean white background with subtle grid lines, professional product photography, 3D render style, organized comparison display',

      'أفضل-سحبة-سيجارة-2025': 'A sleek vape pen style device resembling a cigarette, elegant slim design, warm lighting, professional product photography, 3D render style, minimalist composition, modern alternative to smoking',

      // === خدمات (Services) ===
      'شحن-فيب-السعودية': 'Delivery and shipping concept with a vape package, map of Saudi Arabia with delivery route lines, fast shipping visual elements, professional design, 3D render style, blue and white color scheme, logistics theme',

      // === أدلة شراء (additional guides) ===
      'سعر-فيب-السعودية': 'Vape devices with prominent price tags and discount badges, shopping concept, warm retail lighting, professional product photography, 3D render style, clean composition, value oriented',

      'الشيشة-الكترونية-دليل-شامل': 'A comprehensive guide layout showing various e-shisha devices with informational elements, clean organized composition, professional product photography, 3D render style, educational theme, modern design',

      'أفضل-سحبة-جاهزة-في-السعودية': 'A row of colorful disposable vape devices, vibrant gradient colors, sleek modern design, professional product photography, 3D render style, white clean background, disposable vape showcase',

      'افضل-سحبة-صغيرة-في-السعودية': 'Compact and mini pod vape devices, small size comparison visible, portable design emphasis, professional product photography, 3D render style, light background, tiny devices composition',

      'افضل-متجر-فيب-في-الرياض': 'Modern vape storefront with glowing sign, Riyadh cityscape silhouette, evening lighting, professional architectural photography, retail concept, welcoming atmosphere, 3D render style',

      'ارخص-نكهات-فيب': 'Budget friendly e-liquid bottles with discount tags, colorful bottles arranged by value, warm lighting, professional product photography, 3D render style, savings concept, affordable flavors',

      'سحبات-مزاج-انواعها-واسعارها': 'Mazaj brand disposable vape devices in a row, modern Arabic calligraphy style branding, colorful devices, desert-inspired warm tones, professional product photography, 3D render style, premium atmosphere',
    };

    const prompt = prompts[slug];
    if (!prompt) {
      return new Response(`No prompt for slug: ${slug}`, { status: 404 });
    }

    try {
      const response = await env.AI.run(
        '@cf/stabilityai/stable-diffusion-xl-base-1.0',
        {
          prompt: prompt,
          negative_prompt: 'text, watermark, signature, people, smoking, low quality, blurry, distorted, ugly, bad anatomy',
          height: 1024,
          width: 1024,
          steps: 20,
        }
      );

      return new Response(response, {
        headers: {
          'Content-Type': 'image/png',
          'Cache-Control': 'public, max-age=604800, immutable',
        },
      });
    } catch (err) {
      return new Response(`Generation failed: ${err.message}`, { status: 500 });
    }
  },
};
