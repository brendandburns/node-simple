FROM node:4

ADD *.js /

EXPOSE 8000

CMD node /start.js
