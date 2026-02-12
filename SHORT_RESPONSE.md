# Short Response Questions

Answer each of these questions completely but concisely. Use the proper technical terminology. You may refer to the [Marcy Lab School Docs](https://marcylabschool.gitbook.io/marcy-lab-school-docs) or Google but do NOT copy and paste definitions or explanations verbatim.

You can earn up to 6 points for each response (3 points for writing quality, 3 points for technical content).

Before submitting your responses, use a spell checker / AI to ensure that you have no grammar or spelling mistakes.

## Question 1: Asynchronous Code

Functions like `fetch()` are "asynchronous". Explain what that means and why it is so important to be able to execute code asynchronously?

**Your Answer: Fetch() is asynchronous so it can start getting data from a server while the rest of the code keeps running. This is important because things like network requests can take time, and if the code has to wait, the whole app could freeze. Asynchronous code helps keep websites fast and responsive.
**

## Question 2: GET vs. POST

What is the difference between a `GET` request and a `POST` request? Provide examples in real world applications where each might be used under the hood?

**Your Answer: A GET request is used to get information from a server, like loading products or user data. A POST request is used to send information to a server, such as submitting a form or creating a new account. For example, opening a product page uses a GET request, while submitting a login or checkout form uses a POST request.
**

## Question 3: What is Vite and Why Use It?

What is Vite? What problem does it solve? And are there alternatives?

**Your Answer: Vite is a tool used to help build and run frontend web projects. It solves the problem of slow development servers by loading files faster and updating changes instantly.
**
