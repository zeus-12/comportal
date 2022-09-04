# TechSoc Hackathon

# Run Instructions

To run the app, do
yarn
yarn dev

# Details about Installations

Our dev dependencies include TailwindCSS and its dependencies, and for the dependencies we used include mantine(and its dependencies)- A UI component Library, Mongoose (ODM for MongoDB), next-auth for authentications, react-icons for svg icons, and Nextjs, reactjs.

# System Design

The framework used is NextJS, and the Database used is MongoDB.
So basically there were 2 main api routes involved (excluding the authentication part), one fetching a particular category of complaints, and the other fetching only the complaints made by the particular person(which is done using the cookie-session used within next-auth). For the 1st api, its open to all, so no authorization/authentication is required. Whereas for the 2nd api, only that particular user can see their complaints.
This is implemented using Next-auth sessions. Also server-side rendering is used in majority of the places so as to make it SEO-friendly and to provide better UI on user state persistence.

# Framework Usage

We used NextJS for building the app. The reason behind it is cause of easy routing, quick backend setup, and Server Side rendering and Next-auth.

PS: the site is hosted in <a href="https://comportal.vercel.app">Vercel</a>
