// Function to extract metadata and encoded content
export const extractMetadataAndContent = (buffer) => {
    try {
        const huffmanTreeSize = buffer.readUInt32BE(0); // Read Huffman tree size (first 4 bytes)
        const huffmanTreeBuffer = buffer.subarray(4, 4 + huffmanTreeSize); // cut down tree buffer
        const huffmanTree = JSON.parse(huffmanTreeBuffer.toString()); // Deserialize JSON

        const paddingLength = buffer.readUInt8(4 + huffmanTreeSize); // read padding length (next 1 byte)

        const extensionBuffer = buffer.subarray(5 + huffmanTreeSize, 13 + huffmanTreeSize);
        const extension = extensionBuffer.toString('utf-8').replace(/\0/g, '').trim();

        // console.log(extension);

        const encodedBuffer = buffer.subarray(13 + huffmanTreeSize);

        // Convert bytes to binary string & remove padding
        const binarySequence = Array.from(encodedBuffer)
            .map(byte => byte.toString(2).padStart(8, '0'))
            .join('')
            .slice(0, -paddingLength);
            
        return { huffmanTree, binarySequence, extension };
    } catch (error) {
        throw new Error(`Error extracting metadata: ${error.message}`);
    }
};