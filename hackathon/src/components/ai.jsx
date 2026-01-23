import { GoogleGenAI } from "@google/genai";
const api_key=import.meta.env.GEMINI_API_KEY
const ai = new GoogleGenAI({api_key});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text,"sdsdfjksd");
}

main();