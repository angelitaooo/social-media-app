import { createServer } from "miragejs";

export function makeServer() {
  createServer({
    routes() {
      this.get("/api/users", () => ({
        users: [
          {
            id: 1,
            avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            username: "angelitaooo",
            tweets: { total: 3 },
            bio: "hey im a web developer",
          },
          {
            id: 2,
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            username: "alejonanez",
            tweets: { total: 6 },
            bio: "hey im the best sofware engineer",
          },
          {
            id: 3,
            avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            username: "paquita",
            tweets: { total: 4 },
            bio: "hey im a dog developer",
          },
        ],
      }));

      this.get("/api/tweets", () => ({
        tweets: [
          {
            id: 1,
            avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            username: "angelitaooo",
            message: "im a tweet",
          },
          {
            id: 2,
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            username: "alejonanez",
            message: "im a second tweet",
          },
          {
            id: 3,
            avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            username: "paquita",
            message: "im a dog",
          },
        ],
      }));
    },
  });
}
