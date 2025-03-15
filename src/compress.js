import { compressFile } from "./modules/text/text-compression/compressor.js";
import path from "path";
import { fileURLToPath } from "url";
import { extractFileExtension } from "./modules/text/text-compression/fileNameHandler.js";

// Convert import.meta.url to __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFileName = process.argv[2];
const fileExtension = extractFileExtension(inputFileName);
if (!inputFileName || !fileExtension) {
    console.error("Please provide a valid input file name. Run following command. \nnpm run compress -- inputFileName.extension compressedFileName");
    process.exit(1);
}

const compressedFileName = process.argv[3];
if (!compressedFileName) {
    console.error("Please provide a valid compressed file name. Run following command. \nnpm run compress -- inputFileName.extension compressedFileName");
    process.exit(1);
}

// Construct absolute path
const inputFilePath = path.join(__dirname, `../data/input/${inputFileName}`);
const compressedFilePath = path.join(__dirname, `../data/compressed/${compressedFileName}.bin`);

// Run the compression
try {
    compressFile(inputFilePath, compressedFilePath, fileExtension);
} catch (err) {
    console.error(`Error: ${err.message}`);
}