#specify the language:version
FROM node:latest
#specify the folder
WORKDIR /quiz
#copy the project in the folder
COPY . /quiz
#book the port
EXPOSE 3000
#install dependecies
RUN npm i
#запуск
CMD ["npm", "start"]