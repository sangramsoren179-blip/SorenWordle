export function validateWordData(data) {
    const errors = [];
    const wordsByLength = data?.wordsByLength;

    if (!wordsByLength || typeof wordsByLength !== "object" || Array.isArray(wordsByLength)) {
        return ["Invalid JSON structure: expected a wordsByLength object."];
    }

    for (const [length, words] of Object.entries(wordsByLength)) {
        if (!/^\d+$/.test(length) || Number(length) < 1) {
            errors.push(`Invalid word-length group: "${length}".`);
            continue;
        }

        if (!Array.isArray(words)) {
            errors.push(`Group "${length}" must contain an array of words.`);
            continue;
        }

        const seenWords = new Set();
        let previousWord = null;

        for (const word of words) {
            if (typeof word !== "string" || word.length === 0 || word.trim() !== word) {
                errors.push(`Group "${length}" contains an invalid or empty entry.`);
                continue;
            }

            if (word !== word.toLowerCase()) {
                errors.push(`"${word}" in group "${length}" must be lowercase.`);
            }

            if (word.length !== Number(length)) {
                errors.push(`"${word}" has ${word.length} letters but belongs in group "${length}".`);
            }

            if (seenWords.has(word)) {
                errors.push(`Duplicate word "${word}" in group "${length}".`);
            }

            seenWords.add(word);

            if (previousWord !== null && previousWord.localeCompare(word) > 0) {
                errors.push(`Group "${length}" is not alphabetically sorted near "${previousWord}" and "${word}".`);
            }

            previousWord = word;
        }
    }

    return errors;
}