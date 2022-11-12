/**
 *
 * @param {string} string String to be formated
 * @param {number} maxSize By default, maxSize is 40
 * @returns {string | null} Returns a formated string or "null" if the argument provided is not correct
 * @example
 * // returns "Qual a melhor linguagem de programação d..."
 * formatStringSize('Qual a melhor linguagem do programação do mundo?');
 */
const formatStringSize = (string, maxSize = 40) => {
  if (!string || typeof string !== "string") return null;
  return string.length > maxSize ? `${string.slice(0, maxSize)}...` : string;
};

export default formatStringSize;
