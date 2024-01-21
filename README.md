<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

# LOG HISTORY
```
dimaspriyandi@Dimass-MacBook-Pro undangan-api %  touch Dockerfile
dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker build -t nestjs-app .
[+] Building 7.4s (10/11)                                                    docker:desktop-linux
 => [internal] load .dockerignore                                                            0.0s
 => => transferring context: 2B                                                              0.0s
 => [internal] load build definition from Dockerfile                                         0.0s
 => => transferring dockerfile: 570B                                                         0.0s
 => [internal] load metadata for docker.io/library/node:18                                   4.4s
 => [internal] load build context                                                            2.9s
 => => transferring context: 241.03MB                                                        2.8s
 => CANCELED [1/7] FROM docker.io/library/node:18@sha256:995a5f4314885452a4a785abc25a0fec40  3.0s
 => => resolve docker.io/library/node:18@sha256:995a5f4314885452a4a785abc25a0fec40e26c34655  0.0s
 => => sha256:f419b1a62fc83850ab3cb43274970bb20a18ae6e674535478a48f5bee115 4.19MB / 23.58MB  3.0s
 => => sha256:bb86bb438ab90bd444cff11f31c9a72cafd223185dda8986d4a2ae986b23b 7.35kB / 7.35kB  0.0s
 => => sha256:5665c1f9a9e17acd68ae05b2839df402eac34afdd095f8c115f09886d757 1.05MB / 49.59MB  3.0s
 => => sha256:76b4f1810f998c1f1580e2404b2e7fed8e264902d898bbe531443ea9789b 7.34MB / 63.99MB  3.0s
 => => sha256:995a5f4314885452a4a785abc25a0fec40e26c346559e11e709d58bb7a927 1.21kB / 1.21kB  0.0s
 => => sha256:6a5a75da5bf220e8102c07fe7755c72f612b4231548b6495201ce5568f877 2.00kB / 2.00kB  0.0s
 => CACHED [2/7] WORKDIR /usr/src/app                                                        0.0s
 => CACHED [3/7] COPY package*.json ./                                                       0.0s
 => CACHED [4/7] RUN npm install                                                             0.0s
 => CACHED [5/7] COPY . .                                                                    0.0s
 => ERROR [6/7] COPY .env .env.development ./                                                0.0s
------
 > [6/7] COPY .env .env.development ./:
------
Dockerfile:17
--------------------
  15 |     
  16 |     # Copy the .env and .env.development files
  17 | >>> COPY .env .env.development ./
  18 |     
  19 |     # Creates a "dist" folder with the production build
--------------------
ERROR: failed to solve: failed to compute cache key: failed to calculate checksum of ref 2fc7bb3b-be19-4044-8ebd-423837deaedb::u80fy9jnux7kqi8y40sttw2ug: "/.env.development": not found
dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker build -t nestjs-app .
[+] Building 5.1s (10/11)                                                    docker:desktop-linux
 => [internal] load build definition from Dockerfile                                         0.0s
 => => transferring dockerfile: 570B                                                         0.0s
 => [internal] load .dockerignore                                                            0.0s
 => => transferring context: 2B                                                              0.0s
 => [internal] load metadata for docker.io/library/node:18                                   4.5s
 => CANCELED [1/7] FROM docker.io/library/node:18@sha256:995a5f4314885452a4a785abc25a0fec40  0.5s
 => => resolve docker.io/library/node:18@sha256:995a5f4314885452a4a785abc25a0fec40e26c34655  0.0s
 => => sha256:76b4f1810f998c1f1580e2404b2e7fed8e264902d898bbe531443ea9789b7641 0B / 63.99MB  0.5s
 => => sha256:6a5a75da5bf220e8102c07fe7755c72f612b4231548b6495201ce5568f877 2.00kB / 2.00kB  0.0s
 => => sha256:bb86bb438ab90bd444cff11f31c9a72cafd223185dda8986d4a2ae986b23b 7.35kB / 7.35kB  0.0s
 => => sha256:f419b1a62fc83850ab3cb43274970bb20a18ae6e674535478a48f5bee11559b6 0B / 23.58MB  0.5s
 => => sha256:995a5f4314885452a4a785abc25a0fec40e26c346559e11e709d58bb7a927 1.21kB / 1.21kB  0.0s
 => => sha256:5665c1f9a9e17acd68ae05b2839df402eac34afdd095f8c115f09886d757840c 0B / 49.59MB  0.5s
 => [internal] load build context                                                            0.5s
 => => transferring context: 1.64MB                                                          0.5s
 => CACHED [2/7] WORKDIR /usr/src/app                                                        0.0s
 => CACHED [3/7] COPY package*.json ./                                                       0.0s
 => CACHED [4/7] RUN npm install                                                             0.0s
 => CACHED [5/7] COPY . .                                                                    0.0s
 => ERROR [6/7] COPY .env .env.development ./                                                0.0s
------
 > [6/7] COPY .env .env.development ./:
------
Dockerfile:17
--------------------
  15 |     
  16 |     # Copy the .env and .env.development files
  17 | >>> COPY .env .env.development ./
  18 |     
  19 |     # Creates a "dist" folder with the production build
--------------------
ERROR: failed to solve: failed to compute cache key: failed to calculate checksum of ref 2fc7bb3b-be19-4044-8ebd-423837deaedb::rbtz9sbixw1e5twfn88o4h3q2: "/.env.development": not found
dimaspriyandi@Dimass-MacBook-Pro undangan-api % touch .dockerignore
dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker build -t nest-cloud-run .
[+] Building 144.8s (10/10) FINISHED                                         docker:desktop-linux
 => [internal] load build definition from Dockerfile                                         0.0s
 => => transferring dockerfile: 437B                                                         0.0s
 => [internal] load .dockerignore                                                            0.0s
 => => transferring context: 97B                                                             0.0s
 => [internal] load metadata for docker.io/library/node:18                                   4.5s
 => [1/6] FROM docker.io/library/node:18@sha256:995a5f4314885452a4a785abc25a0fec40e26c346  112.5s
 => => resolve docker.io/library/node:18@sha256:995a5f4314885452a4a785abc25a0fec40e26c34655  0.0s
 => => sha256:5665c1f9a9e17acd68ae05b2839df402eac34afdd095f8c115f09886d 49.59MB / 49.59MB  103.2s
 => => sha256:f419b1a62fc83850ab3cb43274970bb20a18ae6e674535478a48f5bee11 23.58MB / 23.58MB  8.0s
 => => sha256:76b4f1810f998c1f1580e2404b2e7fed8e264902d898bbe531443ea978 63.99MB / 63.99MB  61.9s
 => => sha256:995a5f4314885452a4a785abc25a0fec40e26c346559e11e709d58bb7a927 1.21kB / 1.21kB  0.0s
 => => sha256:6a5a75da5bf220e8102c07fe7755c72f612b4231548b6495201ce5568f877 2.00kB / 2.00kB  0.0s
 => => sha256:bb86bb438ab90bd444cff11f31c9a72cafd223185dda8986d4a2ae986b23b 7.35kB / 7.35kB  0.0s
 => => sha256:1c176cbf649709b5d8a03720a6c53e18e33ad50feef33abe83c5ae95 202.50MB / 202.50MB  94.3s
 => => sha256:22485b2ffedb3d237b350d6092c407738c6a13e22c40734709ce9c0a8bb0 3.37kB / 3.37kB  62.8s
 => => sha256:e08c15b5ab9bdc1b282320dd0674b88d0ab91ceb96cdfedd304152d6e 46.12MB / 46.12MB  104.7s
 => => sha256:b489cd602caff8ee488065777c4513a2f996c9760af357a33e5fb0732ea8 2.21MB / 2.21MB  96.5s
 => => sha256:820c51ad94980772f38cf93f75bc68c6d0a3c78a8fc0af28c6150fb7d762b8ed 453B / 453B  97.1s
 => => extracting sha256:5665c1f9a9e17acd68ae05b2839df402eac34afdd095f8c115f09886d757840c    1.3s
 => => extracting sha256:f419b1a62fc83850ab3cb43274970bb20a18ae6e674535478a48f5bee11559b6    0.3s
 => => extracting sha256:76b4f1810f998c1f1580e2404b2e7fed8e264902d898bbe531443ea9789b7641    1.5s
 => => extracting sha256:1c176cbf649709b5d8a03720a6c53e18e33ad50feef33abe83c5ae95c5aabdb2    3.8s
 => => extracting sha256:22485b2ffedb3d237b350d6092c407738c6a13e22c40734709ce9c0a8bb0ff12    0.0s
 => => extracting sha256:e08c15b5ab9bdc1b282320dd0674b88d0ab91ceb96cdfedd304152d6e240bf98    1.2s
 => => extracting sha256:b489cd602caff8ee488065777c4513a2f996c9760af357a33e5fb0732ea89ce7    0.0s
 => => extracting sha256:820c51ad94980772f38cf93f75bc68c6d0a3c78a8fc0af28c6150fb7d762b8ed    0.0s
 => [internal] load build context                                                            0.6s
 => => transferring context: 11.27kB                                                         0.6s
 => [2/6] WORKDIR /usr/src/app                                                               0.5s
 => [3/6] COPY package*.json ./                                                              0.0s
 => [4/6] RUN npm install                                                                   25.7s
 => [5/6] COPY . .                                                                           0.0s
 => ERROR [6/6] RUN npm run build                                                            1.5s
------
 > [6/6] RUN npm run build:
0.255 
0.255 > undangan-api@0.0.1 build
0.255 > nest build
0.255 
1.400 src/comments/entities/comment.entity.ts:1:10 - error TS2305: Module '"@prisma/client"' has no exported member 'Comment'.
1.400 
1.400 1 import { Comment } from '@prisma/client';
1.400            ~~~~~~~
1.400 src/user/entities/user.entity.ts:1:10 - error TS2305: Module '"@prisma/client"' has no exported member 'User'.
1.400 
1.400 1 import { User } from '@prisma/client';
1.400            ~~~~
1.400 
1.400 Found 2 error(s).
1.400 
------
Dockerfile:17
--------------------
  15 |     
  16 |     # Creates a "dist" folder with the production build
  17 | >>> RUN npm run build
  18 |     
  19 |     # Start the server using the production build
--------------------
ERROR: failed to solve: process "/bin/sh -c npm run build" did not complete successfully: exit code: 1
dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker build -t nest-cloud-run .
[+] Building 5.0s (10/10) FINISHED                                           docker:desktop-linux
 => [internal] load .dockerignore                                                            0.0s
 => => transferring context: 97B                                                             0.0s
 => [internal] load build definition from Dockerfile                                         0.0s
 => => transferring dockerfile: 437B                                                         0.0s
 => [internal] load metadata for docker.io/library/node:18                                   3.1s
 => [1/6] FROM docker.io/library/node:18@sha256:995a5f4314885452a4a785abc25a0fec40e26c34655  0.0s
 => [internal] load build context                                                            0.0s
 => => transferring context: 12.07kB                                                         0.0s
 => CACHED [2/6] WORKDIR /usr/src/app                                                        0.0s
 => CACHED [3/6] COPY package*.json ./                                                       0.0s
 => CACHED [4/6] RUN npm install                                                             0.0s
 => [5/6] COPY . .                                                                           0.1s
 => ERROR [6/6] RUN npm run build                                                            1.8s
------                                                                                            
 > [6/6] RUN npm run build:                                                                       
0.400 
0.400 > undangan-api@0.0.1 build
0.400 > nest build
0.400 
1.735 src/comments/entities/comment.entity.ts:3:15 - error TS2305: Module '"@prisma/client"' has no exported member 'Comment'.
1.735 
1.735 3 import type { Comment } from '@prisma/client';
1.735                 ~~~~~~~
1.735 src/user/entities/user.entity.ts:3:15 - error TS2305: Module '"@prisma/client"' has no exported member 'User'.
1.735 
1.735 3 import type { User } from '@prisma/client';
1.735                 ~~~~
1.735 
1.735 Found 2 error(s).
1.735 
------
Dockerfile:17
--------------------
  15 |     
  16 |     # Creates a "dist" folder with the production build
  17 | >>> RUN npm run build
  18 |     
  19 |     # Start the server using the production build
--------------------
ERROR: failed to solve: process "/bin/sh -c npm run build" did not complete successfully: exit code: 1
dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker build -t nest-cloud-run .
[+] Building 2.8s (10/10) FINISHED                                           docker:desktop-linux
 => [internal] load build definition from Dockerfile                                         0.0s
 => => transferring dockerfile: 437B                                                         0.0s
 => [internal] load .dockerignore                                                            0.0s
 => => transferring context: 97B                                                             0.0s
 => [internal] load metadata for docker.io/library/node:18                                   1.1s
 => [1/6] FROM docker.io/library/node:18@sha256:995a5f4314885452a4a785abc25a0fec40e26c34655  0.0s
 => [internal] load build context                                                            0.0s
 => => transferring context: 12.06kB                                                         0.0s
 => CACHED [2/6] WORKDIR /usr/src/app                                                        0.0s
 => CACHED [3/6] COPY package*.json ./                                                       0.0s
 => CACHED [4/6] RUN npm install                                                             0.0s
 => [5/6] COPY . .                                                                           0.1s
 => ERROR [6/6] RUN npm run build                                                            1.6s
------                                                                                            
 > [6/6] RUN npm run build:                                                                       
0.313 
0.313 > undangan-api@0.0.1 build
0.313 > nest build
0.313 
1.625 src/comments/entities/comment.entity.ts:3:10 - error TS2305: Module '"@prisma/client"' has no exported member 'Comment'.
1.625 
1.625 3 import { Comment } from '@prisma/client';
1.625            ~~~~~~~
1.625 src/user/entities/user.entity.ts:3:10 - error TS2305: Module '"@prisma/client"' has no exported member 'User'.
1.625 
1.625 3 import { User } from '@prisma/client';
1.625            ~~~~
1.625 
1.626 Found 2 error(s).
1.626 
------
Dockerfile:17
--------------------
  15 |     
  16 |     # Creates a "dist" folder with the production build
  17 | >>> RUN npm run build
  18 |     
  19 |     # Start the server using the production build
--------------------
ERROR: failed to solve: process "/bin/sh -c npm run build" did not complete successfully: exit code: 1
dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker build -t nest-cloud-run .
[+] Building 2.6s (10/10) FINISHED                                           docker:desktop-linux
 => [internal] load .dockerignore                                                            0.0s
 => => transferring context: 97B                                                             0.0s
 => [internal] load build definition from Dockerfile                                         0.0s
 => => transferring dockerfile: 437B                                                         0.0s
 => [internal] load metadata for docker.io/library/node:18                                   0.9s
 => [1/6] FROM docker.io/library/node:18@sha256:995a5f4314885452a4a785abc25a0fec40e26c34655  0.0s
 => [internal] load build context                                                            0.0s
 => => transferring context: 11.76kB                                                         0.0s
 => CACHED [2/6] WORKDIR /usr/src/app                                                        0.0s
 => CACHED [3/6] COPY package*.json ./                                                       0.0s
 => CACHED [4/6] RUN npm install                                                             0.0s
 => [5/6] COPY . .                                                                           0.1s
 => ERROR [6/6] RUN npm run build                                                            1.6s
------                                                                                            
 > [6/6] RUN npm run build:                                                                       
0.288 
0.288 > undangan-api@0.0.1 build
0.288 > nest build
0.288 
1.548 src/comments/entities/comment.entity.ts:3:10 - error TS2305: Module '"@prisma/client"' has no exported member 'Comment'.
1.548 
1.548 3 import { Comment } from '@prisma/client';
1.548            ~~~~~~~
1.548 src/user/entities/user.entity.ts:3:10 - error TS2305: Module '"@prisma/client"' has no exported member 'User'.
1.548 
1.548 3 import { User } from '@prisma/client';
1.548            ~~~~
1.548 
1.548 Found 2 error(s).
1.548 
------
Dockerfile:17
--------------------
  15 |     
  16 |     # Creates a "dist" folder with the production build
  17 | >>> RUN npm run build
  18 |     
  19 |     # Start the server using the production build
--------------------
ERROR: failed to solve: process "/bin/sh -c npm run build" did not complete successfully: exit code: 1
dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker build -t nest-cloud-run .
[+] Building 4.1s (10/10) FINISHED                                           docker:desktop-linux
 => [internal] load .dockerignore                                                            0.0s
 => => transferring context: 97B                                                             0.0s
 => [internal] load build definition from Dockerfile                                         0.0s
 => => transferring dockerfile: 437B                                                         0.0s
 => [internal] load metadata for docker.io/library/node:18                                   2.3s
 => [1/6] FROM docker.io/library/node:18@sha256:995a5f4314885452a4a785abc25a0fec40e26c34655  0.0s
 => [internal] load build context                                                            0.0s
 => => transferring context: 11.87kB                                                         0.0s
 => CACHED [2/6] WORKDIR /usr/src/app                                                        0.0s
 => CACHED [3/6] COPY package*.json ./                                                       0.0s
 => CACHED [4/6] RUN npm install                                                             0.0s
 => [5/6] COPY . .                                                                           0.1s
 => ERROR [6/6] RUN npm run build                                                            1.7s
------                                                                                            
 > [6/6] RUN npm run build:                                                                       
0.297 
0.297 > undangan-api@0.0.1 build
0.297 > nest build
0.297 
1.634 src/comments/entities/comment.entity.ts:4:10 - error TS2305: Module '"../../../node_modules/.prisma/client"' has no exported member 'Comment'.
1.634 
1.634 4 import { Comment } from '../../../node_modules/.prisma/client';
1.634            ~~~~~~~
1.634 src/user/entities/user.entity.ts:3:10 - error TS2305: Module '"@prisma/client"' has no exported member 'User'.
1.634 
1.634 3 import { User } from '@prisma/client';
1.634            ~~~~
1.634 
1.634 Found 2 error(s).
1.634 
------
Dockerfile:17
--------------------
  15 |     
  16 |     # Creates a "dist" folder with the production build
  17 | >>> RUN npm run build
  18 |     
  19 |     # Start the server using the production build
--------------------
ERROR: failed to solve: process "/bin/sh -c npm run build" did not complete successfully: exit code: 1
dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker build -t nest-cloud-run .
[+] Building 2.7s (10/10) FINISHED                                           docker:desktop-linux
 => [internal] load build definition from Dockerfile                                         0.0s
 => => transferring dockerfile: 437B                                                         0.0s
 => [internal] load .dockerignore                                                            0.0s
 => => transferring context: 97B                                                             0.0s
 => [internal] load metadata for docker.io/library/node:18                                   0.9s
 => [1/6] FROM docker.io/library/node:18@sha256:995a5f4314885452a4a785abc25a0fec40e26c34655  0.0s
 => [internal] load build context                                                            0.0s
 => => transferring context: 12.68kB                                                         0.0s
 => CACHED [2/6] WORKDIR /usr/src/app                                                        0.0s
 => CACHED [3/6] COPY package*.json ./                                                       0.0s
 => CACHED [4/6] RUN npm install                                                             0.0s
 => [5/6] COPY . .                                                                           0.1s
 => ERROR [6/6] RUN npm run build                                                            1.7s
------                                                                                            
 > [6/6] RUN npm run build:                                                                       
0.317 
0.317 > undangan-api@0.0.1 build
0.317 > nest build
0.317 
1.697 src/comments/entities/comment.entity.ts:4:10 - error TS2305: Module '"@prisma/client"' has no exported member 'Comment'.
1.697 
1.697 4 import { Comment } from '@prisma/client';
1.697            ~~~~~~~
1.697 src/user/entities/user.entity.ts:3:23 - error TS2305: Module '"@prisma/client"' has no exported member 'User'.
1.697 
1.697 3 import { PrismaClient,User } from '@prisma/client';
1.697                         ~~~~
1.697 
1.697 Found 2 error(s).
1.697 
------
Dockerfile:17
--------------------
  15 |     
  16 |     # Creates a "dist" folder with the production build
  17 | >>> RUN npm run build
  18 |     
  19 |     # Start the server using the production build
--------------------
ERROR: failed to solve: process "/bin/sh -c npm run build" did not complete successfully: exit code: 1
dimaspriyandi@Dimass-MacBook-Pro undangan-api % npx prisma generate 
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma

✔ Generated Prisma Client (v5.8.1) to ./node_modules/@prisma/client in 63ms

Start using Prisma Client in Node.js (See: https://pris.ly/d/client)
```
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
```
or start using Prisma Client at the edge (See: https://pris.ly/d/accelerate)
```
import { PrismaClient } from '@prisma/client/edge'
const prisma = new PrismaClient()
```

See other ways of importing Prisma Client: http://pris.ly/d/importing-client

┌─────────────────────────────────────────────────────────────┐
│  Deploying your app to serverless or edge functions?        │
│  Try Prisma Accelerate for connection pooling and caching.  │
│  https://pris.ly/cli/accelerate                             │
└─────────────────────────────────────────────────────────────┘

dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker build -t nest-cloud-run .
[+] Building 2.8s (10/10) FINISHED                                           docker:desktop-linux
 => [internal] load build definition from Dockerfile                                         0.0s
 => => transferring dockerfile: 437B                                                         0.0s
 => [internal] load .dockerignore                                                            0.0s
 => => transferring context: 97B                                                             0.0s
 => [internal] load metadata for docker.io/library/node:18                                   1.0s
 => [1/6] FROM docker.io/library/node:18@sha256:995a5f4314885452a4a785abc25a0fec40e26c34655  0.0s
 => [internal] load build context                                                            0.0s
 => => transferring context: 11.15kB                                                         0.0s
 => CACHED [2/6] WORKDIR /usr/src/app                                                        0.0s
 => CACHED [3/6] COPY package*.json ./                                                       0.0s
 => CACHED [4/6] RUN npm install                                                             0.0s
 => CACHED [5/6] COPY . .                                                                    0.0s
 => ERROR [6/6] RUN npm run build                                                            1.7s
------                                                                                            
 > [6/6] RUN npm run build:                                                                       
0.340 
0.340 > undangan-api@0.0.1 build
0.340 > nest build
0.340 
1.676 src/comments/entities/comment.entity.ts:4:10 - error TS2305: Module '"@prisma/client"' has no exported member 'Comment'.
1.676 
1.676 4 import { Comment } from '@prisma/client';
1.676            ~~~~~~~
1.676 src/user/entities/user.entity.ts:3:23 - error TS2305: Module '"@prisma/client"' has no exported member 'User'.
1.676 
1.676 3 import { PrismaClient,User } from '@prisma/client';
1.676                         ~~~~
1.676 
1.677 Found 2 error(s).
1.677 
------
Dockerfile:17
--------------------
  15 |     
  16 |     # Creates a "dist" folder with the production build
  17 | >>> RUN npm run build
  18 |     
  19 |     # Start the server using the production build
--------------------
ERROR: failed to solve: process "/bin/sh -c npm run build" did not complete successfully: exit code: 1
dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker build -t nest-cloud-run .
[+] Building 2.7s (10/10) FINISHED                                           docker:desktop-linux
 => [internal] load build definition from Dockerfile                                         0.0s
 => => transferring dockerfile: 437B                                                         0.0s
 => [internal] load .dockerignore                                                            0.0s
 => => transferring context: 97B                                                             0.0s
 => [internal] load metadata for docker.io/library/node:18                                   1.0s
 => [internal] load build context                                                            0.0s
 => => transferring context: 11.41kB                                                         0.0s
 => [1/6] FROM docker.io/library/node:18@sha256:995a5f4314885452a4a785abc25a0fec40e26c34655  0.0s
 => CACHED [2/6] WORKDIR /usr/src/app                                                        0.0s
 => CACHED [3/6] COPY package*.json ./                                                       0.0s
 => CACHED [4/6] RUN npm install                                                             0.0s
 => [5/6] COPY . .                                                                           0.1s
 => ERROR [6/6] RUN npm run build                                                            1.6s
------                                                                                            
 > [6/6] RUN npm run build:                                                                       
0.323 
0.323 > undangan-api@0.0.1 build
0.323 > nest build
0.323 
1.603 src/comments/entities/comment.entity.ts:4:10 - error TS2305: Module '"@prisma/client"' has no exported member 'Comment'.
1.603 
1.603 4 import { Comment } from '@prisma/client';
1.603            ~~~~~~~
1.603 src/user/entities/user.entity.ts:3:10 - error TS2305: Module '"@prisma/client"' has no exported member 'User'.
1.603 
1.603 3 import { User } from '@prisma/client';
1.603            ~~~~
1.603 
1.603 Found 2 error(s).
1.603 
------
Dockerfile:17
--------------------
  15 |     
  16 |     # Creates a "dist" folder with the production build
  17 | >>> RUN npm run build
  18 |     
  19 |     # Start the server using the production build
--------------------
ERROR: failed to solve: process "/bin/sh -c npm run build" did not complete successfully: exit code: 1
dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker build -t nest-cloud-run .
[+] Building 4.3s (10/10) FINISHED                                           docker:desktop-linux
 => [internal] load .dockerignore                                                            0.0s
 => => transferring context: 97B                                                             0.0s
 => [internal] load build definition from Dockerfile                                         0.0s
 => => transferring dockerfile: 437B                                                         0.0s
 => [internal] load metadata for docker.io/library/node:18                                   2.5s
 => [1/6] FROM docker.io/library/node:18@sha256:995a5f4314885452a4a785abc25a0fec40e26c34655  0.0s
 => [internal] load build context                                                            0.0s
 => => transferring context: 11.88kB                                                         0.0s
 => CACHED [2/6] WORKDIR /usr/src/app                                                        0.0s
 => CACHED [3/6] COPY package*.json ./                                                       0.0s
 => CACHED [4/6] RUN npm install                                                             0.0s
 => [5/6] COPY . .                                                                           0.1s
 => ERROR [6/6] RUN npm run build                                                            1.7s
------                                                                                            
 > [6/6] RUN npm run build:                                                                       
0.317 
0.317 > undangan-api@0.0.1 build
0.317 > nest build
0.317 
1.676 src/comments/entities/comment.entity.ts:4:10 - error TS2305: Module '"@prisma/client"' has no exported member 'Comment'.
1.676 
1.676 4 import { Comment } from '@prisma/client';
1.676            ~~~~~~~
1.676 src/user/entities/user.entity.ts:3:10 - error TS2305: Module '"@prisma/client"' has no exported member 'User'.
1.676 
1.676 3 import { User } from '@prisma/client';
1.676            ~~~~
1.676 
1.677 Found 2 error(s).
1.677 
------
Dockerfile:17
--------------------
  15 |     
  16 |     # Creates a "dist" folder with the production build
  17 | >>> RUN npm run build
  18 |     
  19 |     # Start the server using the production build
--------------------
ERROR: failed to solve: process "/bin/sh -c npm run build" did not complete successfully: exit code: 1
dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker build -t nest-cloud-run .
[+] Building 6.7s (12/12) FINISHED                                           docker:desktop-linux
 => [internal] load build definition from Dockerfile                                         0.0s
 => => transferring dockerfile: 461B                                                         0.0s
 => [internal] load .dockerignore                                                            0.0s
 => => transferring context: 97B                                                             0.0s
 => [internal] load metadata for docker.io/library/node:18                                   1.2s
 => [1/7] FROM docker.io/library/node:18@sha256:995a5f4314885452a4a785abc25a0fec40e26c34655  0.0s
 => [internal] load build context                                                            0.0s
 => => transferring context: 11.76kB                                                         0.0s
 => CACHED [2/7] WORKDIR /usr/src/app                                                        0.0s
 => CACHED [3/7] COPY package*.json ./                                                       0.0s
 => CACHED [4/7] RUN npm install                                                             0.0s
 => [5/7] COPY . .                                                                           0.1s
 => [6/7] RUN npx prisma generate                                                            1.2s
 => [7/7] RUN npm run build                                                                  2.3s
 => exporting to image                                                                       1.8s 
 => => exporting layers                                                                      1.8s
 => => writing image sha256:3e0dfa828b39c46da3ece9630d8a8c400c877e4637fdd98e0c236d20450b0b9  0.0s
 => => naming to docker.io/library/nest-cloud-run                                            0.0s
dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker images
REPOSITORY                         TAG       IMAGE ID       CREATED          SIZE
nest-cloud-run                     latest    3e0dfa828b39   58 seconds ago   1.41GB
mcr.microsoft.com/azure-sql-edge   latest    9d0e27694fc9   11 months ago    1.84GB
postgres                           13.5      6cfb877dbde5   24 months ago    351MB
dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker run -p80:3000 nest-cloud-run
node:internal/modules/cjs/loader:1137
  throw err;
  ^

Error: Cannot find module '/usr/src/app/dist/main.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1134:15)
    at Module._load (node:internal/modules/cjs/loader:975:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v18.19.0
dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker build -t nest-cloud-run .   
[+] Building 35.5s (12/12) FINISHED                                          docker:desktop-linux
 => [internal] load .dockerignore                                                            0.0s
 => => transferring context: 97B                                                             0.0s
 => [internal] load build definition from Dockerfile                                         0.0s
 => => transferring dockerfile: 453B                                                         0.0s
 => [internal] load metadata for docker.io/library/node:18                                   2.6s
 => [internal] load build context                                                            0.0s
 => => transferring context: 11.27kB                                                         0.0s
 => CACHED [1/7] FROM docker.io/library/node:18@sha256:995a5f4314885452a4a785abc25a0fec40e2  0.0s
 => [2/7] WORKDIR /app                                                                       0.0s
 => [3/7] COPY package*.json ./                                                              0.0s
 => [4/7] RUN npm install                                                                   27.7s
 => [5/7] COPY . .                                                                           0.1s
 => [6/7] RUN npx prisma generate                                                            1.1s 
 => [7/7] RUN npm run build                                                                  2.3s 
 => exporting to image                                                                       1.5s 
 => => exporting layers                                                                      1.5s
 => => writing image sha256:5c0697e63a3239f87bb8ce944576331a3cccb8aa1f025fce25a2b0c7f36a69a  0.0s
 => => naming to docker.io/library/nest-cloud-run                                            0.0s
dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker run -p80:3000 nest-cloud-run
node:internal/modules/cjs/loader:1137
  throw err;
  ^

Error: Cannot find module '/app/dist/main.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1134:15)
    at Module._load (node:internal/modules/cjs/loader:975:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v18.19.0
dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker run -p80:3000 nest-cloud-run
node:internal/modules/cjs/loader:1137
  throw err;
  ^

Error: Cannot find module '/app/dist/main.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1134:15)
    at Module._load (node:internal/modules/cjs/loader:975:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v18.19.0
dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker build -t nest-cloud-run .   
[+] Building 4.3s (12/12) FINISHED                                           docker:desktop-linux
 => [internal] load build definition from Dockerfile                                         0.0s
 => => transferring dockerfile: 445B                                                         0.0s
 => [internal] load .dockerignore                                                            0.0s
 => => transferring context: 97B                                                             0.0s
 => [internal] load metadata for docker.io/library/node:18                                   4.2s
 => [internal] load build context                                                            0.0s
 => => transferring context: 11.27kB                                                         0.0s
 => [1/7] FROM docker.io/library/node:18@sha256:995a5f4314885452a4a785abc25a0fec40e26c34655  0.0s
 => CACHED [2/7] WORKDIR /app                                                                0.0s
 => CACHED [3/7] COPY package*.json ./                                                       0.0s
 => CACHED [4/7] RUN npm install                                                             0.0s
 => CACHED [5/7] COPY . .                                                                    0.0s
 => CACHED [6/7] RUN npx prisma generate                                                     0.0s
 => CACHED [7/7] RUN npm run build                                                           0.0s
 => exporting to image                                                                       0.0s
 => => exporting layers                                                                      0.0s
 => => writing image sha256:859fa475ebcef15073dbf9db6e4fe5fcd55535725496996074a5a047289b0dd  0.0s
 => => naming to docker.io/library/nest-cloud-run                                            0.0s
dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker run -p80:3000 nest-cloud-run
node:internal/modules/cjs/loader:1137
  throw err;
  ^

Error: Cannot find module '/app/main'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1134:15)
    at Module._load (node:internal/modules/cjs/loader:975:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v18.19.0
dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker run -p80:3000 nest-cloud-run
^Cnode:internal/modules/cjs/loader:1137
  throw err;
  ^

Error: Cannot find module '/app/main'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1134:15)
    at Module._load (node:internal/modules/cjs/loader:975:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v18.19.0
dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker build -t nest-cloud-run .   
[+] Building 3.0s (12/12) FINISHED                                           docker:desktop-linux
 => [internal] load .dockerignore                                                            0.1s
 => => transferring context: 97B                                                             0.0s
 => [internal] load build definition from Dockerfile                                         0.1s
 => => transferring dockerfile: 457B                                                         0.0s
 => [internal] load metadata for docker.io/library/node:18                                   1.5s
 => [internal] load build context                                                            0.5s
 => => transferring context: 11.15kB                                                         0.1s
 => [1/7] FROM docker.io/library/node:18@sha256:995a5f4314885452a4a785abc25a0fec40e26c34655  0.0s
 => CACHED [2/7] WORKDIR /app                                                                0.0s
 => CACHED [3/7] COPY package*.json ./                                                       0.0s
 => CACHED [4/7] RUN npm install                                                             0.0s
 => CACHED [5/7] COPY . .                                                                    0.0s
 => CACHED [6/7] RUN npx prisma generate                                                     0.0s
 => CACHED [7/7] RUN npm run build                                                           0.0s
 => exporting to image                                                                       0.1s
 => => exporting layers                                                                      0.0s
 => => writing image sha256:183a1b765169be987df683645bc2515fe1d755acfbabb090d2e4749b645eaeb  0.0s
 => => naming to docker.io/library/nest-cloud-run                                            0.0s
dimaspriyandi@Dimass-MacBook-Pro undangan-api % docker run -p80:3000 nest-cloud-run
[Nest] 1  - 01/21/2024, 4:24:21 AM     LOG [NestFactory] Starting Nest application...
[Nest] 1  - 01/21/2024, 4:24:21 AM     LOG [InstanceLoader] PrismaModule dependencies initialized +15ms
[Nest] 1  - 01/21/2024, 4:24:21 AM     LOG [InstanceLoader] PassportModule dependencies initialized +0ms
[Nest] 1  - 01/21/2024, 4:24:21 AM     LOG [InstanceLoader] JwtModule dependencies initialized +0ms
[Nest] 1  - 01/21/2024, 4:24:21 AM     LOG [InstanceLoader] AppModule dependencies initialized +1ms
[Nest] 1  - 01/21/2024, 4:24:21 AM     LOG [InstanceLoader] UserModule dependencies initialized +0ms
[Nest] 1  - 01/21/2024, 4:24:21 AM     LOG [InstanceLoader] CommentsModule dependencies initialized +0ms
[Nest] 1  - 01/21/2024, 4:24:21 AM     LOG [RoutesResolver] AppController {/v1}: +23ms
[Nest] 1  - 01/21/2024, 4:24:21 AM     LOG [RouterExplorer] Mapped {/v1, GET} route +3ms
[Nest] 1  - 01/21/2024, 4:24:21 AM     LOG [RoutesResolver] CommentsController {/v1/comments}: +0ms
[Nest] 1  - 01/21/2024, 4:24:21 AM     LOG [RouterExplorer] Mapped {/v1/comments, POST} route +1ms
[Nest] 1  - 01/21/2024, 4:24:21 AM     LOG [RouterExplorer] Mapped {/v1/comments, GET} route +0ms
[Nest] 1  - 01/21/2024, 4:24:21 AM     LOG [RouterExplorer] Mapped {/v1/comments/:id, GET} route +0ms
[Nest] 1  - 01/21/2024, 4:24:21 AM     LOG [RouterExplorer] Mapped {/v1/comments/:id, PATCH} route +1ms
[Nest] 1  - 01/21/2024, 4:24:21 AM     LOG [RouterExplorer] Mapped {/v1/comments/:id, DELETE} route +0ms
[Nest] 1  - 01/21/2024, 4:24:21 AM     LOG [RouterExplorer] Mapped {/v1/comments, DELETE} route +0ms
[Nest] 1  - 01/21/2024, 4:24:21 AM     LOG [RoutesResolver] UserController {/v1/user}: +0ms
[Nest] 1  - 01/21/2024, 4:24:21 AM     LOG [RouterExplorer] Mapped {/v1/user/login, POST} route +1ms
[Nest] 1  - 01/21/2024, 4:24:21 AM     LOG [RouterExplorer] Mapped {/v1/user/generateTamu, POST} route +0ms
[Nest] 1  - 01/21/2024, 4:24:21 AM     LOG [RouterExplorer] Mapped {/v1/user, GET} route +0ms
[Nest] 1  - 01/21/2024, 4:24:21 AM     LOG [NestApplication] Nest application successfully started +7ms
^C^C^X^C^Cçç^C
```
