# URL Zip

This is a tiny project that mimics the behavior of a URL shortener.
But instead of actually shortening URLs, it just ZIPs them!

Actually, it uses [SMAZ](https://github.com/antirez/smaz), not ZIP, but you get the idea.

## How it works

First, you need to shorten an URL:

1. You enter a URL in the input field.
2. The URL is compressed using [Brotli](https://en.wikipedia.org/wiki/Brotli).
3. The compressed data is encoded in [base64](https://en.wikipedia.org/wiki/Base64).
4. Finally, the encoded data is appended to the URL as a query parameter.

Then, you can expand the URL:

1. Visit the shortened URL.
2. The encoded data is extracted from the query parameter.
3. The data is decoded from base64.
4. The data is decompressed using Brotli.
5. The original URL is extracted from the decompressed data.
6. You are redirected to the original URL.

## How to build

```bash
# Install dependencies
yarn

# Build project (into "dist" directory)
yarn clean && yarn build

# Run development server with hot reload
yarn serve
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
