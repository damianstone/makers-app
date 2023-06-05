# Makers project 

## Initialize the project

### Install dependencies
```bash
npm install --legacy-peer-deps
```

### Set up environment variables 
First, create a `.env` file and add the following variables (for development mode)
```javascript
REACT_APP_BASE_URL=http://127.0.0.1:8000
REACT_APP_MODE="development"
```

### Run the project
Make sure the backend (makers-api) is also running
```bash
npm run start
```

### Deployment 
```bash
npm run build
```
Then:
```bash
firebase deploy
```