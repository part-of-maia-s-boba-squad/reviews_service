# Project Name

> Project description

## Root Project

  - https://github.com/part-of-maia-s-boba-squad/

## Table of Contents

1. [Usage](#Usage)
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

## Setup Instructions

> How to have this repo running locally:
1. npm install 
1. npm install -g webpack

## Requirements

- Node 6.13.0

## Development

### Installing Dependencies
