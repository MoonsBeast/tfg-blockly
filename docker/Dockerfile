FROM node:14
WORKDIR /app
COPY ../ .

# Install dependencies
RUN npm install

# Exposes the port that the application will listen to
EXPOSE 3000

# Run the app
CMD ["npm", "run", "start"]