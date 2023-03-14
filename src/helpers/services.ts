import dotenv from "dotenv";
import {
  Configuration,
  OpenAIApi,
  CreateCompletionResponse,
  ImagesResponse,
} from "openai";

// Add environment variables to the node process
dotenv.config();

const { OPENAI_API_KEY, ORGANIZATION_ID } = process.env;

// OpenAI configuration
const openAiConfig = new Configuration({
  organization: ORGANIZATION_ID,
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(openAiConfig);

const getModels = () =>
  new Promise((resolve, reject) =>
    openai
      .listModels()
      .then((res) => resolve(res.data))
      .catch(reject)
  );

const getBusinessName = (
  businessType: string
): Promise<CreateCompletionResponse> =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `one business name for a ${businessType} business in one line`,
      });

      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });

const generateImageForBusiness = (
  businessName: string
): Promise<ImagesResponse> =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await openai.createImage({
        prompt: `Logo for a business called '${businessName}'`,
      });

      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });

export { getModels, getBusinessName, generateImageForBusiness };
