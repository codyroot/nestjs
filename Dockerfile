# Dockerfile
ARG node_image=node:16-alpine

# BUILD container
FROM ${node_image} AS development

# Create app directory
WORKDIR /usr/src/app

# Copy workspace config
COPY ./package*.json .
COPY tsconfig.json .

# Copy packages
COPY ./service_AAA ./service_AAA
COPY ./tsproject ./tsproject


# install
# RUN yarn --prod --frozen-lockfile
RUN yarn install

# Install dependencies for packages
# RUN yarn workspace service_aaa install

# Run the app
WORKDIR /usr/src/app/service_AAA
EXPOSE 5000
CMD ["yarn", "start:dev"]