export default function Robots() {
  return new Response(`User-agent: *\nDisallow: /`, {
    headers: { "content-type": "text/plain" },
  });
}
