<template>
  <div class="about">
    <FullCalendar :options="calendarOptions" />
    <h2>
      You are logged in as {{ auth.user.name }} ({{ auth.user.nickname }})
    </h2>
    <img :src="auth.user.picture" alt="Profile picture" />
    <br />
    <button @click="auth.logout()" class="btn btn-secondary mt-2">
      Logout
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

export default {
  name: "About",
  inject: ["auth"],
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, listPlugin],
        initialView: "dayGridMonth",
        headerToolbar: {
          center: "dayGridMonth,listWeek", // buttons for switching between views
        },
      },
    };
  },
};
</script>
