
# TengriNews Clone

TengriNews Clone is a news application that fetches news articles from various categories and allows users to view the latest news, search for specific topics, and read detailed articles.


![](https://github.com/sdilnaz/news-website/blob/master/vid.gif)


## Project Structure

The project is structured using React and utilizes React Router for navigation. It consists of the following components:

- **Navbar**: Navigation bar component for selecting news categories, searching, and accessing different sections of the application.
- **NewsPage**: Displays a list of news articles based on the selected category with pagination and sorting options.
- **NewsItem**: Represents an individual news article card with title, description, date, and image.
- **NewsDetails**: Displays detailed information about a specific news article including title, author, date, image, description, content and link to full article.
- **SearchResultPage**: Shows search results based on user queries with pagination and sorting options.
- **Footer**: Footer component providing additional information 




## Setup Instructions

1. Clone the repository from GitHub: [Repository Link](https://github.com/sdilnaz/news-website)
2. Install dependencies using `npm install`.
3. Start the development server with `npm run dev`.
4. Access the application in your browser at `http://localhost:5173`.



## Project Development

The project follows an incremental development approach with multiple levels of implementation:

1. **Level 1**: Basic functionality to display and view news articles.
2. **Level 2**: Additional features including pagination, filtering, searching, and sorting.
3. **Level 3**: Integration of web scraping or API services for dynamic content fetching.

## Features

### Level 1:

- Display a basic list of news articles.
- Allow users to click on an article to view its detailed information.

### Level 2:

- Implement pagination for navigating through news articles.
- Enable filtering news articles by categories.
- Implement search functionality to find articles by keywords.
- Add sorting options to arrange articles by date or title.

### Level 3:

- Utilize web scraping libraries or APIs to dynamically fetch news content from external sources such as Tengri News.


## Methodologies and Approaches

- The project is built using "React Components"  for modular and reusable UI elements.
- "React Router" utilized for client-side routing and navigation between different views.
- Utilized React hooks such as `useState` for managing component state.
- Integrated the News API to fetch news data based on user requests.
- Implemented responsive design principles to ensure the application is accessible across various devices.


## Known Issues and Improvements

- Does not support news from Kazakhstan 
- Need to improve error handling for API requests and edge cases.
- UI/UX Enhancements for better usability and visual appeal.
- Optimize API calls and rendering for improved performance.
- Add support for multiple languages 
