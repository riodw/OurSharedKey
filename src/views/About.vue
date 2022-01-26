<template>
  <div class="about">
    <FullCalendar :options="calendarOptions" />
    <br />
    <h1>
      You are logged in as {{ auth.user.name }} ({{ auth.user.nickname }})
    </h1>
    <img :src="auth.user.picture" alt="Profile picture" />
    <br />

    <button v-on:click="auth.logout()">Logout</button>
  </div>
</template>

<script>
// @ is an alias to /src
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  name: "About",
  inject: ["auth"],
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
      },
    };
  },
};
</script>
