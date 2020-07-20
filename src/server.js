import { Server } from 'miragejs';

export function makeServer() {
  new Server({
    seeds(server) {
      server.db.loadData({
        tweets: [
          {
            id: 1,
            avatar:
              'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            username: 'angelitaooo',
            userId: 1,
            message: 'im a tweet',
          },
          {
            id: 2,
            avatar:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            username: 'alejonanez',
            userId: 2,
            message: 'im a second tweet',
          },
          {
            id: 3,
            avatar:
              'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            username: 'paquita',
            userId: 3,
            message: 'im a dog',
          },
        ],
        users: [
          {
            id: 1,
            avatar:
              'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            username: 'angelitaooo',
            tweets: { total: 3 },
            bio: 'hey im a web developer',
          },
          {
            id: 2,
            avatar:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            username: 'alejonanez',
            tweets: { total: 6 },
            bio: 'hey im the best sofware engineer',
          },
          {
            id: 3,
            avatar:
              'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            username: 'paquita',
            tweets: { total: 4 },
            bio: 'hey im a dog developer',
          },
        ],
      });
    },
    routes() {
      this.namespace = 'api';

      this.get('/users', (schema) => {
        return schema.db.users;
      });

      this.get('/tweets', (schema) => {
        return schema.db.tweets;
      });

      this.post('/tweets', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        attrs.username = 'angelitaooo';
        attrs.userId = 1;
        attrs.avatar =
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

        return schema.db.tweets.insert(attrs);
      });

      this.put('/tweets/:tweetId', (schema, request) => {
        let id = request.params.tweetId;
        let attrs = JSON.parse(request.requestBody);

        const tweetId = schema.db.tweets.find(id);
        return schema.db.tweets.update(tweetId, attrs);

        // return schema.tweets.find(id).update(attrs.message);
      });
    },
  });
}
