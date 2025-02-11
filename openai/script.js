import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: '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',
  defaultHeaders: {
    'HTTP-Referer': '<YOUR_SITE_URL>', // Replace with your site URL
    'X-Title': '<YOUR_SITE_NAME>', // Replace with your site name
  },
});

document.getElementById('searchBtn').addEventListener('click', async () => {
  const query = document.getElementById('query').value;
  const resultElement = document.getElementById('result');

  try {
    const completion = await openai.chat.completions.create({
      model: 'openai/gpt-4o',
      messages: [
        {
          role: 'user',
          content: query,
        },
      ],
    });

    resultElement.textContent = completion.choices[0].message.content;
  } catch (error) {
    resultElement.textContent = 'Error: ' + error.message;
  }
});
