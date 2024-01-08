import express from "express";
import cors from "cors";
import OpenAIApi from "openai";
import Configuration from "openai";
import bodyParser from "body-parser";

const app = express();
const port = 8080;
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
const configuration = new Configuration({
  organization: "org-LBLBbO6QFryT6YO2tZsrCRJd",
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);
app.post("/", async (request, response) => {
  console.log(response.body);

  try {
    const { chats } = request.body;
    const result = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are EbereGPT. You can write emails and letters.",
        },
        ...chats,
      ],
    });

    response.json({
      output: result.data.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
