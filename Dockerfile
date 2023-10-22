FROM ubuntu:latest as build

RUN apt-get update
RUN apt-get install openjdk-17-jdk -y
COPY ./api .

RUN apt-get install maven -y
RUN mvn clean install

FROM openjdk:17-jdk-slim

EXPOSE 8080

COPY --from=build /target/robins-food-1.jar app.jar

ENTRYPOINT [ "java", "-jar", "-Dspring.profiles.active=prod", "app.jar"]