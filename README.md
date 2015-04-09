# wsimete
Wooden Ships and Iron Men -- end-to-end

Based on https://www.youtube.com/watch?v=AEE7DY2AYvI&list=RDAEE7DY2AYvI#t=7

mongo
  1. by default it opens the test collection
  2. I created wsim collection by saying
     use wsim
  3. show collections
     does not show any in wsim because I have not created any
  4. create and add some ships
     db.ships.insert({ name: "Oregano" })
     db.ships.insert({ name: "Chili" })
  5. show collections
     now shows ships
  6. look at ships
     db.ships.find()

Other npm installations:
1. I installed express
   a. This is installed in the project's directory.  It is not global.
      Express is installed in ../project/node_modules/express
   b. I used npm to install express
      npm install express
2. I installed body-parser
   a. This is installed in the project's directory.  It is not global.
      body-parser is installed in ../project/node_modules/body-parser
   b. I used npm to install body-parse
      npm install body-parser
3. I installed mongoose
   a. This is installed in the project's directory.  It is not global.
      mongoose is installed in ../project/node_modules/mongoose
   b. I used npm to install mongoose
      npm install mongoose

Other notes:
1. sendfile was deprecated
   a. used sendFile instead
2. body-parser was deprecated
   a. used the following instead:
      app.use(bodyParser.urlencoded({
        extended: true
      }));
      app.use(bodyParser.json());