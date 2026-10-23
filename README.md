
# Node.js Demo App - CI/CD Pipeline

A sample Node.js application demonstrating CI/CD automation using GitHub Actions and Docker Hub.

## Technology Stack

- Node.js
- Express.js
- Node.js built-in test runner
- Docker
- GitHub Actions
- Docker Hub

## Application Endpoints

- `/` - Returns application information
- `/health` - Returns the application health status

## CI/CD Workflow

When code is pushed to the `main` branch, GitHub Actions:

1. Checks out the repository.
2. Sets up Node.js.
3. Installs dependencies.
4. Runs automated tests.
5. Builds the Docker image.
6. Pushes the image to Docker Hub.

## Run Locally

```bash
npm ci
npm test
npm start

<img width="1470" height="956" alt="Screenshot 2026-10-23 at 11 31 46 AM" src="https://github.com/user-attachments/assets/c7e95231-291d-42f2-a5ed-bc62a649a84c" />


<img width="1470" height="956" alt="Screenshot 2026-10-23 at 12 03 09 PM" src="https://github.com/user-attachments/assets/26e422f9-1c83-4b0d-b88c-2efe7a6b9247" />
