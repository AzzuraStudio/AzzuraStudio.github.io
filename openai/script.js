import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: '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',
  defaultHeaders: {
    'HTTP-Referer': '<YOUR_SITE_URL>', // Replace with your site URL
    'X-Title': '<YOUR_SITE_NAME>', // Replace with your site name
  },
});

// Function to get query parameter from URL
function getQueryParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Function to display result in JSON format
function displayResult(result) {
  const resultElement = document.getElementById('result');
  resultElement.textContent = JSON.stringify(result, null, 2);
}

// Check if there's a query parameter in the URL
const queryFromUrl = getQueryParameter('query');
if (queryFromUrl) {
  document.getElementById('query').value = queryFromUrl;
  document.getElementById('searchBtn').click();
}

document.getElementById('searchBtn').addEventListener('click', async () => {
  const query = document.getElementById('query').value;

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

    // Display the result in JSON format
    displayResult({
      query: query,
      response: completion.choices[0].message.content,
    });
  } catch (error) {
    displayResult({ error: error.message });
  }
});
