# Kafka on the Web

Kafka on the Web is a customer support chatbot project focused on providing real-time assistance with a specific emphasis on the works of Franz Kafka.

View App Live: (Coming Soon)

## Story

I wanted to delve into the world of AI chatbots and enhance my skills in making API calls. As I was reading Franz Kafka's books and captivated by his unique style and themes, I decided to build Kafka on the Web. This project not only allowed me to gain hands-on experience with AI-powered chatbots but also provided an opportunity to feed the AI custom data related to Franz Kafka's works. By doing so, I aimed to create a chatbot that is uniquely focused on the Franz Kafka theme.

## Challenges and Problem Solving

During the development of Kafka on the Web, I encountered a few challenges that required problem-solving:

1. **Real-time streamed chatbot responses:** One of the main challenges was to retrieve and display the chatbot responses in real-time, word by word. After extensive research on the topic, I found a valuable source by Hassan El Mghari that provided insights and guidance on streaming real-time responses. I would like to acknowledge Hassan El Mghari for their contribution.

2. **API limitations and cost:** The AI-powered chatbot API used in this project had limitations on the number of requests and was a paid service. To overcome this challenge, I integrated Redis, an in-memory data store, to cache the API responses. This allowed me to reduce the number of API calls and optimize the usage. Additionally, I implemented a simple solution to showcase the chatbot's functionality by including a demo GIF as a fallback option in case the API has reached its monthly limit.

## Features

- Real-time streamed chatbot responses
- Optimistic updates for the best user experience

## Technologies Used

- TypeScript
- Tailwind CSS
- Icons from Lucide
- Redis for API caching

## Acknowledgements

- [Streaming the realtime responses by Hassan El Mghari](https://vercel.com/templates/next.js/twitter-bio)
- [Awesome Accordion Component](https://ui.shadcn.com/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
-Abbas Mahdavi
