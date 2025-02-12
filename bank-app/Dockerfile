FROM node:22-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000 6006

CMD ["sh", "-c", "yarn dev --host & yarn storybook --host 0.0.0.0 --ci"]
