
## Authors

- [@OFD16](https://github.com/OFD16)


## Tech Stack

**Backend:** Node.js, Express.js, Firebase

**Database** PostgreSQL

## Issues
* ```Error: Cannot find module 'C:\Users\CABBAR\Desktop\Node.js-learning\ders7\server'``` >>> ```npm run server``` on cmd



## Get Starting: 

1) first migration //create the tables
2) then add seed // dummy data

The command you will use if you create or change tables in the database for the first time: ```npx knex migrate:up```
to remove seeds : ```npx knex seed:run```

## TODO:
keep the password in the backend. Don't send the password when you want to withdraw user. Encrypt the fron-back password
here it is: compare the encrypted versions to the backend

## Resoruces: 
[heroku](https://www.youtube.com/watch?v=MeChntPkKbs)

**HTTP status codes:**
200 OK 
201 CREATED
202 ACCEPTED
204 NO CONTENT

400 BAD REQUEST
401 UNAUTHORIZED
403 FORBIDDEN

500 Internal Server Error
