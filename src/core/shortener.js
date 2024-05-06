import { compress, decompress } from "brotli-compress";
import { Chars, BufferEncoder } from "bufferbase";

const customDictionary = Buffer.from('https.com/?#')

const encoder = new BufferEncoder(Chars.Base64_URL_SAFE);
const utf16Decoder = new TextDecoder("UTF-8");

export async function shorten(url) {
  const inputBuffer = Buffer.from(url);
  const compressedBuffer = await compress(inputBuffer, { customDictionary });
  const compressesString = encoder.encode(compressedBuffer);
  const resultUrl = `${window.location.origin}?${compressesString}`;

  const compressionRatio = (100 * compressedBuffer.length) / inputBuffer.length;
  console.log(`Shortened "${url}" to "${resultUrl}":`);
  console.log(`  ${inputBuffer.length} bytes -> ${compressedBuffer.length} bytes`);
  console.log(`  Compression ratio: ${compressionRatio.toFixed(2)}%`);

  return resultUrl;
}

export async function unshorten(url) {
  url = url.substr(1);
  const compressedBuffer = encoder.decode(url);
  const decompressedBuffer = await decompress(compressedBuffer, { customDictionary });
  const decompressedString = utf16Decoder.decode(decompressedBuffer);
  return decompressedString;
}
