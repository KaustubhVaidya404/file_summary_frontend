
# File Summary Frontend

This is the frontend repository of the project File Summary. This project is created for internship assignmnet. The project accepts csv/xslxx/xlxx file from the user and generates data and displays in record formate.


## Features

- Acceptes csv and xlsxx files
- Fast execution
- File storage


## Tech Stack

**Client:** React, Css

**Server:** Django


## Run Locally

Clone the project

```bash
  git clone https://github.com/KaustubhVaidya404/file_summary_frontend.git
```

Go to the project directory

```bash
  cd file_summary_frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Installation

Install my-project with npm

```bash
  npm i
```
    
## API Reference


#### POST item

```
  POST /api/v1/upload/

  {"headers": {"Content-Type": "multipart/form-data"}}
```
