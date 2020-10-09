import { Server, createServer, Model, hasMany, belongsTo } from 'miragejs';

export function makeServer() {
  createServer({
    models: {
      user: Model.extend({
        tweets: hasMany(),
      }),
      tweet: Model.extend({
        user: belongsTo('user'),
      }),
    },

    seeds(server) {
      const angela = server.create('user', {
        avatar:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        username: 'angelitaooo',
        bio: 'hey im a web developer',
      });
      const alejo = server.create('user', {
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        username: 'alejonanez',
        bio: 'hey im the best sofware engineer',
      });
      server.create('tweet', {
        user: angela,
        message: 'im a tweet',
      });

      server.create('tweet', {
        user: alejo,
        message: 'im a second tweet',
      });
    },
    routes() {
      this.namespace = 'api';

      this.get('/users', (schema) => {
        return schema.users.all();
      });

      this.get('/tweets', (schema) => {
        const hola = schema.associationsFor('user');
        console.log(hola);
        console.log(schema);

        return schema.tweets.all();
      });

      this.post('/tweets', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        attrs.username = 'angelitaooo';
        attrs.avatar =
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

        return schema.tweets.create(attrs);
      });

      this.put('/tweets/:tweetId', (schema, request) => {
        let id = request.params.tweetId;
        let attrs = JSON.parse(request.requestBody);

        const tweetId = schema.tweets.find(id);
        return schema.tweets.update(tweetId, attrs);

        // return schema.tweets.find(id).update(attrs.message);
      });
    },
  });
}
