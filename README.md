# OpenAI Business Generator Back-end
Creates business names and logos based on the business type.

- **Note:** This is the back-end version of the project.

# Get this project up and running
1. Refer to [OpenAI API keys](https://platform.openai.com/account/api-keys) to get or generate a new API key. Register if necesssary. **Save the API key**;
2. Refer to [OpenAI organization settings](https://platform.openai.com/account/org-settings) and **save your organization ID**;
3. Clone the repository;
4. Create a ".env" file on the project root directory;
5. Add two environment variables to the file called `OPENAI_API_KEY` and `ORGANIZATION_ID`. It should have the following structure:
```
OPENAI_API_KEY = your-api-key-goes-here
ORGANIZATION_ID = your-organization-id-goes-here
```
- Replace `your-api-key-goes-here` with your API key and `your-organization-id-goes-here` with your organization ID generated before (steps 1 and 2);

6. Install every dependencie by executing the following command on the terminal: `npm install`;
7. To start on development mode, execute `npm run dev`. This will allow the server to restart every time the code is changed;
9. To build and start on production mode, execute: `npm run build` and then `npm start`.

# How to test
1. Have an HTTP Client ready like "Insomnia" or "Postman";
2. To generate a business name, make an HTTP `GET` request on `http://localhost:3000/generate-business-name` with a JSON body like the following:
```JSON
{"business_type": "fitness"}
```
Change from "fitness" to another business type of your choice;

3. To generate a business logo, make an HTTP `GET`request on `http://localhost:3000/generate-business-image` with a JSON body like the following:
```JSON
{
	"business_type": "fitness",
	"business_name": "FitMojo"
}
```
This one could take a little longer.
