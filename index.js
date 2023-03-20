import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv';
dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, 
})

const openai = new OpenAIApi(configuration);

export async function runCompletion(prompt) {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: prompt}]
    })
    console.log(completion.data.choices[0].message);
};

// messages: [{role: "user", content: prompt}]