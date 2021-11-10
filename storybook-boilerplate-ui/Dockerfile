FROM node:14-alpine
RUN mkdir /storybook

COPY ./ /storybook
WORKDIR /storybook

RUN yarn

CMD yarn run storybook

EXPOSE 6006