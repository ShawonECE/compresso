import fs from 'fs';

export const getFileSize = (filePath) => {
    const stats = fs.statSync(filePath);
    return stats.size; // Size in bytes
}