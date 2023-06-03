<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <button
      v-show="viewportWidth > 765"
      @click="isGridView = !isGridView"
      class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold float-right mt-2 py-2 px-4 rounded"
      :class="disableToggle"
    >
      Toggle View
    </button>
    <div class="py-12 mt-3">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="flex justify-between items-center mb-6 border-indigo-400">
          <input
            type="text"
            placeholder="Search Blog Posts..."
            v-model="search"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-center text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
          />
        </div>

        <ul
          class="max-h-screen overflow-y-auto grid gap-4"
          :class="{ 'grid-cols-1': !isGridView, 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4': isGridView }"
        >
          <li
            class="p-5 border-4 border-indigo-400 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 m-2"
            :class="{'max-h-15' : isGridView}"
            v-for="post in filteredPosts"
            :key="post.id"
          >
            <NuxtLink :to="'/blog/' + post.id">
              <p class="text-2xl font-semibold text-indigo-500 flex justify-center mb-5">
                {{ post.title }}
              </p>
              <p>{{ post.description }}</p>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
  import { ref, computed } from 'vue';
    // console.log(process.env.SUPABASE_URL)
  
    const client = useSupabaseClient()
    
    let posts = ref([])
    const search = ref("")
    let isGridView = ref(false);

    let postData = await client
    .from('posts')
    .select(`title, content, id`)
    .order('id', {ascending: false})

    postData.data.forEach(post => {
      let sentences = post.content.split('.')
      post.description = [sentences[0], sentences[1], " "].join(". ")
    })
    posts.value = postData.data

    const filteredPosts = computed(() => {
      if (!search.value) return posts.value;
      return posts.value.filter(post => post.title.toLowerCase().includes(search.value));
    });

    // A new ref to keep track of the viewport width
    let viewportWidth = ref(window.innerWidth);

    // Update the viewportWidth when the window is resized
    const updateWidth = () => {
      viewportWidth.value = window.innerWidth;
    };

    onMounted(() => {
      window.addEventListener('resize', updateWidth);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', updateWidth);
    });
  </script>