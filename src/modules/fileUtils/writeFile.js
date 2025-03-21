import fs from 'fs';
import { getFileSize } from './fileSize.js';

// Writes the compressed buffer to a file.
export const writeCompressedFile = (outputFilePath, data, inputFilePath) => {
    try {
        fs.writeFileSync(outputFilePath, data);
        const inputFileSize = getFileSize(inputFilePath);
        const compressedFileSize = getFileSize(outputFilePath);
        const compressionRatio = compressedFileSize / inputFileSize;
        const compressionPercentage = Math.floor((1 - compressionRatio) * 100);
        console.log(`File compressed successfully by ${compressionPercentage}% to ${outputFilePath}`);
    } catch (err) {
        console.error(`Error writing file: ${err.message}`);
    }
};