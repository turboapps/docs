# OpenAI

Integrating Turbo Server with OpenAI allows end-users to access an artificial intelligence chatbot on their Portal Dashboard. The chatbot will respond to text prompts with contextually relevant answers generated with the OpenAI API using a configurable chat model, such as GPT-3.5 or GPT-4.

The chatbot is hidden by default. Once configured, a Chat tab will appear on the Portal dashboard.

![AI Chat](/images/dashboard-chat-light-mode.png)

### Create an OpenAI API key

To create an OpenAI API key, first visit [OpenAI's official website](https://platform.openai.com/). If you do not already have an account, click **Sign Up** and complete the account creation process.

After creating an account or logging in, click your name in the top-right corner and select **View API keys**. Click **Create new secret key**, then copy the value to configure it in Turbo Server later.

Optionally, you can create an OpenAI organization by clicking your name in the top-right corner and selecting **Invite Team**. Organizations enable multiple team members to manage billing and view usage.

You can generate an OpenAI API key for free and receive limited API tokens. However, for production usage you will need to set up billing with OpenAI.

### Configure Turbo Server

![AI Integration](/images/integrations-ai.png)

Turbo Server must be configured to use the newly created OneDrive application. Once configured, users may connect their OneDrive account from the portal settings.

1. Go to the Turbo Server Administration site **Integrations > Artificial Intelligence (AI)** page.
2. Enter the **API Key** created in the **Create an OpenAI API key** section.
3. Enter the **Max Tokens**. This determines how many API tokens can be consumed per request and affects your OpenAI billing.
4. Enter the **Chat Model**. Your account must have access to the model. For example, GPT-4 is currently only available in limited beta access.
5. Complete the rest of the form with your desired settings.
6. Save your settings.

Next, go to the administration site **General > Appearance** page and make sure that **Show AI Chat** is enabled. This setting can take up to a couple minutes to apply.
