import { MinHeap } from './structures.js';
import { HuffmanNode } from './structures.js';

// Builds a Huffman Tree from the input text.
export const buildHuffmanTree = (text) => {
    const freqMap = new Map();
    for (const char of text) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    const minHeap = new MinHeap();
    for (const [char, freq] of freqMap) {
        minHeap.push(new HuffmanNode(char, freq));
    }

    while (minHeap.size() > 1) {
        const left = minHeap.pop();
        const right = minHeap.pop();
        const newNode = new HuffmanNode(null, left.freq + right.freq, left, right);
        minHeap.push(newNode);
    }

    return minHeap.pop();
};

// Generates Huffman codes from a Huffman Tree.
export const generateHuffmanCodes = (node, prefix = "", codes = {}) => {
    if (!node) return;
  
    if (node.char !== null) {
        codes[node.char] = prefix;
    }
  
    generateHuffmanCodes(node.left, prefix + "0", codes);
    generateHuffmanCodes(node.right, prefix + "1", codes);
  
    return codes;
};