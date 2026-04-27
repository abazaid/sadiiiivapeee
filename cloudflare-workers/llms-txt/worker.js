import { LLMS_TXT, LLMS_FULL_TXT } from "./llms-content.js";

const AGENTS_JSON = JSON.stringify({
  "version": "0.1.0",
  "name": "Saudi Vape Store",
  "description": "Explore Saudi Vape's products and categories.",
  "flows": [
    {
      "id": "browse_store",
      "description": "Browse the vape store homepage",
      "steps": [
        {
          "operationId": "get_homepage",
          "description": "Get the homepage"
        }
      ]
    }
  ]
}, null, 2);

const AI_PLUGIN_JSON = JSON.stringify({
  "schema_version": "v1",
  "name_for_human": "Saudi Vape Store",
  "name_for_model": "saudi_vape_store",
  "description_for_human": "Explore and buy premium vape products from Saudi Vape.",
  "description_for_model": "Use this plugin to answer questions about Saudi Vape's products, flavors, and devices.",
  "api": {
    "type": "openapi",
    "url": "https://saudivapes.com/openapi.yaml",
    "is_user_authenticated": false
  },
  "auth": {
    "type": "none"
  },
  "logo_url": "https://cdn.salla.sa/jbXEY/Bv6FKwLWFVbiOi6heH08B3RhVCMM1MkOAkYbQ2YX.png",
  "contact_email": "support@saudivapes.com",
  "legal_info_url": "https://saudivapes.com/ar/privacy"
}, null, 2);

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.hostname === "saudivapes.com" && url.pathname === "/llms.txt") {
      url.pathname = "/ar/llms.txt";
      return Response.redirect(url.toString(), 301);
    }

    if (url.hostname === "saudivapes.com" && url.pathname === "/ar/llms.txt") {
      return new Response(LLMS_TXT, {
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "public, max-age=600",
          "x-content-type-options": "nosniff",
          "referrer-policy": "strict-origin-when-cross-origin",
          "permissions-policy": "geolocation=(), camera=(), microphone=()",
        },
      });
    }

    if (url.hostname === "saudivapes.com" && url.pathname === "/llms-full.txt") {
      url.pathname = "/ar/llms-full.txt";
      return Response.redirect(url.toString(), 301);
    }

    if (url.hostname === "saudivapes.com" && url.pathname === "/ar/llms-full.txt") {
      return new Response(LLMS_FULL_TXT, {
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "public, max-age=600",
          "x-content-type-options": "nosniff",
          "referrer-policy": "strict-origin-when-cross-origin",
          "permissions-policy": "geolocation=(), camera=(), microphone=()",
        },
      });
    }

    if (url.hostname === "saudivapes.com" && (url.pathname === "/agents.json" || url.pathname === "/.well-known/agents.json" || url.pathname === "/ar/agents.json" || url.pathname === "/ar/.well-known/agents.json")) {
      return new Response(AGENTS_JSON, {
        headers: {
          "content-type": "application/json; charset=utf-8",
          "cache-control": "public, max-age=3600",
          "access-control-allow-origin": "*"
        },
      });
    }

    if (url.hostname === "saudivapes.com" && (url.pathname === "/.well-known/ai-plugin.json" || url.pathname === "/ar/.well-known/ai-plugin.json")) {
      return new Response(AI_PLUGIN_JSON, {
        headers: {
          "content-type": "application/json; charset=utf-8",
          "cache-control": "public, max-age=3600",
          "access-control-allow-origin": "*"
        },
      });
    }

    if (url.hostname === "saudivapes.com" && (url.pathname === "/openapi.yaml" || url.pathname === "/ar/openapi.yaml")) {
      const openapi = `openapi: 3.0.0
info:
  title: Saudi Vape Store API
  version: 1.0.0
servers:
  - url: https://saudivapes.com
paths:
  /:
    get:
      summary: Get homepage
      responses:
        '200':
          description: OK`;
      return new Response(openapi, {
        headers: {
          "content-type": "text/yaml; charset=utf-8",
          "cache-control": "public, max-age=3600",
          "access-control-allow-origin": "*"
        },
      });
    }

    return fetch(request);
  },
};
