import { unshorten } from "./core/shortener.js";

export async function redirect(href) {
  const url = await unshorten(href);
  console.log(`Redirecting to "${url}"...`);
  document.body.innerText = `Redirecting to "${url}"...`;
  window.location = url;
}
