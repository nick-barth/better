/**
 *  DO NOT EXAMINE THIS FILE PLEASE DONT LOOK AT ANY OF THIS
 * @param {ts} unix timestramp 
 */

export function convertToMessageTimestamp(ts) {
    const date  = new Date(ts);
    const minutes = date.getMinutes();
    const hours = date.getHours();

    function addTrailingZero(time) {
        const timeString = time.toString();
        if (timeString.length === 1) {
            return '0' + timeString;
        } else {
            return timeString;
        }
    }

    return hours + ':' + addTrailingZero(minutes);
}