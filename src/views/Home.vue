<template>
  <div class="home">
    <!-- https://startbootstrap.github.io/startbootstrap-new-age/#download -->
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top shadow bg-white"
    >
      <div class="container px-5">
        <a class="navbar-brand fw-bold" href="#page-top">Start Bootstrap</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="bi-list"></i>
        </button>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
            <li class="nav-item">
              <a
                href="javascript:document.getElementById('features').scrollIntoView(true)"
                class="nav-link me-lg-3"
              >
                Features
              </a>
            </li>
          </ul>
          <button
            @click="auth.loginWithRedirect()"
            :disabled="auth.authenticated"
            class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
          >
            <span class="d-flex align-items-center">
              <i class="bi-box-arrow-in-right me-2"></i>
              Login
            </span>
          </button>
        </div>
      </div>
    </nav>
    <br />
    <br />
    <header class="py-5 my-5">
      <div class="container px-5">
        <div class="row gx-5 align-items-center">
          <div class="col-lg-6">
            <!-- Mashead text and app badges-->
            <div class="mb-5 mb-lg-0 text-center text-lg-start">
              <h1 class="display-1 lh-1 mb-3">
                Showcase your app beautifully.
              </h1>
              <p class="lead fw-normal text-muted mb-5">
                Launch your mobile app landing page faster with this free, open
                source theme from Start Bootstrap!
              </p>
              <div class="d-flex flex-column flex-lg-row align-items-center">
                <button
                  @click="auth.loginWithPopup()"
                  :disabled="auth.authenticated"
                  class="btn btn-primary btn-lg me-1 mb-1"
                >
                  Login PopUp
                </button>
                <button
                  @click="auth.loginWithRedirect()"
                  :disabled="auth.authenticated"
                  class="btn btn-primary btn-lg me-1 mb-1"
                >
                  Login Redirect
                </button>
                <button
                  @click="auth.logout()"
                  :disabled="!auth.authenticated"
                  class="btn btn-secondary btn-lg me-1 mb-1"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div
              class="d-flex position-relative align-items-center align-content-center justify-content-center"
            >
              <svg
                class="w-75 position-absolute"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="grad1" gradientTransform="rotate(45)">
                    <stop offset="0%" stop-color="blue"></stop>
                    <stop offset="100%" stop-color="red"></stop>
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="50" fill="url(#grad1)"></circle>
              </svg>
              <div class="device-wrapper w-50">
                <div
                  class="device position-relative"
                  data-device="iPhoneX"
                  data-orientation="portrait"
                  data-color="black"
                >
                  <div class="screen bg-black">
                    <video
                      muted="muted"
                      autoplay=""
                      loop=""
                      style="max-width: 100%; height: 100%"
                    >
                      <source
                        src="../assets/demo-screen.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <aside class="text-center bg-gradient-primary-to-secondary pt-5 pb-4">
      <div class="container p-4">
        <div class="row gx-5 justify-content-center">
          <div class="col-xl-8">
            <div class="h2 fs-1 text-white mb-3">
              "An intuitive solution to a common problem that we all face,
              wrapped up in a single app!"
            </div>
            <i
              class="bi-app-indicator text-white d-block"
              style="font-size: 5rem"
            ></i>
          </div>
        </div>
      </div>
    </aside>
    <section id="features" class="py-5 my-5" style="scroll-margin: 4rem">
      <div class="container px-5">
        <div class="row gx-5 align-items-center">
          <div class="col-lg-8 order-lg-1 mb-5 mb-lg-0">
            <div class="container-fluid px-5">
              <div class="row gx-5">
                <div class="col-md-6 mb-5">
                  <div class="text-center">
                    <i
                      class="bi-phone text-gradient d-block mb-2"
                      style="font-size: 5rem"
                    ></i>
                    <h3 class="font-alt">Device Mockups</h3>
                    <p class="text-muted mb-0">
                      Ready to use HTML/CSS device mockups, no Photoshop
                      required!
                    </p>
                  </div>
                </div>
                <div class="col-md-6 mb-5">
                  <div class="text-center">
                    <i
                      class="bi-camera text-gradient d-block mb-2"
                      style="font-size: 5rem"
                    ></i>
                    <h3 class="font-alt">Flexible Use</h3>
                    <p class="text-muted mb-0">
                      Put an image, video, animation, or anything else in the
                      screen!
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-5 mb-md-0">
                  <div class="text-center">
                    <i
                      class="bi-gift text-gradient d-block mb-2"
                      style="font-size: 5rem"
                    ></i>
                    <h3 class="font-alt">Free to Use</h3>
                    <p class="text-muted mb-0">
                      As always, this theme is free to download and use for any
                      purpose!
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="text-center">
                    <i
                      class="bi-patch-check text-gradient d-block mb-2"
                      style="font-size: 5rem"
                    ></i>
                    <h3 class="font-alt">Open Source</h3>
                    <p class="text-muted mb-0">
                      Since this theme is MIT licensed, you can use it
                      commercially!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 order-lg-0">
            <div
              class="d-flex position-relative align-items-center align-content-center justify-content-center"
            >
              <svg
                class="w-75 position-absolute start-0"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="grad2" gradientTransform="rotate(45)">
                    <stop offset="0%"></stop>
                    <stop offset="100%" stop-color="blue"></stop>
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="50" fill="url(#grad2)"></circle>
              </svg>
              <div class="device-wrapper w-75 end-0">
                <div
                  class="device position-relative"
                  data-device="iPhoneX"
                  data-orientation="portrait"
                  data-color="black"
                >
                  <div class="screen bg-black">
                    <video
                      muted="muted"
                      autoplay=""
                      loop=""
                      style="max-width: 100%; height: 100%"
                    >
                      <source
                        src="../assets/demo-screen.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="text-center bg-gradient-primary-to-secondary pt-5 pb-4">
      <div class="container p-4">
        <div class="row gx-5 justify-content-center">
          <div class="col-xl-8">
            <div class="h2 fs-1 text-white">Sign Up!</div>
            <i
              class="bi-check-square-fill text-white d-block"
              style="font-size: 5rem"
            ></i>
          </div>
        </div>
      </div>
    </section>
    <footer class="bg-black text-center py-5">
      <div class="container px-5">
        <div class="text-white-50 small">
          <div class="mb-2">© Your Website 2021. All Rights Reserved.</div>
          <a href="#">Privacy</a>
          <span class="mx-1">·</span>
          <a href="#">Terms</a>
          <span class="mx-1">·</span>
          <a href="#">FAQ</a>
        </div>
      </div>
    </footer>
    <!-- <div class="mt-2">
      <div>
        {{ auth.authenticated ? "Authenticated" : "Not authenticated" }}
      </div>
      <div>{{ auth.loading ? "Loading" : "Not loading" }}</div>
      <div>User: {{ auth.user?.name || "NO_USER" }}</div>
      <img v-if="auth.user" :src="auth.user.picture" alt="Profile picture" />
      <pre class="text-start">{{ auth.user }}</pre>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  inject: ["auth"],
  components: {},
};
</script>

<style lang="scss">
.device {
  padding-bottom: 198.898071625%;

  &:after {
    content: "";
    position: absolute;
    background-size: cover;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-image: url(../assets/portrait_black.png);
  }

  .screen {
    position: absolute;
    background-size: cover;
    pointer-events: auto;
    top: 3.1855955679%;
    left: 6.8870523416%;
    width: 86.2258953168%;
    height: 93.6288088643%;
  }
}
.bg-gradient-primary-to-secondary {
  background: linear-gradient(45deg, #2937f0, #9f1ae2) !important;
}
.text-gradient {
  background: -webkit-linear-gradient(#2937f0, #9f1ae2);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
