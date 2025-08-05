const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    const apiKey = import.meta.env.VITE_OPENROUTER_KEY;

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost:5173", // or your deployed site
                "X-Title": "My Recipe App"
            },
            body: JSON.stringify({
                model: "mistralai/mistral-7b-instruct",
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
                ]
            }),
        });

        const data = await response.json();
        console.log("OpenRouter response:", data);

        if (!data.choices || !Array.isArray(data.choices) || !data.choices.length) {
            return "Sorry, I couldn't generate a recipe.";
        }

        return data.choices[0].message.content;
    } catch (err) {
        console.error("OpenRouter error:", err.message);
        return "Something went wrong while fetching the recipe.";
    }
}
