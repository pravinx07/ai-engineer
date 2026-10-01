import { encodingForModel } from "js-tiktoken";

const message = "I am an artificial intelligence engineer"

const encoder = encodingForModel("gpt-4")

const token = encoder.encode(message)


console.log("Message:" ,message);
console.log("Characters:", message.length);
console.log("Words:",message.trim().split(/\s+/).length);
console.log("Tokens:", token.length);
console.log("Token ID:", token);



