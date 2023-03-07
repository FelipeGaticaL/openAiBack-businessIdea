const ApiError = require("../middleware/apiError");
const httpStatus = require("http-status");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
/* process.env.OPENAI_API_KEY */
const openai = new OpenAIApi(configuration);

const postApi = async (e) => {
  try {
    console.log(e);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Brainstorm some business ideas combining ${e.firstParameter} and ${e.secondParameter}`,
      temperature: 0.6,
      max_tokens: 200,
      top_p: 1,
      frequency_penalty: 1,
      presence_penalty: 1,
    });

   /*  console.log(response.data) */
    const data = {data: response.data.choices[0].text}

    return data;
  } catch (error) {
    throw new ApiError('Error al hacer petición', httpStatus.UNPROCESSABLE_ENTITY)
  }
};

module.exports = {
  postApi,
};
