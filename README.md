# Robin's Food

## Run frontend (local)
Check if:
- NPM is installed (v16.16.0 used)
``cd /frontend && npm install && npm start``

## Run backend (local)
Check if:
- Java is installed (JDK 17.0.3 used)
- Apache Maven is installed (v3.8.6 used)
- PostgreSQL is running on port ``5432`` and has a DB named ``robins_food``
``cd /api && mvn clean install && mvn spring-boot:run -Dspring-boot.run.profiles=dev``
