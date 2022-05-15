export const SECURITY_HEADERS = {
  "strict-transport-security": "max-age=63072000; includeSubdomains; preload",
  "content-security-policy":
    "default-src 'none'; connect-src 'self'; img-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; object-src 'none'",
  "x-content-type-options": "nosniff",
  "x-frame-options": "DENY",
  "x-xss-protection": "1; mode=block",
};

export const TEXT_HTML = "text/html";
export const APPLICATION_JSON = "application/json";
