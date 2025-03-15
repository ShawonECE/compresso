import fs from 'fs';

// Writes the compressed buffer to a file.
export const writeCompressedFile = (filePath, data) => {
    try {
        fs.writeFileSync(filePath, data);
        console.log(`File compressed successfully to ${filePath}`);
    } catch (err) {
        console.error(`Error writing file: ${err.message}`);
    }
};