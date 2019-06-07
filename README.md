# Project Name

> System Design Project, focusing on optimal page speeds and performance.


## Root Project

  - https://github.com/part-of-maia-s-boba-squad/


## Table of Contents

1. [Usage](#Usage)
1. [API Examples] (#apiexamples)
1. [Setup Instructions](#setupinstructions)
1. [Requirements](#requirements)
1. [Development](#development)


## Usage

> API CRUD Information

| API Endpoints               | Type   | Input               | Output                                    | Description                         |
| --------------------------- | ------ | ------------------- | ----------------------------------------- | ----------------------------------- |
| /API/restaurant/reviews/:id | GET    | Restaurant ID       | Restaurant Document with Array of reviews | Gets reviews for restaurant queried |
| /API/restaurant/reviews/    | POST   | Restaurant Document | STATUS CODE 201                           | Create a Restaurant Document        |
| /API/restaurant/reviews/:id | PATCH  | Restaurant ID       | STATUS CODE 200                           | Update a Restaurant Document        |
| /API/restaurant/reviews/:id | DELETE | Restaurant ID       | STATUS CODE 200                           | Delete a Restaurant Document        |

## API Examples

| Type | Response Body |
|GET   |  [{reviewsId:42343,userId:6621207,reportCount:2,helpfulCount:12,overallRating:4,foodRating:5,serviceRating:5,ambienceRating:5,text:"Nemo similique vero ut quis deserunt. Natus ad laborum voluptatibus nisi veniam."} ,[<review2>], [<review3>], ... |
|POST  |  {userId:6621207,reportCount:0,helpfulCount:0,overallRating:4,foodRating:5,serviceRating:5,ambienceRating:5,text:"Nemo similique vero ut quis deserunt. Natus ad laborum voluptatibus nisi veniam."} | 

## Setup Instructions

> How to have this repo running locally:
1. npm install 
1. npm install -g webpack


## Requirements

1. Node 6.13.0


## Development


## Installing Dependencies
