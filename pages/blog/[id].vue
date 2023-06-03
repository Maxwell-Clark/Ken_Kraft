<template>
    <div class="mx-auto ">
      <!-- Hero Section -->
      <section class="bg-indigo-800 text-white bg-cover text-center py-20 p-10 flex items-center bg-cover justify-center h-80">
        <h1 class="text-4xl font-bold">{{ post.title }}</h1>
      </section>
      <article class="p-10 border-4 m-10 ml-20 mr-20 rounded-md">
        <h2 class="underline text-gray-500 font-semibold text-sm mb-1">{{ date }}</h2>
        <h1 class="text-3xl font-bold mt-5  text-indigo-500">{{ post.title }}</h1>
        <hr class="border-t-4 rounded my-8" />
        <div class="mt-4">
          <div v-html="post.content"></div>
        </div>
      </article>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const post = ref({})
  let date = ref(null)
  
  onMounted(async () => {
    // You would fetch your actual data here. This is just a placeholder.
    // Replace the fetch URL with your actual API endpoint.
    const client = useSupabaseClient()
    console.log(route.params)
    let postData = await client
    .from('posts')
    .select(`title, content, updated_at`)
    .eq('id', route.params.id)
    .single()
    post.value = postData.data
    console.log(postData.data.updated_at)

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    date = new Date(postData.data.updated_at).toLocaleDateString(undefined, options);
  })
  
  </script>