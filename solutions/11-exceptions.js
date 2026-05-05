export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

// BEGIN
function parseJson(string) {
  try {
    return JSON.parse(string)
  }
  catch {
    throw new ParseError('Invalid JSON string')
  }
}

export { parseJson }
// END
