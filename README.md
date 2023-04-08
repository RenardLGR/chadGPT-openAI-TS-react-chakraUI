OpenAI Text Generation API Demo<br>
This is a simple demo project that uses the OpenAI Text Generation API to generate text in response to user input. The project is built with JavaScript and uses the Fetch API to make requests to the OpenAI API.

Installation<br>
To use this demo, you will need to create a free account with OpenAI and obtain an API key. You can then add your API key to a .env file in the root of the project:<br>
VITE_OPEN_AI_API_KEY = >your api key<<br>
VITE_OPEN_AI_COMPLETIONS_URL = 'https://api.openai.com/v1/completions'<br>
VITE_OPEN_AI_CHAT_COMPLETIONS_URL = '
https://api.openai.com/v1/chat/completions'<br>
Once you have added your API key, you can install the project dependencies and run the project with the following commands:

npm install<br>
npm run dev<br>
The demo should now be available at http://localhost:5173.<br>

Usage<br>
To use the demo, simply enter some text into the input field and click "✍(◔◡◔)". The generated text will soon be displayed.

You can customize the prompt, temperature, and top-p values used by modifying the getUwuText function in the App.jsx file.

Credits<br>
This project was created by RenardLGR for educational purposes. It uses the OpenAI API and was inspired by the [OpenAI GPT-3 Playground](https://beta.openai.com/playground/).

License<br>
This project is licensed under the MIT License.