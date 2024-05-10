#COVERED TOPICS

1. Optional and Components API
2. Dynamic Components
   - ref
   - component //vue hook
   - resolveComponent
   - v-bind:is //directive
3. Routing
   - <NuxtPage/> this should be used when you have app.vue entry point
   - create a folder named Pages and put your pages there.
4. Page Navigation (Tow methods available)
   - NuxtLink (direct routing)
   - NavigateTo (programatically)
5. Dynamic Routing
   - create a file eg. games-[compt_id]
   - when you route to games-5,
   - hook:useRoute() //used to get the params
   - hook:computed() //used to a computed values
6. Tailwinds CSS assets
   - download and install tailwinds from tailwinds site
   - configure the tailwinds to be used in the project
   - create the tailds file in assests/css/tailwinds.css
   - create a public directory and add the images folder
7. Head Management
   - hook:useHead //used to set the page header properties
   - you can also add the head and title tags to define this concept
   - Read More on this in Nuxt documentation
8. Composables
   - Note: a componsable is a function that leverages the vue 
   - hook: useState
9. Data Fetching 
   - useFetch
   - useLazyFetch
   - asycFetchData
   - lazyasycFetchData

10. Middleware (3 types of middleware)
  - inline-middleware, can only be defined directly in the page to be used
  - named middleware, can be defined in the middleware folder
  - global middleware with a global extension
  - NOTE:only khaba case is allowed for middlewares

11. NEXT Server Routes