import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";
import { extractMetadataAndContent } from './metadata.js';
import { HuffmanDecoder } from './huffmanDecoder.js';

// Main decompression function
export const decompressFile = (compressedFileName, outputFileName) => {
    try {
        // Convert import.meta.url to __dirname
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        // Construct absolute path
        const compressedFilePath = path.join(__dirname, `../../../../data/compressed/${compressedFileName}.bin`);

        const compressedData = fs.readFileSync(compressedFilePath);
        const { huffmanTree, binarySequence, extension } = extractMetadataAndContent(compressedData);

        const decoder = new HuffmanDecoder(huffmanTree);
        const decodedText = decoder.decode(binarySequence);

        // Construct absolute path
        const outputFilePath = path.join(__dirname, `../../../../data/output/${outputFileName}.${extension}`);
        // console.log(outputFilePath, extension);
        
        fs.writeFileSync(outputFilePath, decodedText);
        console.log(`Decompression completed: '${outputFilePath}'`);
    } catch (error) {
        console.error(`Decompression failed: ${error.message}`);
    }
};