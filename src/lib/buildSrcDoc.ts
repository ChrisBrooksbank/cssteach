export function buildSrcDoc(html: string, css: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; }
  body { margin: 0; padding: 12px; font-family: sans-serif; }
</style>
<style>${css}</style>
</head>
<body>${html}</body>
</html>`;
}
