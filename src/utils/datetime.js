export function toMessageTimestamp(ts) {
    // Wouldn't be so half assed in real life
    const date  = new Date(ts);

    return date.toLocaleTimeString();
}