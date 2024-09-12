# react-native-text-encryption

## React Native Text Encryption

React Native Text Encryption SDK provides simple and effective text encryption and decryption functionalities, supporting multiple algorithms.

## Installation

To install the SDK, run the following command:

```sh
npm install react-native-text-encryption
```

## Usage

To use the SDK, import the necessary components and utilize the useEncryption hook to encrypt and decrypt text. Below is an example implementation:

```js
import { AlgorithmTypes, useEncryption } from 'react-native-text-encryption';

// ...

 const {
    encryption,
    decryption,
  } = useEncryption();

// ...
 const handleEncrypt = () => {
    let result: string;
    result = encryption('Hello world', 3, AlgorithmTypes.CEASER);
    }
  };

  const handleDecrypt = () => {
    let result: string;
    result = decryption('KHOORZRUOG', 3, AlgorithmTypes.CEASER);
    }
  };
// ...
```

In this example, we encrypt the text "Hello world" using a Caesar cipher with a shift of 3, and then decrypt it.

## Supported Algorithms

- Caesar Cipher (AlgorithmTypes.CAESAR)
- XOR Cipher (AlgorithmTypes.XOR)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
