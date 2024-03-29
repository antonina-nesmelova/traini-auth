// import axiosPromise from 'axios-promise';
// import _axios from 'axios';

// const axios = axiosPromise(_axios, global.Promise);

import axios from 'axios';

const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081',
  timeout: 1000,
  headers: {
    'Authorization': 'Bearer '+ token
  }
});

const requests = {
  del: url =>
    axiosInstance.del(`${url}`).then(responseBody),
  get: url =>
    axiosInstance.get(`${url}`).then(responseBody),
  put: (url, body) =>
    axiosInstance.put(`${url}`, body).then(responseBody),
  post: (url, body) =>
    axiosInstance.post(`${url}`, body).then(responseBody)
};

const Auth = {
  current: () =>
      requests.get('/user'),
  login: (email, password) =>
      requests.post('/users/login', { user: { email, password } }),
  register: (name, email, password) =>
      requests.post('/api/operators', { user: { name, email, password } }),
  save: user =>
      requests.put('/user', { user })
};

export default {
  Auth,
  setToken: _token => { token = _token; }
};

//
// const Tags = {
//   getAll: () => requests.get('/tags')
// };
//
// const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
// const omitSlug = article => Object.assign({}, article, { slug: undefined })
// const Articles = {
//   all: page =>
//     requests.get(`/articles?${limit(10, page)}`),
//   byAuthor: (author, page) =>
//     requests.get(`/articles?author=${encode(author)}&${limit(5, page)}`),
//   byTag: (tag, page) =>
//     requests.get(`/articles?tag=${encode(tag)}&${limit(10, page)}`),
//   del: slug =>
//     requests.del(`/articles/${slug}`),
//   favorite: slug =>
//     requests.post(`/articles/${slug}/favorite`),
//   favoritedBy: (author, page) =>
//     requests.get(`/articles?favorited=${encode(author)}&${limit(5, page)}`),
//   feed: () =>
//     requests.get('/articles/feed?limit=10&offset=0'),
//   get: slug =>
//     requests.get(`/articles/${slug}`),
//   unfavorite: slug =>
//     requests.del(`/articles/${slug}/favorite`),
//   update: article =>
//     requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
//   create: article =>
//     requests.post('/articles', { article })
// };
//
// const Comments = {
//   create: (slug, comment) =>
//     requests.post(`/articles/${slug}/comments`, { comment }),
//   delete: (slug, commentId) =>
//     requests.del(`/articles/${slug}/comments/${commentId}`),
//   forArticle: slug =>
//     requests.get(`/articles/${slug}/comments`)
// };
//
// const Profile = {
//   follow: username =>
//     requests.post(`/profiles/${username}/follow`),
//   get: username =>
//     requests.get(`/profiles/${username}`),
//   unfollow: username =>
//     requests.del(`/profiles/${username}/follow`)
// };

