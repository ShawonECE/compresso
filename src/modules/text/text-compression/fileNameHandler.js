export const extractFileExtension = (fileName) => {
    if (typeof fileName !== 'string') return null;

    const lastDotIndex = fileName.lastIndexOf('.');
    if (lastDotIndex === -1 || lastDotIndex === 0) return null;

    return fileName.slice(lastDotIndex + 1);
};