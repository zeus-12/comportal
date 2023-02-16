# TechSoc Hackathon

# Run Instructions

To run the app, do

- yarn
- yarn dev

# Details about Installations

Our Dependencies include

- Mantine(and its dependencies)- A UI component Library,
- Mongoose (ODM for MongoDB),
- Next-auth for authentications,
- react-icons for svg icons, and
- Nextjs,
- Reactjs
- For Dev Dependencies, TailwindCSS and its dependencies

# System Design

The framework used is NextJS, and the Database used is MongoDB.
So basically there were 3 main api routes involved (excluding the authentication part),

- one fetching a particular category of complaints,
- posting to a particular category of complaints,
- fetching the complaints made only by the logged in user(which is done using the cookie-session used within next-auth).

For the 1st api, its open to all, so no authorization/authentication is required. 
And for the 2nd api, the user has to be logged in.
While for the 3rd api, only that particular user can see their complaints.
This is implemented using Next-auth sessions. 
Also server-side rendering is used (was, switched to CSR due to long loading times), in majority of the places so as to make it SEO-friendly and to provide better UI on user state persistence.

# Framework Usage

We used NextJS for building the app. The reason behind it is cause of

- easy routing,
- quick backend setup,
- Server Side rendering and
- Next-auth.

PS: the site is hosted at <a href="https://comportal.vercel.app">Vercel</a>
