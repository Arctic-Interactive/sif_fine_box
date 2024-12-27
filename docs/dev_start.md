# Guide for new developers 👨‍💻
Hi there. So you want to contribute to the project somehow? Nice! Here's a guide on how to get started with the application, and how to get some test data going for your development environment.

## Prerequisites
These are some of the dependencies you'll need to acquire / install before cloning the repository.
* Master.key 🔑 - If you're a trusted developer, contact another developer for the Master.key for credentials.
* Postgresql 📊 - Migrations and seeds will be provided in the repository.
* Ruby 💎 - If you haven't got ruby installed, a guide might be linked later on.

## Installing Dependencies ⚙️
Here's a step-by-step guide to setting up the project locally.

```sql
-- Connect to the default database (e.g., postgres)
\c postgres

-- Create the user with a password
CREATE USER databaseuser WITH PASSWORD 'password';

-- Create the database
CREATE DATABASE databasename OWNER databaseuser;

-- Grant all privileges on the database to the user
GRANT ALL PRIVILEGES ON DATABASE databasename TO databaseuser;
```

After that you'd be able to do the following to install the project:
```bash
# Install dependencies
bundle install
yarn install

# Create database and run migrations
rails db:create
rails db:migrate

-- Seeding the database
# WILL COME SOON

# Run the project in development
bin/dev
```
***NOTE: If running into any issues, contact a maintainer/developer.***

When application is running, you can use one of the test users to login to see the page as an administrator, and as a regular user.

In SIFs case, we're working with administrators and players. (Soccer Club)

You're now ready to create additions to the project. As of right now the scope of the project is to work as an overview of the fine box, so players are able to see their current balance, and their outstanding amount in the club. Furthermore we want to represent the data for the administrators. Meaning it should be possible to see which fines are the most lucrative, and who's the biggest ***snitch*** and who's having the most fines during a season.
