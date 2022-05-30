FROM node
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY ./ ./
RUN yarn build
EXPOSE 3020
CMD ["yarn", "app"]

