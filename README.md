# Text Compression Tool

## 📜 Overview
**COMPRESSO** is a command-line application that compresses and decompresses text-based files using an efficient variable length huffman encoding algorithm. It reduces file sizes while preserving content integrity.

## 🚀 Features
- Supports compression and decompression of text-based files (`.txt`, `.md`, `.json`, `.js`, `.py`, `.csv`, `.html`, `.yml`, etc.)
- Uses **Huffman Encoding** for optimized compression
- Command-line interface for easy usage
- Preserves original file structure
- Fast and lightweight

## 📦 Installation
Ensure you have **Node.js** installed, then clone the repository:

```sh
# Clone the repository
git clone https://github.com/ShawonECE/compresso.git
cd compresso
```

## 🛠 Usage

### Compress a File
To compress a text file, keep the file inside `data/input/` and run:
```sh
npm run compress -- inputFileName.extension compressedFileName
```
Example:
```sh
npm run compress -- input.txt compressed
```
This will create a compressed .bin file in `data/compressed/` as `compressed.bin`.

### Decompress a File
To decompress a compressed file, keep the compressed file inside `data/compressed/` and run:
```sh
npm run decompress -- compressedFileName outputFileName
```
Example:
```sh
npm run decompress -- compressed my_output
```
This will restore the file to `data/output/` and the file name will be `my_output.extension`.

## 📂 Folder Structure
```
text-compression-tool/
│── data/
│   ├── compressed/  # Stores compressed files
│   ├── input/      # Stores input text files
│   ├── output/      # Stores decompressed text files
│── src/
│   ├── modules/
│   │   ├── fileUtils/
|   │   │   ├── readFile.js
|   │   │   ├── writeFile.js
│   │   ├── text/
|   │   │   ├── text-compression/
|   |   │   │   ├── compressor.js
|   |   │   │   ├── fileNameHandler.js
|   |   │   │   ├── huffmanEncoder.js
|   |   │   │   ├── huffmanTree.js
|   |   │   │   ├── structures.js
|   │   │   ├── text-decompression/
|   |   │   │   ├── huffmanDecoder.js
|   |   │   │   ├── decompressor.js
|   |   │   │   ├── metadata.js
|   ├── compress.js
│   ├── decompress.js
│── package.json
│── README.md
```

## 🛠 How It Works
1. **Compression**: Reads the input file, builds a Huffman tree, and encodes the data efficiently.
2. **Decompression**: Reads the compressed file, reconstructs the Huffman tree, and restores the original text.

## 📌 Requirements
- Node.js `v16+`

## 🤝 Contributing
Pull requests are welcome! Feel free to open an issue if you find a bug or have suggestions.

## 📞 Contact
For any inquiries, contact: **shahriar.shawon.ece@gmail.com**

