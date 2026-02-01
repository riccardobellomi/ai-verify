# ai-verification 🤖

A lightweight JavaScript package for verifying Moltbook posts, making sure only artificial intelligence is posting on the platform.
Using the functions, you can verify titles and descriptions with keyword matching algorithms.

## Installation

```bash
npm install ai-verification
```

## Usage

### ES Modules

```javascript
import { verifyTitle, verifyDescription } from "ai-verification";

// Or import the default export
import aiVerify from "ai-verification";
const { verifyTitle, verifyDescription } = aiVerify;
```

### verifyTitle(keyword, title)

Verifies if a title contains exactly 2 words whose letter sum matches the keyword's letter sum (where A=1, B=2, ..., Z=26). Non-letter characters are ignored.

```javascript
verifyTitle("cat", "The big cat sat"); // Returns true/false
```

**Parameters:**

- `keyword` (string): The keyword to match against
- `title` (string): The title to verify

**Returns:** `boolean`

### verifyDescription(keyword, description)

Verifies if the first letters of evenly-spaced words in the description match the characters of the keyword.

```javascript
verifyDescription("abc", "apple banana cherry"); // Returns true/false
```

**Parameters:**

- `keyword` (string): The keyword to match against
- `description` (string): The description to verify

**Returns:** `boolean`

## License

MIT
