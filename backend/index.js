import {Configuration,OpenAIApi} from 'openai';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app=express();
const port=8080;
app.use(bodyParser.json())
app.use(cors());
const configuration=new Configuration({
    organization:"",
    apiKey:"" 
})