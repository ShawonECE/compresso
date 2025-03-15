import fs from 'fs';

// Reads text input from a file.
export const readFileContent = (filePath) => {
    try {
        return fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
    } catch (err) {
        console.error(`Error reading file: ${err.message}`);
        process.exit(1);
    }
};