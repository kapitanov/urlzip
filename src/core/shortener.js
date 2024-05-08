import * as smaz from "@remusao/smaz";
import { Chars, BufferEncoder } from "bufferbase";

const encoder = new BufferEncoder(Chars.Base64_URL_SAFE);
const textDecoder = new TextDecoder();

function rootUrl() {
  let url = window.location.href;

  while (url.endsWith("/")) {
    url = url.substring(0, url.length - 1);
  }
  return url;
}

export async function shorten(url) {
  const compressedBuffer = smaz.compress(url);
  const compressesString = encoder.encode(compressedBuffer);
  const resultUrl = `${rootUrl()}?${compressesString}`;

  const originalSize = url.length;
  const compressedSize = compressedBuffer.length;
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

export async function unshorten(url) {
  url = url.substr(1);
  const decompressedBuffer = smaz.decompress(url);
  const decompressedString = textDecoder.decode(decompressedBuffer);
  return decompressedString;
}
