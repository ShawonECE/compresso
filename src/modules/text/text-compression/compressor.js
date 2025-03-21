import { serializeHuffmanTree, encodeTextToBinary, getPaddedBinarySequence, binaryStringToBuffer } from "./huffmanEncoder.js";
import { readFileContent } from './../../fileUtils/readFile.js';
import { writeCompressedFile } from './../../fileUtils/writeFile.js';
import { buildHuffmanTree, generateHuffmanCodes } from './huffmanTree.js';

// Adds metadata (Huffman tree and padding) to the compressed buffer.
export const addMetadataToCompressedBuffer = (compressedBuffer, huffmanTree, paddingLength, fileExtension) => {
    const huffmanTreeBuffer = serializeHuffmanTree(huffmanTree);
    const huffmanTreeSizeBuffer = Buffer.alloc(4);
    huffmanTreeSizeBuffer.writeUInt32BE(huffmanTreeBuffer.length, 0);

    const paddingLengthBuffer = Buffer.alloc(1);
    paddingLengthBuffer.writeUInt8(paddingLength, 0);

    const extensionBuffer = Buffer.alloc(8);
    extensionBuffer.write(fileExtension, 'utf-8');

    return Buffer.concat([huffmanTreeSizeBuffer, huffmanTreeBuffer, paddingLengthBuffer, extensionBuffer, compressedBuffer]);
};

// Main function to compress a file.
export const compressFile = (inputFilePath, outputFilePath, fileExtension) => {
    const text = readFileContent(inputFilePath);
    
    const huffmanTree = buildHuffmanTree(text);
    const huffmanCodes = generateHuffmanCodes(huffmanTree);

    const binarySequence = encodeTextToBinary(text, huffmanCodes);
    const { paddedBinary, paddingLength } = getPaddedBinarySequence(binarySequence);

    // console.log(paddedBinary, paddingLength);
    
    const compressedBinaryBuffer = binaryStringToBuffer(paddedBinary);
    const compressedDataWithMetadata = addMetadataToCompressedBuffer(compressedBinaryBuffer, huffmanTree, paddingLength, fileExtension);

    writeCompressedFile(outputFilePath, compressedDataWithMetadata, inputFilePath);
};