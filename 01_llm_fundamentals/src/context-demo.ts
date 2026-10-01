const systemPrompt = `You are a helpfull AI assistant.
Always answer clearly and concisely.`;

const conversation = [
    {
        role :"user",
        content:"My name is Pravin."
    },
    {
        role: "assistant",
        content:"Nice to meet you , Pravin"
    },
    {
        role:"user",
        content:"I am learning AI Engineering."
    }
];


const currentQuestion = "What am i learning?";

console.log("System:");
console.log(systemPrompt);
console.log("\nCONVERSATION");
console.log(conversation);

console.log("\nCURRENT QUESTION:");
console.log(currentQuestion);


