const testURL = process.env.testURL;
const apiKey = process.env.apiKey;
let config;

if(testURL && apiKey) {
 config = {
      "testURL": testURL,
      "timeout": "15000",
      "apiKey": apiKey
  };
} else {
  throw new Error('environmental variables testURL and apiKey not set');
}

export default config;
