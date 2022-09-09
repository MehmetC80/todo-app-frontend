import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export interface Todo {
  id?: string;
  text: string;
  createdAt?: string;
  checked?: boolean;
}
// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
  reducerPath: 'todoApi',

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_HOST,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => `todos`,
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: '/todo',
        method: 'POST',
        // Include the entire post object as the body of the request
        body: todo,
      }),
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: '/todo/' + id,
        method: 'DELETE',
      }),
    }),
    registerUser: builder.mutation({
      query: (register) => ({
        url: '/register',
        method: 'POST',
        body: register,
      }),
    }),
    loginUser: builder.mutation({
      query: (login) => ({
        url: '/login',
        method: 'POST',
        body: login,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useRegisterUserMutation,
  useLoginUserMutation,
} = todoApi;
