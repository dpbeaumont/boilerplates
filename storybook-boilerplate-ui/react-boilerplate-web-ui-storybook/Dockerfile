FROM node:slim
RUN mkdir /storybook

COPY ./ /storybook
WORKDIR /storybook

RUN yarn

CMD yarn run storybook

EXPOSE 6006