<template>
  <div class="home">
    <main class="px-3 mb-4">
      <h1 class="mb-4">🏁 Start to Finish</h1>
      <p class="lead">
        Write Deploy a Vue App, setup Auto-deploy, Enable Authentication, link a
        Domain, and integrate PostgreSQL… ALL FOR FREE
      </p>
      <p>in 2022, this should be fun, and annoying…</p>
      <a
        href="https://medium.com/riow/f35ac675ebfb"
        class="btn btn-lg btn-secondary fw-bold border-white bg-white text-black"
      >
        OurSharedKey 🗝
      </a>
    </main>
    <hr />
    <div>
      <button
        @click="auth.loginWithPopup()"
        :disabled="auth.authenticated"
        class="btn btn-primary me-1"
      >
        Login with PopUp
      </button>
      <button
        @click="auth.loginWithRedirect()"
        :disabled="auth.authenticated"
        class="btn btn-primary me-1"
      >
        Login with Redirect
      </button>
      <button
        @click="auth.logout()"
        :disabled="!auth.authenticated"
        class="btn btn-secondary"
      >
        Logout
      </button>
    </div>
    <div class="mt-2">
      <div>
        {{ auth.authenticated ? "Authenticated" : "Not authenticated" }}
      </div>
      <div>{{ auth.loading ? "Loading" : "Not loading" }}</div>
      <div>User: {{ auth.user?.name || "NO_USER" }}</div>
    </div>
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
