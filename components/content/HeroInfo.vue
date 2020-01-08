<template>
  <div class="mx-auto w-5/6 md:w-2/3">
    <!-- Intro text -->
    <section class="mx-auto flex h-full mt-12">
      <h1 class="text-default-text text-lg m-auto text-center">
        Rushy's Kingdom is designed with fun in mind. Whoever and whatever you
        are, Rushy's Kingdom encourages you to show your true colors and be
        yourself! Enter the kingdom and become a part of this welcoming family
        of interesting characters. We strive to maintain an active community
        with thousands of fluffy friends to meet! With planned community events
        every week such as games, movies, and contests, we work hard to ensure
        every single member gets a chance to be involved and have fun. All of us
        at Rushy's Kingdom encourage you to join us and make some awesome and
        interesting memories along the way!
      </h1>
    </section>

    <!-- Separator -->
    <hr class="m-12 opacity-50" />

    <!-- Images -->
    <section class="flex flex-wrap">
      <template v-for="n in 3">
        <!-- Element -->
        <div
          :key="n"
          class="flex flex-col w-1/4 text-default-text text-center mx-auto"
        >
          <!-- Image -->
          <div class="mx-auto">
            <img
              src="~/assets/img/cutie1.png"
              alt=""
              class="border border-border-hover rounded-full w-32 h-32"
            />
          </div>

          <!-- Title -->
          <div class="text-2xl mt-4">
            <h3>8k+ Members!</h3>
          </div>

          <!-- Text -->
          <div class="my-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              nemo soluta quod, distinctio minima, mollitia est repudiandae
              sequi saepe doloribus ad necessitatibus facere ipsam ea laudantium
              dicta corporis labore placeat!
            </p>
          </div>

          <!-- Call to action -->
          <div>
            <button class="border-0 rounded-lg bg-gradient px-4 py-2">
              View Details &#187;
            </button>
          </div>
        </div>
      </template>
    </section>

    <!-- Separator -->
    <hr class="m-12 opacity-50" />
  </div>
</template>

<script>
export default {
  name: 'HeroInfo',

  components: {}
}
</script>
