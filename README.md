# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Exccute `npm install` on the same path as of your root dirextory of the downloaded poject
- Create a `.env` file in the root directory and the following environment variable 
     - `PORT=3000`
- nside the `sec/config`folder create a new file `config.json` and then add the following piece of json.


```
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Airline_Backend_Project",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
```
- Once you've added your DB config as listed above,go to the src folder from your terminal and execute `npx sequelize db:create`
```

## DB Design
  - Airplane Table
  - Flight Table
  - Airport Table
  - City 

  - A flight belongs to an airplane but one airplane can be used in multiple flights.
  - A city has many airports but one airpport belongs to a city.
  - One airport can have many flights, but a flight belongs to one airport.

   