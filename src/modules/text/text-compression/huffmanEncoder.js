// Encodes text into a binary sequence using Huffman codes.
export const encodeTextToBinary = (text, huffmanCodes) => {
    return [...text].map(char => huffmanCodes[char]).join("");
};

// Pads a binary sequence and returns both padded binary and padding length.
export const getPaddedBinarySequence = (binarySequence) => {
    const paddingLength = Math.ceil(binarySequence.length / 8) * 8 - binarySequence.length;
    const paddedBinary = binarySequence.padEnd(binarySequence.length + paddingLength, "0");
    return { paddedBinary, paddingLength };
};

// Converts a binary sequence to a buffer.
export const binaryStringToBuffer = (binarySequence) => {
    const byteArray = [];
    for (let i = 0; i < binarySequence.length; i += 8) {
        byteArray.push(parseInt(binarySequence.slice(i, i + 8), 2));
    }
    return Buffer.from(byteArray);
};

// Serializes a Huffman tree to a Buffer.
export const serializeHuffmanTree = (huffmanTree) => Buffer.from(JSON.stringify(huffmanTree));