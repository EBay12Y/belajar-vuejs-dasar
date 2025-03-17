import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: 'main.html',
        counter: 'counter.html',
        hello: 'hello.html',
        say_hello: 'say-hello.html',
        todoList: 'todoList.html',
        contact: 'contact.html',
        product: 'product.html',
      }
    }
  }
})
