# challenge-toolbox

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

List of software you need to install and how to install them, for example:

- Node.js (version 14 and 16)
- Docker
- npm

### Installation

Step by step series of examples that tell you how to get a development environment running.

1. Clone the repository
2. Go to backend or frontend folder and install dependencies `npm install`
   Backend: `node index` you should have a message that the server is running.
   Frontend: `npm start`
3. For both folders you can run `npm test` to run the respective tests.

### Docker:

Make sure you are on the correct folder and the respective ports are not being used.

Backend:

1. `docker build -t backend`
2. `docker run -p 4000:4000 backend`

Frontend:

1. `docker build -t frontend`
2. `docker run -p 3000:3000 frontend`

Thanks for reading.
