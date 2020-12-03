FROM node:14 as builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./


RUN npm install && mkdir /ui && mv ./node_modules ./ui
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

CMD ["npm","run","start"]

FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /ui/build  /usr/share/nginx/html

EXPOSE 1234 80

ENTRYPOINT ["nginx","-g","daemon off;"]