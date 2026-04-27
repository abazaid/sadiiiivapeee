const CATEGORY_URLS = {
  c856338910: "https://saudivapes.com/ar/سحبة-سيجارة-vape-pen/c856338910",
  c2053520858: "https://saudivapes.com/ar/سحبات-جاهزة-لمرة-واحدة/c2053520858",
  c1413700827: "https://saudivapes.com/ar/شيشة-جاهزة-لمرة-واحدة/c1413700827",
  c640187172: "https://saudivapes.com/ar/بودات-pods/c640187172",
  c681123545: "https://saudivapes.com/ar/نكهات-فيب-شيشة/c681123545",
  c1589444568: "https://saudivapes.com/ar/نكهات-سحبة-سولت/c1589444568",
  c1645970562: "https://saudivapes.com/ar/نكهات-شيشة-فيب-100-مل/c1645970562",
  c1955276679: "https://saudivapes.com/ar/نكهات-شيشة-فيب-120-مل/c1955276679",
  c1770383136: "https://saudivapes.com/ar/نكهات-بدون-نيكوتين/c1770383136",
  c215470303: "https://saudivapes.com/ar/أجهزة-شيشة-الكترونية/c215470303",
  c1220671877: "https://saudivapes.com/ar/بطاريات/c1220671877",
  c1945541157: "https://saudivapes.com/ar/كويلات/c1945541157",
  c1988326833: "https://saudivapes.com/ar/تانكات-شيشة/c1988326833",
  c532207655: "https://saudivapes.com/ar/ملحقات-accessories/c532207655",
  c390558684: "https://saudivapes.com/ar/عروض-تصفية/c390558684",
  c2128927364: "https://saudivapes.com/ar/عروض-خاصة/c2128927364",
  c164479628: "https://saudivapes.com/ar/0-نيكوتين/c164479628",
  c896991374: "https://saudivapes.com/ar/3-نيكوتين/c896991374",
  c587623817: "https://saudivapes.com/ar/6-نيكوتين/c587623817",
  c1321839499: "https://saudivapes.com/ar/9-نيكوتين/c1321839499",
  c1785981333: "https://saudivapes.com/ar/12-نيكوتين/c1785981333",
  c371529623: "https://saudivapes.com/ar/18-نيكوتين/c371529623",
  c1362710152: "https://saudivapes.com/ar/مزاج-6000/c1362710152",
  c1179666048: "https://saudivapes.com/ar/مزاج-15000/c1179666048",
  c1071686531: "https://saudivapes.com/ar/مزاج-ريلود-5000/c1071686531",
  c1610757776: "https://saudivapes.com/ar/مزاج-كوب-6000/c1610757776",
  c22314425: "https://saudivapes.com/ar/مزاج-بوكس-برو/c22314425",
};

const CATEGORY_URL_OVERRIDES = {
  c1813238460: "https://saudivapes.com/ar/افضل-نكهات-الفيب-للشيشه-الالكترونيه-2026/c1813238460",
  c197464254: "https://saudivapes.com/ar/افضل-سحبه-الكترونيه-2026/c197464254",
  c305574835: "https://saudivapes.com/ar/افضل-نكهات-السحبه-الالكترونيه-2026/c305574835",
  c972616125: "https://saudivapes.com/ar/افضل-شيشة-الكترونية-2026/c972616125",
};

const HOME_CATEGORY_CARDS = [
  {
    title: "سحبات فيب",
    url: "https://saudivapes.com/ar/سحبة-سيجارة-vape-pen/c856338910",
    image:
      "https://cdn.salla.sa/jbXEY/bca86341-8956-4a6b-bcfe-5c56ec5f85ba-500x494-xaWs9tYWkjO4yDMx7KDw2kVFGreUim5BD9zilN8Y.png",
  },
  {
    title: "أجهزة فيب",
    url: "https://saudivapes.com/ar/أجهزة-شيشة-الكترونية/c215470303",
    image:
      "https://cdn.salla.sa/jbXEY/bdd93b8c-017e-4efe-8469-94a17fcdb030-899.5983935743x1000-RyWmVXyYvk4CUufDm0cDn9R5zGLT06bw7G10ALxZ.png",
  },
  {
    title: "نكهات فيب",
    url: "https://saudivapes.com/ar/نكهات-فيب-شيشة/c681123545",
    image:
      "https://cdn.salla.sa/jbXEY/19f48a5a-8312-4c3e-8a7d-80bb33204e0f-799x1000-2OZpijmyiu9I1ri6wL5Y0tHWmHBjFoUM7kqRwlIW.jpg",
  },
  {
    title: "نكهات سولت",
    url: "https://saudivapes.com/ar/نكهات-سحبة-سولت/c1589444568",
    image:
      "https://cdn.salla.sa/jbXEY/2584d520-342b-470f-8882-36577d1d8d60-1000x1000-qgVf07xnwcbbWznQfiXNPKGZSe46QcNwzGd0l9Zg.jpg",
  },
  {
    title: "بودات",
    url: "https://saudivapes.com/ar/بودات-pods/c640187172",
    image:
      "https://cdn.salla.sa/jbXEY/79abd5f8-b212-462a-8faa-e6dd89b767ad-1000x1000-mHxuhU4F3KPb3hX3XvzfDQ96IlmHJV2fsppEmxQG.jpg",
  },
  {
    title: "كويلات",
    url: "https://saudivapes.com/ar/كويلات/c1945541157",
    image:
      "https://cdn.salla.sa/jbXEY/21b6ec01-20e3-4e28-bd4f-501662c6bf56-1000x1000-xcx7JZBPKbpOVwOnu8SvRdOKhca50bvzG2fHwM18.jpg",
  },
];

const HOME_BRAND_LINKS = [
  { title: "مزاج", url: "https://saudivapes.com/ar/مزاج-6000/c1362710152" },
  { title: "قوست فيب", url: "https://saudivapes.com/ar/قوست-فيب/c1502778259" },
  { title: "ميجا بار", url: "https://saudivapes.com/ar/ميجا-بار/c1752931227" },
  { title: "مزاج بوكس برو", url: "https://saudivapes.com/ar/مزاج-بوكس-برو/c22314425" },
];

const HOME_META = {
  title: "متجر فيب في السعودية سحبات وأجهزة أصلية بأفضل الأسعار",
  description:
    "متجر فيب في السعودية يوفر سحبات وأجهزة ونكهات أصلية بأسعار منافسة وشحن سريع داخل المملكة تصفح المنتجات الآن",
  keywords:
    "فيب،فيب السعودية،سحبات،شيشة إلكترونية،نكهات فيب،نكهات سولت،بودات،كويلات",
};

const BLOG_PURCHASE_VAPE = {
  canonicalPath: "/ar/شراء-فيب-السعودية",
  aliases: [
    "/ar/شراء-فيب-السعودية|",
    "/ar/شراء فيب السعودية",
    "/ar/شراء فيب السعودية/",
  ],
  title: "شراء فيب السعودية | دليل شامل 2026 من سعودي فيب",
  description:
    "شراء فيب السعودية: دليل عملي لاختيار السحبات والأجهزة والنكهات الأصلية مع روابط مباشرة لأهم التصنيفات، ونصائح شراء وتوصيل داخل المملكة.",
  keywords:
    "شراء فيب السعودية, فيب اونلاين السعودية, متجر فيب السعودية, سحبة الكترونية السعودية",
  published: "2026-05-01",
  modified: "2026-05-01",
  markdownBase64: "IyDYr9mE2YrZhCDYtNix2KfYoSDYp9mE2YHZitioINij2YjZhtmE2KfZitmGINmB2Yog2KfZhNiz2LnZiNiv2YrYqSAyMDI2CgoqKtmB2LHZitmCINin2YTZhdit2KrZiNmJIOKAlCDYs9i52YjYr9mKINmB2YrYqCB8INmG2Y/YtNixINmB2Yo6INmF2KfZitmIIDIwMjYqKgoKLS0tCgrYp9iu2KrYp9ixINii2YTYp9mBINin2YTYudmF2YTYp9ihINmB2Yog2KfZhNmF2YXZhNmD2Kkg2KfZhNi52LHYqNmK2Kkg2KfZhNiz2LnZiNiv2YrYqSDZhdiq2KzYsSDYs9i52YjYr9mKINmB2YrYqCDZhNi02LHYp9ihINin2YTZgdmK2Kgg2KPZiNmG2YTYp9mK2YYg4oCUINmI2KXYsNinINmD2YbYqiDYqtmB2YPYsSDZgdmKICoq2LTYsdin2KEg2YHZitioINmB2Yog2KfZhNiz2LnZiNiv2YrYqSoqINmI2YTYpyDYqti52LHZgSDZhdmGINij2YrZhiDYqtio2K/Yo9iMINmH2LDYpyDYp9mE2K/ZhNmK2YQg2YrYrtiq2LXYsSDYudmE2YrZgyDYp9mE2LfYsdmK2YIuINiz2YjYp9ihINmD2KfZhtiqINmH2LDZhyDYo9mI2YQg2KrYrNix2KjYqSDZhNmDINmF2Lkg2KfZhNiz2K3YqNipINin2YTYpdmE2YPYqtix2YjZhtmK2KnYjCDYo9mIINmD2YbYqiDYqtio2K3YqyDYudmGINis2YfYp9iyINis2K/ZitivINio2LPYudixINmF2LnZgtmI2YTYjCDYs9iq2KzYryDZh9mG2Kcg2YPZhCDZhdinINiq2K3Yqtin2KzZhyDZhNin2KrYrtin2LAg2YLYsdin2LEg2KfZhNi02LHYp9ihINin2YTYtditLgoKLS0tCgojIyDZhNmF2KfYsNinINmK2YHYttmR2YQg2YPYq9mK2LHZiNmGINi02LHYp9ihINin2YTZgdmK2Kgg2KPZiNmG2YTYp9mK2YYg2YHZiiDYp9mE2LPYudmI2K/Zitip2J8KCtin2YTZhdiq2KfYrNixINin2YTYpdmE2YPYqtix2YjZhtmK2Kkg2YTZhNmB2YrYqCDYqtiq2YHZiNmCINi52YTZiSDYp9mE2YXYqtin2KzYsSDYp9mE2KrZgtmE2YrYr9mK2Kkg2YHZiiDYq9mE2KfYq9ipINmF2K3Yp9mI2LE6CgoqKtin2YTYqtmG2YjYuToqKiDYo9mKINmF2KrYrNixINmB2Yog2KfZhNix2YrYp9i2INij2Ygg2KzYr9ipINmE2Kcg2YrYs9iq2LfZiti5INij2YYg2YrYudix2LYgNSw4MDAg2YXZhtiq2Kwg2YHZiiDZhtmB2LMg2KfZhNmI2YLYqi4g2YXYqtis2LEg2LPYudmI2K/ZiiDZgdmK2Kgg2YrYudi32YrZgyDZh9iw2Kcg2KjYtti62LfYqS4KCioq2KfZhNiz2LnYsToqKiDYp9mE2LTYsdin2KEg2KfZhNmF2KjYp9i02LEg2YXZhiDYp9mE2YXYqtis2LEg2KfZhNil2YTZg9iq2LHZiNmG2Yog2YrZj9mE2LrZiiDZh9in2YXYtCDYp9mE2YjYs9mK2LfYjCDZiNiq2KzYryDYudix2YjYtiDYqti12YHZitipINmI2K7YtdmI2YXYp9iqINmE2Kcg2KrYqtmI2YHYsSDYudin2K/YqdmLINmB2Yog2KfZhNmF2KrYp9is2LEg2KfZhNmB2LnZhNmK2KkuCgoqKtin2YTYsdin2K3YqSDZiNin2YTYrti12YjYtdmK2Kk6Kiog2KfZhNi32YTYqCDZhdmGINin2YTYqNmK2KrYjCDZiNin2YTYqtmI2LXZitmEINi52YTZiSDYqNin2KjZg9iMINiv2YjZhiDZgtmK2KfYr9ipINmI2YTYpyDYp9mG2KrYuNin2LEg2YHZiiDYp9mE2K/ZiNixLgoKLS0tCgojIyDYo9mG2YjYp9i5INin2YTZgdmK2Kgg2KfZhNmF2KrZiNmB2LHYqSDZhNmE2LTYsdin2KEg2YHZiiDYp9mE2LPYudmI2K/ZitipCgrZhdmGINiu2YTYp9mEINiq2LnYp9mF2YTZhtinINin2YTZitmI2YXZiiDZhdi5INi52YXZhNin2KbZhtinINmB2Yog2KfZhNmF2YXZhNmD2KnYjCDZhtmE2KfYrdi4INij2YYg2KfZhNmF2KjYqtiv2KbZitmGINmK2Y/Zgdi22ZHZhNmI2YYg2KfZhNiz2K3YqNin2Kog2KfZhNis2KfZh9iy2Kkg2YHZiiDYp9mE2KjYr9in2YrYqSDZgtio2YQg2KfZhNin2YbYqtmC2KfZhCDZhNis2YfYp9iyINir2KfYqNiqIOKAlCDZhNiw2YTZgyDYsdiq2ZHYqNmG2Kcg2KfZhNij2YbZiNin2Lkg2KfZhNiq2KfZhNmK2Kkg2KjYrdiz2Kgg2KfZhNij2YPYq9ixINi32YTYqNmL2Kc6CgojIyMg2LPYrdio2KfYqiDYp9mE2YHZitioIOKAlCBWYXBlIFBlbgoK2KfZhNiu2YrYp9ixINin2YTYo9mG2LPYqCDZhNmE2YXYqNiq2K/YptmK2YYuINis2YfYp9iyINij2YbZitmC2Iwg2LPZh9mEINin2YTYp9iz2KrYrtiv2KfZhdiMINmK2LnZhdmEINio2KrZgtmG2YrYqSDYp9mE2LPYrdioINin2YTZhdio2KfYtNixIChNVEwpINin2YTZhdi02KfYqNmH2Kkg2YTZhNiz2YrYrNin2LHYqS4g2YXZhtin2LPYqCDZhNmG2YrZg9mI2KrZitmGINin2YTYs9mI2YTYqiDZiNio2K7Yp9ixINmF2LnYqtiv2YQuINin2YTYo9iz2LnYp9ixINiq2KjYr9ijINmF2YYg2KPZgtmEINmF2YYgMTAwINix2YrYp9mELgoK8J+RiSBb2KrYtdmB2ZHYrSDYs9it2KjYp9iqINin2YTZgdmK2KhdKGh0dHBzOi8vc2F1ZGl2YXBlcy5jb20vYXIv2LPYrdio2Kkt2LPZitis2KfYsdipLXZhcGUtcGVuL2M4NTYzMzg5MTApCgojIyMg2KfZhNi02YrYtNipINin2YTYpdmE2YPYqtix2YjZhtmK2KkKCtiq2LnYt9mKINio2K7Yp9ix2YvYpyDYo9mD2KvZgSDZiNiq2KzYsdio2Kkg2KPZgtix2Kgg2YTZhNi02YrYtNipINin2YTYqtmC2YTZitiv2YrYqS4g2KrYudmF2YQg2LrYp9mE2KjZi9inINio2YAgRnJlZWJhc2Ug2YjYqtmG2KfYs9ioINin2YTYs9it2Kgg2KfZhNi52YXZitmCIChEVEwpLiDYp9mE2KPYrNmH2LLYqSDYqtiq2LHYp9mI2K0g2KjZitmGIDE1MOKAkzYwMCDYsdmK2KfZhCDYrdiz2Kgg2KfZhNmF2YjYp9i12YHYp9iqLgoK8J+RiSBb2KrYtdmB2ZHYrSDYo9is2YfYstipINin2YTYtNmK2LTYqSDYp9mE2KXZhNmD2KrYsdmI2YbZitipXShodHRwczovL3NhdWRpdmFwZXMuY29tL2FyL9ij2KzZh9iy2Kkt2LTZiti02Kkt2KfZhNmD2KrYsdmI2YbZitipL2MyMTU0NzAzMDMpCgojIyMg2KfZhNiz2K3YqNin2Kog2KfZhNis2KfZh9iy2Kkg2YTZhdix2Kkg2YjYp9it2K/YqSDigJQgRGlzcG9zYWJsZQoK2YTYpyDYtNit2YbYjCDZhNinINiq2LnYqNim2KnYjCDZhNinINil2LnYr9in2K/Yp9iqLiDZgdiq2K0g2YjZhdio2KfYtNix2Kkg2KfZhNin2LPYqtiu2K/Yp9mFLiDZhdir2KfZhNmK2Kkg2YTZhNiz2YHYsSDZiNmE2YTYqtis2LHYqNipINmC2KjZhCDYp9mE2KfZhNiq2LLYp9mFINio2KzZh9in2LIg2K/Yp9im2YUuINin2YTYo9mD2KvYsSDYt9mE2KjZi9inINmE2K/ZitmG2Kc6IEVsZiBCYXLYjCBMb3N0IE1hcnnYjCBWb3pvbC4KCvCfkYkgW9iq2LXZgdmR2K0g2KfZhNiz2K3YqNin2Kog2KfZhNis2KfZh9iy2KldKGh0dHBzOi8vc2F1ZGl2YXBlcy5jb20vYXIv2LPYrdio2KfYqi3YrNin2YfYstipLdmE2YXYsdipLdmI2KfYrdiv2KkvYzIwNTM1MjA4NTgpCgojIyMg2KfZhNio2YjYr9in2Kog4oCUIFBvZHMKCtiu2LHYp9i32YrYtCDZgtin2KjZhNipINmE2YTYp9iz2KrYqNiv2KfZhCDYqtmP2LHZg9mR2Kgg2LnZhNmJINin2YTYo9is2YfYstipINin2YTZhdiq2YjYp9mB2YLYqS4g2KfZhNiq2YPZhNmB2Kkg2KfZhNiq2LTYutmK2YTZitipINij2YLZhCDYudmE2Ykg2KfZhNmF2K/ZiSDYp9mE2KjYudmK2K8g2YXZgtin2LHZhtipINio2KfZhNiz2K3YqNin2Kog2KfZhNis2KfZh9iy2KkuICoq2YXZhNin2K3YuNipINmF2YfZhdipOioqINin2YTYqNmI2K/Yp9iqINmB2Yog2YXYqtis2LHZhtinINmH2Yog2K7Ysdin2LfZiti0INiq2Y/YsdmD2ZHYqCDYudmE2Ykg2KfZhNis2YfYp9iyINin2YTZhdiq2YjYp9mB2YIg4oCUINiq2KPZg9ivINmF2YYg2KfZhNmF2YjYr9mK2YQg2YLYqNmEINin2YTYt9mE2KguCgrwn5GJIFvYqti12YHZkditINin2YTYqNmI2K/Yp9iqXShodHRwczovL3NhdWRpdmFwZXMuY29tL2FyL9io2YjYr9in2KotcG9kcy9jNjQwMTg3MTcyKQoKLS0tCgojIyDZg9mK2YEg2KrYrtiq2KfYsSDYp9mE2YHZitioINin2YTZhdmG2KfYs9ioINmE2YPYnwoKfCDYrdin2YTYqtmDIHwg2KfZhNiu2YrYp9ixINin2YTYo9mG2LPYqCB8INin2YTYs9io2KggfAp8LS0tLS0tLXwtLS0tLS0tLS0tLS0tLXwtLS0tLS0tfAp8INmF2KjYqtiv2KYg2YrYsdmK2K8g2KjYr9mK2YQg2KfZhNiz2YrYrNin2LHYqSB8INiz2K3YqNipINil2YTZg9iq2LHZiNmG2YrYqSArINiz2YjZhNiqINmG2YrZg9mI2KrZitmGIHwg2LPYrdioINmG2KfYudmF2Iwg2KfZhdiq2LXYp9i1INiz2LHZiti52Iwg2LPYudixINmF2LnZgtmI2YQgfAp8INiq2K3YqCDYqNiu2KfYsSDZg9ir2YrZgSB8INi02YrYtNipINil2YTZg9iq2LHZiNmG2YrYqSArINmB2LHZiiDYqNmK2LMgfCDZgtiv2LHYqSDYudin2YTZitip2Iwg2KjYrtin2LEg2KPZg9ir2YEgfAp8INiq2LHZitivINin2YTYo9iz2YfZhCDYqNiv2YjZhiDYqti52YLZitivIHwg2LPYrdio2Kkg2KzYp9mH2LLYqSDZhNmF2LHYqSDZiNin2K3Yr9ipIHwg2LXZgdixINil2LnYr9in2K/YjCDYqNiv2KEg2YHZiNix2YogfAp8INiq2YLYqti12K8g2LnZhNmJINin2YTZhdiv2Ykg2KfZhNio2LnZitivIHwg2KjZiNivICsg2KzZh9in2LIg2YXYqtmI2KfZgdmCIHwg2K7Ysdin2LfZiti0INij2LHYrti1INmF2YYg2KfZhNis2KfZh9iy2KkgfAoKLS0tCgojIyDYo9io2LHYsiDYp9mE2KjYsdin2YbYr9in2Kog2KfZhNmF2KrZiNmB2LHYqSDZgdmKINmF2KrYrNixINiz2LnZiNiv2Yog2YHZitioCgp8INin2YTYudmE2KfZhdipINin2YTYqtis2KfYsdmK2KkgfCDZhtmI2Lkg2KfZhNmF2YbYqtisIHwg2KrZhdmK2ZHYstmH2KcgfAp8LS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwKfCBTTU9LIHwg2KPYrNmH2LLYqSArINmD2YjZitmE2KfYqiB8INin2YTYo9mD2KvYsSDYp9mG2KrYtNin2LHZi9inINi52KfZhNmF2YrZi9inIHwKfCBWYXBvcmVzc28gfCDYo9is2YfYstipICsg2KjZiNiv2KfYqiB8INis2YjYr9ipINio2YbYp9ihINi52KfZhNmK2KkgfAp8IE5hc3R5IHwg2YbZg9mH2KfYqiDYs9mI2YTYqiB8INir2YXYp9mG2YrYqSDZhtmD2YfYp9iqINmB2KfZg9mH2YrYqSDZgtmI2YrYqSB8CnwgVmlxb2QgKNmB2YrZgtmI2K8pIHwg2YbZg9mH2KfYqiB8INmF2LXZhtmI2LnYqSDZhNmE2LPZiNmCINin2YTYrtmE2YrYrNmKIHwKfCBFbGYgQmFyIHwg2LPYrdio2KfYqiDYrNin2YfYstipIHwg2KPZg9ir2LEg2YXZhiA2MDAg2LPYrdio2Kkg2YTZg9mEINis2YfYp9iyIHwKCi0tLQoKIyMg2KfZhNi02K3ZhiDZiNin2YTYqtmI2LXZitmEINmE2KzZhdmK2Lkg2YXZhtin2LfZgiDYp9mE2YXZhdmE2YPYqQoK2KfZhNiq2YjYtdmK2YQg2YXYqtin2K0g2YTZhNix2YrYp9i22Iwg2KzYr9ip2Iwg2KfZhNiv2YXYp9mF2Iwg2YXZg9ipINin2YTZhdmD2LHZhdip2Iwg2KfZhNmF2K/ZitmG2Kkg2KfZhNmF2YbZiNix2KnYjCDZiNiz2KfYptixINmF2YbYp9i32YIg2KfZhNmF2YXZhNmD2KkuINin2YTYt9mE2KjYp9iqINin2YTZhdi52KrZhdiv2Kkg2KrZj9ix2LPZhCDYrtmE2KfZhCAx4oCTMiDZitmI2YUg2LnZhdmELiDYqtit2YLZgiDZhdmGINi12YHYrdipINin2YTZhdiq2KzYsSDZhNmE2KfYt9mE2KfYuSDYudmE2Ykg2KfZhNi02LHZiNi3INin2YTZhdit2K/Zkdir2Kkg2YjYo9mKINij2YPZiNin2K8g2K7YtdmFINiz2KfYsdmK2KkuCgotLS0KCiMjINin2YTYo9iz2KbZhNipINin2YTYtNin2KbYudipINit2YjZhCDYtNix2KfYoSDYp9mE2YHZitioINmB2Yog2KfZhNiz2LnZiNiv2YrYqQoKIyMjINmH2YQg2LTYsdin2KEg2KfZhNmB2YrYqCDZgtin2YbZiNmG2Yog2YHZiiDYp9mE2LPYudmI2K/Zitip2J8KCtmG2LnZhS4gW9ij2KzYp9iy2Kog2KfZhNmF2YXZhNmD2Kkg2KfZhNi52LHYqNmK2Kkg2KfZhNiz2LnZiNiv2YrYqSDYudin2YUgMjAxOV0oaHR0cHM6Ly93d3cuc3BhLmdvdi5zYS8pINio2YrYuSDZhdmG2KrYrNin2Kog2KfZhNiq2KjYuiDYp9mE2KXZhNmD2KrYsdmI2YbZiiDZhNmE2KjYp9mE2LrZitmGINi22YXZhiDYo9mG2LjZhdipINin2YTZh9mK2KbYqSDYp9mE2LnYp9mF2Kkg2YTZhNi62LDYp9ihINmI2KfZhNiv2YjYp9ihLiDYp9mE2KjZiti5INmI2KfZhNi02LHYp9ihINmC2KfZhtmI2YbZitin2YYg2YTZhNij2LTYrtin2LUg2KfZhNiw2YrZhiDYqtis2KfZiNiy2YjYpyDYs9mGINin2YTYq9in2YXZhtipINi52LTYsdipLgoKIyMjINmD2YrZgSDYo9iq2K3ZgtmCINmF2YYg2KPYtdin2YTYqSDYp9mE2YXZhtiq2KzYnwoK2YXYudi42YUg2KfZhNij2KzZh9iy2Kkg2KfZhNi52KfZhNmF2YrYqSAoU01PS9iMIFZhcG9yZXNzb9iMIEVsZmJhcikg2KrYrdmF2YQg2YPZiNivINiq2K3ZgtmCINi52YTZiSDYp9mE2LrZhNin2YEg2YrZhdmD2YbZgyDYpdiv2K7Yp9mE2Ycg2LnZhNmJINin2YTZhdmI2YLYuSDYp9mE2LHYs9mF2Yog2YTZhNi02LHZg9ipLiDYp9i02KrYsdmQINiv2KfYptmF2YvYpyDZhdmGINmF2KrYp9is2LEg2YXZiNir2YjZgtipINiq2LnYsdi2INin2YTZhdmG2KrYrCDYqNi52YTYqNiq2Ycg2KfZhNij2LXZhNmK2Kkg2YPYp9mF2YTYqS4KCiMjIyDZhdinINin2YTZgdix2YIg2KjZitmGINin2YTYs9mI2YTYqiDZhtmK2YPZiNiq2YrZhiDZiNin2YTZgdix2Yog2KjZitiz2J8KCioq2KfZhNiz2YjZhNiqINmG2YrZg9mI2KrZitmGKiog2LPYrdio2Ycg2YbYp9i52YUg2YjYp9mF2KrYtdin2LXZhyDYs9ix2YrYudiMINmF2YbYp9iz2Kgg2YTYo9is2YfYstipINin2YTZiNin2Lcg2KfZhNmF2YbYrtmB2LYg2YPYs9it2KjYp9iqINin2YTZgdmK2KguICoq2KfZhNmB2LHZiiDYqNmK2LMqKiDYo9mC2YjZiSDZgdmKINi32LnZhSDYp9mE2YbZitmD2YjYqtmK2YYg2YjYo9mG2LPYqCDZhNij2KzZh9iy2Kkg2KfZhNi32KfZgtipINin2YTYudin2YTZitipINmD2KfZhNi02YrYtNipINin2YTYpdmE2YPYqtix2YjZhtmK2KkuINiq2LXZgdmR2K0gW9mG2YPZh9in2Kog2LPYrdio2Kkg2LPZiNmE2KpdKGh0dHBzOi8vc2F1ZGl2YXBlcy5jb20vYXIv2YbZg9mH2KfYqi3Ys9it2KjYqS3Ys9mI2YTYqi9jMTU4OTQ0NDU2OCkg2Yhb2YbZg9mH2KfYqiDZgdmK2Kgg2LTZiti02KldKGh0dHBzOi8vc2F1ZGl2YXBlcy5jb20vYXIv2YbZg9mH2KfYqi3ZgdmK2Kgt2LTZiti02KkvYzY4MTEyMzU0NSkuCgojIyMg2YfZhCDYp9mE2LTYsdin2KEg2KfZhNij2YjZhtmE2KfZitmGINii2YXZhtifCgrZhti52YXYjCDYpdiw2Kcg2KfYrtiq2LHYqiDZhdiq2KzYsdmL2Kcg2YrYr9i52YUg2KjZiNin2KjYp9iqINiv2YHYuSDZhdmI2KvZiNmC2KkgKNmF2K/ZidiMIFZpc2HYjCBNYXN0ZXJjYXJkKSDZiNmK2YjZgdixINiq2KPZhdmK2YbZi9inINi52YTZiSDYp9mE2LfZhNioLiDYp9io2KrYudivINi52YYg2KPZiiDYrNmH2Kkg2KrYt9mE2Kgg2KrYrdmI2YrZhNmL2Kcg2KjZhtmD2YrZi9inINmF2KjYp9i02LHZi9inLgoKIyMjINmH2YQg2YrZhdmD2YYg2KfZhNin2LfZhNin2Lkg2LnZhNmJINin2YTYudix2YjYtiDZiNin2YTYqtiu2YHZiti22KfYqtifCgrZhti52YUuINmC2LPZhSBb2LnYsdmI2LYg2KfZhNiq2LXZgdmK2KldKGh0dHBzOi8vc2F1ZGl2YXBlcy5jb20vYXIv2LnYsdmI2LYt2KrYtdmB2YrYqS9jMzkwNTU4Njg0KSDZiFvYp9mE2LnYsdmI2LYg2KfZhNiu2KfYtdipXShodHRwczovL3NhdWRpdmFwZXMuY29tL2FyL9i52LHZiNi2Ldiu2KfYtdipL2MyMTI4OTI3MzY0KSDZitmP2K3Yr9mO2ZHYq9in2YYg2KjYp9mG2KrYuNin2YUuCgotLS0KCiMjINiq2LXZgdmR2K0g2YjYp9i32YTYqCDYp9mE2KLZhgoK2LPZiNin2KEg2YPZhtiqINiq2KjYrdirINi52YYg2LPYrdio2Kkg2YTZhNmF2KjYqtiv2KbZitmG2Iwg2KPZiCDYtNmK2LTYqSDYpdmE2YPYqtix2YjZhtmK2Kkg2YXYqti32YjYsdip2Iwg2KPZiCDYo9it2K/YqyDZhtmD2YfYp9iqINin2YTYs9mI2YTYqiDigJQg2YXYqtis2LEg2LPYudmI2K/ZiiDZgdmK2Kgg2YrYttmFINij2YPYq9ixINmF2YYgKio1LDgwMCDZhdmG2KrYrCoqINio2KPYs9i52KfYsSDZhdmG2KfYs9io2Kkg2YjYqtmI2LXZitmEINiz2LHZiti5INmE2KzZhdmK2Lkg2YXZhtin2LfZgiDYp9mE2YXZhdmE2YPYqS4KCioqW9iz2K3YqNin2Kog2KfZhNmB2YrYqF0oaHR0cHM6Ly9zYXVkaXZhcGVzLmNvbS9hci/Ys9it2KjYqS3Ys9mK2KzYp9ix2KktdmFwZS1wZW4vYzg1NjMzODkxMCkgwrcgW9i02YrYtNipINil2YTZg9iq2LHZiNmG2YrYqV0oaHR0cHM6Ly9zYXVkaXZhcGVzLmNvbS9hci/Yo9is2YfYstipLdi02YrYtNipLdin2YTZg9iq2LHZiNmG2YrYqS9jMjE1NDcwMzAzKSDCtyBb2LPYrdio2KfYqiDYrNin2YfYstipXShodHRwczovL3NhdWRpdmFwZXMuY29tL2FyL9iz2K3YqNin2Kot2KzYp9mH2LLYqS3ZhNmF2LHYqS3ZiNin2K3Yr9ipL2MyMDUzNTIwODU4KSDCtyBb2KjZiNiv2KfYql0oaHR0cHM6Ly9zYXVkaXZhcGVzLmNvbS9hci/YqNmI2K/Yp9iqLXBvZHMvYzY0MDE4NzE3MikgwrcgW9mG2YPZh9in2Kog2LPZiNmE2KpdKGh0dHBzOi8vc2F1ZGl2YXBlcy5jb20vYXIv2YbZg9mH2KfYqi3Ys9it2KjYqS3Ys9mI2YTYqi9jMTU4OTQ0NDU2OCkqKgoKLS0tCgo8IS0tIFNFTyBNRVRBIC0tPgo8IS0tIFRpdGxlOiDYtNix2KfYoSDZgdmK2Kgg2KfZhNiz2LnZiNiv2YrYqSB8INiz2LnZiNiv2Yog2YHZitioIOKAlCDYo9mD2KvYsSDZhdmGIDUsODAwINmF2YbYqtisINij2LXZhNmKIC0tPgo8IS0tIERlc2NyaXB0aW9uOiDYp9i02KrYsdmQINin2YTZgdmK2Kgg2YjYp9mE2LTZiti02Kkg2KfZhNil2YTZg9iq2LHZiNmG2YrYqSDYo9mI2YbZhNin2YrZhiDZgdmKINin2YTYs9i52YjYr9mK2KkuINij2YPYq9ixINmF2YYgNSw4MDAg2YXZhtiq2Kwg2KPYtdmE2Yog2KjYo9mB2LbZhCDYp9mE2KPYs9i52KfYsdiMINmI2KrZiNi12YrZhCDYs9ix2YrYuSDZhNis2YXZiti5INmF2YbYp9i32YIg2KfZhNmF2YXZhNmD2KkuINiq2LXZgdmR2K0g2KfZhNii2YYuIC0tPgo8IS0tIFByaW1hcnkga2V5d29yZDog2LTYsdin2KEg2YHZitioINin2YTYs9i52YjYr9mK2KkgLS0+CjwhLS0gU2Vjb25kYXJ5OiDZgdmK2Kgg2KPZiNmG2YTYp9mK2YYg2KfZhNiz2LnZiNiv2YrYqdiMINmF2KrYrNixINmB2YrYqCDYp9mE2LPYudmI2K/Zitip2Iwg2LPYrdio2Kkg2KXZhNmD2KrYsdmI2YbZitipINmE2YTYqNmK2LkgLS0+CjwhLS0gQ09SRS1FRUFUIHNjb3JlOiA2Ni8xMDAg4oaSIHByb2plY3RlZCA3Ni8xMDAgYWZ0ZXIgZml4ZXMgYXBwbGllZCAtLT4K",
};

const SEO_STATIC_PATHS = {
  about: "/ar/about-saudi-vape",
  editorial: "/ar/editorial-policy",
  author: "/ar/blog/author/1210468642",
};

const SEO_STATIC_ALIASES = {
  [SEO_STATIC_PATHS.about]: [
    "/ar/redirect/pages/1006707947",
    "/ar/p/من-نحن",
  ],
  [SEO_STATIC_PATHS.editorial]: [],
  [SEO_STATIC_PATHS.author]: [
    "/ar/blog/author/saudi-vape-team",
  ],
};


const PRODUCT_ENHANCEMENT_CSS = `
/* === Product Enhancements: Specs Bar === */
#product-specs-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 16px auto 12px;
  padding: 0;
}
#product-specs-bar .spec-card {
  background: #f8f6ff;
  border: 1px solid #e8e0ff;
  border-radius: 10px;
  padding: 14px 10px;
  text-align: center;
}
#product-specs-bar .spec-icon {
  font-size: 1.3rem;
  margin-bottom: 4px;
}
#product-specs-bar .spec-label {
  font-size: 0.72rem;
  color: #666;
  margin-bottom: 2px;
}
#product-specs-bar .spec-value {
  font-size: 0.95rem;
  font-weight: 700;
  color: #111;
}

/* === Product Enhancements: FAQ Section (details/summary) === */
#product-enhanced-faq {
  margin: 12px auto 24px;
  padding: 0;
}
#product-enhanced-faq .faq-header {
  margin-bottom: 14px;
}
#product-enhanced-faq .faq-header h2 {
  font-size: 1.15rem;
  font-weight: 700;
  color: #111;
  margin: 0 0 4px;
}
#product-enhanced-faq .faq-header p {
  font-size: 0.85rem;
  color: #666;
  margin: 0;
}
#product-enhanced-faq .faq-items {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
#product-enhanced-faq details {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
}
#product-enhanced-faq details[open] {
  border-color: #d0c8f0;
}
#product-enhanced-faq summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  cursor: pointer;
  color: #1f2937;
  text-align: right;
  font-family: inherit;
  list-style: none;
  gap: 12px;
}
#product-enhanced-faq summary h3 {
  font-size: 0.92rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  display: inline;
}
#product-enhanced-faq summary::-webkit-details-marker {
  display: none;
}
#product-enhanced-faq summary:hover {
  background: #fafafa;
}
#product-enhanced-faq summary::after {
  content: '+';
  font-size: 1.2rem;
  color: #7c3aed;
  flex-shrink: 0;
  line-height: 1;
  transition: transform 0.2s;
}
#product-enhanced-faq details[open] summary::after {
  transform: rotate(45deg);
}
#product-enhanced-faq details[open] .faq-answer {
  display: block;
}
#product-enhanced-faq .faq-answer {
  display: block;
  padding: 0 18px 14px;
  color: #4b5563;
  font-size: 0.88rem;
  line-height: 1.7;
}
#product-enhanced-faq .faq-answer p {
  margin: 0;
}
@media (max-width: 600px) {
  #product-specs-bar {
    grid-template-columns: repeat(2, 1fr);
  }
}
`;

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isArabicCategoryPath(pathname) {
  if (!pathname.startsWith("/ar/")) return false;
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length < 3) return false;
  return /^c\d+$/.test(parts[parts.length - 1]);
}

function isArabicProductPath(pathname) {
  if (!pathname.startsWith("/ar/")) return false;
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length < 3) return false;
  return /^p\d+$/.test(parts[parts.length - 1]);
}

function isArabicBlogArticlePath(pathname) {
  if (!pathname.startsWith("/ar/blog/")) return false;
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length < 4) return false;
  return /^a-\d+$/.test(parts[parts.length - 1]);
}

function isBrandPagePath(pathname) {
  if (!pathname.startsWith("/ar/")) return false;
  return /\/brand-\d+$/.test(pathname);
}

function isArabicStorePath(pathname) {
  return pathname === "/" || pathname === "/ar" || pathname.startsWith("/ar/");
}

function isArabicHomePath(pathname) {
  return pathname === "/" || pathname === "/ar" || pathname === "/ar/";
}

function isAssetLikePath(pathname) {
  return /\/[^/?]+\.[a-zA-Z0-9]{2,8}$/.test(pathname);
}

function decodeBase64Utf8(base64Text) {
  const bin = atob(base64Text);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i += 1) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}


function normalizePath(pathname) {
  return pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function toAsciiDigits(text) {
  return String(text || "").replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 1632));
}

function parseArabicDateText(text) {
  const normalized = toAsciiDigits(stripHtml(text))
    .replace(/\s+/g, " ")
    .trim();
  if (!normalized) return "";

  const months = {
    "يناير": "01",
    "فبراير": "02",
    "مارس": "03",
    "أبريل": "04",
    "ابريل": "04",
    "مايو": "05",
    "يونيو": "06",
    "يوليو": "07",
    "أغسطس": "08",
    "اغسطس": "08",
    "سبتمبر": "09",
    "أكتوبر": "10",
    "اكتوبر": "10",
    "نوفمبر": "11",
    "ديسمبر": "12",
  };

  const match = normalized.match(/(\d{1,2})\s+([^\s]+)\s+(\d{4})/);
  if (!match) return "";
  const day = match[1].padStart(2, "0");
  const month = months[match[2]] || "";
  const year = match[3];
  if (!month) return "";
  return `${year}-${month}-${day}`;
}

function isPurchaseVapeBlogPath(pathname) {
  const p = normalizePath(pathname);
  if (p === BLOG_PURCHASE_VAPE.canonicalPath) return true;
  return BLOG_PURCHASE_VAPE.aliases.some((a) => normalizePath(a) === p);
}

function isPurchaseVapeBlogCanonical(pathname) {
  return normalizePath(pathname) === BLOG_PURCHASE_VAPE.canonicalPath;
}

function markdownInlineToHtml(text) {
  let html = escapeHtml(text);
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2">$1</a>');
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  return html;
}

function renderMarkdownTable(lines) {
  if (lines.length < 2) return "";
  const rows = lines
    .map((line) => line.trim())
    .map((line) => line.replace(/^\|/, "").replace(/\|$/, ""))
    .map((line) => line.split("|").map((cell) => markdownInlineToHtml(cell.trim())));
  if (!rows[0] || !rows[1]) return "";
  const header = rows[0];
  const body = rows.slice(2);
  const headerHtml = `<tr>${header.map((c) => `<th style="padding:10px;border:1px solid #e5e7eb;text-align:right">${c}</th>`).join("")}</tr>`;
  const bodyHtml = body
    .map((r) => `<tr>${r.map((c) => `<td style="padding:10px;border:1px solid #e5e7eb;vertical-align:top">${c}</td>`).join("")}</tr>`)
    .join("");
  return `<div style="overflow:auto;margin:14px 0"><table style="width:100%;border-collapse:collapse;background:#fff">${headerHtml}${bodyHtml}</table></div>`;
}

function markdownToHtml(markdown) {
  const lines = markdown.replaceAll("\r\n", "\n").split("\n");
  const out = [];
  let paragraph = [];
  let i = 0;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    out.push(`<p style="margin:0 0 14px;line-height:2;color:#1f2937">${markdownInlineToHtml(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line || line.startsWith("<!--")) {
      flushParagraph();
      i += 1;
      continue;
    }
    if (/^-{3,}$/.test(line)) {
      flushParagraph();
      i += 1;
      continue;
    }
    if (line.startsWith("|")) {
      flushParagraph();
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i].trim());
        i += 1;
      }
      const tableHtml = renderMarkdownTable(tableLines);
      if (tableHtml) out.push(tableHtml);
      continue;
    }
    if (line.startsWith("### ")) {
      flushParagraph();
      out.push(`<h3 style="margin:22px 0 8px;font-size:1.12rem;line-height:1.8;color:#0f172a">${markdownInlineToHtml(line.slice(4))}</h3>`);
      i += 1;
      continue;
    }
    if (line.startsWith("## ")) {
      flushParagraph();
      out.push(`<h2 style="margin:30px 0 12px;font-size:1.35rem;line-height:1.7;color:#0b1324">${markdownInlineToHtml(line.slice(3))}</h2>`);
      i += 1;
      continue;
    }
    if (line.startsWith("# ")) {
      flushParagraph();
      out.push(`<h1 style="margin:0 0 14px;font-size:2rem;line-height:1.5;color:#0b1324">${markdownInlineToHtml(line.slice(2))}</h1>`);
      i += 1;
      continue;
    }
    paragraph.push(line);
    i += 1;
  }

  flushParagraph();
  return out.join("\n");
}

function buildPurchaseVapeBlogSchema(canonical) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: BLOG_PURCHASE_VAPE.title,
    description: BLOG_PURCHASE_VAPE.description,
    datePublished: BLOG_PURCHASE_VAPE.published,
    dateModified: BLOG_PURCHASE_VAPE.modified,
    inLanguage: "ar",
    mainEntityOfPage: canonical,
    publisher: {
      "@type": "Organization",
      name: "SaudiVapes",
      url: "https://saudivapes.com",
    },
  };
}

function renderPurchaseVapeBlogHtml(origin) {
  const canonical = `${origin}${encodeURI(BLOG_PURCHASE_VAPE.canonicalPath)}`;
  const markdown = decodeBase64Utf8(BLOG_PURCHASE_VAPE.markdownBase64);
  const body = markdownToHtml(markdown);
  const schema = JSON.stringify(buildPurchaseVapeBlogSchema(canonical));
  return `<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(BLOG_PURCHASE_VAPE.title)}</title>
  <meta name="description" content="${escapeHtml(BLOG_PURCHASE_VAPE.description)}">
  <meta name="keywords" content="${escapeHtml(BLOG_PURCHASE_VAPE.keywords)}">
  <link rel="canonical" href="${escapeHtml(canonical)}">
  <meta property="og:type" content="article">
  <meta property="og:locale" content="ar_SA">
  <meta property="og:title" content="${escapeHtml(BLOG_PURCHASE_VAPE.title)}">
  <meta property="og:description" content="${escapeHtml(BLOG_PURCHASE_VAPE.description)}">
  <meta property="og:url" content="${escapeHtml(canonical)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(BLOG_PURCHASE_VAPE.title)}">
  <meta name="twitter:description" content="${escapeHtml(BLOG_PURCHASE_VAPE.description)}">
  <script type="application/ld+json">${schema}</script>
  <style>
    body{margin:0;background:#f8fafc;color:#0f172a;font-family:"Tahoma","Arial",sans-serif}
    .wrap{max-width:920px;margin:0 auto;padding:24px 16px 42px}
    article{background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:22px}
    a{color:#0b57d0;text-decoration:none}
    a:hover{text-decoration:underline}
    @media (max-width:640px){article{padding:16px}}
  </style>
</head>
<body>
  <main class="wrap">
    <article>
${body}
    </article>
  </main>
</body>
</html>`;
}

function parseCategory(pathname) {
  const parts = pathname.split("/").filter(Boolean);
  const categoryId = parts[parts.length - 1];
  const slug = decodeURIComponent(parts[parts.length - 2] || "");
  const categoryName = slug.replace(/-/g, " ").trim() || "هذا التصنيف";
  return { categoryId, categoryName };
}

function categoryTextById(id) {
  const u = CATEGORY_URL_OVERRIDES[id] || CATEGORY_URLS[id];
  if (!u) return "";
  const p = decodeURIComponent(new URL(u).pathname).split("/").filter(Boolean);
  return (p[p.length - 2] || "").replace(/-/g, " ").trim();
}

function categoryLink(id) {
  const url = CATEGORY_URL_OVERRIDES[id] || CATEGORY_URLS[id];
  const text = categoryTextById(id);
  if (!url || !text) return "";
  return `<a href="${url}" style="color:#0b57d0">${escapeHtml(text)}</a>`;
}

function typeOfCategory(name) {
  if (name.includes("سحبة") || name.includes("جاهزة")) return "ecig";
  if (name.includes("أجهزة شيشة")) return "eshisha_devices";
  if (name.includes("بودات")) return "pods";
  if (name.includes("نكهات")) return "flavors";
  if (name.includes("نيكوتين")) return "nicotine";
  if (name.startsWith("مزاج")) return "mazaj";
  if (name.includes("كويلات")) return "coils";
  if (name.includes("تانكات")) return "tanks";
  if (name.includes("بطاريات")) return "batteries";
  if (name.includes("عروض")) return "offers";
  return "generic";
}

function introPlan(categoryId, categoryName) {
  const t = typeOfCategory(categoryName);

  if (t === "ecig") {
    return {
      title: `أفضل خيارات ${categoryName} في السعودية`,
      p1: "هذا التصنيف مخصص للسحبة الإلكترونية بنمط سحب ضيق (MTL) يشبه السيجارة العادية، مع نيكوتين سولت أعلى وإشباع أسرع بكمية بخار أقل. هو الخيار الأنسب للمستخدم الذي يريد جهازًا بسيطًا وسريع الاستخدام خارج المنزل.",
      p2: `النقطة الأهم في الاختيار هي السعة الفعلية، ثبات النكهة، وتركيز النيكوتين المناسب لك. وإذا كنت تريد تجربة بخار أكثف ونيكوتين أقل فانتقل إلى ${categoryLink("c215470303")} بدل المقارنة مع البودات.`,
      related: [categoryLink("c2053520858"), categoryLink("c215470303"), categoryLink("c1589444568")],
    };
  }

  if (t === "eshisha_devices") {
    return {
      title: "أجهزة الشيشة الإلكترونية لتجربة بخار كثيف",
      p1: "الشيشة الإلكترونية موجهة لمن يفضل بخارًا أعلى وتجربة نكهات أعمق غالبًا مع نيكوتين أقل (فري بيس). وهي تختلف عن السحبة الإلكترونية في طريقة السحب وحجم الجهاز وقوة الأداء.",
      p2: `إذا كنت قادمًا من السحبة الإلكترونية وتريد تطوير التجربة، ابدأ بجهاز متوازن وكويل مناسب. للربط الصحيح اختر النكهات من ${categoryLink("c681123545")} وابتعد عن سوائل السولت العالية المخصصة للسحبات.`,
      related: [categoryLink("c856338910"), categoryLink("c681123545"), categoryLink("c1945541157")],
    };
  }

  if (t === "pods") {
    return {
      title: `بودات ${categoryName} الأصلية`,
      p1: "هذا القسم خاص بالبودات (الخراطيش) التي تُركّب على أجهزة السحبة الإلكترونية/السيجارة الإلكترونية المتوافقة. ليست أجهزة مستقلة، بل قطع تشغيل تؤثر مباشرة على الطعم وثبات السحب.",
      p2: `قبل الشراء تأكد من توافق البود مع جهازك بالضبط، لأن اختلاف الموديل يمنع التركيب الصحيح. إذا كنت تبحث عن الجهاز نفسه فراجع ${categoryLink("c856338910")} أو ${categoryLink("c2053520858")}.`,
      related: [categoryLink("c856338910"), categoryLink("c2053520858"), categoryLink("c1589444568")],
    };
  }

  if (t === "flavors") {
    return {
      title: `اختيار ${categoryName} بحسب نوع الجهاز`,
      p1: "أفضل نتيجة في النكهة تأتي من مطابقة نوع السائل مع الجهاز الصحيح: نكهات السولت للسحبات الإلكترونية، ونكهات الفري بيس لأجهزة الشيشة الإلكترونية. هذا الفرق يحدد الإشباع وجودة الطعم بشكل واضح.",
      p2: `إذا كان جهازك من فئة السحبة فابدأ من ${categoryLink("c1589444568")}، وإذا كان جهازك شيشة إلكترونية فالتصنيف المناسب غالبًا ${categoryLink("c681123545")}. لا تخلط الاستخدام بين النوعين حتى لا تتأثر التجربة.`,
      related: [categoryLink("c1589444568"), categoryLink("c681123545"), categoryLink("c1770383136")],
    };
  }

  if (t === "nicotine") {
    return {
      title: `تسوق ${categoryName} بتركيز يناسب استخدامك`,
      p1: "اختيار تركيز النيكوتين الصحيح يقلل أخطاء الشراء ويرفع الرضا عن المنتج. ابدأ بالتركيز الأقرب لاستهلاكك اليومي، ثم عدّل تدريجيًا حسب الإشباع بدل الانتقال العشوائي بين نسب عالية ومنخفضة.",
      p2: `تذكّر أن السحبات غالبًا تستخدم سولت أعلى، بينما الشيشة الإلكترونية تعتمد فري بيس أقل. لذلك نوع الجهاز أهم من الرقم وحده عند اتخاذ القرار.`,
      related: [categoryLink("c856338910"), categoryLink("c215470303"), categoryLink("c1321839499")],
    };
  }

  if (t === "mazaj") {
    const puffs = (categoryName.match(/\d+/) || [null])[0];
    const puffsPart = puffs ? `بسعة تقارب ${puffs} سحبة` : "بسعات متنوعة";
    return {
      title: `${categoryName} ${puffsPart}`,
      p1: "هذا التصنيف مخصص لإصدارات مزاج الأصلية مع اختلافات واضحة في السعة وطول الاستخدام. الاختيار الأفضل يعتمد على كثافة الاستخدام اليومي وليس الاسم فقط.",
      p2: `إذا استخدامك مرتفع فالإصدارات الأعلى سعة غالبًا أوفر، وللمقارنة السريعة راجع ${categoryLink("c1179666048")} و${categoryLink("c1362710152")} و${categoryLink("c1071686531")}.`,
      related: [categoryLink("c1179666048"), categoryLink("c1362710152"), categoryLink("c1071686531")],
    };
  }

  if (t === "coils" || t === "tanks" || t === "batteries") {
    return {
      title: `منتجات ${categoryName} المتوافقة مع الأجهزة`,
      p1: "هذا القسم يركز على القطع المؤثرة مباشرة في الأداء: ثبات السحب، وضوح النكهة، وعمر الجهاز. اختيار القطعة الصحيحة ينعكس فورًا على جودة التجربة ويقلل الأعطال.",
      p2: `لأفضل نتيجة، راجع توافق القطعة مع موديل الجهاز قبل الشراء، ثم اربطها بنوع السائل المناسب. المقارنة الصحيحة هنا تقنية أكثر من كونها سعرية فقط.`,
      related: [categoryLink("c215470303"), categoryLink("c681123545"), categoryLink("c856338910")],
    };
  }

  if (t === "offers") {
    return {
      title: `${categoryName} بتركيز على القيمة الحقيقية`,
      p1: "العرض القوي لا يعني نسبة خصم فقط، بل يعني منتج مناسب بسعر نهائي أفضل. هذا التصنيف يساعدك على اختيار العروض ذات الجدوى الأعلى بناءً على المواصفات الفعلية.",
      p2: `للاختيار الأذكى، قارن بين السعر والحجم والتوافق مع جهازك قبل الطلب. بهذه الطريقة تحصل على توفير حقيقي بدون تنازل عن الجودة.`,
      related: [categoryLink("c390558684"), categoryLink("c2128927364"), categoryLink("c856338910")],
    };
  }

  return {
    title: `أفضل منتجات ${categoryName}`,
    p1: "هذا التصنيف يجمع خيارات متعددة تم ترتيبها لتسهيل المقارنة واتخاذ القرار بسرعة. ركز على التوافق مع جهازك ونوع الاستخدام اليومي بدل الشراء العشوائي.",
    p2: "الاختيار الصحيح يبدأ من معرفة احتياجك: سحب ضيق أو بخار كثيف، نيكوتين أعلى أو أقل، وتكلفة شهرية مناسبة. بهذه الطريقة تحصل على نتيجة أفضل من أول تجربة.",
    related: [categoryLink("c856338910"), categoryLink("c215470303"), categoryLink("c681123545")],
  };
}

function faqPlan(categoryName) {
  const t = typeOfCategory(categoryName);

  if (t === "ecig") {
    return {
      title: `الأسئلة الشائعة حول ${categoryName}`,
      items: [
        {
          q: "ما أفضل سحبة إلكترونية للمبتدئين؟",
          a: `الأفضل جهاز بسيط بسحب ضيق ونكهة مستقرة، وغالبًا البدء من ${categoryLink("c2053520858")} يكون أسهل للمستخدم الجديد.`,
        },
        {
          q: "ما الفرق بين السحبة الإلكترونية والشيشة الإلكترونية؟",
          a: `السحبة عادة نيكوتينها أعلى وبخارها أقل وسحبها ضيق، بينما الشيشة الإلكترونية نيكوتينها أقل غالبًا وبخارها أكثف. للمقارنة العملية راجع ${categoryLink("c215470303")}.`,
        },
        {
          q: "كم يدوم جهاز السحبة الإلكترونية؟",
          a: "يعتمد على عدد السحبات المكتوب في المنتج وطريقة الاستخدام اليومية. الاستخدام المكثف يقلل المدة مقارنة بالاستخدام المعتدل.",
        },
        {
          q: "هل أستخدم نكهة سولت أم فري بيس مع السحبة؟",
          a: `في العادة السحبة تناسبها نكهات السولت أكثر. تجنب استخدام فري بيس منخفض في جهاز سحبة إذا كنت تبحث عن إشباع واضح.`,
        },
        {
          q: "هل البودات هنا أجهزة كاملة؟",
          a: `لا، قسم ${categoryLink("c640187172")} مخصص للبودات/الخراطيش التي تركب على الأجهزة المتوافقة، أما الجهاز نفسه فتجده ضمن أقسام السحبات.`,
        },
      ],
    };
  }

  if (t === "pods") {
    return {
      title: `الأسئلة الشائعة حول ${categoryName}`,
      items: [
        {
          q: "هل البودات في هذا القسم أجهزة أم خراطيش؟",
          a: "هذا القسم للبودات (الخراطيش) التي تركب على أجهزة السحبة الإلكترونية المتوافقة، وليس قسم أجهزة مستقلة.",
        },
        {
          q: "كيف أعرف أن البود متوافق مع جهازي؟",
          a: "طابق اسم الموديل بدقة قبل الشراء. أي اختلاف في الإصدار قد يمنع التركيب أو يؤثر على الأداء.",
        },
        {
          q: "متى أغيّر البود؟",
          a: "عند ضعف النكهة أو ظهور طعم غير طبيعي أو تسريب مستمر. هذه علامات واضحة أن البود انتهى عمره التشغيلي.",
        },
        {
          q: "ما الفرق بين البودات الأصلية والتجارية؟",
          a: "الأصلية غالبًا أكثر ثباتًا في السحب والطعم وأقل مشاكل في التسريب. لذلك ينصح دائمًا بالاختيار من مصدر موثوق.",
        },
      ],
    };
  }

  if (t === "eshisha_devices") {
    return {
      title: `الأسئلة الشائعة حول ${categoryName}`,
      items: [
        {
          q: "ما أفضل جهاز شيشة إلكترونية للمبتدئين؟",
          a: "اختر جهازًا بقدرة متوسطة وكويل متوفر وبطارية مستقرة. هذا يعطيك تجربة قوية بدون تعقيد كبير في الإعدادات.",
        },
        {
          q: "ما الفرق بين الشيشة الإلكترونية والسحبة الإلكترونية؟",
          a: `الشيشة الإلكترونية تعطي بخارًا أكثف ونيكوتينًا أقل غالبًا، بينما السحبة تركيزها أعلى وسحبها أضيق. أقسام السحبة موجودة في ${categoryLink("c856338910")}.`,
        },
        {
          q: "هل أستطيع استخدام نكهات السولت في جهاز شيشة إلكترونية؟",
          a: "لا يُنصح بذلك في الأجهزة عالية الطاقة، لأن تركيز النيكوتين قد يكون مرتفعًا جدًا وغير مريح.",
        },
        {
          q: "ما أهم ملحقات لازم أوفرها مع الجهاز؟",
          a: `يفضل وجود كويلات وبطارية وملحقات متوافقة لضمان استمرارية الأداء: ${categoryLink("c1945541157")} و${categoryLink("c1220671877")}.`,
        },
      ],
    };
  }

  if (t === "flavors") {
    return {
      title: `الأسئلة الشائعة حول ${categoryName}`,
      items: [
        {
          q: "ما أفضل نكهة فيب للشيشة الإلكترونية؟",
          a: "الاختيار يعتمد على ذوقك، لكن الأفضل البدء بالنكهات القريبة من تفضيلك اليومي ثم التوسع تدريجيًا.",
        },
        {
          q: "ما الفرق بين نكهات السولت ونكهات الفري بيس؟",
          a: `السولت موجه غالبًا للسحبات الإلكترونية، والفري بيس مناسب أكثر لأجهزة الشيشة الإلكترونية. قارن بين ${categoryLink("c1589444568")} و${categoryLink("c681123545")}.`,
        },
        {
          q: "هل يمكن استخدام نفس النكهة لكل الأجهزة؟",
          a: "ليس دائمًا. نوع الجهاز وطريقة السحب يحددان النسبة المناسبة. استخدام السائل غير المناسب يضعف التجربة أو يسبب إزعاجًا.",
        },
        {
          q: "هل توجد نكهات بدون نيكوتين؟",
          a: `نعم، متوفرة في ${categoryLink("c1770383136")} ومناسبة لمن يريد الطعم دون إشباع نيكوتيني.`,
        },
      ],
    };
  }

  if (t === "nicotine") {
    return {
      title: `الأسئلة الشائعة حول ${categoryName}`,
      items: [
        {
          q: "كيف أختار تركيز النيكوتين المناسب لي؟",
          a: "ابدأ بأقرب تركيز لاستخدامك الحالي ثم عدّل تدريجيًا. التدرج يعطي نتيجة أفضل من الانتقال المفاجئ.",
        },
        {
          q: "هل نفس تركيز النيكوتين يصلح لكل الأجهزة؟",
          a: "لا. السحبات غالبًا تناسبها نسب أعلى، بينما أجهزة الشيشة الإلكترونية تعمل عادة على نسب أقل.",
        },
        {
          q: "ما الفرق بين 3mg و6mg و12mg؟",
          a: "كلما ارتفع الرقم زادت قوة الإشباع. الأفضل اختيار النسبة حسب نمط السحب وعدد مرات الاستخدام يوميًا.",
        },
      ],
    };
  }

  if (t === "mazaj") {
    return {
      title: `الأسئلة الشائعة حول ${categoryName}`,
      items: [
        {
          q: "كيف أختار إصدار مزاج المناسب لي؟",
          a: "اعتمد على عدد السحبات المتوقع يوميًا. كلما زاد استخدامك تحتاج سعة أعلى لتقليل تكرار الشراء.",
        },
        {
          q: "ما الفرق بين مزاج 6000 و15000؟",
          a: `الفرق الأساسي في السعة وطول الاستخدام. للمقارنة السريعة راجع ${categoryLink("c1362710152")} و${categoryLink("c1179666048")}.`,
        },
        {
          q: "هل كل إصدارات مزاج بنفس قوة النكهة؟",
          a: "القوة قد تختلف بين الإصدارات والنكهات، لذلك الأفضل اختيار الإصدار بحسب ذوقك ونمط سحبك المعتاد.",
        },
      ],
    };
  }

  if (t === "offers") {
    return {
      title: `الأسئلة الشائعة حول ${categoryName}`,
      items: [
        {
          q: "كيف أعرف أن العرض فعلاً مجدي؟",
          a: "قارن السعر النهائي مع المواصفات والحجم، وليس نسبة الخصم فقط. هذه الطريقة تكشف القيمة الحقيقية بسرعة.",
        },
        {
          q: "ما الفرق بين عروض التصفية والعروض الخاصة؟",
          a: `التصفية غالبًا لمخزون محدود، والعروض الخاصة لحملات مؤقتة. يمكنك المقارنة بين ${categoryLink("c390558684")} و${categoryLink("c2128927364")}.`,
        },
        {
          q: "هل منتجات العروض أصلية؟",
          a: "عند الشراء من مصدر موثوق تكون المنتجات أصلية، مع ضرورة مراجعة وصف المنتج وسياسة الاستبدال قبل الطلب.",
        },
      ],
    };
  }

  return {
    title: `الأسئلة الشائعة حول ${categoryName}`,
    items: [
      { q: `ما أفضل خيار داخل تصنيف ${categoryName}؟`, a: "الأفضل يعتمد على طريقة الاستخدام اليومية والتوافق مع جهازك، وليس السعر فقط." },
      { q: "كيف أختار بسرعة بدون حيرة؟", a: "ابدأ بنوع الجهاز، ثم النيكوتين، ثم النكهة أو السعة. هذا الترتيب يختصر القرار بشكل كبير." },
      { q: "هل الفروقات بين المنتجات مؤثرة فعلًا؟", a: "نعم، خصوصًا في الإشباع، وثبات الطعم، وعمر الاستخدام. لذلك المقارنة بالمواصفات خطوة أساسية." },
    ],
  };
}

function stripHtml(html) {
  return String(html || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeRegExp(text) {
  return String(text).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function extractMetaContent(html, attr, value) {
  const q = escapeRegExp(value);
  const a = escapeRegExp(attr);
  const r1 = new RegExp(
    `<meta[^>]*\\b${a}\\s*=\\s*["']${q}["'][^>]*\\bcontent\\s*=\\s*["']([^"']*)["'][^>]*>`,
    "i"
  );
  const r2 = new RegExp(
    `<meta[^>]*\\bcontent\\s*=\\s*["']([^"']*)["'][^>]*\\b${a}\\s*=\\s*["']${q}["'][^>]*>`,
    "i"
  );
  return (html.match(r1)?.[1] || html.match(r2)?.[1] || "").trim();
}

function extractCanonical(html) {
  const m = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i);
  return (m?.[1] || "").trim();
}

function extractStoreName(html) {
  const title = (html.match(/<title>([^<]+)<\/title>/i)?.[1] || "").trim();
  if (title.includes(" - ")) return title.split(" - ").pop().trim();
  const h = (html.match(/<h2[^>]*class=["'][^"']*sr-only[^"']*["'][^>]*>([^<]+)<\/h2>/i)?.[1] || "").trim();
  return h || "فيب السعودية";
}

function extractCommercialNumber(html) {
  const m = html.match(/"commercial_number"\s*:\s*(null|"([^"]*)")/i);
  if (!m || m[1] === "null") return "";
  return (m[2] || "").trim();
}

function extractCountryCode(html) {
  const m = html.match(/"store_country"\s*:\s*"([^"]+)"/i);
  return (m?.[1] || "SA").trim();
}

function extractCategoryParentFromPage(html) {
  const m = html.match(/"parent"\s*:\s*\{"id":"product\.index","title":"([^"]*)","url":"([^"]*)"/i);
  if (!m) return null;
  const title = decodeEscapedText(m[1] || "");
  const url = normalizeEscapedPath((m[2] || "").replaceAll("\\/", "/").trim());
  if (!title || !url) return null;

  // Try to extract grandparent for nicotine-level subcategories
  let grandparent = null;
  const afterMatch = html.slice(m.index + m[0].length);
  const gpMatch = afterMatch.match(/,\s*"parent"\s*:\s*\{\s*"id"\s*:\s*"product\.index"\s*,\s*"title"\s*:\s*"([^"]*)"\s*,\s*"url"\s*:\s*"([^"]*)"/i);
  if (gpMatch) {
    const gpTitle = decodeEscapedText(gpMatch[1] || "");
    const gpUrl = normalizeEscapedPath((gpMatch[2] || "").replaceAll("\\/", "/").trim());
    if (gpTitle && gpUrl) {
      grandparent = { title: gpTitle, url: gpUrl };
    }
  }

  return { title, url, grandparent };
}

function extractSameAsLinks(html) {
  const rx = /https?:\/\/(?:www\.)?(?:facebook\.com|instagram\.com|x\.com|twitter\.com|tiktok\.com|youtube\.com|snapchat\.com|linkedin\.com)\/[^\s"'<>]+/gi;
  const links = new Set();
  let m;
  while ((m = rx.exec(html)) !== null) {
    const link = (m[0] || "").replace(/&amp;/g, "&").trim();
    if (link) links.add(link);
  }
  return [...links].slice(0, 10);
}

function extractStoreContacts(html) {
  const mobile = html.match(/"mobile"\s*:\s*"([^"]+)"/i)?.[1] || "";
  const email = html.match(/"email"\s*:\s*"([^"]+)"/i)?.[1] || "";
  const whatsapp = html.match(/"whatsapp"\s*:\s*"([^"]+)"/i)?.[1] || "";
  return {
    mobile: mobile.trim(),
    email: email.trim(),
    whatsapp: whatsapp.trim(),
  };
}

function extractArticleAuthor(html) {
  const match = html.match(/<a[^>]*href=["']([^"']*\/ar\/blog\/author\/[^"']+)["'][^>]*>\s*[\s\S]*?<span[^>]*>([^<]+)<\/span>/i);
  if (!match) {
    return {
      name: "فريق تحرير Saudi Vape",
      url: `https://saudivapes.com${SEO_STATIC_PATHS.author}`,
    };
  }
  const url = match[1].startsWith("http") ? match[1] : `https://saudivapes.com${match[1]}`;
  return {
    name: stripHtml(match[2]) || "فريق تحرير Saudi Vape",
    url,
  };
}

function extractArticleDate(html) {
  const fromTime = html.match(/<time[^>]*>([^<]+)<\/time>/i)?.[1] || "";
  const visible = parseArabicDateText(fromTime);
  if (visible) return visible;
  const metaDate = extractMetaContent(html, "property", "article:published_time")
    || extractMetaContent(html, "property", "og:published_time")
    || extractMetaContent(html, "property", "store:published_time");
  if (!metaDate) return "";
  return String(metaDate).slice(0, 10);
}

function extractFirstArticleImage(html) {
  const ogImage = extractMetaContent(html, "property", "og:image");
  if (ogImage) return ogImage;
  const img = html.match(/<article[\s\S]*?<img[^>]*src=["']([^"']+)["']/i)?.[1] || "";
  return img.replaceAll("\\/", "/");
}

function normalizeLegacyStoreLinks(html) {
  return String(html || "")
    .replaceAll("https://ksavape.store/", "https://saudivapes.com/ar/")
    .replaceAll("https://saudivapes.com/blog/", "https://saudivapes.com/ar/blog/");
}

function mapAvailability(value) {
  const v = String(value || "").toLowerCase();
  if (v.includes("out")) return "https://schema.org/OutOfStock";
  if (v.includes("preorder")) return "https://schema.org/PreOrder";
  return "https://schema.org/InStock";
}

function buildOrganizationSchema(pageUrl, html) {
  const storeName = extractStoreName(html);
  const sameAs = extractSameAsLinks(html);
  const commercialNumber = extractCommercialNumber(html);
  const countryCode = extractCountryCode(html);

  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://saudivapes.com/#organization",
    name: storeName,
    url: "https://saudivapes.com/ar/",
    logo: extractMetaContent(html, "property", "og:image") || "https://cdn.salla.sa/jbXEY/i4MuRKIpBu4YDUt5npRdQUlAfMg7dZhFbgRUD7Nj.png",
    sameAs,
    address: {
      "@type": "PostalAddress",
      addressCountry: countryCode || "SA",
    },
    mainEntityOfPage: pageUrl,
  };

  if (commercialNumber) {
    org.identifier = {
      "@type": "PropertyValue",
      propertyID: "commercial_number",
      value: commercialNumber,
    };
  }

  if (!sameAs.length) delete org.sameAs;
  return JSON.stringify(org).replace(/<\//g, "<\\/");
}

function buildBreadcrumbSchema(pageUrl, pageName, categoryParent) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@id": "https://saudivapes.com/ar/",
        name: "الرئيسية",
      },
    },
  ];

  if (categoryParent?.title && categoryParent?.url) {
    items.push({
      "@type": "ListItem",
      position: 2,
      item: {
        "@id": categoryParent.url,
        name: categoryParent.title,
      },
    });
    items.push({
      "@type": "ListItem",
      position: 3,
      item: {
        "@id": pageUrl,
        name: pageName,
      },
    });
  } else {
    items.push({
      "@type": "ListItem",
      position: 2,
      item: {
        "@id": pageUrl,
        name: pageName,
      },
    });
  }

  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  }).replace(/<\//g, "<\\/");
}

function buildProductSchema(pageUrl, html) {
  const name = extractMetaContent(html, "property", "og:title") || extractStoreName(html);
  const description = extractMetaContent(html, "property", "og:description") || "";
  const image = extractMetaContent(html, "property", "og:image") || "";
  const price = extractMetaContent(html, "property", "product:price:amount") || "";
  const currency = extractMetaContent(html, "property", "product:price:currency") || "SAR";
  const availability = mapAvailability(extractMetaContent(html, "property", "product:availability"));
  const sku = extractMetaContent(html, "property", "product:retailer_item_id") || (pageUrl.match(/\/(p\d+)$/)?.[1] || "");
  const brand = extractMetaContent(html, "property", "product:brand") || extractStoreName(html);
  const category = extractMetaContent(html, "property", "product:category") || "";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${pageUrl}#product-seo`,
    name,
    description,
    sku,
    image,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    category,
    offers: {
      "@type": "Offer",
      url: pageUrl,
      priceCurrency: currency,
      price: Number(price || 0),
      availability,
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@id": "https://saudivapes.com/#organization",
      },
    },
  };

  if (!price) delete schema.offers.price;
  if (!description) delete schema.description;
  if (!image) delete schema.image;
  if (!sku) delete schema.sku;
  if (!category) delete schema.category;

  return JSON.stringify(schema).replace(/<\//g, "<\\/");
}

function buildArticleSchema(pageUrl, html) {
  const headline =
    extractMetaContent(html, "property", "og:title") ||
    html.match(/<h1[^>]*>([^<]+)<\/h1>/i)?.[1] ||
    "مقال من Saudi Vape";
  const description =
    extractMetaContent(html, "name", "description") ||
    clipText(html.match(/<article[\s\S]*?<p>([\s\S]*?)<\/p>/i)?.[1] || "", 180);
  const image = extractFirstArticleImage(html);
  const datePublished = extractArticleDate(html);
  const author = extractArticleAuthor(html);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: stripHtml(headline),
    description: stripHtml(description),
    inLanguage: "ar",
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    author: {
      "@type": "Person",
      name: author.name,
      url: author.url,
      jobTitle: "محرر متخصص في منتجات الفيب",
      worksFor: {
        "@id": "https://saudivapes.com/#organization",
      },
    },
    publisher: {
      "@id": "https://saudivapes.com/#organization",
    },
  };

  if (image) {
    schema.image = {
      "@type": "ImageObject",
      url: image,
    };
  }
  if (datePublished) {
    schema.datePublished = datePublished;
    schema.dateModified = datePublished;
  }
  if (!schema.description) delete schema.description;
  return JSON.stringify(schema).replace(/<\//g, "<\\/");
}

function buildFaqSchemaJson(pageUrl, faq) {
  const mainEntity = (faq.items || [])
    .slice(0, 6)
    .map((item) => ({
      "@type": "Question",
      name: stripHtml(item.q),
      acceptedAnswer: {
        "@type": "Answer",
        text: stripHtml(item.a),
      },
    }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
    url: pageUrl,
    inLanguage: "ar",
  };

  return JSON.stringify(schema).replace(/<\//g, "<\\/");
}

function buildWebsiteSchema(pageUrl) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://saudivapes.com/#website",
    url: pageUrl,
    name: "فيب السعودية",
    inLanguage: "ar",
    publisher: { "@id": "https://saudivapes.com/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://saudivapes.com/ar/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }).replace(/<\//g, "<\\/");
}

function buildStoreSchema(pageUrl, html) {
  const contacts = extractStoreContacts(html);
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${pageUrl}#store`,
    name: extractStoreName(html),
    url: "https://saudivapes.com/ar/",
    image: extractMetaContent(html, "property", "og:image") || "https://cdn.salla.sa/jbXEY/i4MuRKIpBu4YDUt5npRdQUlAfMg7dZhFbgRUD7Nj.png",
    telephone: contacts.mobile || contacts.whatsapp || undefined,
    email: contacts.email || undefined,
    address: {
      "@type": "PostalAddress",
      addressCountry: extractCountryCode(html) || "SA",
    },
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    parentOrganization: {
      "@id": "https://saudivapes.com/#organization",
    },
  }).replace(/<\//g, "<\\/");
}

function clipText(text, max = 220) {
  const t = stripHtml(String(text || "")).trim();
  if (!t) return "";
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trim()}…`;
}

function decodeEscapedText(text) {
  return String(text || "")
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, u) => String.fromCharCode(parseInt(u, 16)))
    .replace(/\\\//g, "/")
    .replace(/\\"/g, '"')
    .replace(/\\n/g, " ")
    .replace(/\\r/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeEscapedPath(pathText) {
  return String(pathText || "")
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, u) => String.fromCharCode(parseInt(u, 16)))
    .replace(/\/u([0-9a-fA-F]{4})/g, (_, u) => String.fromCharCode(parseInt(u, 16)))
    .replaceAll("\\/", "/")
    .replace(/\s+/g, " ")
    .trim();
}

function extractProductLongDescription(html) {
  const m = html.match(/"@type":"Product"[\s\S]*?"description":"([^"]+)"/i);
  if (!m) return "";
  return decodeEscapedText(m[1]);
}

function extractBrandLinkFromPage(html) {
  const byClass = html.match(/<a[^>]*class=["'][^"']*brand-logo[^"']*["'][^>]*href=["']([^"']+)["'][^>]*title=["']([^"']+)["'][^>]*>/i)
    || html.match(/<a[^>]*class=["'][^"']*brand-logo[^"']*["'][^>]*title=["']([^"']+)["'][^>]*href=["']([^"']+)["'][^>]*>/i);
  if (byClass) {
    const href = byClass[1]?.includes("brand-") ? byClass[1] : byClass[2];
    const title = byClass[2]?.includes("http") ? byClass[1] : byClass[2];
    if (href && title) return { name: stripHtml(title), url: href.replaceAll("\\/", "/") };
  }

  const byHref = html.match(/<a[^>]*href=["']([^"']*\/brand-\d+[^"']*)["'][^>]*title=["']([^"']+)["'][^>]*>/i);
  if (byHref) return { name: stripHtml(byHref[2]), url: byHref[1].replaceAll("\\/", "/") };
  return null;
}

function extractProductFacts(html) {
  const text = stripHtml(html);
  const facts = {};

  // Battery — English (1200mAh) + Arabic (700 ملي امبير / 700 مللي أمبير)
  const battery = text.match(/(\d{3,5})\s?mAh/i) || text.match(/(\d{3,5})\s?ملي\s?امبير/i) || text.match(/(\d{3,5})\s?مللي\s?أمبير/i);
  if (battery) facts.battery = `${battery[1]}mAh`;

  // Watt — English (30W / 5-30W) + Arabic (16 واط)
  const wattRange = text.match(/(\d{1,3})\s?W\s?[-–]\s?(\d{1,3})\s?W/i) || text.match(/(\d{1,3})\s?واط\s?[-–]\s?(\d{1,3})\s?واط/i);
  const wattSingle = text.match(/(\d{2,3})\s?W(?!\s?[-–])/i) || text.match(/(\d{1,3})\s?واط(?!\s?[-–])/i);
  if (wattRange) facts.watt = `${wattRange[1]}W - ${wattRange[2]}W`;
  else if (wattSingle) facts.watt = `${wattSingle[1]}W`;

  // Pod/volume capacity — English (2ml) + Arabic (2 مل)
  const pod = text.match(/(\d+(?:\.\d+)?)\s?ml/i) || text.match(/(\d+(?:\.\d+)?)\s?مل/i);
  if (pod) facts.pod = `${pod[1]}ml`;

  // Resistance — Ω both languages
  const resistanceRange = text.match(/(\d+(?:\.\d+)?)\s?Ω\s?[-–]\s?(\d+(?:\.\d+)?)\s?Ω/i);
  const resistanceSingle = text.match(/(\d+(?:\.\d+)?)\s?Ω/i);
  if (resistanceRange) facts.resistance = `${resistanceRange[1]}Ω - ${resistanceRange[2]}Ω`;
  else if (resistanceSingle) facts.resistance = `${resistanceSingle[1]}Ω`;

  // Charging
  if (/USB[\s-]?C|Type[\s-]?C/i.test(text)) facts.charge = "USB-C";

  // Draw type — English (MTL/DTL) + Arabic (سحب ضيق/سحب واسع/سحبات)
  if (/MTL/i.test(text) && /DTL/i.test(text)) facts.draw = "MTL / DTL";
  else if (/MTL|سحب ضيق|سحبات/i.test(text)) facts.draw = "MTL";
  else if (/DTL|سحب واسع|شيشة/i.test(text)) facts.draw = "DTL";

  // Screen
  const screen = text.match(/(\d+(?:\.\d+)?)\s?(?:إنش|inch)/i);
  if (screen && /شاشة|screen|TFT/i.test(text)) facts.screen = `${screen[1]} إنش`;

  return facts;
}

function renderDetailsSummaryFaq(faqPlan) {
  if (!faqPlan?.items?.length) return '';
  const items = faqPlan.items.slice(0, 6).map((item) => `
    <details>
      <summary><h3>${escapeHtml(item.q)}</h3></summary>
      <div class="faq-answer">
        <p>${item.a}</p>
      </div>
    </details>`).join('');
  return `
  <div id="product-enhanced-faq">
    <div class="faq-header">
      <h2>${escapeHtml(faqPlan.title || 'الأسئلة الشائعة')}</h2>
    </div>
    <div class="faq-items">
      ${items}
    </div>
  </div>`;
}

function extractNicotineRange(text, isSalt) {
  // 1) Explicit range "30 - 50 مج" / "30-50mg" / "نيكوتين : 30 - 50 مج"
  const rangeMatch = text.match(/(\d{2,3})\s*[-–]\s*(\d{2,3})\s*(?:م[جغ]|mg|مج)/i) ||
                     text.match(/نيكوتين\s*[:：]?\s*(\d{2,3})\s*[-–]\s*(\d{2,3})\s*م/i);
  if (rangeMatch) {
    const low = parseInt(rangeMatch[1]), high = parseInt(rangeMatch[2]);
    if (high > low) return `${low} - ${high} مج`;
  }

  // 2) Multiple lines "تركيز 30 مجم نيكوتين" + "تركيز 50 مجم نيكوتين"
  const multiValues = [];
  const multiRe = /(\d{2,3})\s*م(?:ج[مغ]|g)?\s*نيكوتين/gi;
  let m;
  while ((m = multiRe.exec(text)) !== null) multiValues.push(parseInt(m[1]));
  if (multiValues.length >= 2) {
    const uniq = [...new Set(multiValues)].sort((a, b) => a - b);
    return `${uniq[0]} - ${uniq[uniq.length - 1]} مج`;
  }

  // 3) Comma/slash/و separated "20,30,50 مج" / "25/50 مج" / "30 و 50 مج"
  const sepMatch = text.match(/(\d{2,3})\s*[,/و]\s*(\d{2,3})/);
  if (sepMatch) {
    const vals = [parseInt(sepMatch[1]), parseInt(sepMatch[2])].sort((a, b) => a - b);
    return `${vals[0]} - ${vals[1]} مج`;
  }

  // 4) Single value
  const singleMatch = text.match(/نيكوتين\s*[:：]\s*(\d{2,3})\s*[مـ ]/i) ||
                      text.match(/(\d{2,3})\s?م[جغ]/i) ||
                      text.match(/(\d{2,3})\s?mg/i);
  if (singleMatch) return `${singleMatch[1]} مج`;

  // 5) Default by type
  return isSalt ? '30 - 50 مج' : '3 - 6 مج';
}

function buildProductSpecsBar(productType, pageName, facts, htmlSource, categoryTitle, brandName) {
  const text = stripHtml(htmlSource);
  const specs = [];

  function addSpec(icon, label, value) {
    if (value) specs.push({ icon, label, value });
  }

  if (productType === "ecig" || productType === "shisha") {
    addSpec('🔋', 'البطارية', facts.battery || null);
    addSpec('⚡', 'القدرة', facts.watt || null);
    addSpec('💨', 'نوع السحب', facts.draw || null);
    addSpec('🔌', 'الشحن', facts.charge || null);
  }

  if (productType === "flavors") {
    // Detect volume from text
    const volMatch = text.match(/(\d{2,3})\s?مل/i) || text.match(/(\d{2,3})\s?ml/i);
    const volNum = volMatch ? parseInt(volMatch[1]) : 0;
    const volume = volNum ? `${volNum} مل` : null;

    // Detect salt vs freebase from breadcrumb/category first (primary signal)
    const nameHasSalt = (pageName || '').includes('سولت') || (pageName || '').toLowerCase().includes('salt');
    const categoryHasSalt = (categoryTitle || '').includes('سولت');
    const nameHasFreebase = (pageName || '').includes('فري بيز') || (pageName || '').toLowerCase().includes('freebase');
    const textHasFreebase = text.includes('فري بيز') || text.includes('فريبيس') || text.toLowerCase().includes('freebase');

    let isSalt;
    if (textHasFreebase || nameHasFreebase) {
      isSalt = false;
    } else if (categoryHasSalt || nameHasSalt) {
      // Breadcrumb says "نكهات سحبة سولت" → salt nic for MTL سحبة
      isSalt = true;
    } else if (volNum >= 60) {
      // Breadcrumb says "نكهات فيب شيشة" → freebase for DTL شيشة
      isSalt = false;
    } else {
      isSalt = false;
    }

    const typeDisplay = isSalt ? 'نيكوتين سولت' : 'فري بيس';
    const usageDisplay = isSalt ? 'سحبات MTL' : 'شيشة DTL';
    const nic = extractNicotineRange(text, isSalt);

    addSpec('🍯', 'النوع', typeDisplay);
    addSpec('📏', 'الحجم', volume || '30 مل');
    addSpec('⚡', 'النيكوتين', nic);
    addSpec('💨', 'الاستخدام', usageDisplay);
  }

  if (productType === "pods") {
    addSpec('🔧', 'النوع', 'بود قابل للتركيب');
    addSpec('📏', 'المقاومة', facts.resistance || null);
    addSpec('📦', 'السعة', facts.pod || null);
    addSpec('💨', 'نوع السحب', facts.draw || null);
  }

  if (productType === "coils") {
    addSpec('🔧', 'المقاومة', facts.resistance || null);
    addSpec('🔬', 'النوع', 'كويل قابل للتغيير');
    addSpec('🏷️', 'التوافق', brandName || null);
    addSpec('💨', 'الاستخدام', facts.draw || null);
  }

  if (productType === "batteries") {
    addSpec('🔋', 'السعة', facts.battery || null);
    addSpec('📏', 'النوع', null);
    addSpec('⚡', 'الجهد', null);
    addSpec('📦', 'الكمية', null);
  }

  if (productType === "tanks") {
    addSpec('📦', 'السعة', facts.pod || null);
    addSpec('📏', 'المقاومة', facts.resistance || null);
    addSpec('💨', 'نوع السحب', facts.draw || null);
    addSpec('🔌', 'التوافق', brandName || null);
  }

  if (productType === "nicotine") {
    const volMatch = text.match(/(\d{2,3})\s?مل/i) || text.match(/(\d{2,3})\s?ml/i);
    const volume = volMatch ? `${volMatch[1]} مل` : null;
    const nicMatch = text.match(/نيكوتين\s*[:：]\s*(\d{2,3})\s*[مـ ]/i) || text.match(/(\d{2,3})\s?م[جغ]/i) || text.match(/(\d{2,3})\s?mg/i);
    const nic = nicMatch ? `${nicMatch[1]} مج` : null;
    addSpec('🍯', 'النوع', null);
    addSpec('📏', 'الحجم', volume || null);
    addSpec('⚡', 'النيكوتين', nic || null);
    addSpec('💨', 'الاستخدام', null);
  }

  if (!specs.length) {
    addSpec('⚡', 'القدرة', facts.watt || null);
    addSpec('🔋', 'البطارية', facts.battery || null);
    addSpec('💨', 'نوع السحب', facts.draw || null);
    addSpec('🔌', 'الشحن', facts.charge || null);
  }

  // Fall empty specs to generic placeholder
  const filled = specs.map((s) => {
    if (!s.value) s.value = '—';
    return s;
  });

  if (!filled.length) return '';

  const cards = filled.map((s) => `
    <div class="spec-card">
      <div class="spec-icon">${s.icon}</div>
      <div class="spec-label">${s.label}</div>
      <div class="spec-value">${escapeHtml(s.value)}</div>
    </div>`).join('');

  return `<div id="product-specs-bar">${cards}</div>`;
}

function buildProductFaqData(html, pageName, categoryParent) {
  const productName = stripHtml(pageName || extractMetaContent(html, "property", "og:title") || "هذا المنتج");
  const descriptionRaw = extractProductLongDescription(html) || extractMetaContent(html, "property", "og:description") || "";
  const description = clipText(descriptionRaw, 220);
  const brandMeta = extractMetaContent(html, "property", "product:brand") || "العلامة التجارية";
  const brandPage = extractBrandLinkFromPage(html);
  const brand = brandPage?.name || brandMeta;
  const categoryTitle = categoryParent?.title || "التصنيف";
  const categoryUrl = categoryParent?.url || "";
  const facts = extractProductFacts(html);
  // For nicotine-level parent, use grandparent for product type
  const effectiveTypeTitle = (categoryParent?.grandparent?.title && /^\d+\s*نيكوتين$/.test(categoryParent.title || ''))
    ? categoryParent.grandparent.title
    : categoryTitle;
  const productType = categoryTypeV2(effectiveTypeTitle);

  const brandLinkHtml = brandPage?.url
    ? `<a href="${brandPage.url}" style="color:#0b57d0">${escapeHtml(brand)}</a>`
    : escapeHtml(brand);
  const categoryLinkHtml = categoryUrl
    ? `<a href="${categoryUrl}" style="color:#0b57d0">${escapeHtml(categoryTitle)}</a>`
    : escapeHtml(categoryTitle);

  const fitHint = facts.draw === "MTL / DTL"
    ? "هذا الموديل مرن لأنه يدعم نمطي سحب مختلفين، لذلك يناسب المستخدم الذي يريد التحول بين تجربة ناعمة وتجربة بخار أعلى."
    : facts.draw === "MTL"
    ? "غالبًا يناسب من يفضّل سحبًا أهدأ وتجربة أقرب للسحبة الضيقة."
    : facts.draw === "DTL"
    ? "غالبًا يناسب من يفضّل بخارًا كثيفًا وتجربة أقوى نسبيًا."
    : "الملاءمة تعتمد على أسلوب الاستخدام اليومي ومستوى الخبرة.";

  let toneLead = "لأفضل قرار شراء";
  let usageAdvice = "اختر الإعداد الذي يوازن بين النكهة والثبات وفق روتينك اليومي.";
  let compareAdvice = `ومع مقارنة سريعة داخل ${categoryLinkHtml} ستقدر تختار الخيار الأقرب لاحتياجك اليومي.`;

  if (productType === "shisha" || productType === "tanks" || productType === "coils") {
    toneLead = "لأفضل نتيجة تقنية";
    usageAdvice = "ابدأ بإعدادات محافظة ثم عدّل تدريجيًا حسب المقاومة ونمط السحب للحصول على ثبات أعلى.";
    compareAdvice = `قارن المواصفات الفنية داخل ${categoryLinkHtml} (المقاومة/التوافق/الاستهلاك) قبل الإتمام.`;
  } else if (productType === "ecig" || productType === "offers") {
    toneLead = "لشراء أسرع وأذكى";
    usageAdvice = "ركّز على التوافق وسهولة الاستخدام وثبات النكهة بدل الاكتفاء بالسعر.";
    compareAdvice = `راجع الخيارات المتاحة في ${categoryLinkHtml} واختر الأنسب لاحتياجك اليومي مباشرة.`;
  } else if (productType === "flavors") {
    toneLead = "لأفضل تجربة طعم";
    usageAdvice = "اختر النكهة بحسب نوع جهازك وتركيز النيكوتين المناسب لتفادي تجربة غير متوازنة.";
    compareAdvice = `قارن خطوط النكهات داخل ${categoryLinkHtml} لاختيار الطعم الأقرب لذوقك.`;
  } else if (productType === "pods" || productType === "batteries") {
    toneLead = "لتفادي مشاكل التوافق";
    usageAdvice = "تحقق من الموديل والإصدار بدقة قبل الطلب لأن فرق الإصدار قد يغيّر التوافق.";
    compareAdvice = `راجع المنتجات المتوافقة داخل ${categoryLinkHtml} قبل إتمام الشراء.`;
  }

  const items = [];
  items.push({
    q: `ما أهم مواصفات ${productName}؟`,
    a: description || `${toneLead}، راجع مواصفات القدرة والبطارية ونوع السحب والتوافق مع الكويل قبل إتمام الطلب.`,
  });

  if (facts.battery || facts.watt || facts.screen) {
    const parts = [];
    if (facts.battery) parts.push(`بطارية ${facts.battery}`);
    if (facts.watt) parts.push(`قدرة ${facts.watt}`);
    if (facts.screen) parts.push(`شاشة ${facts.screen}`);
    items.push({
      q: `هل ${productName} مناسب للاستخدام اليومي المكثف؟`,
      a: `يعتمد ذلك على نمط استخدامك، لكن ${parts.join("، ")} يمنح توازنًا جيدًا بين الأداء والثبات للمستخدم اليومي.`,
    });
  }

  if (facts.resistance || facts.draw) {
    const resistanceText = facts.resistance ? `نطاق المقاومة ${facts.resistance}` : "نوع الكويل المستخدم";
    const drawText = facts.draw ? `ونمط السحب ${facts.draw}` : "ونمط السحب المتاح";
    items.push({
      q: `كيف أختار الكويل/النمط الأنسب في ${productName}؟`,
      a: `ابدأ من ${resistanceText} ${drawText}. ${usageAdvice}`,
    });
  }

  if (facts.charge || facts.pod) {
    const parts = [];
    if (facts.charge) parts.push(`يدعم شحن ${facts.charge}`);
    if (facts.pod) parts.push(`بسعة بود ${facts.pod}`);
    items.push({
      q: `ما الذي يميّز ${productName} عن الخيارات القريبة منه؟`,
      a: `${parts.join(" و")}، ${compareAdvice}`,
    });
  }

  items.push({
    q: `هل ${productName} أصلي وكيف أتأكد قبل الطلب؟`,
    a: `المنتج من ${brandLinkHtml}. تأكد من مطابقة اسم الموديل والمواصفات على صفحة المنتج، ومراجعة تفاصيل الفئة عبر ${categoryLinkHtml} قبل الإتمام.`,
  });

  return {
    title: `الأسئلة الشائعة حول ${productName}`,
    items: [
      items[0],
      {
        q: `هل ${productName} مناسب للمبتدئين؟`,
        a: `${fitHint} ولأفضل نتيجة اختر منتجًا يطابق احتياجك الفعلي من حيث سهولة الاستخدام ونمط السحب.`,
      },
      ...items.slice(1),
    ].slice(0, 6),
  };
}

function buildHomeFaqData() {
  return {
    title: "الأسئلة الشائعة حول الفيب",
    items: [
      {
        q: "ما أفضل سحبات فيب في السعودية؟",
        a: "يعتمد الاختيار على عدد السحبات، ثبات النكهة، وجودة التصنيع. الأفضل غالبًا هو المنتج الأصلي المناسب لاستخدامك اليومي.",
      },
      {
        q: "ما الفرق بين السحبات والأجهزة القابلة لإعادة التعبئة؟",
        a: "السحبات جاهزة وسريعة الاستخدام، بينما الأجهزة القابلة لإعادة التعبئة أوفر على المدى الطويل وتمنحك مرونة أكبر في الاختيار.",
      },
      {
        q: "كيف أختار جهاز فيب مناسب؟",
        a: "ابدأ بنمط الاستخدام: المبتدئ يفضل جهازًا بسيطًا، والمستخدم المتقدم يحتاج خيارات تحكم أوسع في الأداء.",
      },
      {
        q: "هل نكهات السولت أفضل من النكهات العادية؟",
        a: "السولت مناسب أكثر لأجهزة السحب الضيق الصغيرة، بينما الفري بيس يناسب أجهزة الشيشة الإلكترونية ذات البخار الأعلى.",
      },
    ],
  };
}

function buildHomeCollectionSchema(pageUrl) {
  const itemListElement = HOME_CATEGORY_CARDS.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: c.url,
    name: c.title,
  }));
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collection`,
    name: "متجر فيب في السعودية",
    inLanguage: "ar",
    mainEntity: {
      "@type": "ItemList",
      itemListElement,
    },
  }).replace(/<\//g, "<\\/");
}

class RemoveElement {
  element(element) {
    element.remove();
  }
}

class HomeTopInjector {
  element(element) {
    element.prepend(
      `
      <section class="home-seo-hero container" style="padding:14px 0 8px">
        <h1 style="margin:0 0 8px;font-size:1.55rem;line-height:1.7;color:#0f172a">متجر فيب في السعودية – سحبات وأجهزة ونكهات أصلية</h1>
        <p style="margin:0;line-height:2;color:#374151">تسوق أفضل السحبات وأجهزة الفيب والنكهات الأصلية مع شحن سريع داخل السعودية وجودة مضمونة.</p>
      </section>
      `,
      { html: true }
    );
  }
}

class HomeCategoriesAfterBannerInjector {
  element(element) {
    const cards = HOME_CATEGORY_CARDS.map(
      (c) => `
      <a href="${c.url}" style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-decoration:none;color:#111;border:1px solid #d1d5db;border-radius:12px;padding:10px;background:#fff;min-height:150px">
        <img src="${c.image}" alt="${escapeHtml(c.title)}" width="78" height="78" loading="lazy" decoding="async" fetchpriority="low" style="width:78px;height:78px;object-fit:contain;display:block;margin-bottom:8px">
        <span style="display:block;font-weight:700;line-height:1.8;text-align:center">${escapeHtml(c.title)}</span>
      </a>
      `
    ).join("");

    element.after(
      `
      <section class="home-categories container" style="margin:18px auto 14px;padding:16px;border:1px solid #e5e7eb;border-radius:16px;background:#f8fafc">
        <h2 style="margin:0 0 12px;font-size:1.2rem;line-height:1.7;color:#0f172a">تسوق حسب الفئة</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px">${cards}</div>
      </section>
      `,
      { html: true }
    );
  }
}

class HomeBottomInjector {
  element(element) {
    const categoryLinks = HOME_CATEGORY_CARDS.map(
      (c) => `<li><a href="${c.url}" style="color:#0b57d0">${escapeHtml(c.title)}</a></li>`
    ).join("");
    const brandLinks = HOME_BRAND_LINKS.map(
      (b) => `<li><a href="${b.url}" style="color:#0b57d0">${escapeHtml(b.title)}</a></li>`
    ).join("");
    const faq = buildHomeFaqData();
    const faqHtml = faq.items
      .map(
        (q) => `
        <h3 style="margin:0 0 6px;font-size:1rem;line-height:1.8;color:#111827">${escapeHtml(q.q)}</h3>
        <p style="margin:0 0 12px;line-height:2;color:#1f2937">${escapeHtml(q.a)}</p>
      `
      )
      .join("");

    element.append(
      `
      <section class="internal-links container" style="margin:8px auto 18px;padding:16px;border:1px solid #e5e7eb;border-radius:12px;background:#fff">
        <h2 style="margin:0 0 8px;font-size:1.2rem;line-height:1.7;color:#0f172a">تسوق حسب الفئة</h2>
        <ul style="margin:0 0 12px;padding-right:18px;line-height:2">${categoryLinks}</ul>
        <h3 style="margin:0 0 8px;font-size:1rem;line-height:1.8;color:#111827">تسوق حسب العلامة</h3>
        <ul style="margin:0;padding-right:18px;line-height:2">${brandLinks}</ul>
      </section>
      <section class="seo-content container" style="margin:0 auto 18px;padding:16px;border:1px solid #e5e7eb;border-radius:12px;background:#f8fafc">
        <h2 style="margin:0 0 10px;font-size:1.2rem;line-height:1.7;color:#0f172a">متجر فيب في السعودية يوفر أفضل السحبات والأجهزة الأصلية</h2>
        <p style="margin:0 0 10px;line-height:2;color:#1f2937">إذا كنت تبحث عن متجر فيب في السعودية بمنتجات أصلية وتجربة شراء واضحة، فهذا القسم يجمع أهم الفئات التي يحتاجها المستخدم اليومي: سحبات، أجهزة، نكهات، بودات وكويلات. الهدف هو تسهيل الوصول للمنتج المناسب بسرعة مع روابط مباشرة قابلة للزحف.</p>
        <p style="margin:0 0 10px;line-height:2;color:#1f2937">الاختيار الصحيح يبدأ من نوع الجهاز، ثم تركيز النيكوتين، ثم النكهة والسعة. لذلك قمنا بترتيب التصنيفات بطريقة تساعدك على المقارنة العملية بدل التنقل العشوائي بين المنتجات.</p>
        <p style="margin:0;line-height:2;color:#1f2937">قبل الشراء، قارن المواصفات الفعلية مثل عدد السحبات، التوافق، واستقرار الأداء. هذا يرفع جودة التجربة ويقلل أخطاء الطلب، خصوصًا عند الانتقال بين السحبة الإلكترونية والشيشة الإلكترونية.</p>
      </section>
      <section class="faq-section container" style="margin:0 auto 22px;padding:16px;border:1px solid #e5e7eb;border-radius:12px;background:#fff">
        <h2 style="margin:0 0 12px;font-size:1.2rem;line-height:1.7;color:#0f172a">${faq.title}</h2>
        ${faqHtml}
      </section>
      `,
      { html: true }
    );
  }
}

class BlogAuthorBoxInjector {
  constructor(author, publishedDate) {
    this.author = author;
    this.publishedDate = publishedDate;
    this.inserted = false;
  }

  element(element) {
    if (this.inserted) return;
    this.inserted = true;
    const dateHtml = this.publishedDate
      ? `<p style="margin:6px 0 0;color:#475569">تاريخ النشر: <time datetime="${this.publishedDate}">${this.publishedDate}</time></p>`
      : "";
    element.after(
      `
      <section class="seo-author-box" style="margin:18px 0 0;padding:16px;border:1px solid #e5e7eb;border-radius:12px;background:#f8fafc">
        <h2 style="margin:0 0 8px;font-size:1.05rem;line-height:1.8;color:#0f172a">عن الكاتب</h2>
        <p style="margin:0;line-height:2;color:#1f2937">تم إعداد هذا المحتوى بواسطة <a href="${this.author.url}" style="color:#0b57d0">${escapeHtml(this.author.name)}</a> ضمن سياسة تحرير تركز على دقة المواصفات، توافق الأجهزة، والربط الداخلي المباشر مع صفحات المتجر الأساسية.</p>
        ${dateHtml}
      </section>
      `,
      { html: true }
    );
  }
}

function buildStaticSeoPageHtml(kind) {
  const titleMap = {
    about: "عن Saudi Vape | معلومات المتجر والشحن والدعم",
    editorial: "سياسة التحرير | منهجية المحتوى في Saudi Vape",
    author: "فريق تحرير Saudi Vape | خبرة المحتوى والمراجعة",
  };
  const descMap = {
    about: "تعرف على Saudi Vape، نطاق الخدمة داخل السعودية، طريقة العمل، ووسائل الدعم والشراء داخل المتجر.",
    editorial: "سياسة تحرير المحتوى في Saudi Vape: كيف نراجع الأجهزة والنكهات ونكتب المقارنات والصفحات الإرشادية.",
    author: "تعرف على فريق تحرير Saudi Vape المسؤول عن مراجعة صفحات المحتوى والربط الداخلي والمعلومات الفنية.",
  };
  const canonicalMap = {
    about: `https://saudivapes.com${SEO_STATIC_PATHS.about}`,
    editorial: `https://saudivapes.com${SEO_STATIC_PATHS.editorial}`,
    author: `https://saudivapes.com${SEO_STATIC_PATHS.author}`,
  };
  const headingMap = {
    about: "عن Saudi Vape",
    editorial: "سياسة التحرير في Saudi Vape",
    author: "فريق تحرير Saudi Vape",
  };

  const bodyMap = {
    about: `
      <p>Saudi Vape متجر عربي يخدم السوق السعودي في فئات السحبات، أجهزة الشيشة الإلكترونية، نكهات السولت، نكهات الفري بيس، البودات، والكويلات. الهدف من هذه الصفحة هو تقديم مرجع واضح عن المتجر بدل ترك معلومات الكيان مشتتة بين الروابط والصفحات القصيرة.</p>
      <p>نركّز في المتجر على تسهيل الوصول إلى الفئة المناسبة حسب نوع الاستخدام، مع روابط مباشرة للتصنيفات الأساسية مثل <a href="https://saudivapes.com/ar/سحبة-سيجارة-vape-pen/c856338910">سحبات الفيب</a> و<a href="https://saudivapes.com/ar/أجهزة-شيشة-الكترونية/c215470303">أجهزة الشيشة الإلكترونية</a> و<a href="https://saudivapes.com/ar/نكهات-سحبة-سولت/c1589444568">نكهات السولت</a>.</p>
      <h2>معلومات أساسية</h2>
      <ul>
        <li>اسم المتجر: Saudi Vape / فيب السعودية</li>
        <li>الدولة المستهدفة: المملكة العربية السعودية</li>
        <li>البريد الإلكتروني: <a href="mailto:info@saudivapes.com">info@saudivapes.com</a></li>
        <li>واتساب وخدمة العملاء: <a href="tel:+966542906276">+966542906276</a></li>
        <li>بداية النشاط المذكورة في مرجع المشروع: 2021</li>
      </ul>
      <h2>ما الذي يميز المتجر؟</h2>
      <p>نرتب المحتوى والربط الداخلي على أساس نوع الجهاز والتوافق الفعلي، وليس فقط على أساس السعر أو الكلمات العامة. لذلك ستجد صفحات هبوط وصفحات تصنيفات ومحتوى إرشادي مترابط مع المنتجات والتصنيفات الأساسية في المتجر.</p>
    `,
    editorial: `
      <p>نكتب المحتوى في Saudi Vape بهدف مساعدة المستخدم على فهم الفروق بين السحبة الإلكترونية والشيشة الإلكترونية، واختيار النكهة أو الجهاز أو التابع المناسب وفق الاستخدام الفعلي داخل السوق السعودي.</p>
      <h2>كيف نعد المحتوى؟</h2>
      <ul>
        <li>نراجع نوع الجهاز، نمط السحب، التوافق، والفئة المستهدفة قبل صياغة أي صفحة.</li>
        <li>نربط كل مقال أو صفحة هبوط بالتصنيفات والمنتجات الفعلية داخل المتجر بدل الروابط العامة.</li>
        <li>نستخدم مصطلحات المشروع المعتمدة: البودات تعني الخراطيش المتوافقة، والمقارنة المرجعية تكون بين السحبة الإلكترونية والشيشة الإلكترونية.</li>
        <li>نحدّث المحتوى عند تغير سنة المقارنات أو ظهور معلومات أدق تخص الفئات الأساسية.</li>
      </ul>
      <h2>ما الذي لا نفعله؟</h2>
      <ul>
        <li>لا نعتمد قوالب موحدة حرفيًا لكل التصنيفات أو المنتجات.</li>
        <li>لا نضع ربطًا داخليًا مكررًا بلا علاقة بنية الصفحة.</li>
        <li>لا نقدّم إجابات FAQ عامة إذا كانت لا تخدم نية الشراء أو الاستخدام.</li>
      </ul>
    `,
    author: `
      <p>فريق تحرير Saudi Vape مسؤول عن إعداد ومراجعة الصفحات الإرشادية وصفحات الهبوط والمحتوى المرتبط بالمنتجات والتصنيفات داخل المتجر. التركيز التحريري الأساسي هو تبسيط قرار الشراء، توضيح التوافق، ورفع جودة الربط الداخلي بين الصفحات.</p>
      <h2>نطاق العمل التحريري</h2>
      <ul>
        <li>مراجعة مواصفات الأجهزة والبودات والكويلات قبل إدراجها في المقالات والأسئلة الشائعة.</li>
        <li>بناء محتوى تصنيفات مستقل غير مكرر حسب نوع القسم ونية المستخدم.</li>
        <li>صياغة FAQ قصيرة وقابلة للاقتباس في نتائج البحث والأنظمة الذكية.</li>
        <li>إبقاء الروابط الداخلية مرتبطة مباشرة بالتصنيف أو البراند أو المنتج الأنسب.</li>
      </ul>
      <h2>روابط مهمة</h2>
      <ul>
        <li><a href="${SEO_STATIC_PATHS.editorial}">سياسة التحرير</a></li>
        <li><a href="${SEO_STATIC_PATHS.about}">عن المتجر</a></li>
        <li><a href="https://saudivapes.com/ar/blog">المدونة</a></li>
      </ul>
    `,
  };

  const schemaMap = {
    about: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${canonicalMap.about}#webpage`,
      name: headingMap.about,
      url: canonicalMap.about,
      about: { "@id": "https://saudivapes.com/#organization" },
      inLanguage: "ar",
    },
    editorial: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalMap.editorial}#webpage`,
      name: headingMap.editorial,
      url: canonicalMap.editorial,
      inLanguage: "ar",
    },
    author: {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${canonicalMap.author}#webpage`,
      name: headingMap.author,
      url: canonicalMap.author,
      inLanguage: "ar",
      mainEntity: {
        "@type": "Person",
        "@id": `${canonicalMap.author}#person`,
        name: "فريق تحرير Saudi Vape",
        jobTitle: "محرر متخصص في منتجات الفيب",
        worksFor: { "@id": "https://saudivapes.com/#organization" },
      },
    },
  };

  return `<!doctype html>
  <html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${titleMap[kind]}</title>
    <meta name="description" content="${descMap[kind]}">
    <link rel="canonical" href="${canonicalMap[kind]}">
    <meta name="robots" content="index,follow,max-image-preview:large">
    <script type="application/ld+json">${JSON.stringify(schemaMap[kind]).replace(/<\//g, "<\\/")}</script>
  </head>
  <body style="margin:0;font-family:Tahoma,Arial,sans-serif;background:#f8fafc;color:#111827;line-height:2">
    <main style="max-width:860px;margin:0 auto;padding:24px">
      <section style="background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:24px">
        <p style="margin:0 0 10px"><a href="https://saudivapes.com/ar/" style="color:#0b57d0">الرئيسية</a></p>
        <h1 style="margin:0 0 12px;font-size:2rem;line-height:1.6">${headingMap[kind]}</h1>
        ${bodyMap[kind]}
      </section>
    </main>
  </body>
  </html>`;
}

function upsertHomeMetaHtml(html) {
  let out = String(html || "");
  const title = `<title>${escapeHtml(HOME_META.title)}</title>`;
  const desc = `<meta name="description" content="${escapeHtml(HOME_META.description)}">`;
  const keywords = `<meta name="keywords" content="${escapeHtml(HOME_META.keywords)}">`;
  const preconnectCdn = `<link rel="preconnect" href="https://cdn.salla.sa" crossorigin>`;
  const dnsPrefetchCdn = `<link rel="dns-prefetch" href="//cdn.salla.sa">`;
  const ogTitle = `<meta property="og:title" content="${escapeHtml(HOME_META.title)}">`;
  const ogDesc = `<meta property="og:description" content="${escapeHtml(HOME_META.description)}">`;
  const twTitle = `<meta name="twitter:title" content="${escapeHtml(HOME_META.title)}">`;
  const twDesc = `<meta name="twitter:description" content="${escapeHtml(HOME_META.description)}">`;
  const xDefault = `<link rel="alternate" hreflang="x-default" href="https://saudivapes.com/ar">`;

  if (/<title>[\s\S]*?<\/title>/i.test(out)) out = out.replace(/<title>[\s\S]*?<\/title>/i, title);
  else out = out.replace(/<head[^>]*>/i, (m) => `${m}\n${title}`);

  if (/<meta[^>]*name=["']description["'][^>]*>/i.test(out)) out = out.replace(/<meta[^>]*name=["']description["'][^>]*>/i, desc);
  else out = out.replace(/<head[^>]*>/i, (m) => `${m}\n${desc}`);

  if (/<meta[^>]*name=["']keywords["'][^>]*>/i.test(out)) out = out.replace(/<meta[^>]*name=["']keywords["'][^>]*>/i, keywords);
  else out = out.replace(/<head[^>]*>/i, (m) => `${m}\n${keywords}`);

  if (/<meta[^>]*property=["']og:title["'][^>]*>/i.test(out)) out = out.replace(/<meta[^>]*property=["']og:title["'][^>]*>/i, ogTitle);
  else out = out.replace(/<head[^>]*>/i, (m) => `${m}\n${ogTitle}`);

  if (/<meta[^>]*property=["']og:description["'][^>]*>/i.test(out)) out = out.replace(/<meta[^>]*property=["']og:description["'][^>]*>/i, ogDesc);
  else out = out.replace(/<head[^>]*>/i, (m) => `${m}\n${ogDesc}`);

  if (/<meta[^>]*name=["']twitter:title["'][^>]*>/i.test(out)) out = out.replace(/<meta[^>]*name=["']twitter:title["'][^>]*>/i, twTitle);
  else out = out.replace(/<head[^>]*>/i, (m) => `${m}\n${twTitle}`);

  if (/<meta[^>]*name=["']twitter:description["'][^>]*>/i.test(out)) out = out.replace(/<meta[^>]*name=["']twitter:description["'][^>]*>/i, twDesc);
  else out = out.replace(/<head[^>]*>/i, (m) => `${m}\n${twDesc}`);

  if (!/<link[^>]*rel=["']preconnect["'][^>]*href=["']https:\/\/cdn\.salla\.sa["'][^>]*>/i.test(out)) {
    out = out.replace(/<head[^>]*>/i, (m) => `${m}\n${preconnectCdn}`);
  }
  if (!/<link[^>]*rel=["']dns-prefetch["'][^>]*href=["']\/\/cdn\.salla\.sa["'][^>]*>/i.test(out)) {
    out = out.replace(/<head[^>]*>/i, (m) => `${m}\n${dnsPrefetchCdn}`);
  }
  if (!/<link[^>]*hreflang=["']x-default["'][^>]*>/i.test(out)) {
    out = out.replace(/<head[^>]*>/i, (m) => `${m}\n${xDefault}`);
  }

  // Safety: if testimonials heading is server-rendered as H1, demote to H2.
  out = out.replace(
    /<h1([^>]*)>\s*آراء العملاء\s*<\/h1>/gi,
    '<h2$1>آراء العملاء</h2>'
  );

  return out;
}

class HomeReviewsHeadingFixInjector {
  element(element) {
    element.append(
      `
      <script id="home-reviews-h1-fix">
      (function () {
        function demote() {
          var h1 = document.querySelector('section.s-block--testimonials h1');
          if (!h1) return;
          var h2 = document.createElement('h2');
          for (var i = 0; i < h1.attributes.length; i++) {
            var a = h1.attributes[i];
            h2.setAttribute(a.name, a.value);
          }
          h2.innerHTML = h1.innerHTML;
          h1.replaceWith(h2);
        }
        demote();
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", demote, { once: true });
        }
        setTimeout(demote, 500);
        setTimeout(demote, 1800);
      })();
      </script>
      `,
      { html: true }
    );
  }
}

class CategoryIntroInjector {
  constructor(plan) {
    this.plan = plan;
  }

  element(element) {
    const related = (this.plan.related || []).filter(Boolean).slice(0, 4).join("، ");
    const relatedHtml = related
      ? `<p style="margin:0;line-height:2;color:#1f2937">روابط داخلية مرتبطة بهذا التصنيف: ${related}.</p>`
      : "";

    element.prepend(
      `
      <section class="seo-category-intro" aria-label="وصف تصنيف احترافي" style="margin:16px 0 20px;padding:18px 20px;border:1px solid #e5e7eb;border-radius:12px;background:#f8fafc">
        <h2 style="margin:0 0 10px;font-size:1.2rem;line-height:1.7;color:#0f172a">${escapeHtml(this.plan.title)}</h2>
        <p style="margin:0 0 10px;line-height:2;color:#1f2937">${this.plan.p1}</p>
        <p style="margin:0 0 10px;line-height:2;color:#1f2937">${this.plan.p2}</p>
        ${relatedHtml}
      </section>
      `,
      { html: true }
    );
  }
}

class CategoryFaqInjector {
  constructor(plan) {
    this.plan = plan;
  }

  element(element) {
    const qas = this.plan.items
      .slice(0, 6)
      .map(
        (item) => `
        <h3 style="margin:0 0 6px;font-size:1rem;line-height:1.8;color:#111827">${escapeHtml(item.q)}</h3>
        <p style="margin:0 0 12px;line-height:2;color:#1f2937">${item.a}</p>
      `
      )
      .join("");

    element.before(
      `
      <section class="seo-category-faq container" aria-label="الأسئلة الشائعة للتصنيف" style="margin:10px auto 24px;padding:18px 20px;border:1px solid #e5e7eb;border-radius:12px;background:#ffffff">
        <h2 style="margin:0 0 14px;font-size:1.2rem;line-height:1.7;color:#0f172a">${escapeHtml(this.plan.title)}</h2>
        ${qas}
      </section>
      `,
      { html: true }
    );
  }
}

class ProductSpecsAndFaqInjector {
  constructor(html) {
    this.html = html;
    this.inserted = false;
  }

  element(element) {
    if (this.inserted) return;
    this.inserted = true;
    element.after(this.html, { html: true });
  }
}

class ProductFaqInjector {
  constructor(plan) {
    this.plan = plan;
    this.inserted = false;
  }

  element(element) {
    if (this.inserted) return;
    this.inserted = true;

    const qas = this.plan.items
      .slice(0, 6)
      .map(
        (item) => `
        <h3 style="margin:0 0 6px;font-size:1rem;line-height:1.8;color:#111827">${escapeHtml(item.q)}</h3>
        <p style="margin:0 0 12px;line-height:2;color:#1f2937">${item.a}</p>
      `
      )
      .join("");

    element.before(
      `
      <section class="seo-product-faq container" aria-label="الأسئلة الشائعة للمنتج" style="margin:10px auto 24px;padding:18px 20px;border:1px solid #e5e7eb;border-radius:12px;background:#ffffff">
        <h2 style="margin:0 0 14px;font-size:1.2rem;line-height:1.7;color:#0f172a">${escapeHtml(this.plan.title)}</h2>
        ${qas}
      </section>
      `,
      { html: true }
    );
  }
}

class HeadSchemasInjector {
  constructor(scripts) {
    this.scripts = scripts || [];
  }

  element(element) {
    const html = this.scripts
      .filter(Boolean)
      .map(
        (item) =>
          `<script id="${item.id}" type="application/ld+json">${item.json}</script>`
      )
      .join("");

    if (!html) return;
    element.append(`\n${html}\n`, { html: true });
  }
}

function buildYearCategoryRedirect(url, path) {
  if (!isArabicCategoryPath(path)) return null;
  const parts = path.split("/").filter(Boolean);
  const slug = parts[parts.length - 2] || "";
  if (!slug.includes("2025")) return null;
  const newSlug = slug.replaceAll("2025", "2026");
  if (newSlug === slug) return null;
  const redirected = new URL(url.toString());
  parts[parts.length - 2] = newSlug;
  redirected.pathname = `/${parts.join("/")}`;
  return redirected.toString();
}

function hashText(text) {
  let h = 0;
  const s = String(text || "");
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

function pickBySeed(seed, items) {
  if (!items?.length) return "";
  return items[Math.abs(seed) % items.length];
}

function categoryTypeV2(name) {
  const n = String(name || "").toLowerCase();
  if (n.includes("بودات") || n.includes("pods")) return "pods";
  if (n.includes("نكهات")) return "flavors";
  if (n.includes("شيشة")) return "shisha";
  if (n.includes("سحبة") || n.includes("جاهزة") || n.includes("vape pen")) return "ecig";
  if (n.includes("كويلات")) return "coils";
  if (n.includes("بطاريات")) return "batteries";
  if (n.includes("تانكات")) return "tanks";
  if (n.includes("عروض")) return "offers";
  if (n.includes("نيكوتين")) return "nicotine";
  return "generic";
}

function introPlanV2(categoryId, categoryName) {
  const seed = hashText(`${categoryId}-${categoryName}`);
  const type = categoryTypeV2(categoryName);
  const relatedByType = {
    ecig: [categoryLink("c2053520858"), categoryLink("c215470303"), categoryLink("c1589444568")],
    shisha: [categoryLink("c215470303"), categoryLink("c681123545"), categoryLink("c1945541157")],
    pods: [categoryLink("c640187172"), categoryLink("c856338910"), categoryLink("c2053520858")],
    flavors: [categoryLink("c1589444568"), categoryLink("c681123545"), categoryLink("c1770383136")],
    coils: [categoryLink("c1945541157"), categoryLink("c1988326833"), categoryLink("c1220671877")],
    batteries: [categoryLink("c1220671877"), categoryLink("c1945541157"), categoryLink("c215470303")],
    tanks: [categoryLink("c1988326833"), categoryLink("c1945541157"), categoryLink("c215470303")],
    offers: [categoryLink("c390558684"), categoryLink("c2128927364"), categoryLink("c856338910")],
    generic: [categoryLink("c856338910"), categoryLink("c215470303"), categoryLink("c681123545")],
  };

  const openers = [
    `تصفح ${categoryName} مع خيارات أصلية مرتبة لتسهيل المقارنة واتخاذ قرار شراء أسرع.`,
    `هذا القسم يجمع منتجات ${categoryName} وفق احتياج المستخدم السعودي من حيث الأداء، الثبات، والقيمة.`,
    `في تصنيف ${categoryName} ستجد خيارات متعددة تساعدك على الاختيار حسب الاستخدام اليومي وليس السعر فقط.`,
  ];

  let p2 = pickBySeed(seed + 1, [
    "ركز قبل الطلب على التوافق مع الجهاز، نوع السحب، وتركيز النيكوتين المناسب لروتينك اليومي.",
    "الاختيار الذكي يبدأ بمطابقة المواصفات مع أسلوب استخدامك ثم المقارنة بين الخيارات الأقرب لاحتياجك.",
    "أفضل نتيجة تأتي من اختيار منتج متوافق تقنيًا مع جهازك ونمطك، ثم الانتقال التدريجي حسب التجربة.",
  ]);

  if (type === "ecig") {
    p2 =
      "السحبة الإلكترونية تناسب من يريد سحب MTL وضربة نيكوتين أسرع، بينما المقارنة الصحيحة للتطوير تكون مع الشيشة الإلكترونية وليس مع البودات.";
  }
  if (type === "pods") {
    p2 =
      "قسم البودات هنا مخصص للخراطيش التي تركب على الأجهزة المتوافقة، وليس قسم أجهزة بديلة مستقلة.";
  }

  return {
    title: `دليل شراء ${categoryName} في 2026`,
    p1: pickBySeed(seed, openers),
    p2,
    related: (relatedByType[type] || relatedByType.generic).filter(Boolean),
  };
}

function faqPlanV2(categoryId, categoryName) {
  const type = categoryTypeV2(categoryName);
  const title = `الأسئلة الشائعة حول ${categoryName}`;

  if (type === "ecig") {
    return {
      title,
      items: [
        { q: "ما أفضل سحبة إلكترونية للمبتدئين؟", a: `الأفضل جهاز سهل الاستخدام بسحب ضيق وثبات نكهة. غالبًا البدء من ${categoryLink("c2053520858")} يكون عمليًا للمستخدم الجديد.` },
        { q: "ما الفرق بين السحبة الإلكترونية والشيشة الإلكترونية؟", a: `السحبة نيكوتينها أعلى وبخارها أقل غالبًا، بينما الشيشة الإلكترونية تعطي بخارًا أكثف ونيكوتينًا أخف. قارن الخيارات في ${categoryLink("c215470303")}.` },
        { q: "كم يدوم جهاز السحبة عادة؟", a: "يعتمد على عدد السحبات الفعلي وطريقة الاستخدام اليومية. كلما زاد الاستخدام المكثف قلّ العمر التشغيلي." },
        { q: "هل هذا القسم يشمل بودات تركيب؟", a: `لا، البودات/الخراطيش موجودة بشكل مستقل في ${categoryLink("c640187172")} وتُختار حسب توافق الموديل.` },
      ],
    };
  }

  if (type === "pods") {
    return {
      title,
      items: [
        { q: "هل البودات هنا أجهزة كاملة؟", a: "لا، هذا القسم للبودات (الخراطيش) التي تركب على أجهزة متوافقة، وليس لأجهزة بود سيستم مستقلة." },
        { q: "كيف أتأكد من توافق البود مع جهازي؟", a: "طابق اسم الموديل والإصدار بدقة قبل الشراء، لأن اختلاف الإصدار قد يسبب عدم توافق أو تسريب." },
        { q: "متى يجب تغيير البود؟", a: "عند ضعف الطعم، ظهور طعم احتراق، أو تسريب متكرر. هذه إشارات واضحة لانتهاء العمر التشغيلي للبود." },
        { q: "ما الأفضل: بود أصلي أم تجاري؟", a: "الأصلي غالبًا أكثر ثباتًا في الأداء والطعم وأقل مشاكل على المدى الطويل." },
      ],
    };
  }

  if (type === "shisha") {
    return {
      title,
      items: [
        { q: "ما أفضل جهاز شيشة إلكترونية للمبتدئ؟", a: "اختر جهازًا متوسط القدرة مع كويلات متوفرة وبطارية مستقرة لتبدأ تجربة متوازنة بدون تعقيد." },
        { q: "ما الفرق بينها وبين السحبة الإلكترونية؟", a: `الشيشة الإلكترونية تركز على بخار أكثف ونيكوتين أقل غالبًا، بينما السحبة للإشباع الأسرع. راجع ${categoryLink("c856338910")} للمقارنة العملية.` },
        { q: "هل أستخدم سولت أم فري بيس مع الشيشة الإلكترونية؟", a: "في الأجهزة الأعلى قدرة يُفضل غالبًا فري بيس منخفض. استخدام سولت عالي في جهاز قوي قد يسبب انزعاجًا." },
        { q: "ما أهم الملحقات التي أحتاجها مع الجهاز؟", a: `ابدأ بتأمين الكويلات والبطاريات المتوافقة من ${categoryLink("c1945541157")} و${categoryLink("c1220671877")}.` },
      ],
    };
  }

  return {
    title,
    items: [
      { q: `كيف أختار المنتج الأنسب داخل ${categoryName}؟`, a: "حدد نوع جهازك أولًا، ثم مستوى النيكوتين أو السعة المطلوبة، وبعدها قارن الطعم والتكلفة الشهرية." },
      { q: "هل المواصفات أهم من السعر؟", a: "نعم، لأن التوافق والأداء يحددان جودة التجربة. السعر وحده لا يكفي لاتخاذ قرار صحيح." },
      { q: "ما أفضل خطوة قبل الطلب؟", a: "راجع توافق المنتج مع جهازك، وسياسة الضمان/الاستبدال، ثم اختر الخيار الأقرب لروتينك اليومي." },
    ],
  };
}


// ── Brand page: SEO intro ────────────────────────────────────────────

function extractBrandNameFromUrl(path) {
  // URL: /ar/{slug}/brand-{id}
  const m = path.match(/^\/ar\/(.+)\/brand-\d+$/);
  if (!m) return null;
  const slug = decodeURIComponent(m[1]);
  return slug.replace(/[-_]/g, ' ');
}

function extractBrandSlug(path) {
  const m = path.match(/^\/ar\/(.+)\/brand-\d+$/);
  return m ? m[1] : null;
}

// ── Brand content map: unique SEO intro + FAQ per brand ────────────
const BRAND_CONTENT = {
  "جيك-فيب-geekvape": {
    intro: {
      title: "منتجات جيك فيب Geekvape الأصلية - متانة وأداء استثنائي",
      p1: "جيك فيب (Geekvape) علامة تجارية صينية رائدة في عالم السحبات الإلكترونية، اشتهرت بمنتجاتها المتينة والمقاومة للظروف القاسية. من أشهر منتجاتها سلسلة Aegis الشهيرة المقاومة للماء والصدمات، وسلسلة Wenax المدمجة سهلة الاستخدام. تجمع منتجات جيك فيب بين التصميم العصري والمواد عالية الجودة مثل الجلد الطبيعي والزنك合金، مما يجعلها خياراً موثوقاً للمبتدئين والمحترفين على حد سواء.",
      p2: "في متجرنا ستجد تشكيلة واسعة من منتجات جيك فيب الأصلية تشمل أجهزة Aegis Legend وAegis Boost وWenax Q الجديد. جميع المنتجات مرفقة بضمان المصنع وقطع غيار متوفرة. ننصح المبتدئين باختيار Wenax Q لبساطته وجودة السحبة، بينما المحترفين سيستمتعون بقوة ومتانة سلسلة Aegis مع خيارات التحكم المتقدمة في القدرة والهواء."
    },
    faq: {
      title: "الأسئلة الشائعة حول جيك فيب Geekvape",
      items: [
        { q: "ما الفرق بين سلسلة Aegis و Wenax من Geekvape؟", a: "سلسلة Aegis مصممة للمحترفين وتتميز بالمتانة الفائقة، مقاومة الماء والصدمات، وقدرة عالية تصل إلى 200 واط. أما سلسلة Wenax فهي مدمجة وخفيفة، مصممة للمبتدئين ومن يفضلون السحبة الضيقة (MTL) بتجربة بسيطة بدون إعدادات معقدة." },
        { q: "هل أجهزة Geekvape مقاومة للماء حقاً؟", a: "نعم، أجهزة سلسلة Aegis حاصلة على شهادة IP67 أو IP68 لمقاومة الماء والغبار. يمكن للجهاز تحمل السقوط في الماء لعمق معين ولمدة محدودة. لكن ننصح بتجفيف الجهاز فوراً في حال تعرضه للماء خصوصاً منفذ الشحن." },
        { q: "ما أفضل جهاز Geekvape للمبتدئين؟", a: "ننصح المبتدئين بجهاز Wenax Q أو Wenax M1. هذه الأجهزة تتميز بحجمها الصغير، سهولة الاستخدام مع خاصية الشد للتشغيل (Draw Activation)، وعمر بطارية جيد. كما أن الكويلات متوفرة وبأسعار مناسبة." },
        { q: "هل تتوفر كويلات Geekvape في السعودية؟", a: "نعم، نوفر تشكيلة كاملة من كويلات Geekvape الأصلية تشمل كويلات B Series لسلسلة Aegis Boost وP Series لـ Aegis Legend وWenax Q Coils. ننصح بشراء الكويلات الأصلية فقط لضمان جودة النكهة وعمر الكويل." },
        { q: "ما الفرق بين Wenax Q و Wenax Q Pro؟", a: "Wenax Q Pro يأتي بشاشة أكبر تعرض معلومات أكثر مثل عمر الكويل ومدة السحبة، إضافة إلى خيارين لسحب الهواء (ضيق ومتوسط). بينما Wenax Q أبسط بتصميم كلاسيكي وثلاث مستويات قدرة فقط. الأداء متقارب جداً والاختيار يعتمد على تفضيلك للشاشة الإضافية." },
      ]
    }
  },
  "سموك-smok": {
    intro: {
      title: "منتجات سموك SMOK الأصلية - تنوع وابتكار في عالم الفيب",
      p1: "سموك (SMOK) من أكبر وأشهر العلامات التجارية العالمية في صناعة السحبات الإلكترونية، مقرها في الصين وتصدر منتجاتها لأكثر من 50 دولة. تشتهر سموك بالابتكار المستمر وتقديم تشكيلة واسعة تناسب جميع المستويات من المبتدئين إلى المحترفين. من أبرز منتجاتها سلسلة Nord وNovo المدمجة، وسلسلة RPM القابلة للتخصيص، وأجهزة Alien وMag الشهيرة.",
      p2: "تتميز منتجات سموك بتقنيات متقدمة مثل شاشات OLED الملونة، أنظمة التحكم في تدفق الهواء، وكويلات Mesh التي تنتج نكهة غنية وبخار كثيف. في متجرنا نوفر جميع منتجات سموك الأصلية مع الكويلات وقطع الغيار والتوصيل السريع لجميع مدن المملكة."
    },
    faq: {
      title: "الأسئلة الشائعة حول سموك SMOK",
      items: [
        { q: "ما الفرق بين سلسلة Nord و Novo من SMOK؟", a: "سلسلة Nord أكبر حجماً ببطارية أعلى (حتى 2000mAh) وتدعم كويلات RPM وRPM2، مما يعطي خيارات أكثر للنكهات والسحبات. سلسلة Novo أصغر وأخف وزناً مناسبة للتنقل اليومي مع بطارية تصل إلى 800mAh وتصميم أنيق بدون أزرار مع الشد للتشغيل." },
        { q: "ما أفضل جهاز SMOK للمبتدئين؟", a: "ننصح المبتدئين بـ SMOK Novo 4 أو SMOK Nord 5. Novo 4 صغير وسهل الاستخدام مع خاصية الشد للتشغيل وشاشة ذكية. Nord 5 يعطي خيارات أكثر مع إمكانية التحكم بالقدرة وتدفق الهواء مع بقاءه سهل الاستخدام." },
        { q: "هل تتوفر كويلات SMOK بجميع الأنواع؟", a: "نعم، نوفر جميع أنواع كويلات SMOK الأصلية: RPM Coils، RPM2 Coils، وNord Coils. كل نوع يأتي بمقاومات مختلفة تناسب MTL (سحبة ضيقة) وDTL (سحبة واسعة). ننصح باختيار الكويل المناسب لنوع النكهة المستخدمة." },
        { q: "ماذا عن بطارية أجهزة SMOK؟", a: "بطاريات SMOK تتفاوت حسب الموديل من 800mAh في الأجهزة الصغيرة مثل Novo إلى 2000mAh+ في الأجهزة الأكبر مثل Nord. معظم الأجهزة الحديثة تدعم الشحن السريع عبر USB-C خلال 60-90 دقيقة. الأجهزة الكبيرة مثل Alien تستخدم بطاريات خارجية 18650 أو 21700." },
      ]
    }
  },
  "فوبو-voopoo": {
    intro: {
      title: "منتجات فوبو Voopoo الأصلية - تقنية GENE والفن الإيطالي",
      p1: "فوبو (Voopoo) علامة تجارية تجمع بين التصميم الإيطالي الأنيق والتقنية الصينية المتطورة. تشتهر بشرائح GENE الذكية التي تتحكم بدقة في القدرة واستجابة السحبة. من أشهر منتجاتها سلسلة Drag الأيقونية بتصميمها الجلدي الفاخر، وسلسلة Vinci المدمجة، وسلسلة Argus المقاومة للصدمات.",
      p2: "تتميز أجهزة فوبو بسرعة الاستجابة للشد (0.025 ثانية) بفضل شريحة GENE، ودعمها الواسع لكويلات PnP وTPP التي تغطي جميع أنماط السحوب. في متجرنا نوفر جميع منتجات فوبو الأصلية مع كامل الكويلات وقطع الغيار بأسعار تنافسية وتوصيل لجميع أنحاء المملكة."
    },
    faq: {
      title: "الأسئلة الشائعة حول فوبو Voopoo",
      items: [
        { q: "ما هي شريحة GENE في أجهزة Voopoo؟", a: "شريحة GENE هي معالج ذكي طورته Voopoo خصيصاً لأجهزتها. توفر سرعة استثنائية في الاستجابة للشد (0.025 ثانية)، وتحكم دقيق في القدرة، وحماية متعددة من ماس كهربائي وارتفاع الحرارة. أحدث إصدار GENE.FAN 3.0 يدعم الشحن السريع ويطيل عمر البطارية." },
        { q: "الفرق بين Drag و Vinci من Voopoo؟", a: "سلسلة Drag فئة راقية بهيكل معدني جلدي وقدرة عالية تصل إلى 177 واط، مناسبة للمحترفين. سلسلة Vinci متوسطة الحجم بتصميم عملي وقدرة تصل إلى 40 واط، مناسبة للمبتدئين والمتوسطين. كلاهما ممتاز لكن الاختيار يعتمد على احتياجك للقدرة والحجم." },
        { q: "ما الفرق بين كويلات PnP و TPP؟", a: "كويلات PnP (Plug and Play) أصغر حجماً ومناسبة للأجهزة المدمجة مثل Vinci وDrag Nano بقدرة 15-40 واط. كويلات TPP (Triple Porosity) أكبر بتقنية المسامية الثلاثية لإنتاج نكهة أقوى وبخار أكثر بقدرة 40-80 واط. اختر PnP للسحبة الضيقة وTPP للسحبة الواسعة." },
        { q: "ما أفضل جهاز Voopoo للمبتدئين؟", a: "ننصح المبتدئين بـ Voopoo Drag Nano 2 أو Argus Pod. الأجهزة صغيرة الحجم، تعمل بالشد التلقائي، وكويلاتها متوفرة بأسعار معقولة. Drag Nano 2 يأتي بتصميم أنيق وغطاء دوار يحمي البود، بينما Argus Pod مقاوم للصدمات والغبار." },
      ]
    }
  },
  "يو-ويل-uwell": {
    intro: {
      title: "منتجات يو ويل Uwell الأصلية - ريادة في عالم النكهات",
      p1: "يو ويل (Uwell) علامة تجارية صينية مرموقة حصلت على شهرة عالمية بفضل سلسلة Caliburn التي أحدثت ثورة في سوق السحبات المدمجة. تشتهر Uwell بتقنية الكويلات المخروطية (Pro-FOCS) التي تنتج أنقى النكهات وأغناها. من أبرز منتجاتها Caliburn G وCaliburn K وValyrian وCrown.",
      p2: "ما يميز Uwell هو التركيز على جودة النكهة قبل كل شيء. تقنية الكويلات المخروطية الحاصلة على براءة اختراع توفر مساحة تسخين أكبر بنسبة 40% لتجربة نكهة استثنائية. في متجرنا تجد جميع منتجات يو ويل الأصلية والكويلات وقطع الغيار مع ضمان الجودة والتوصيل السريع."
    },
    faq: {
      title: "الأسئلة الشائعة حول يو ويل Uwell",
      items: [
        { q: "لماذا سلسلة Caliburn من Uwell مشهورة بهذا الشكل؟", a: "سلسلة Caliburn اشتهرت بفضل حجمها الصغير جداً، عمر البطارية الجيد (520-750mAh)، جودة النكهة الاستثنائية بفضل كويلات Pro-FOCS المخروطية، وعمر الكويل الطويل الذي قد يستمر لأسابيع. إضافة إلى سهولة الاستخدام مع الشد التلقائي والتعبئة الجانبية." },
        { q: "ما الفرق بين Caliburn G3 و GK3؟", a: "Caliburn G3 يأتي بتصميم أنحف مع شاشة عرض، قدرة متغيرة 5-25 واط، وبود 3مل. GK3 (أو Koko G3) أقصر بعرض أوسع مع تصميم كروي، قدرة 5-30 واط، وشاشة أكبر. G3 يناسب من يفضل الجهاز الطويل الرفيع، وGK3 يناسب من يفضل الجهاز القصير العملي." },
        { q: "هل كويلات Uwell متوفرة في السعودية؟", a: "نعم، نوفر جميع كويلات Uwell الأصلية: كويلات Caliburn G (0.8 و1.0 أوم)، كويلات Caliburn G2 (0.8 و1.2 أوم)، وكويلات Valyrian وCrown. نوصي دائماً بشراء الكويلات الأصلية لتجنب تسريب النكهة وضعف الأداء." },
        { q: "هل أجهزة Uwell مناسبة للمبتدئين؟", a: "بالتأكيد، Caliburn G3 وCaliburn GK3 هما خياران ممتازان للمبتدئين. صغيران الحجم، سهلان التعبئة، يعملان بالشد التلقائي، ومتوفران بألوان متعددة. كما أن الكويلات تدوم طويلاً مما يقلل تكاليف الاستخدام الشهرية." },
      ]
    }
  },
  "فابريسو-vaporesso": {
    intro: {
      title: "منتجات فابريسو Vaporesso الأصلية - إبداع في التصميم والأداء",
      p1: "فابريسو (Vaporesso) علامة تجارية سويسرية-صينية تجمع بين الدقة السويسرية والابتكار في صناعة السحبات الإلكترونية. تشتهر بتقنية AXON المتطورة التي توفر تسخيناً ذكياً لكويلاتها. من أشهر منتجاتها سلسلة XROS المدمجة بشهرتها الواسعة، Luxe الفاخرة، وGen ذات الأداء القوي.",
      p2: "تتميز أجهزة فابريسو بتقنية التدفق الهوائي الدوار (Adjustable Airflow) ونظام التعبئة الجانبية السهل. كويلات GTX وGTi توفر نكهة غنية وعمر طويل. في متجرنا تجد جميع منتجات فابريسو الأصلية مع كويلاتها وملحقاتها بأفضل الأسعار."
    },
    faq: {
      title: "الأسئلة الشائعة حول فابريسو Vaporesso",
      items: [
        { q: "ما هي تقنية AXON في أجهزة Vaporesso؟", a: "تقنية AXON هي معالج ذكي يتحكم بالتسخين بدقة فائقة. توفر 6 أنظمة حماية، سرعة استجابة 0.001 ثانية، ووضع Pulse Mode الذي يعطي ثباتاً في القدرة طول السحبة. AXON تكتشف نوع الكويل وتضبط القدرة تلقائياً." },
        { q: "الفرق بين XROS و Luxe X من Vaporesso؟", a: "XROS سلسلة مدمجة بسيطة بحجم صغير جداً وبطارية 800-1000mAh، مناسبة للسحبة الضيقة (MTL) بكويلات 0.8 و1.2 أوم. Luxe X أكبر بقدرة 40 واط، بطارية 1500mAh، تدعم السحبة الضيقة والواسعة بكويلات 0.4 و0.8 أوم مع شاشة عرض." },
        { q: "كيف أختار كويل GTX المناسب؟", a: "كويلات GTX متعددة المقاومات: 0.6 أوم (25-35 واط) للسحبة الواسعة، 0.8 أوم (20-28 واط) للسحبة المتوسطة، 1.0 أوم (12-16 واط) للسحبة الضيقة، 1.2 أوم (10-14 واط) للسحبة الضيقة جداً. اختر المقاومة حسب أسلوب سحبتك المفضل." },
        { q: "هل أجهزة Vaporesso عليها ضمان؟", a: "جميع أجهزة Vaporesso الأصلية من متجرنا تأتي بضمان المصنع لمدة 6 أشهر ضد عيوب التصنيع. الضمان لا يشمل الكويلات والبودات والبطاريات الداخلية. ننصح بالتسجيل في موقع Vaporesso لتفعيل الضمان الإضافي." },
      ]
    }
  },
  "الف-بار-elf-bar": {
    intro: {
      title: "منتجات الف بار Elf Bar الأصلية - أفضل السحبات الجاهزة",
      p1: "الف بار (Elf Bar) علامة تجارية صينية أصبحت الأولى عالمياً في سوق السحبات الجاهزة (Disposable Vapes). تشتهر بتصميمها الصغير الأنيق، نكهاتها المتنوعة بجودة عالية، وعمرها الطويل مقارنة بالسحبات الجاهزة الأخرى. من أشهر منتجاتها Elf Bar 600 وElf Bar 1500 وElf Bar BC5000.",
      p2: "توفر Elf Bar تجربة خالية من التعقيد - افتح العلبة واستمتع بالسحبة بدون تعبئة أو تغيير كويل. نكهاتها تشمل الفواكه الاستوائية والحلويات والمنثول بتركيبة نيكوتين سموث. في متجرنا نوفر تشكيلة كاملة من Elf Bar الأصلية بضمان الجودة."
    },
    faq: {
      title: "الأسئلة الشائعة حول الف بار Elf Bar",
      items: [
        { q: "كم سحبة في Elf Bar؟", a: "يختلف عدد السحبات حسب الموديل: Elf Bar 600 يوفر حوالي 600 سحبة، Elf Bar 1500 يوفر حوالي 1500 سحبة، Elf Bar BC5000 يوفر حوالي 5000 سحبة. الأرقام تقريبية وتعتمد على طول السحبة. النكهة تبدأ بالتلاشي قبل نفاد السائل تماماً." },
        { q: "ما هي نكهات Elf Bar الأكثر طلباً؟", a: "من أشهر النكهات: Elf Bar Blue Razz Lemonade (توت أزرق وليمون)، Strawberry Mango (فراولة مانجو)، Watermelon Ice (بطيخ مثلج)، Kiwi Passionfruit Guava (كيوي جوافة باشن فروت). جميع النكهات متوفرة في متجرنا." },
        { q: "هل Elf Bar يحتوي على نيكوتين؟", a: "نعم، جميع سحبات Elf Bar الجاهزة تحتوي على نيكوتين بنسبة 2% أو 5% (20 أو 50 ملجم). تستخدم نيكوتين سولت لممتصاص أسرع وسحبة أ smoot. هذا المنتج مخصص للمدخنين البالغين فقط." },
        { q: "هل يمكن إعادة شحن Elf Bar؟", a: "موديلات Elf Bar 600 و1500 مصممة للاستخدام لمرة واحدة فقط ولا يمكن إعادة شحنها أو تعبئتها. موديل BC5000 يأتي ببطارية قابلة للشحن عبر USB-C لضمان استخدام كامل السائل قبل التخلص منها." },
      ]
    }
  },
  "اير-بار-air-bar": {
    intro: {
      title: "منتجات اير بار Air Bar الأصلية - سحبات جاهزة بنكهة مميزة",
      p1: "اير بار (Air Bar) علامة تجارية أمريكية متخصصة في السحبات الإلكترونية الجاهزة (Disposables)، تتميز بنكهاتها الفريدة وتصميمها الصغير العصري. أصبحت من العلامات المفضلة لدى عشاق الفيب بفضل جودة النكهة الثابتة وعمر البطارية الجيد.",
      p2: "تقدم Air Bar تشكيلة واسعة من النكهات المبتكرة مثل نكهات الفواكه الاستوائية والحلويات المثلجة. جميع منتجات Air Bar أصلية ومضمونة من متجرنا مع التوصيل السريع لجميع مناطق المملكة."
    },
    faq: {
      title: "الأسئلة الشائعة حول اير بار Air Bar",
      items: [
        { q: "كم عدد سحبات Air Bar؟", a: "يختلف حسب الموديل: Air Bar Box يوفر حوالي 800 سحبة، Air Bar Max حوالي 2000 سحبة، Air Bar Lux حوالي 2500 سحبة. العدد تقريبي ويعتمد على طول السحبة وعمقها." },
        { q: "ما أفضل نكهات Air Bar؟", a: "من النكهات الأكثر طلباً: Watermelon Ice (بطيخ مثلج)، Blueberry Ice (توت أزرق مثلج)، Mixed Berry (توت مشكل)، Lush Ice (بطيخ وفراولة مثلجة). جميعها متوفرة لديك." },
        { q: "هل Air Bar يستخدم نيكوتين سولت؟", a: "نعم، جميع منتجات Air Bar تستخدم نيكوتين سولت بمستوى 5% (50 ملجم) لممتصاص سريع وإشباع أعلى. مناسبة للمدخنين الذين يبحثون عن بديل قوي." },
      ]
    }
  },
  "نكهات-بازوكا-bazooka": {
    intro: {
      title: "نكهات بازوكا Bazooka الأصلية - نكهات فيب شهية ومتنوعة",
      p1: "بازوكا (Bazooka) علامة تجارية متخصصة في نكهات الفيب الإلكترونية، تشتهر بنكهاتها الحلوة والمستوحاة من الحلويات الشهيرة. تقدم بازوكا تشكيلة واسعة من النكهات التي تحاكي طعم العلكة والحلوى الصلبة والفواكه المسكرة، مما يجعلها خياراً ممتازاً لعشاق النكهات الحلوة.",
      p2: "تتميز نكهات بازوكا بجودة الثبات والنكهة الغنية التي تدوم طويلاً دون أن تترك طعماً صناعياً. تناسب السحبات الضيقة (MTL) والواسعة (DTL) حسب نوع الكويل المستخدم. متوفرة في متجرنا بتركيزات نيكوتين مختلفة."
    },
    faq: {
      title: "الأسئلة الشائعة حول نكهات بازوكا Bazooka",
      items: [
        { q: "ما هي نكهات Bazooka الأكثر شهرة؟", a: "أشهر نكهات بازوكا: Bazooka Strawberry (فراولة)، Sour Strawberry (فراولة حامضة)، Blue Raspberry (توت أزرق)، Watermelon (بطيخ). النكهات مستوحاة من طعم العلكة الكلاسيكية بنكهة فواكه منعشة." },
        { q: "هل نكهات Bazooka مناسبة للسحبة الضيقة MTL؟", a: "نعم، نكهات بازوكا مناسبة جداً للسحبة الضيقة MTL بكويلات 0.8-1.2 أوم، كما أنها مناسبة للسحبة الواسعة DTL بكويلات 0.2-0.6 أوم. اختر الكويل المناسب حسب تفضيلك." },
        { q: "هل طعم نكهات Bazooka يشبه طعم العلكة الحقيقية؟", a: "نعم، تم تصميم نكهات بازوكا خصيصاً لمحاكاة طعم علكة Bazooka الكلاسيكية مع لمسة فواكه منعشة. المزيج بين الحلاوة والحموضة الخفيفة يعطي تجربة فريدة وقريبة جداً من الطعم الأصلي." },
      ]
    }
  },
  "نيكيد-naked-100": {
    intro: {
      title: "نكهات نيكيد Naked 100 الأصلية - نقاء المذاق الطبيعي",
      p1: "نيكيد 100 (Naked 100) علامة تجارية أمريكية راقية في عالم نكهات الفيب، تشتهر بنكهاتها الطبيعية النقية التي تلتقط جوهر الفواكه الطازجة والمشروبات المنعشة. تعتمد على مكونات عالية الجودة بدون نكهات صناعية ثقيلة، مما يوفر تجربة فيب نقية ونظيفة.",
      p2: "من أشهر سلاسل Naked 100: سلسلة الفواكه (Very Cool, Lava Flow, Hawaiian POG)، وسلسلة المشروبات (Green Blast, Really Berry)، وسلسلة التبغ (Cuban Tobacco, American Patriots). جميع النكهات متوفرة في متجرنا بتركيزات نيكوتين متعددة."
    },
    faq: {
      title: "الأسئلة الشائعة حول نكهات Naked 100",
      items: [
        { q: "ما أفضل نكهات Naked 100؟", a: "من الأكثر مبيعاً: Lava Flow (أناناس وفراولة وجوز هند مثلج)، Hawaiian POG (باشن فروت وبرتقال وجوافة)، Very Cool (توت مشكل مع منثول منعش)، Amazing Mango (مانجو طبيعي). هذه النكهات مرشحة جوائز عالمية." },
        { q: "ما هي خيارات النيكوتين في Naked 100؟", a: "نكهات Naked 100 متوفرة بنسبة نيكوتين 0% و3% و6% من نوع فري بيس (Freebase)، وفي سلسلة Naked Salt بنسبة 20% و35% و50% من نوع نيكوتين سولت." },
        { q: "هل نكهات Naked 100 أمريكية الصنع؟", a: "نعم، Naked 100 علامة تجارية أمريكية يتم تصنيعها في الولايات المتحدة الأمريكية وفق معايير الجودة العالية. جميع المكونات مستوردة وخاضعة لاختبارات الجودة." },
        { q: "أي سلسلة Naked 100 تناسبني؟", a: "إذا كنت تفضل نكهات الفواكه المنعشة اختر سلسلة الفواكه (Very Cool, Lava Flow). إذا تحب المشروبات المنعشة اختر Really Berry أو Green Blast. إذا كنت من محبي التبغ جرب Cuban Tobacco. سلسلة النيكوتين سولت تناسب السحبات الصغيرة." },
      ]
    }
  },
  "ناستي-nasty": {
    intro: {
      title: "نكهات ناستي Nasty - النكهات الماليزية الأيقونية",
      p1: "ناستي (Nasty) علامة تجارية ماليزية من أشهر مصنعي نكهات الفيب في جنوب شرق آسيا. اشتهرت بنكهة Cush Man الأسطورية التي جمعت بين عصير المانجو والكريمة، وأصبحت مرجعاً في عالم نكهات الفيب. تتميز نكهات Nasty بالقوة والوضوح والثبات.",
      p2: "تقدم Nasty تشكيلة واسعة تناسب جميع الأذواق: من الفواكه الاستوائية المثلجة إلى نكهات الحلويات الكلاسيكية. تنقسم منتجاتها إلى سلسلة LIQUID (فري بيس) وسلسلة SALT (نيكوتين سولت) وسلسلة DEVICE (سحبات جاهزة). متوفرة في متجرنا بأحدث الإصدارات."
    },
    faq: {
      title: "الأسئلة الشائعة حول نكهات Nasty",
      items: [
        { q: "ما قصة نكهة Cush Man من Nasty؟", a: "Cush Man هي النكهة الأيقونية التي انطلقت منها شهرة Nasty. تجمع بين عصير المانجو الاستوائي الناضج مع لمسة كريمة خفيفة ومنثول منعش. أصبحت مرجعاً لنكهات المانجو في عالم الفيب وحصلت على جوائز متعددة." },
        { q: "ما الفرق بين Cush Man و Asap Grape من Nasty؟", a: "Cush Man نكهة مانجو وكريمة حلوة ومنعشة، تناسب محبي النكهات الاستوائية الكريمية. Asap Grape نكهة عنب أرجواني مع لمسة منعشة وتوازن بين الحلاوة والحموضة، تناسب محبي نكهات الفواكه." },
        { q: "هل نكهات Nasty ماليزية حقاً؟", a: "نعم، Nasty علامة ماليزية 100% ويتم التصنيع في مصانعها في ماليزيا. تشتهر النكهات الماليزية بقوتها وجودتها ووضوح طعمها. Nasty من أقوى العلامات الماليزية في السوق السعودي." },
        { q: "هل تتوفر نكهات Nasty بنظام فري بيس وسولت؟", a: "نعم، Nasty توفر كل نكهة بنظامين: سلسلة LIQUID (فري بيس 0% و3% و6%) للسحبات الواسعة، وسلسلة SALT (20% و35% و50%) للسحبات الضيقة وأجهزة البود الصغيرة." },
      ]
    }
  },
  "ميجا-ميقا-mega": {
    intro: {
      title: "نكهات ميجا Mega الأصلية - النكهات السعودية للفيب",
      p1: "ميجا (Mega) علامة تجارية سعودية رائدة في صناعة نكهات الفيب الإلكترونية، تقدم تشكيلة واسعة من النكهات المصنعة محلياً بأعلى معايير الجودة. تشتهر ميجا بنكهاتها المستوحاة من المذاقات العربية الأصيلة والفواكه الاستوائية الطازجة.",
      p2: "توفر ميجا نكهاتها بنظامي السولت (Salt) والفري بيس (Freebase) لتناسب جميع أنواع الأجهزة وأساليب السحوب. النكهات مصنعة في المملكة وفق معايير هيئة الغذاء والدواء السعودية. متوفرة في متجرنا بأسعار تنافسية."
    },
    faq: {
      title: "الأسئلة الشائعة حول نكهات ميجا Mega",
      items: [
        { q: "ما أشهر نكهات ميجا في السعودية؟", a: "من أشهر النكهات: Mega Mango (مانجو)، Mega Blueberry (توت أزرق)، Mega Watermelon (بطيخ)، Mega Double Apple (تفاحتين). نكهات ميجا معروفة بجودة الثبات والنكهة القوية." },
        { q: "الفرق بين نكهات ميجا سولت وفري بيس؟", a: "نكهات ميجا سولت (Salt) بنيكوتين 20-50 ملجم مناسبة للسحبات الضيقة وأجهزة البود. نكهات ميجا فري بيس (Freebase) بنيكوتين 0-6 ملجم مناسبة للسحبات الواسعة والأجهزة المتوسطة والكبيرة." },
        { q: "هل نكهات ميجا مصنعة في السعودية؟", a: "نعم، ميجا علامة سعودية ويتم التصنيع محلياً في المملكة العربية السعودية وفق معايير الجودة والسلامة. هذا يضمن نكهة طازجة وجودة ثابتة." },
      ]
    }
  },
  "قوست-فيب-ghost-vapes": {
    intro: {
      title: "منتجات قوست فيب Ghost Vapes الأصلية",
      p1: "قوست فيب (Ghost Vapes) علامة تجارية متخصصة في سحبات الفيب الجاهزة والنكهات الإلكترونية، تتميز بتصميماتها العصرية ونكهاتها المبتكرة. تقدم Ghost Vapes تجربة مميزة لمن يبحث عن الجودة والسعر المناسب مع تشكيلة واسعة من النكهات.",
      p2: "منتجات Ghost Vapes مصممة بعناية لتوفر ثبات نكهة ممتاز وعمر استخدام جيد. مناسبة للمبتدئين والمستخدمين اليومي الذين يفضلون السحبات الجاهزة. متوفرة في متجرنا بجميع النكهات."
    },
    faq: {
      title: "الأسئلة الشائعة حول قوست فيب Ghost Vapes",
      items: [
        { q: "ما الذي يميز منتجات Ghost Vapes؟", a: "تتميز Ghost Vapes بتصميمها العصري الجذاب ونكهاتها المبتكرة التي تناسب مختلف الأذواق. تقدم تجربة سحبة مريحة مع ثبات نكهة جيد طوال فترة الاستخدام." },
        { q: "هل منتجات Ghost Vapes مناسبة للسحبة الضيقة MTL؟", a: "نعم، معظم منتجات Ghost Vapes مصممة للسحبة الضيقة (MTL) التي تحاكي سحبة السيجارة التقليدية، مما يجعلها خياراً ممتازاً للمبتدئين والمدخنين السابقين." },
      ]
    }
  },
  "مزاج-mazaj": {
    intro: {
      title: "منتجات مزاج Mazaj الأصلية - سحبات جاهزة بنكهات عربية",
      p1: "مزاج (Mazaj) علامة تجارية سعودية في عالم السحبات الإلكترونية الجاهزة، تقدم تشكيلة واسعة من النكهات العربية والعالمية. تجمع مزاج بين الجودة العالية والسعر المناسب مع تصاميم عصرية تناسب جميع الأذواق.",
      p2: "تتميز منتجات مزاج بتنوع نكهاتها وجودة ثبات النكهة طوال فترة الاستخدام. السحبات الجاهزة من مزاج تأتي ببطارية مدمجة وسائل كافٍ لعدد سحبات ممتاز. متوفرة في متجرنا بجميع الخيارات."
    },
    faq: {
      title: "الأسئلة الشائعة حول مزاج Mazaj",
      items: [
        { q: "كم عدد سحبات Mazaj؟", a: "عدد السحبات يختلف حسب الموديل، الموديلات القياسية توفر حوالي 800-1500 سحبة. العدد الفعلي يعتمد على طول السحبة وعمق الاستخدام." },
        { q: "هل سحبات Mazaj قابلة لإعادة الشحن؟", a: "بعض موديلات Mazaj تأتي ببطارية قابلة للشحن عبر USB-C لضمان استخدام كامل السائل، بينما الأخرى مصممة للاستخدام لمرة واحدة. تأكد من وصف المنتج قبل الشراء." },
        { q: "ما أفضل نكهات Mazaj؟", a: "من النكهات المفضلة لدى العملاء: نكهة العنب المثلج، التوت الأزرق، البطيخ المنعش، والمانجو الاستوائية. النكهات متنوعة بين الفواكه والحلويات والمنثول." },
        { q: "هل Mazaj Box Pro متوفر؟", a: "موديلات Mazaj Box Pro متوفرة في متجرنا بعدد سحبات أكبر وجودة تصنيع محسنة. تحقق من صفحة المنتج للتفاصيل والتوفر." },
      ]
    }
  },
  "الفاخر-al-fakher": {
    intro: {
      title: "منتجات الفاخر Al Fakher الأصلية - عبق التراث في عالم الفيب",
      p1: "الفاخر (Al Fakher) علامة تجارية إماراتية عريقة، امتدت شهرتها من عالم المعسل التقليدي إلى نكهات الفيب الإلكتروني. تشتهر الفاخر بنكهاتها الشرقية الأصيلة مثل التفاحتين والعنب والنعناع، بنفس الجودة التي جعلتها الأولى في عالم المعسل.",
      p2: "تقدم Al Fakher نكهات فيب إلكترونية بنظامي السولت والفري بيس تحاكي النكهات الكلاسيكية التي عرفتها من المعسل التقليدي. متوفرة في متجرنا بأسعار ممتازة وجودة أصلية."
    },
    faq: {
      title: "الأسئلة الشائعة حول الفاخر Al Fakher",
      items: [
        { q: "هل نكهات الفاخر للفيب مثل نكهات المعسل؟", a: "نعم، نكهات الفاخر للفيب مستوحاة من نكهات المعسل الكلاسيكية الشهيرة مثل التفاحتين والعنب والنعناع. تم تطويرها خصيصاً لتناسب أجهزة الفيب مع الحفاظ على الطابع الشرقي الأصيل." },
        { q: "ما أفضل نكهات الفاخر للفيب؟", a: "أشهر نكهات الفاخر الإلكترونية: Double Apple (تفاحتين) الكلاسيكية، Mint (نعناع) المنعشة، Grape (عنب)، Watermelon (بطيخ)، وBlueberry (توت أزرق). جميعها متوفرة في متجرنا." },
        { q: "هل نكهات الفاخر مناسبة للمبتدئين؟", a: "نعم، نكهات الفاخر مناسبة للمبتدئين خصوصاً نكهة التفاحتين الكلاسيكية المألوفة. تناسب السحبات الضيقة والواسعة حسب نوع الكويل المستخدم." },
      ]
    }
  },
  "مايلي-myle": {
    intro: {
      title: "منتجات مايلي Myle الأصلية - بساطة وجودة في السحبات الجاهزة",
      p1: "مايلي (Myle) علامة تجارية أمريكية متخصصة في السحبات الإلكترونية الجاهزة (Disposable Vapes) وأجهزة البود المدمجة. تشتهر بتصميمها الأنيق والنحيف وحجمها الصغير الذي يناسب الجيب، مع نكهات غنية ومتنوعة.",
      p2: "تقدم Myle تجربة فيب عملية وبسيطة بدون تعقيد. أجهزتها مزودة بتقنية الشد التلقائي ولا تحتاج أزرار أو إعدادات. متوفرة في متجرنا بتشكيلة واسعة من النكهات."
    },
    faq: {
      title: "الأسئلة الشائعة حول مايلي Myle",
      items: [
        { q: "ما الذي يميز أجهزة Myle؟", a: "تتميز أجهزة Myle بحجمها الصغير جداً وتصميمها النحيف الأنيق الذي يشبه قلم USB. تقنية الشد التلقائي تجعلها سهلة الاستخدام للمبتدئين، والنكهات متنوعة وعالية الجودة." },
        { q: "هل نكهات Myle أصلية ومضمونة؟", a: "جميع منتجات Myle في متجرنا أصلية ومضمونة. نشتري مباشرة من الموزعين المعتمدين لنضمن لكم الجودة والسلامة." },
      ]
    }
  },
  "ماي-شيشة-my-shisha": {
    intro: {
      title: "منتجات ماي شيشة My Shisha الأصلية - نكهات الشيشة الإلكترونية",
      p1: "ماي شيشة (My Shisha) علامة تجارية متخصصة في نكهات الشيشة الإلكترونية (Vape Shisha) التي تحاكي نكهات المعسل التقليدي. تقدم تشكيلة واسعة من النكهات الشرقية والعربية الأصيلة مثل التفاح والعنب والنعناع والمانجو.",
      p2: "نكهات My Shisha مصممة خصيصاً للسحبة الواسعة (DTL) التي تناسب أجهزة الشيشة الإلكترونية والتانكات الكبيرة. النكهة غنية وكثيفة لتجربة شبيهة بالشيشة التقليدية. متوفرة في متجرنا."
    },
    faq: {
      title: "الأسئلة الشائعة حول ماي شيشة My Shisha",
      items: [
        { q: "هل نكهات My Shisha للسحبة الضيقة أم الواسعة؟", a: "نكهات My Shisha مصممة خصيصاً للسحبة الواسعة (DTL) باستخدام أجهزة الشيشة الإلكترونية والتانكات الكبيرة بقدرة 40 واط فأكثر للحصول على أفضل تجربة نكهة وبخار." },
        { q: "ما الفرق بين My Shisha والمعسل التقليدي؟", a: "My Shisha عبارة عن نكهة فيب إلكترونية سائلة بدون تبغ، تستخدم في أجهزة الفيب المخصصة للشيشة. تعطي نفس تجربة النكهة بدون دخان وحرق التبغ، مما يقلل الضرر." },
      ]
    }
  },
  "اوكسفا-oxva": {
    intro: {
      title: "منتجات اوكسفا OXVA الأصلية - ابتكار في التصميم والأداء",
      p1: "اوكسفا (OXVA) علامة تجارية صينية سريعة الصعود في عالم السحبات الإلكترونية، تشتهر بتصاميمها المبتكرة وجودة تصنيعها العالية. من أشهر منتجاتها سلسلة Velocity وXlim وVorigin التي نالت إعجاب عشاق الفيب حول العالم.",
      p2: "تتميز OXVA بتقديم تقنيات جديدة مثل الشاشات الملونة و نظام UNI-LOCK لمنع التسرب، وتصاميم ارجونوميك مريحة. كويلاتها توفر نكهة ممتازة وعمر طويل. متوفرة في متجرنا بجميع الموديلات والكويلات."
    },
    faq: {
      title: "الأسئلة الشائعة حول اوكسفا OXVA",
      items: [
        { q: "ما الفرق بين OXVA Xlim و Velocity؟", a: "OXVA Xlim سلسلة بود مدمجة بحجم صغير وبطارية 900-1000mAh، مناسبة للسحبة الضيقة والمتوسطة بكويلات 0.6-1.2 أوم. Velocity سلسلة أكبر بقدرة تصل إلى 80 واط وشاشة ملونة، تناسب السحبة المتوسطة والواسعة." },
        { q: "هل كويلات OXVA متوفرة في السعودية؟", a: "نعم، نوفر جميع كويلات OXVA الأصلية: Xlim V3/V4 Coils (0.6، 0.8، 1.2 أوم)، Velocity Coils، وUnicoils. الكويلات متوفرة باستمرار وأسعارها مناسبة." },
        { q: "هل أجهزة OXVA مناسبة للمبتدئين؟", a: "نعم، OXVA Xlim خيار ممتاز للمبتدئين بحجمه الصغير وسهولة استخدامه. يعمل بالشد التلقائي، التعبئة علوية سهلة، وشاشة تعرض جميع المعلومات المهمة." },
      ]
    }
  },
  "اوبس-ubbs": {
    intro: {
      title: "منتجات اوبس UBBS الأصلية",
      p1: "اوبس (UBBS) علامة تجارية متخصصة في إكسسوارات وقطع غيار أجهزة الفيب، توفر منتجات عالية الجودة بأسعار تنافسية. تشتهر بتقديم حلول عملية لعشاق الفيب مثل البودات والكويلات البديلة.",
      p2: "منتجات UBBS مصممة للتوافق مع مجموعة واسعة من أجهزة الفيب الشهيرة، مما يجعلها خياراً اقتصادياً ممتازاً. متوفرة في متجرنا بجودة مضمونة."
    },
    faq: {
      title: "الأسئلة الشائعة حول اوبس UBBS",
      items: [
        { q: "ما هي منتجات UBBS المتوفرة؟", a: "نوفر تشكيلة من منتجات UBBS تشمل البودات البديلة والكويلات وإكسسوارات الأجهزة. جميع المنتجات تخضع لفحص الجودة قبل الشحن." },
        { q: "هل منتجات UBBS متوافقة مع أجهزتي؟", a: "يرجى مراجعة وصف المنتج للتأكد من التوافق مع جهازك. يوفر متجرنا معلومات التوافق مفصلة في كل صفحة منتج." },
      ]
    }
  },
  "اوشن-فيب-ocean-vape": {
    intro: {
      title: "منتجات اوشن فيب Ocean Vape الأصلية",
      p1: "اوشن فيب (Ocean Vape) علامة تجارية تقدم تشكيلة متنوعة من نكهات الفيب والسحبات الجاهزة. تتميز بنكهاتها المستوحاة من المحيط والفواكه الاستوائية المنعشة التي تناسب عشاق النكهات الصيفية.",
      p2: "تقدم Ocean Vape تجربة فيب ممتعة بنكهات فريدة وجودة تصنيع جيدة. متوفرة في متجرنا بأسعار مناسبة مع ضمان الجودة."
    },
    faq: {
      title: "الأسئلة الشائعة حول اوشن فيب Ocean Vape",
      items: [
        { q: "ما هي نكهات Ocean Vape المتوفرة؟", a: "نوفر تشكيلة من نكهات Ocean Vape تشمل نكهات الفواكه الاستوائية والحلويات المنعشة. جميع النكهات أصلية ومضمونة." },
        { q: "هل نكهات Ocean Vape مناسبة للاستخدام اليومي؟", a: "نعم، نكهات Ocean Vape مناسبة للاستخدام اليومي وتتميز بثبات النكهة طوال فترة الاستخدام." },
      ]
    }
  },
  "البروفيسور-فيب": {
    intro: {
      title: "منتجات البروفيسور فيب الأصلية",
      p1: "البروفيسور فيب علامة تجارية سعودية متخصصة في نكهات الفيب الإلكترونية، تقدم تشكيلة متنوعة من النكهات العربية والعالمية. تتميز بجودة التصنيع المحلي والنكهات المبتكرة.",
      p2: "نكهات البروفيسور فيب مصنعة في المملكة العربية السعودية بأعلى معايير الجودة. متوفرة في متجرنا بتركيزات نيكوتين متعددة تناسب جميع الأذواق."
    },
    faq: {
      title: "الأسئلة الشائعة حول البروفيسور فيب",
      items: [
        { q: "ما هي نكهات البروفيسور فيب الأكثر طلباً؟", a: "البروفيسور فيب يقدم تشكيلة متنوعة من النكهات تشمل الفواكه والحلويات والمنثول. تصفح القسم لاكتشاف جميع الخيارات." },
        { q: "هل نكهات البروفيسور فيب سعودية؟", a: "نعم، البروفيسور فيب علامة سعودية ويتم التصنيع محلياً في المملكة." },
      ]
    }
  },
  "بومب-bomb": {
    intro: {
      title: "نكهات بومب Bomb الأصلية",
      p1: "بومب (Bomb) علامة تجارية متخصصة في نكهات الفيب القوية والمركزة، تشتهر بنكهاتها المتفجرة بالطعم والقوية في الأداء. تقدم تجربة فيب غنية لمن يبحث عن نكهات واضحة وقوية.",
      p2: "نكهات Bomb مناسبة لعشاق النكهات القوية والواضحة سواء في السحبات الضيقة أو الواسعة. متوفرة في متجرنا بأسعار تنافسية."
    },
    faq: {
      title: "الأسئلة الشائعة حول نكهات بومب Bomb",
      items: [
        { q: "ما الذي يميز نكهات Bomb؟", a: "تتميز نكهات Bomb بقوتها ووضوح طعمها، مع تركيز عالي للنكهة يضمن تجربة فيب غنية وممتعة طوال فترة الاستخدام." },
        { q: "هل نكهات Bomb متوفرة بنظام سولت وفري بيس؟", a: "نعم، نكهات Bomb متوفرة بنظامي السولت (Salt) للبودات الصغيرة والفري بيس (Freebase) للأجهزة المتوسطة والكبيرة." },
      ]
    }
  },
  "جوسي-ورلد-joosy-world": {
    intro: {
      title: "نكهات جوسي ورلد Joosy World الأصلية",
      p1: "جوسي ورلد (Joosy World) علامة تجارية تقدم نكهات فيب مستوحاة من أشهر نكهات الحلويات والعصائر العالمية. تتميز بتنوع نكهاتها وجودة مكوناتها التي تقدم تجربة طعم فريدة.",
      p2: "نكهات Joosy World تناسب جميع الأذواق مع خيارات متعددة من الفواكه والحلويات والمشروبات. متوفرة في متجرنا بجودة أصلية مضمونة."
    },
    faq: {
      title: "الأسئلة الشائعة حول جوسي ورلد Joosy World",
      items: [
        { q: "ما هي نكهات Joosy World المتوفرة؟", a: "نوفر تشكيلة واسعة من نكهات Joosy World تشمل نكهات الفواكه الاستوائية والحلويات الكلاسيكية والمشروبات المنعشة." },
        { q: "هل نكهات Joosy World مناسبة للبودات الصغيرة؟", a: "نعم، نكهات Joosy World متوفرة بنظام السولت المناسب للبودات الصغيرة وأجهزة MTL، بالإضافة إلى الفري بيس للأجهزة الأكبر." },
      ]
    }
  },
  "juul": {
    intro: {
      title: "منتجات JUUL الأصلية - ثورة السحبات الإلكترونية",
      p1: "JUUL علامة تجارية أمريكية غيّرت مفهوم السحبات الإلكترونية بجهازها الصغير الأيقوني الذي يشبه محرك USB. اشتهرت JUUL عالمياً بفضل تصميمها البسيط ونكهاتها القوية ونظام الكبسولات (Pods) المغلقة الذي يضمن جودة ثابتة.",
      p2: "JUUL من أنجح العلامات التجارية في تاريخ الفيب، واستطاعت جذب ملايين المستخدمين حول العالم بفضل تجربة السحبة القريبة جداً من السيجارة الحقيقية. متوفرة في متجرنا مع كبسولات JUUL الأصلية."
    },
    faq: {
      title: "الأسئلة الشائعة حول JUUL",
      items: [
        { q: "ما الذي يميز JUUL عن غيره؟", a: "JUUL يتميز بحجمه الصغير جداً، بساطة الاستخدام (ضع الكبسولة واستمتع)، تقنية الشد التلقائي، ونسبة النيكوتين العالية باستخدام نيكوتين سولت. التصميم الأنيق وجودة التصنيع تجعله مختلفاً." },
        { q: "هل كبسولات JUUL متوفرة في السعودية؟", a: "نعم، نوفر كبسولات JUUL الأصلية بنكهات متعددة مثل التبغ الكلاسيكي والمانجو والنعناع. الكبسولات مغلقة ومضمونة الجودة." },
      ]
    }
  },
  "جوسي-juicy": {
    intro: {
      title: "نكهات جوسي Juicy الأصلية",
      p1: "جوسي (Juicy) علامة تجارية متخصصة في نكهات الفيب السائلة، تقدم تشكيلة واسعة من النكهات العصيرية والمنعشة. تتميز Juicy بتركيزها على النكهات الطبيعية والطازجة التي تعطي تجربة فيب ممتعة.",
      p2: "نكهات Juicy مصممة بعناية لتقديم أفضل تجربة طعم مع ثبات النكهة. متوفرة في متجرنا بتركيزات نيكوتين متعددة."
    },
    faq: {
      title: "الأسئلة الشائعة حول جوسي Juicy",
      items: [
        { q: "ما أنواع نكهات Juicy المتوفرة؟", a: "نوفر تشكيلة من نكهات Juicy تشمل الفواكه الطازجة والحلويات المنعشة والمشروبات الباردة. جميعها بجودة عالية." },
        { q: "هل نكهات Juicy مناسبة للاستخدام اليومي؟", a: "نعم، نكهات Juicy مناسبة للاستخدام اليومي وتتميز بثبات النكهة طوال فترة الاستخدام." },
      ]
    }
  },
  "دكتور-فيب-dr-vape": {
    intro: {
      title: "منتجات دكتور فيب Dr Vape الأصلية",
      p1: "دكتور فيب (Dr Vape) علامة تجارية متخصصة في تقديم منتجات الفيب عالية الجودة، تشمل النكهات الإلكترونية والسحبات الجاهزة. تقدم Dr Vape تشكيلة متنوعة تناسب جميع المستويات من المبتدئين إلى المحترفين.",
      p2: "تتميز منتجات Dr Vape بالجودة الثابتة والنكهات الواضحة. متوفرة في متجرنا بأسعار مناسبة مع ضمان الجودة."
    },
    faq: {
      title: "الأسئلة الشائعة حول دكتور فيب Dr Vape",
      items: [
        { q: "ما هي منتجات Dr Vape المتوفرة؟", a: "نوفر تشكيلة من منتجات Dr Vape تشمل النكهات الإلكترونية والسحبات الجاهزة وإكسسوارات الفيب." },
        { q: "هل منتجات Dr Vape أصلية؟", a: "نعم، جميع منتجات Dr Vape في متجرنا أصلية ومضمونة." },
      ]
    }
  },
  "ديابل-diapple": {
    intro: {
      title: "نكهات ديابل Diapple الأصلية",
      p1: "ديابل (Diapple) علامة تجارية متخصصة في نكهات الفيب بنكهات التفاح والفواكه المتنوعة. الاسم مزيج من Diablo وApple، reflecting its bold apple-inspired flavors.",
      p2: "نكهات Diapple تقدم تجربة فواكه غنية ومنعشة تناسب عشاق النكهات الحلوة والحامضة. متوفرة في متجرنا."
    },
    faq: {
      title: "الأسئلة الشائعة حول ديابل Diapple",
      items: [
        { q: "ما هي نكهات Diapple المميزة؟", a: "Diapple تشتهر بنكهات التفاح المبتكرة مع لمسات من الفواكه الأخرى. ننصح بتجربة نكهات التفاح المختلفة." },
        { q: "هل نكهات Diapple مناسبة للسحبة الضيقة؟", a: "نعم، نكهات Diapple متوفرة بنظام السولت المناسب للسحبة الضيقة والبودات الصغيرة." },
      ]
    }
  },
  "راو-raw": {
    intro: {
      title: "نكهات راو RAW الأصلية - النقاء في كل قطرة",
      p1: "راو (RAW) علامة تجارية متخصصة في نكهات الفيب الطبيعية والنقية، تقدم نكهات تبغ تقليدية وفواكه طبيعية بدون إضافات صناعية ثقيلة. RAW معروفة بجودة مكوناتها ونقاء نكهاتها.",
      p2: "نكهات RAW مناسبة لعشاق النكهات الطبيعية والبسيطة التي تبرز طعم المكونات الأساسي. متوفرة في متجرنا."
    },
    faq: {
      title: "الأسئلة الشائعة حول راو RAW",
      items: [
        { q: "ما الذي يميز نكهات RAW؟", a: "RAW تركز على النكهات الطبيعية النقية بدون إضافات صناعية كثيرة. نكهات التبغ لديها مشهورة بجودتها." },
        { q: "هل نكهات RAW متوفرة بنيكوتين سولت؟", a: "نعم، نكهات RAW متوفرة بنظامي السولت والفري بيس." },
      ]
    }
  },
  "راثلس-ruthless": {
    intro: {
      title: "نكهات راثلس Ruthless الأصلية",
      p1: "راثلس (Ruthless) علامة تجارية أمريكية مشهورة في عالم نكهات الفيب، تشتهر بنكهاتها القوية والجريئة. من أشهر نكهاتها Swamp Thing وJungle Fever وGrape Drank.",
      p2: "تتميز نكهات Ruthless بقوتها ووضوح طعمها، وهي من الخيارات المفضلة لعشاق النكهات الأمريكية القوية. متوفرة في متجرنا."
    },
    faq: {
      title: "الأسئلة الشائعة حول راثلس Ruthless",
      items: [
        { q: "ما أشهر نكهات Ruthless؟", a: "من أشهر نكهات Ruthless: Swamp Thing (فواكه استوائية)، Jungle Fever (مانجو وباشن فروت)، Grape Drank (عنب)." },
        { q: "هل نكهات Ruthless أصلية؟", a: "نعم، جميع نكهات Ruthless في متجرنا أمريكية أصلية ومضمونة." },
      ]
    }
  },
  "رول-ابز-roll-upz": {
    intro: {
      title: "نكهات رول ابز Roll-Upz الأصلية",
      p1: "رول ابز (Roll-Upz) علامة تجارية متخصصة في نكهات الفيب المستوحاة من الحلويات الكلاسيكية، خصوصاً حلويات الفواكه الملفوفة. تقدم نكهات حلوة وحامضة تناسب عشاق النكهات المرحة.",
      p2: "نكهات Roll-Upz تقدم تجربة حنين لأيام الطفولة مع نكهات حلوة وحامضة في نفس الوقت. متوفرة في متجرنا."
    },
    faq: {
      title: "الأسئلة الشائعة حول رول ابز Roll-Upz",
      items: [
        { q: "ما هي نكهات Roll-Upz الشهيرة؟", a: "Roll-Upz تشتهر بنكهاتها الحلوة والحامضة المستوحاة من حلويات الفواكه الملفوفة الكلاسيكية." },
        { q: "هل نكهات Roll-Upz مناسبة للاستخدام اليومي؟", a: "نعم، مناسبة للاستخدام اليومي خصوصاً لمحبي النكهات الحلوة والحامضة." },
      ]
    }
  },
  "ريب-فيب-ripe-vapes": {
    intro: {
      title: "نكهات ريب فيب Ripe Vapes الأصلية",
      p1: "ريب فيب (Ripe Vapes) علامة تجارية أمريكية متخصصة في نكهات الفيب الفاخرة، تشتهر بنكهاتها المعقدة والمتوازنة. من أشهر منتجاتها سلسلة VCT (Vanilla Custard Tobacco) الحائزة على جوائز.",
      p2: "تتميز Ripe Vapes بجودة المكونات الفاخرة والنكهات المتقنة التي تلبي أذواق عشاق الفيب المتمرسين. متوفرة في متجرنا."
    },
    faq: {
      title: "الأسئلة الشائعة حول ريب فيب Ripe Vapes",
      items: [
        { q: "ما هي أشهر نكهات Ripe Vapes؟", a: "أشهر نكهات Ripe Vapes: VCT (Vanilla Custard Tobacco) الحائزة على جوائز، Coconut Cookie، وKey Lime Cookie." },
        { q: "هل نكهات Ripe Vapes متوفرة في السعودية؟", a: "نعم، نوفر تشكيلة من نكهات Ripe Vapes الأصلية في متجرنا." },
      ]
    }
  },
  "رينكو-rincoe": {
    intro: {
      title: "منتجات رينكو Rincoe الأصلية",
      p1: "رينكو (Rincoe) علامة تجارية صينية متخصصة في أجهزة السحبات الإلكترونية، تقدم منتجات بتقنيات مبتكرة وتصاميم عصرية بأسعار تنافسية. من أشهر منتجاتها سلسلة Manto وJellybox.",
      p2: "تتميز أجهزة Rincoe بجودة التصنيع الجيدة والأسعار المناسبة، مما يجعلها خياراً اقتصادياً ممتازاً. متوفرة في متجرنا."
    },
    faq: {
      title: "الأسئلة الشائعة حول رينكو Rincoe",
      items: [
        { q: "ما هي أجهزة Rincoe المتوفرة؟", a: "نوفر أجهزة Rincoe مثل Manto وJellybox بالإضافة إلى الكويلات وقطع الغيار." },
        { q: "هل أجهزة Rincoe مناسبة للمبتدئين؟", a: "نعم، أجهزة Rincoe مناسبة للمبتدئين بفضل أسعارها المناسبة وسهولة استخدامها." },
      ]
    }
  },
  "كليك-click": {
    intro: {
      title: "منتجات كليك Click الأصلية",
      p1: "كليك (Click) علامة تجارية تقدم سحبات إلكترونية جاهزة بنكهات متنوعة وتصميم عملي. تشتهر بسهولة الاستخدام والسعر المناسب.",
      p2: "منتجات Click توفر تجربة فيب بسيطة ومباشرة. متوفرة في متجرنا بجميع النكهات."
    },
    faq: {
      title: "الأسئلة الشائعة حول كليك Click",
      items: [
        { q: "ما هي نكهات Click المتوفرة؟", a: "نوفر تشكيلة من نكهات Click تشمل الفواكه والحلويات والمنثول." },
        { q: "هل منتجات Click أصلية؟", a: "نعم، جميع منتجات Click في متجرنا أصلية ومضمونة." },
      ]
    }
  },
  "هيل-بار-hell-bar": {
    intro: {
      title: "منتجات هيل بار Hell Bar الأصلية",
      p1: "هيل بار (Hell Bar) علامة تجارية متخصصة في السحبات الإلكترونية الجاهزة (Disposable Vapes)، تقدم نكهات جريئة وقوية مع تصاميم مميزة. تشتهر بنكهاتها القوية الواضحة.",
      p2: "Hell Bar توفر تجربة سحبة جاهزة بنكهات ثابتة وجودة تصنيع جيدة. متوفرة في متجرنا."
    },
    faq: {
      title: "الأسئلة الشائعة حول هيل بار Hell Bar",
      items: [
        { q: "كم سحبة في Hell Bar؟", a: "يختلف حسب الموديل، معظم منتجات Hell Bar توفر 800-1500 سحبة." },
        { q: "ما أفضل نكهات Hell Bar؟", a: "من النكهات المطلوبة: نكهات الفواكه المثلجة والمنثول." },
      ]
    }
  },
  "هيل-فيب-hell-vape": {
    intro: {
      title: "منتجات هيل فيب Hell Vape الأصلية",
      p1: "هيل فيب (Hell Vape) علامة تجارية متخصصة في أجزاء وتانكات الفيب المتقدمة، تشتهر بتصاميمها الجريئة وأدائها العالي. من أشهر منتجاتها تانكات Hellvape MD وDead Rabbit.",
      p2: "منتجات Hell Vape موجهة للمحترفين وهواة بناء الكويلات يدوياً (RBA/RDA). متوفرة في متجرنا."
    },
    faq: {
      title: "الأسئلة الشائعة حول هيل فيب Hell Vape",
      items: [
        { q: "ما هي منتجات Hell Vape الشهيرة؟", a: "من أشهر منتجات Hell Vape: Dead Rabbit RDA وHellvape MD RTA، وFat Rabbit." },
        { q: "هل منتجات Hell Vape للمبتدئين؟", a: "منتجات Hell Vape موجهة للمحترفين وهواة بناء الكويلات اليدوية أكثر من المبتدئين." },
      ]
    }
  },
  "فيكتوري-victory": {
    intro: {
      title: "منتجات فيكتوري Victory الأصلية",
      p1: "فيكتوري (Victory) علامة تجارية تقدم سحبات إلكترونية جاهزة ونكهات فيب بتشكيلة متنوعة. توفر منتجات بجودة جيدة وأسعار مناسبة.",
      p2: "منتجات Victory خيار اقتصادي ممتاز لمن يبحث عن تجربة فيب جيدة بسعر مناسب. متوفرة في متجرنا."
    },
    faq: {
      title: "الأسئلة الشائعة حول فيكتوري Victory",
      items: [
        { q: "ما منتجات Victory المتوفرة؟", a: "نوفر تشكيلة من منتجات Victory تشمل السحبات الجاهزة والنكهات الإلكترونية." },
        { q: "هل منتجات Victory أصلية؟", a: "نعم، جميع منتجات Victory في متجرنا أصلية ومضمونة." },
      ]
    }
  },
  "سفن-دي-z-seven-d": {
    intro: {
      title: "منتجات سفن دي 7D الأصلية",
      p1: "سفن دي (7D) أو Z Seven D علامة تجارية تقدم تشكيلة من نكهات الفيب والسحبات الإلكترونية. تتميز بتنوع منتجاتها وجودتها.",
      p2: "منتجات 7D متوفرة في متجرنا بأسعار مناسبة وجودة مضمونة."
    },
    faq: {
      title: "الأسئلة الشائعة حول سفن دي 7D",
      items: [
        { q: "ما هي منتجات 7D المتوفرة؟", a: "نوفر تشكيلة من منتجات 7D تشمل النكهات والسحبات الجاهزة." },
        { q: "هل منتجات 7D متوفرة في السعودية؟", a: "نعم، متوفرة في متجرنا." },
      ]
    }
  },
  "فابو-vapo": {
    intro: {
      title: "منتجات فابو Vapo الأصلية",
      p1: "فابو (Vapo) علامة تجارية متخصصة في إكسسوارات وقطع غيار أجهزة الفيب، توفر منتجات بجودة جيدة وأسعار تنافسية.",
      p2: "منتجات Vapo خيار عملي لمن يبحث عن قطع غيار وإكسسوارات بأسعار معقولة. متوفرة في متجرنا."
    },
    faq: {
      title: "الأسئلة الشائعة حول فابو Vapo",
      items: [
        { q: "ما هي منتجات Vapo المتوفرة؟", a: "نوفر تشكيلة من إكسسوارات وقطع غيار أجهزة الفيب من Vapo." },
        { q: "هل منتجات Vapo متوافقة مع جميع الأجهزة؟", a: "يرجى مراجعة وصف المنتج للتأكد من التوافق مع جهازك." },
      ]
    }
  },
  "ميكو-meko": {
    intro: {
      title: "منتجات ميكو Meko الأصلية",
      p1: "ميكو (Meko) علامة تجارية تقدم سحبات إلكترونية جاهزة ونكهات فيب بتشكيلة متنوعة ومناسبة للاستخدام اليومي.",
      p2: "منتجات Meko توفر تجربة فيب جيدة بسعر اقتصادي. متوفرة في متجرنا."
    },
    faq: {
      title: "الأسئلة الشائعة حول ميكو Meko",
      items: [
        { q: "ما هي منتجات Meko المتوفرة؟", a: "نوفر تشكيلة من سحبات Meko الجاهزة والنكهات الإلكترونية." },
        { q: "هل منتجات Meko أصلية؟", a: "نعم، جميع منتجات Meko في متجرنا أصلية ومضمونة." },
      ]
    }
  },
  "نوفا-nova": {
    intro: {
      title: "منتجات نوفا Nova الأصلية",
      p1: "نوفا (Nova) علامة تجارية تقدم سحبات إلكترونية جاهزة بتصاميم عصرية ونكهات متنوعة. توفر تجربة فيب بسيطة ومباشرة.",
      p2: "منتجات Nova مناسبة للمبتدئين ومن يفضلون السحبات الجاهزة. متوفرة في متجرنا."
    },
    faq: {
      title: "الأسئلة الشائعة حول نوفا Nova",
      items: [
        { q: "ما هي نكهات Nova المتوفرة؟", a: "نوفر تشكيلة من نكهات نوفا تشمل الفواكه والحلويات." },
        { q: "هل سحبات Nova قابلة لإعادة الشحن؟", a: "حسب الموديل، بعض السحبات قابلة للشحن وبعضها للاستخدام مرة واحدة." },
      ]
    }
  },
  "ماركيز-marquis": {
    intro: {
      title: "منتجات ماركيز Marquis الأصلية",
      p1: "ماركيز (Marquis) علامة تجارية تقدم نكهات فيب وسحبات إلكترونية بتشكيلة متنوعة وجودة جيدة.",
      p2: "منتجات Marquis متوفرة في متجرنا بأسعار مناسبة."
    },
    faq: {
      title: "الأسئلة الشائعة حول ماركيز Marquis",
      items: [
        { q: "ما منتجات Marquis المتوفرة؟", a: "نوفر تشكيلة من منتجات Marquis تشمل النكهات والسحبات الجاهزة." },
      ]
    }
  },
  "كي-كي-كي-kk-k": {
    intro: {
      title: "منتجات KK K الأصلية",
      p1: "كي كي كي (KK K) علامة تجارية تقدم نكهات فيب إلكترونية بتشكيلة متنوعة.",
      p2: "منتجات KK K متوفرة في متجرنا."
    },
    faq: {
      title: "الأسئلة الشائعة حول KK K",
      items: [
        { q: "ما هي نكهات KK K المتوفرة؟", a: "نوفر تشكيلة من نكهات KK K في متجرنا." },
      ]
    }
  },
  "ليكويد-ey-up-liquid": {
    intro: {
      title: "منتجات ليكويد Ey Up الأصلية",
      p1: "ليكويد Ey Up علامة تجارية تقدم نكهات فيب سائلة بنكهات متنوعة وجودة جيدة.",
      p2: "نكهات Ey Up Liquid متوفرة في متجرنا."
    },
    faq: {
      title: "الأسئلة الشائعة حول ليكويد Ey Up",
      items: [
        { q: "ما هي نكهات Ey Up المتوفرة؟", a: "نوفر تشكيلة من نكهات Ey Up Liquid في متجرنا." },
      ]
    }
  },
  "ليكويد-ey-up-multiple": {
    intro: {
      title: "منتجات Ey Up Multiple الأصلية",
      p1: "Ey Up Multiple علامة تجارية تقدم نكهات فيب سائلة متنوعة.",
      p2: "متوفرة في متجرنا."
    },
    faq: {
      title: "الأسئلة الشائعة حول Ey Up Multiple",
      items: [
        { q: "ما هي منتجات Ey Up Multiple؟", a: "نكهات فيب سائلة متنوعة متوفرة في متجرنا." },
      ]
    }
  },
  "ايلف-بار-elf-bar": {
    intro: {
      title: "منتجات ايلف بار Elf Bar الأصلية",
      p1: "ايلف بار (Elf Bar) من أشهر العلامات التجارية العالمية في السحبات الجاهزة، توفر تشكيلة واسعة من النكهات عالية الجودة بتصاميم عصرية وأنيقة.",
      p2: "جميع منتجات Elf Bar متوفرة في متجرنا بأسعار تنافسية."
    },
    faq: {
      title: "الأسئلة الشائعة حول ايلف بار Elf Bar",
      items: [
        { q: "ما هي نكهات Elf Bar الأكثر طلباً؟", a: "نكهات الفواكه المثلجة والمنثول من الأكثر طلباً." },
        { q: "هل Elf Bar متوفر في السعودية؟", a: "نعم، متوفر في متجرنا بجميع النكهات." },
      ]
    }
  },
  "فيب-ريس-vape-ress": {
    intro: {
      title: "منتجات فيب ريس Vape Ress الأصلية",
      p1: "فيب ريس (Vape Ress) علامة تجارية متخصصة في إكسسوارات وأجهزة الفيب.",
      p2: "متوفرة في متجرنا."
    },
    faq: {
      title: "الأسئلة الشائعة حول Vape Ress",
      items: [
        { q: "ما هي منتجات Vape Ress؟", a: "إكسسوارات وأجهزة فيب متوفرة في متجرنا." },
      ]
    }
  }
};

function buildBrandIntroData(brandName, brandId, slug) {
  // Check custom content map first
  if (slug && BRAND_CONTENT[slug] && BRAND_CONTENT[slug].intro) {
    return BRAND_CONTENT[slug].intro;
  }
  const seed = hashText(`brand-${brandId}-${brandName}`);
  const title = `منتجات ${brandName} الأصلية في السعودية`;

  const openers = [
    `تصفح تشكيلة ${brandName} الأصلية مع ضمان الجودة والتوصيل السريع لجميع مناطق المملكة.`,
    `قسم ${brandName} يضم منتجات أصلية مختارة بعناية لتضمن أفضل تجربة استخدام وأداء ثابت.`,
    `اكتشف منتجات ${brandName} المتوفرة لدينا مع خيارات تناسب المبتدئين والمحترفين على حد سواء.`,
  ];

  const p2 = pickBySeed(seed + 1, [
    "تأكد من توافق المنتج مع جهازك ونوع الاستخدام للحصول على أفضل أداء وأطول عمر تشغيلي.",
    "اختيار المنتج المناسب يبدأ بفهم احتياجك الفعلي ثم مطابقة المواصفات مع توقعات الاستخدام اليومي.",
    "قارن المواصفات والأسعار بين الخيارات المتاحة لاختيار الأنسب لروتينك وتجربتك الشخصية.",
  ]);

  return {
    title,
    p1: pickBySeed(seed, openers),
    p2,
  };
}

function buildBrandFaqData(brandName, slug) {
  // Check custom content map first
  if (slug && BRAND_CONTENT[slug] && BRAND_CONTENT[slug].faq) {
    return BRAND_CONTENT[slug].faq;
  }
  return {
    title: `الأسئلة الشائعة حول ${brandName}`,
    items: [
      { q: `هل منتجات ${brandName} أصلية؟`, a: `جميع منتجات ${brandName} المتوفرة في متجرنا أصلية ومضمونة. تأكد من مطابقة اسم الموديل والمواصفات على صفحة المنتج قبل الطلب.` },
      { q: `ما أنواع المنتجات المتوفرة من ${brandName}؟`, a: `يوفر متجرنا تشكيلة واسعة من منتجات ${brandName} تشمل السحبات الإلكترونية، أجهزة الشيشة، النكهات، الكويلات، البودات، والملحقات. تصفح القسم لاكتشاف جميع الخيارات.` },
      { q: `كيف أتأكد من توافق منتج ${brandName} مع جهازي؟`, a: "راجع مواصفات المنتج ونوع الكويل المستخدم ومستوى النيكوتين المناسب. يمكنك التواصل مع فريق الدعم الفني للاستشارة قبل الطلب." },
      { q: `هل يتوفر ضمان على منتجات ${brandName}؟`, a: "الضمان يختلف حسب نوع المنتج. السحبات والأجهزة الإلكترونية غالبًا تأتي بضمان ضد عيوب التصنيع. النكهات والكويلات والبودات لا يشملها الضمان بعد الاستخدام." },
      { q: `ما الأفضل من ${brandName} للمبتدئين؟`, a: `للمبتدئين ننصح بالبدء بمنتجات سهلة الاستخدام من ${brandName} مثل السحبات الجاهزة أو الأجهزة المدمجة التي لا تحتاج إعدادات معقدة.` },
    ],
  };
}

class BrandIntroInjector {
  constructor(data) {
    this.data = data;
  }

  element(element) {
    element.prepend(
      `
      <section class="seo-brand-intro" aria-label="وصف الماركة التجارية" style="margin:16px 0 20px;padding:18px 20px;border:1px solid #e5e7eb;border-radius:12px;background:#f8fafc">
        <h2 style="margin:0 0 10px;font-size:1.2rem;line-height:1.7;color:#0f172a">${escapeHtml(this.data.title)}</h2>
        <p style="margin:0 0 10px;line-height:2;color:#1f2937">${this.data.p1}</p>
        <p style="margin:0 0 10px;line-height:2;color:#1f2937">${this.data.p2}</p>
      </section>
      `,
      { html: true }
    );
  }
}

class BrandFaqInjector {
  constructor(data) {
    this.data = data;
  }

  element(element) {
    const qas = this.data.items
      .slice(0, 5)
      .map(
        (item) => `
        <h3 style="margin:0 0 6px;font-size:1rem;line-height:1.8;color:#111827">${escapeHtml(item.q)}</h3>
        <p style="margin:0 0 12px;line-height:2;color:#1f2937">${item.a}</p>
      `
      )
      .join("");

    element.append(
      `
      <section class="seo-brand-faq container" aria-label="الأسئلة الشائعة للماركة" style="margin:10px auto 24px;padding:18px 20px;border:1px solid #e5e7eb;border-radius:12px;background:#ffffff">
        <h2 style="margin:0 0 14px;font-size:1.2rem;line-height:1.7;color:#0f172a">${escapeHtml(this.data.title)}</h2>
        ${qas}
      </section>
      `,
      { html: true }
    );
  }
}

const SEO_AUDIT_SITE = "https://saudivapes.com";
const SEO_AUDIT_DEFAULT_IMAGE = "https://cdn.salla.sa/jbXEY/Bv6FKwLWFVbiOi6heH08B3RhVCMM1MkOAkYbQ2YX.png";
const SEO_AUDIT_LONG_TITLE_SUFFIX = " - متجر فيب في السعودية سحبات وأجهزة أصلية بأفضل الأسعار";
const SEO_AUDIT_SHORT_TITLE_SUFFIX = " | فيب السعودية";

const SEO_AUDIT_META_FIXES = [
  {
    test: (path) => path === "/" || path === "/ar" || path === "/ar/",
    title: "أسعار الفيب في السعودية 2026 — أفضل سحبات وأجهزة أصلية | فيب السعودية",
    description: "أفضل أسعار الفيب في السعودية 2026 — سحبات أصلية، أجهزة فيب، نكهات، ونيكوتين. شحن سريع لجميع المدن. تسوق الآن بأقل الأسعار!",
    type: "website",
    canonical: `${SEO_AUDIT_SITE}/ar/`,
    websiteSchema: true,
  },
  {
    test: (path) => path.includes("/a-1604827909"),
    title: "أنواع الشيشة الإلكترونية: دليل شامل بالصور والأسعار | فيب السعودية",
    description: "دليل شامل لأنواع الشيشة الإلكترونية: دسبوزبل، بود، ميكانيكال مود، وbox mod. تعرف على الفروق والأسعار وأفضل الماركات في السعودية. اقرأ الدليل كاملاً!",
    type: "article",
    canonical: `${SEO_AUDIT_SITE}/ar/blog/الشيشة-الكترونية-دليل-شامل-لأنواع-ومميزات-أفضل-الأجهزة/a-1604827909`,
  },
  {
    test: (path) => path.includes("page-2037591590") || path.includes("الأسئلة-الشائعة-و-الفرق-بين-السحبة-و-الشيشة"),
    title: "الفرق بين السحبة والشيشة الإلكترونية — دليل كامل | فيب السعودية",
    description: "ما الفرق بين السحبة الإلكترونية والشيشة الإلكترونية؟ مقارنة شاملة من حيث الحجم، النكهة، النيكوتين، السعر، وأيهما مناسب لك. إجابات واضحة!",
    type: "article",
    canonical: `${SEO_AUDIT_SITE}/ar/p/الأسئلة-الشائعة-و-الفرق-بين-السحبة-و-الشيشة-الالكترونية`,
  },
  {
    test: (path) => path.includes("/اظرف-النيكوتين/c357508386"),
    title: "أظرف نيكوتين بدون تبغ — أنواع وأسعار | فيب السعودية",
    description: "أظرف نيكوتين بدون تبغ أصلية — نيكوتين بابلو، زين، وماركات عالمية. نكهات متعددة وتراكيز مختلفة. شحن سريع لجميع مدن السعودية. تسوق الآن!",
    type: "website",
    canonical: `${SEO_AUDIT_SITE}/ar/اظرف-النيكوتين/c357508386`,
  },
  {
    test: (path) => path.includes("/a-589212596"),
    title: "أفضل 5 نكهات فيب من فيقود للشيشة الإلكترونية | فيب السعودية",
    description: "مراجعة لأفضل 5 نكهات فيب من فيقود للشيشة الإلكترونية — تقييم النكهات، نسبة النيكوتين، وأسعارها في السعودية. اكتشف النكهة المناسبة لك!",
    type: "article",
    canonical: `${SEO_AUDIT_SITE}/ar/blog/أفضل-5-نكهات-فيب-من-فيقود-للشيشة-الإلكترونية/a-589212596`,
  },
  {
    test: (path) => path === "/ar/فيب/c845735511" || path === "/ar/فيب/c845735511/",
    title: "فيب السعودية — سحبات وأجهزة أصلية بأفضل الأسعار",
    description: "تسوق أجهزة فيب وسحبات ونكهات أصلية في السعودية مع أسعار منافسة وشحن سريع لجميع المدن. اختر المنتج المناسب لك الآن.",
    type: "website",
    canonical: `${SEO_AUDIT_SITE}/ar/`,
  },
];

const SEO_AUDIT_CANONICAL_FIXES = [
  {
    test: (path) => path === "/ar/فيب/c845735511" || path === "/ar/فيب/c845735511/",
    canonical: `${SEO_AUDIT_SITE}/ar/`,
  },
  {
    test: (path) => path.includes("/من-نحن") || path.includes("page-1006707947"),
    canonical: `${SEO_AUDIT_SITE}/ar/`,
  },
];

function getSeoAuditMeta(path) {
  return SEO_AUDIT_META_FIXES.find((item) => item.test(path)) || null;
}

function getSeoAuditCanonicalFix(path) {
  return SEO_AUDIT_CANONICAL_FIXES.find((item) => item.test(path)) || null;
}

function shortenSeoAuditTitle(title) {
  if (!title || !title.endsWith(SEO_AUDIT_LONG_TITLE_SUFFIX)) return title;
  return `${title.slice(0, -SEO_AUDIT_LONG_TITLE_SUFFIX.length).trim()}${SEO_AUDIT_SHORT_TITLE_SUFFIX}`;
}

function upsertSeoAuditMetaHtml(html, path, requestUrl) {
  const meta = getSeoAuditMeta(path);
  const canonicalFix = getSeoAuditCanonicalFix(path);
  if (!meta && !canonicalFix && !html.includes(SEO_AUDIT_LONG_TITLE_SUFFIX)) return html;

  const requestPath = new URL(requestUrl).pathname;
  const canonical = meta?.canonical || canonicalFix?.canonical || `${SEO_AUDIT_SITE}${requestPath}`;
  let next = html;

  if (meta?.title) {
    next = next.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(meta.title)}</title>`);
  } else {
    next = next.replace(/<title>([\s\S]*?)<\/title>/i, (_match, title) => `<title>${escapeHtml(shortenSeoAuditTitle(title))}</title>`);
  }

  next = next
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<link\b[^>]*rel=["']alternate["'][^>]*hreflang=["'][^"']+["'][^>]*>/gi, "")
    .replace(/<meta\b[^>]*name=["']description["'][^>]*>/gi, "")
    .replace(/<meta\b[^>]*property=["']og:[^"']+["'][^>]*>/gi, "")
    .replace(/<meta\b[^>]*name=["']twitter:[^"']+["'][^>]*>/gi, "");

  const tags = [
    `<link rel="canonical" href="${escapeHtml(canonical)}">`,
    `<link rel="alternate" hreflang="ar" href="${escapeHtml(canonical)}">`,
    `<link rel="alternate" hreflang="x-default" href="${SEO_AUDIT_SITE}/">`,
  ];

  if (meta) {
    tags.push(
      `<meta name="description" content="${escapeHtml(meta.description)}">`,
      `<meta property="og:title" content="${escapeHtml(meta.title)}">`,
      `<meta property="og:description" content="${escapeHtml(meta.description)}">`,
      `<meta property="og:type" content="${escapeHtml(meta.type)}">`,
      `<meta property="og:url" content="${escapeHtml(canonical)}">`,
      `<meta property="og:image" content="${SEO_AUDIT_DEFAULT_IMAGE}">`,
      `<meta name="twitter:card" content="summary_large_image">`,
      `<meta name="twitter:title" content="${escapeHtml(meta.title)}">`,
      `<meta name="twitter:description" content="${escapeHtml(meta.description)}">`
    );
  }

  if (meta?.websiteSchema) {
    tags.push(`<script type="application/ld+json">${JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SEO_AUDIT_SITE}/#website`,
      name: "فيب السعودية",
      url: SEO_AUDIT_SITE,
      inLanguage: "ar-SA",
      potentialAction: {
        "@type": "SearchAction",
        target: `${SEO_AUDIT_SITE}/ar/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    })}</script>`);
  }

  return next.replace(/<\/head>/i, `${tags.join("\n")}\n</head>`);
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const method = (request.method || "GET").toUpperCase();
    if (method !== "GET" && method !== "HEAD") return fetch(request);

    let path = url.pathname || "/";
    try {
      path = decodeURIComponent(path);
    } catch (_) {
      // Keep original encoded path when decoding fails.
    }

    for (const [canonicalPath, aliases] of Object.entries(SEO_STATIC_ALIASES)) {
      if (aliases.includes(path)) {
        const to = new URL(url.toString());
        to.pathname = encodeURI(canonicalPath);
        return Response.redirect(to.toString(), 301);
      }
    }

    if (path === SEO_STATIC_PATHS.about) {
      return new Response(buildStaticSeoPageHtml("about"), {
        status: 200,
        headers: {
          "content-type": "text/html; charset=UTF-8",
          "cache-control": "public, max-age=1800",
          "referrer-policy": "strict-origin-when-cross-origin",
          "permissions-policy": "geolocation=(), camera=(), microphone=()",
        },
      });
    }

    if (path === SEO_STATIC_PATHS.editorial) {
      return new Response(buildStaticSeoPageHtml("editorial"), {
        status: 200,
        headers: {
          "content-type": "text/html; charset=UTF-8",
          "cache-control": "public, max-age=1800",
          "referrer-policy": "strict-origin-when-cross-origin",
          "permissions-policy": "geolocation=(), camera=(), microphone=()",
        },
      });
    }

    if (path === SEO_STATIC_PATHS.author) {
      return new Response(buildStaticSeoPageHtml("author"), {
        status: 200,
        headers: {
          "content-type": "text/html; charset=UTF-8",
          "cache-control": "public, max-age=1800",
          "referrer-policy": "strict-origin-when-cross-origin",
          "permissions-policy": "geolocation=(), camera=(), microphone=()",
        },
      });
    }

    // Repair malformed unicode-like slugs such as /u0646/u064a... into proper Arabic paths.
    if (/\/u[0-9a-fA-F]{4}/.test(path) || /\\u[0-9a-fA-F]{4}/.test(path)) {
      const fixedPath = normalizeEscapedPath(path);
      if (fixedPath && fixedPath !== path) {
        const to = new URL(url.toString());
        to.pathname = encodeURI(fixedPath);
        return Response.redirect(to.toString(), 301);
      }
    }

    if (isPurchaseVapeBlogPath(path)) {
      if (!isPurchaseVapeBlogCanonical(path)) {
        const to = new URL(url.toString());
        to.pathname = encodeURI(BLOG_PURCHASE_VAPE.canonicalPath);
        return Response.redirect(to.toString(), 301);
      }
      const html = renderPurchaseVapeBlogHtml(url.origin);
      return new Response(html, {
        status: 200,
        headers: {
          "content-type": "text/html; charset=UTF-8",
          "cache-control": "public, max-age=600",
        },
      });
    }

    if (!isArabicStorePath(path)) return fetch(request);
    if (isAssetLikePath(path)) return fetch(request);

    // Canonicalize Arabic homepage to one URL (/ar) to avoid split behavior/caching.
    if (path === "/ar/") {
      const to = new URL(url.toString());
      to.pathname = "/ar";
      return Response.redirect(to.toString(), 301);
    }

    const isCategoryPage = isArabicCategoryPath(path);
    const isProductPage = isArabicProductPath(path);
    const isHomePage = isArabicHomePath(path);
    const isBlogArticlePage = isArabicBlogArticlePath(path);
    const isBrandPage = isBrandPagePath(path);
    const seoAuditMeta = getSeoAuditMeta(path);
    const seoAuditCanonicalFix = getSeoAuditCanonicalFix(path);

    // Performance guard: only process targeted SEO pages.
    // All other Arabic pages pass through with zero parsing/rewriting overhead.
    if (!isCategoryPage && !isProductPage && !isHomePage && !isBlogArticlePage && !isBrandPage && !seoAuditMeta && !seoAuditCanonicalFix) {
      const response = await fetch(request);
      const contentType = response.headers.get("content-type") || "";
      if (!contentType.includes("text/html")) return response;

      const htmlSource = await response.text();
      const baseHtml = upsertSeoAuditMetaHtml(htmlSource, path, request.url);
      return new Response(baseHtml, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      });
    }

    const yearRedirect = buildYearCategoryRedirect(url, path);
    if (yearRedirect) {
      return Response.redirect(yearRedirect, 301);
    }

    const response = await fetch(request);
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/html")) return response;

    let htmlSource = await response.text();
    htmlSource = normalizeLegacyStoreLinks(htmlSource);
    const canonical = extractCanonical(htmlSource) || url.toString();

    const pageName =
      extractMetaContent(htmlSource, "property", "og:title") ||
      decodeURIComponent(path.split("/").filter(Boolean).slice(-2, -1)[0] || "الصفحة");

    const categoryParent = isProductPage
      ? extractCategoryParentFromPage(htmlSource)
      : null;

    const scripts = [];
    scripts.push({
      id: "seo-organization-schema",
      json: buildOrganizationSchema(canonical, htmlSource),
    });
    scripts.push({
      id: "seo-breadcrumb-schema",
      json: buildBreadcrumbSchema(canonical, pageName, categoryParent),
    });

    if (isProductPage) {
      scripts.push({
        id: "seo-product-offer-schema",
        json: buildProductSchema(canonical, htmlSource),
      });
    }

    if (isBlogArticlePage) {
      scripts.push({
        id: "seo-article-schema",
        json: buildArticleSchema(canonical, htmlSource),
      });
    }

    if (isHomePage) {
      const homeFaq = buildHomeFaqData();
      scripts.push({
        id: "seo-home-faq-schema",
        json: buildFaqSchemaJson(canonical, homeFaq),
      });
      scripts.push({
        id: "seo-home-collection-schema",
        json: buildHomeCollectionSchema(canonical),
      });
      scripts.push({
        id: "seo-home-website-schema",
        json: buildWebsiteSchema(canonical),
      });
      scripts.push({
        id: "seo-home-store-schema",
        json: buildStoreSchema(canonical, htmlSource),
      });
    }

    let faq = null;
    let intro = null;
    let productFaq = null;
    if (isCategoryPage) {
      const { categoryId, categoryName } = parseCategory(path);
      intro = introPlanV2(categoryId, categoryName);
      faq = faqPlanV2(categoryId, categoryName);
      scripts.push({
        id: "seo-category-faq-schema",
        json: buildFaqSchemaJson(canonical, faq),
      });
    }
    if (isProductPage) {
      productFaq = buildProductFaqData(htmlSource, pageName, categoryParent);
      scripts.push({
        id: "seo-product-faq-schema",
        json: buildFaqSchemaJson(canonical, productFaq),
      });

      // Build specs bar + enhanced details/summary FAQ for product pages
      // For nicotine-level parent (e.g. "3 نيكوتين"), use grandparent for type detection
      const isNicotineLevel = categoryParent?.title?.match(/^\d+\s*نيكوتين$/);
      const effectiveTypeSource = (isNicotineLevel && categoryParent?.grandparent?.title)
        ? categoryParent.grandparent.title
        : (categoryParent?.title || '');
      const productType = categoryTypeV2(effectiveTypeSource);
      const facts = extractProductFacts(htmlSource);
      const brandMeta = extractMetaContent(htmlSource, "property", "product:brand") || "";
      const specsBarHtml = buildProductSpecsBar(productType, pageName, facts, htmlSource, effectiveTypeSource, brandMeta);
      const enhancedFaqHtml = renderDetailsSummaryFaq(productFaq);
      var productEnhancementHtml = specsBarHtml + enhancedFaqHtml;
    }

    const headers = new Headers(response.headers);
    headers.set("referrer-policy", "strict-origin-when-cross-origin");
    headers.set("permissions-policy", "geolocation=(), camera=(), microphone=()");
    headers.append("Link", '<https://saudivapes.com/sitemap.xml>; rel="sitemap", <https://saudivapes.com/robots.txt>; rel="robots", <https://saudivapes.com/ar/llms.txt>; rel="service-doc"');
    let baseHtml = htmlSource;
    if (isHomePage) baseHtml = upsertHomeMetaHtml(baseHtml);
    baseHtml = upsertSeoAuditMetaHtml(baseHtml, path, request.url);
    const transformResponse = new Response(baseHtml, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });

    const rewriter = new HTMLRewriter().on("head", new HeadSchemasInjector(scripts));
    if (isCategoryPage && intro && faq) {
      rewriter.on("main", new CategoryIntroInjector(intro));
      rewriter.on("section.s-block--testimonials", new CategoryFaqInjector(faq));
    }
    if (isProductPage && productFaq) {
      // Inject specs bar + details/summary FAQ under add-to-cart button
      if (productEnhancementHtml) {
        rewriter.on('head', {
          element(element) {
            element.append(`<style>${PRODUCT_ENHANCEMENT_CSS}</style>`, { html: true });
          }
        });
        rewriter.on('form.product-form', new ProductSpecsAndFaqInjector(productEnhancementHtml));
      }
      // Remove the Salla-generated FAQ section to avoid duplication
      rewriter.on('section.seo-product-faq', new RemoveElement());
    }
    if (isHomePage) {
      rewriter.on("header h1.sr-only", new RemoveElement());
      rewriter.on("body", new HomeReviewsHeadingFixInjector());
      rewriter.on("main", new HomeTopInjector());
      rewriter.on("section.s-block--photos-slider", new HomeCategoriesAfterBannerInjector());
      rewriter.on("main", new HomeBottomInjector());
    }
    if (isBlogArticlePage) {
      const author = extractArticleAuthor(htmlSource);
      const publishedDate = extractArticleDate(htmlSource);
      rewriter.on("article", new BlogAuthorBoxInjector(author, publishedDate));
    }
    if (isBrandPage) {
      const brandName = extractBrandNameFromUrl(path);
      const brandSlug = extractBrandSlug(path);
      const brandIdMatch = path.match(/brand-(\d+)$/);
      const brandId = brandIdMatch ? brandIdMatch[1] : "0";
      const brandIntro = buildBrandIntroData(brandName, brandId, brandSlug);
      const brandFaq = buildBrandFaqData(brandName, brandSlug);
      rewriter.on("main", new BrandIntroInjector(brandIntro));
      rewriter.on("main", new BrandFaqInjector(brandFaq));
    }

    return rewriter.transform(transformResponse);
  },
};

