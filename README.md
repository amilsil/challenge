Usage Instructions
------------------

### Install the following prerequisites

- Nodejs : latest (https://nodejs.org/en/)
- Git (https://git-scm.com/downloads)

### Clone, Test and Execute

- Clone the repo by executing `git clone git://github.com/amilsil/challenge` on the terminal
- Navigate to cloned folder
- Install node modules using `npm i`
- Execute `npm start` in the terminal
- Run tests using `npm test`
- Run `npm run coverage` to check test coverage.


Understanding Structure
-----------------------

```
app
 |
 |__helpers              - helpers that can generally be reused
 |__search               - all search related code
     |-- common          - common to search functionality, base classes, resolvers
     |-- organisations   - organisations related
     |-- tickets         - ..
     |-- users           - ..
 |__types                - custom types and interfaces used within the system
 |__index.ts             - main entry point
```

To Consider
-----------

Performance:
  - We load the file per every search now. Should at minimum cache after loading.
  - Will be even better if we could search while reading a stream (rather than
  loading the whole file to memory)

Current test coverage
---------------------

Here's a snapshot of the current test coverage

```
yarn run v1.21.1
$ jest --coverage
PASS app/search/common/__tests__/startUserMenu.test.ts
PASS app/helpers/__tests__/ConsoleIO.test.ts
PASS app/helpers/__tests__/searchJSON.test.ts
PASS app/search/organisations/__tests__/OrganisationSearchHandler.test.ts
PASS app/search/users/__tests__/UserSearchHandler.test.ts
PASS app/search/tickets/__tests__/TicketSearchHandler.test.ts
-------------------------------|---------|----------|---------|---------|-------------------
File                           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------------------|---------|----------|---------|---------|-------------------
All files                      |   84.26 |    85.71 |   67.86 |   82.56 |                   
 constants                     |     100 |      100 |     100 |     100 |                   
  index.ts                     |     100 |      100 |     100 |     100 |                   
 helpers                       |   59.46 |       50 |   30.77 |   54.84 |                   
  ConsoleIO.ts                 |   43.75 |      100 |   14.29 |   42.86 | 7,11,15-18,21,27  
  index.ts                     |     100 |      100 |     100 |     100 |                   
  readJsonFile.ts              |      25 |        0 |       0 |      25 | 4-7,9,10          
  searchJSON.ts                |     100 |      100 |     100 |     100 |                   
 search/common                 |   96.08 |    88.89 |     100 |   97.56 |                   
  BaseSearchHandler.ts         |     100 |      100 |     100 |     100 |                   
  resolveFileName.ts           |     100 |      100 |     100 |     100 |                   
  startUserMenu.ts             |      90 |    81.82 |     100 |   94.12 | 38                
 search/organisations          |     100 |      100 |     100 |     100 |                   
  OrganisationSearchHandler.ts |     100 |      100 |     100 |     100 |                   
 search/tickets                |     100 |      100 |     100 |     100 |                   
  TicketSearchHandler.ts       |     100 |      100 |     100 |     100 |                   
 search/users                  |     100 |      100 |     100 |     100 |                   
  UserSearchHandler.ts         |     100 |      100 |     100 |     100 |                   
-------------------------------|---------|----------|---------|---------|-------------------

Test Suites: 6 passed, 6 total
Tests:       15 passed, 15 total
Snapshots:   0 total
Time:        1.67s
Ran all test suites.
Done in 2.21s.
```
