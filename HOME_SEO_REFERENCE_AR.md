# مرجع الصفحة الرئيسية SEO (Arabic Home)

آخر تحديث: 2026-04-23

## ما تم تطبيقه
- `H1` واحد فقط في الهوم داخل Hero مرئي.
- إزالة `h1.sr-only` القديم في الهيدر على الصفحة الرئيسية.
- إضافة أقسام:
  - Hero
  - Categories Grid
  - Internal Links
  - SEO Content
  - FAQ
- إضافة Schema:
  - `seo-home-faq-schema` (`FAQPage`)
  - `seo-home-collection-schema` (`CollectionPage + ItemList`)
  - مع `Organization` + `Breadcrumb` عبر الحقن العام.

## روابط التصنيفات المعتمدة (مباشرة)
1. `https://saudivapes.com/ar/سحبة-سيجارة-vape-pen/c856338910`
2. `https://saudivapes.com/ar/أجهزة-شيشة-الكترونية/c215470303`
3. `https://saudivapes.com/ar/نكهات-فيب-شيشة/c681123545`
4. `https://saudivapes.com/ar/نكهات-سحبة-سولت/c1589444568`
5. `https://saudivapes.com/ar/بودات-pods/c640187172`
6. `https://saudivapes.com/ar/كويلات/c1945541157`

## روابط قسم العلامات (من روابط المتجر الحالية)
1. `https://saudivapes.com/ar/مزاج-6000/c1362710152`
2. `https://saudivapes.com/ar/قوست-فيب/c1502778259`
3. `https://saudivapes.com/ar/ميجا-بار/c1752931227`
4. `https://saudivapes.com/ar/مزاج-بوكس-برو/c22314425`

## الصور المستخدمة لبطاقات الفئات
- سحبات فيب:
  - `https://cdn.salla.sa/jbXEY/2d3e3485-b365-4978-a3d3-45d8b1da3e62-646x1000-MJ0AWv1L1PJVeZVQnmS8ZMQ5Rcl49x8Rlil301Ce.jpg`
- أجهزة فيب:
  - `https://cdn.salla.sa/jbXEY/bdd93b8c-017e-4efe-8469-94a17fcdb030-899.5983935743x1000-RyWmVXyYvk4CUufDm0cDn9R5zGLT06bw7G10ALxZ.png`
- نكهات فيب:
  - `https://cdn.salla.sa/jbXEY/19f48a5a-8312-4c3e-8a7d-80bb33204e0f-799x1000-2OZpijmyiu9I1ri6wL5Y0tHWmHBjFoUM7kqRwlIW.jpg`
- نكهات سولت:
  - `https://cdn.salla.sa/jbXEY/2584d520-342b-470f-8882-36577d1d8d60-1000x1000-qgVf07xnwcbbWznQfiXNPKGZSe46QcNwzGd0l9Zg.jpg`
- بودات:
  - `https://cdn.salla.sa/jbXEY/79abd5f8-b212-462a-8faa-e6dd89b767ad-1000x1000-mHxuhU4F3KPb3hX3XvzfDQ96IlmHJV2fsppEmxQG.jpg`
- كويلات:
  - `https://cdn.salla.sa/jbXEY/21b6ec01-20e3-4e28-bd4f-501662c6bf56-1000x1000-xcx7JZBPKbpOVwOnu8SvRdOKhca50bvzG2fHwM18.jpg`

## ملف التنفيذ
- `cloudflare-workers/category-intro-c856338910/worker.js`
- Route: `saudivapes.com/ar/*`
