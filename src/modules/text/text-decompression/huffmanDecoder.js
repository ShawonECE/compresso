// Huffman Decoder Class
export class HuffmanDecoder {
    constructor(huffmanTree) {
        this.huffmanCodes = this.generateHuffmanCodes(huffmanTree);
    }

    // Generate Huffman codes from tree
    generateHuffmanCodes(node, prefix = "", codes = {}) {
        if (!node) return;
        if (node.char !== null) {
            codes[prefix] = node.char; // Store leaf node mapping
        }
        this.generateHuffmanCodes(node.left, prefix + "0", codes);
        this.generateHuffmanCodes(node.right, prefix + "1", codes);
        return codes;
    }

    // Decode the binary sequence using Huffman codes
    decode(binarySequence) {
        let decodedText = '';
        let tempCode = '';

        for (const bit of binarySequence) {
            tempCode += bit;
            if (this.huffmanCodes[tempCode]) {
                decodedText += this.huffmanCodes[tempCode];
                tempCode = ''; // Reset
            }
        }

        return decodedText;
    }
}