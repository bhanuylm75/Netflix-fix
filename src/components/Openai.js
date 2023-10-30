import OpenAI from "openai"
import { openaikey } from "./Utils";
const openai = new OpenAI({
  apiKey: openaikey,
  dangerouslyAllowBrowser: true,
});

export default openai;