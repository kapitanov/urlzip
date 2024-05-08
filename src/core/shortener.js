import * as smaz from "@remusao/smaz";
import { Chars, BufferEncoder } from "bufferbase";

const encoder = new BufferEncoder(Chars.Base64_URL_SAFE);

function rootUrl() {
  let url = window.location.href;

  while (url.endsWith("/")) {
    url = url.substring(0, url.length - 1);
  }
  return url;
}

export function shorten(url) {
  const shortHref = encoder.encode(smaz.compress(url));
  const resultUrl = `${rootUrl()}?${shortHref}`;

  const originalSize = url.length;
  const compressedSize = resultUrl.length;
  const compressionRatio = (100 * compressedSize) / originalSize;

  console.log(`Shortened "${url}" to "${resultUrl}":`);
  console.log(`  ${originalSize} bytes -> ${compressedSize} bytes`);
  console.log(`  Compression ratio: ${compressionRatio.toFixed(2)}%`);

  return {
    url: resultUrl,
    originalSize,
    compressedSize: compressedSize,
    ratio: compressionRatio,
  };
}

export function unshorten(url) {
  url = url.substr(1);
  return smaz.decompress(encoder.decode(url));
}
