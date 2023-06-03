<template>
  <div class="flex flex-col min-h-screen font-sans text-gray-900 antialiased">
  <!-- Header -->
  <header class="flex justify-between p-6 bg-indigo-500 fixed w-full z-10 shadow">
    <div class="flex ">
      <NuxtLink to="/#hero" class="font-semibold text-xl text-white md:text-2xl">Kraft Performance Solutions</NuxtLink>
    </div>
    <nav class="block">
      <NuxtLink to="/#services" class="mx-2 text-white hover:scale-105 hover:font-semibold">Services</NuxtLink>
      <NuxtLink to="/#about" class="mx-2 text-white hover:scale-105 hover:font-semibold">About</NuxtLink>
      <NuxtLink to="/blog" class="mx-2 text-white hover:scale-105 hover:font-semibold">Blog</NuxtLink>
      <NuxtLink to="/#contact" class="mx-2 text-white hover:scale-105 hover:font-semibold">Contact</NuxtLink>

    </nav>
  </header>

  <div v-if="showAlert" class="mt-20 fixed z-10 w-full">
    <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2 ">
      Danger
    </div>
    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
      <p>{{ error_msg }}</p>
    </div>
  </div>
  <div v-if="showSuccess" class="mt-20 fixed z-10 w-full">
    <div class="bg-green-500 text-white font-bold rounded-t px-4 py-2 ">
      Success
    </div>
    <div class="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
      <p>{{ success_msg }}</p>
    </div>
  </div>

  <NuxtPage class="pt-20 flex-grow" />

    <!-- Footer -->
    <footer class="p-6 bg-gray-800 text-white text-center">
      &copy; 2023 Ken Kraft
    </footer>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      showAlert: false,
      showSuccess: false,
      error_msg: ""
    }
  },
  methods: {
    triggerAlert(msg) {
      this.error_msg = msg
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
        this.error_msg = ""
      }, 3000);  // Hide the alert after 3 seconds
    },
    triggerSuccess(msg) {
      this.success_msg = msg
      this.showSuccess = true;
      setTimeout(() => {
        this.showSuccess = false;
        this.success_msg = ""
      }, 3000);  // Hide the alert after 3 seconds
    },
    onSubmit() {
      emailjs.send('service_z828e03', 'template_m6z8tlj', {
        from_name: this.name,
        from_email: this.email,
        message: this.message,
      }, 'Gx_v6v03cOD6lh12k')
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        this.triggerSuccess('Email Sent Successfully!')
        this.resetForm()
      }, error => {
        console.log('There was an error, please try again later or email me at kraftconsultingcontact@gmail.com', error);
        // this.triggerAlert('There was an error, please try again later or email me at kraftconsultingcontact@gmail.com')
        this.triggerAlert('There was an error, please try again later or email me at kraftconsultingcontact@gmail.com')
      });
    },
    resetForm() {
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>

<style>
  body {
    overflow: scroll;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
    background: #FF0000;
}
</style>