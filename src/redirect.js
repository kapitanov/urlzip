import { unshorten } from "./core/shortener.js";

export function redirect(href) {
  const url = unshorten(href);
  console.log(`Redirecting to "${url}"...`);
  document.body.innerText = `Redirecting to "${url}"...`;
  window.location = url;
}
