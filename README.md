# Search Functionality Full-Stack Application 

# Introduction
## Overview
The "Search Functionality" application is a full-stack web application designed to provide users with powerful search and filter capabilities for a dataset. This documentation covers both the frontend and backend aspects of the application.

The application's primary purpose is to allow users to search and filter data retrieved from a JSON file on the backend. It offers a feature-rich frontend that provides an intuitive interface for users to input search queries and view the results.

## Purpose
The purpose of the "Search Functionality" application is to:

•	Enable users to search and filter data with ease.

•	Provide a responsive and user-friendly interface.

•	Implement dynamic sorting and pagination for large datasets.

•	Allow for future enhancements through file uploads.


## Features
Frontend Features

•	Search data based on various criteria such as ID, Name, Age, Address, Email, Phone, Education, Skills, and Projects.

•	Sort data columns in ascending or descending order.

•	Paginate through the search results for better usability.



## Backend Features
•	Provide data from a JSON file to the frontend.

•	Implement dynamic data filtering based on user-provided search queries.

•	Handle file uploads for potential future enhancements.

•	Use environment variables for configuration management and security.



## Prerequisites: 
• Node.js 

• npm

## Links:
Application Link:  https://search-functionality-frontend.vercel.app/

GitHub link for Frontend: https://github.com/HarikowshikMolugu/searchFunctionality_Frontend

GitHub Link for Backend:
https://github.com/HarikowshikMolugu/searchFunctionality_Backend

Platform used for Deployment:   Vercel








# Frontend Development

## Technologies Used
The frontend of the application is built using React.js and utilizes several libraries and components. Key technologies include:

•	React.js: A JavaScript library for building user interfaces.

•	React Paginate: A pagination component for React.

•	Axios: A promise-based HTTP client for making API requests.
## Component Structure
The frontend consists of two main components:

•	App.js: The entry point of the application that renders the main content.

•	Search.js: The core component responsible for handling search, filtering, sorting, and pagination.
## Search and Filtering
### Searching
The Search component allows users to enter search queries for various data columns, including ID, Name, Age, Address, Email, Phone, Education, Skills, and Projects. It dynamically filters data based on the entered queries, providing instant feedback to users.

### Sorting
Users can sort columns in ascending or descending order by clicking on column headers. The sorting functionality is implemented for columns such as ID, Name, Street, City, Country, and Email.
Pagination

The application includes a pagination component that divides the search results into pages for easier navigation. Users can click through the pages to view different subsets of data. I have taken the Page size as 5.


# Backend Development
## Technologies Used
The backend of the application is built using Node.js and utilizes various libraries and modules. Key technologies include:

•	Node.js: A JavaScript runtime for building scalable server-side applications.

•	Express.js: A web application framework for Node.js.

•	Multer: Middleware for handling file uploads.

•	dotenv: A module for loading environment variables.

•	fs and path: Node.js modules for file system operations and path manipulation.

## Project Structure
The backend follows a structured project layout:

•	server.js: The main entry point of the backend application.

•	dataController.js: A controller responsible for data retrieval and filtering logic.

## Middleware
Several middleware components are used in the backend, including:

•	multer: Middleware for handling file uploads.

•	express.json(): Middleware for parsing JSON requests.

•	express.urlencoded(): Middleware for parsing URL-encoded requests.

•	express.static(): Middleware for serving static files.

•	cors: Middleware for enabling Cross-Origin Resource Sharing.

## API Endpoints
The backend provides a single API endpoint:
•	GET /api/data/:filter: Retrieves and filters data based on the provided filter query parameter.

## Data Retrieval and Filtering
Data is read from a JSON file (gistfile1.json) and filtered based on user-provided search queries. The filtering logic is recursive and can traverse nested objects and arrays within the data.

## Error Handling
Robust error handling is implemented to ensure the application gracefully handles errors. It returns appropriate HTTP status codes and error messages when issues occur during data retrieval and filtering.

## Additional Features
### File Upload (Multer)
The backend supports file uploads using the Multer middleware. While not currently used in the application, this feature can be extended for various use cases, such as user profile picture uploads or data updates.
### Environment Variables (dotenv)
Sensitive information and configuration settings are stored in a .env file and loaded into the application using the dotenv module. This practice enhances security and simplifies configuration management.

# Usage:

1.The landing page of the application
![image](https://github.com/HarikowshikMolugu/checkReadme/assets/104977337/0be2bbb0-9d67-4f65-8146-f8609171f19e)




2.The Search button is used for Server side search: Invokes API call, enter the search query in the input field and click the Search button so that the data will be filtered based on query and display it in the below table format.

![image](https://github.com/HarikowshikMolugu/checkReadme/assets/104977337/9b56e5aa-f396-4c65-83a1-39bf391a6186)

![image](https://github.com/HarikowshikMolugu/checkReadme/assets/104977337/566d06d1-d41c-4be1-aafe-7d39f2a12bde)


3.Searching the data at the individual columns: It is a client side search it does not invoke the API call.
 
![image](https://github.com/HarikowshikMolugu/checkReadme/assets/104977337/4741d279-4fcb-4742-9349-ef7f67c88925)

![image](https://github.com/HarikowshikMolugu/checkReadme/assets/104977337/7b8e7d16-8a48-4e9b-9de4-7381097a21f1)



4. Sorting the numeric column data: To sort the data click the sort icon that is placed in the header fields of columns.

Sorted data by id in Ascending order: 

 ![image](https://github.com/HarikowshikMolugu/checkReadme/assets/104977337/00cafde8-2bb3-41f8-9c19-3d2f1723bb0b)


Sorted data by id in Descending order:
 
![image](https://github.com/HarikowshikMolugu/checkReadme/assets/104977337/78eb9e7b-7e88-4e6e-b683-f4f83ae537eb)




5.Sorting the String type column data: The String type of column data can be sorted in two ways and in this the numeric values are also considered as characters.

Sorted the column Street in the order of A-Z:
 ![image](https://github.com/HarikowshikMolugu/checkReadme/assets/104977337/5a9ec97a-ab6d-4278-a83f-17bd9de570ab)


Sorted the column Street in the order of Z-A:

![image](https://github.com/HarikowshikMolugu/checkReadme/assets/104977337/6c35a82d-f243-46ff-bd8c-8802539bc797)


# Conclusion
The "Search Functionality" full-stack application combines the power of React.js on the frontend and Node.js with Express.js on the backend to deliver an efficient and user-friendly search and filter experience. It also includes features like sorting, pagination, and the potential for future enhancements with file uploads.

This documentation provides an overview of the application's structure, functionality, and key technologies used. Feel free to expand and customize this documentation to suit your specific project requirements.

