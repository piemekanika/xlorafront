/**
 * Converts ISO date to message date
 *
 * @param dateIso {String}
 */
function convertMessageDate(dateIso) {
    const date = new Date(dateIso);

    return date.toLocaleTimeString();
}

export default convertMessageDate;