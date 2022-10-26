#!/bin/sh 
npx prisma migrate dev;
npx prisma generate;
yarn dev;