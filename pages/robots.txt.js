export async function getServerSideProps({ res }) {
  const robots = `User-agent: *
Allow: /

Sitemap: https://mi-proyecto-seo-maxi.onrender.com/sitemap.xml`;

  res.setHeader("Content-Type", "text/plain");
  res.write(robots);
  res.end();
  return { props: {} };
}

export default function RobotsTxt() { return null; }