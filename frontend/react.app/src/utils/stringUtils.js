export function trimStart(character, string) {
    let startIndex = 0;

    while (string[startIndex] === character) {
        startIndex++;
    }

    return string.substr(startIndex);
}

export function trimEnd(character, string) {
    return reverse(trimStart(character, reverse(string)));
}

function reverse(string) {
    return string
        .split("")
        .reverse()
        .join("");
}