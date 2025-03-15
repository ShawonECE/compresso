import { decompressFile } from "./modules/text/text-decompression/decompressor.js";

const compressedFileName = process.argv[2];
if (!compressedFileName) {
    console.error("Please provide a valid compressed file name. Run following command. \nnpm run decompress -- compressedFileName outputFileName");
    process.exit(1);
}

const outputFileName = process.argv[3];
if (!outputFileName) {
    console.error("Please provide a valid output file name. Run following command. \nnpm run decompress -- compressedFileName outputFileName");
    process.exit(1);
}

// Execute decompression
try {
    decompressFile(compressedFileName, outputFileName);
} catch (err) {
    console.error(`Error: ${err.message}`);
}
