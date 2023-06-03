<template>
    <!-- Hero Section -->
    <section id="hero" class="flex items-center bg-cover bg-[url('/assets/images/pexels-fauxels-3183197.jpg')] justify-center h-screen bg-gray-200">
      <div class="border-indigo-500 border-4 rounded-lg p-2 backdrop-blur-sm bg-opacity">
        <div class="text-center border-indigo-500 border-8 rounded-lg p-5">
          <h1 class="text-2xl md:text-3xl mb-4 text-white font-bold">Welcome to Kraft Consulting</h1>
          <p class="text-lg md:text-xl mb-8 text-white font-bold">Providing Executive Consulting Services for Over 20 Years</p>
          <button class="px-4 rounded py-2 font-semibold text-white bg-indigo-500 hover:bg-indigo-800 transition duration-500 ease-in-out transform hover:scale-105"><a  href="#contact">Book a Consultation</a></button>
        </div>
      </div>
    </section>
  
      <!-- Services Section -->
      <section id="services" class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-indigo-500">Our Services</h2>
          <div class="mt-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <!-- Replace this with a loop in Vue -->
            <div class="p-5 border-4 border-indigo-400 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Executive leadership/Team Development</h3>
              <p class="mt-2 text-base text-gray-500">Team development lies at the heart of fostering high-performing organizations. I work closely with teams to cultivate a culture of collaboration, strengthen communication channels, and unleash their collective potential, resulting in increased productivity, innovation, and cohesive teamwork.</p>
            </div>
            <div class="p-5 border-4 border-indigo-400 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Learning & Development Transformation</h3>
              <p class="mt-2 text-base text-gray-500">I believe that learning and development transformation holds the key to unlocking the full potential of individuals and organizations. Through my expertise as an executive coach, I facilitate the integration of cutting-edge learning technologies, develop impactful learning programs, and instill a culture of lifelong learning that empowers individuals to thrive in an ever-changing business landscape.</p>
            </div>
            <div class="p-5 border-4 border-indigo-400 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Integrated Talent Management & Succession Planning</h3>
              <p class="mt-2 text-base text-gray-500">Integrated talent management and succession planning are vital components of long-term organizational success. I work closely with clients to design and implement tailored talent management solutions, including robust performance assessment, leadership development programs, and succession planning initiatives, to ensure a seamless transition of leadership and a sustainable talent pipeline.</p>
            </div>
            <div class="p-5 border-4 border-indigo-400 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Consulting, Advising & Coaching</h3>
              <p class="mt-2 text-base text-gray-500">With a deep understanding of business dynamics and leadership principles, I provide consulting, advising, and coaching services that are tailored to the unique needs of each client. Whether it's refining leadership strategies, enhancing team dynamics, or navigating organizational change, I am committed to delivering impactful solutions that drive sustainable success.</p>
            </div>
            <!-- End replace -->
          </div>
        </div>
      </section>
  
  <!-- About Section -->
  <section id="about" class="py-12 bg-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-semibold text-indigo-500">About Me</h2>
      <div class="flex flex-col items-center md:flex-row p-5">
        <img src="../assets/images/Ken.jpeg" alt="Ken Kraft" class="w-64 h-64 mb-4 object-cover rounded-full mx-auto shadow-lg md:mr-10">
        <p class="mt-10 text-gray-500 md:text-left">Hello, I'm Ken Kraft, an experienced professional in Organizational Development with over 20 years of expertise. Throughout my career, I've honed a unique skill set backed by extensive experience. I've had the privilege of cultivating talent in prestigious organizations, establishing and leading Organizational Learning & Development departments, implementing integrated talent management processes, guiding critical talent development and succession planning, coaching executives and senior leaders, and crafting leadership development programs from frontline to executive levels.
  
        What I do is my life's work and passion. I find immense joy in assisting individuals in their personal and professional growth, regardless of their chosen endeavors.</p>
      </div>
    </div>
  </section>
  
      <!-- Contact Section -->
      <section id="contact" class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-indigo-500">Contact</h2>
          <form class="mt-8 space-y-6" @submit.prevent="onSubmit">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm space-y-4">
              <div>
                <input name="name" type="text" required v-model="name" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name">
              </div>
              <div>
                <input name="email" type="email" required v-model="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email">
              </div>
              <div>
                <textarea name="message" required v-model="message" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Please tell me a little about yourself, your business, and what services you are interested in. I look forward to working with you!"></textarea>
              </div>
            </div>
            <div>
              <button type="submit" class="group relative w-full flex justify-center transition duration-500 ease-in-out transform hover:scale-105 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

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