FROM node:16-alpine3.11


ENV NODE_PATH /install/node_modules/
ENV PATH /install/node_modules/.bin:$PATH

# RUN apk add --no-cache python3 py3-pip

COPY package.json /install/package.json
WORKDIR /install/

RUN  chmod -R 777 /install/
# RUN npm install


COPY . .

ENTRYPOINT ["npm"]
CMD ["run","test"]


