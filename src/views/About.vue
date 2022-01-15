<template>
  <div class="about">
    <!-- <FullCalendar :options="calendarOptions" /> -->
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<style lang="css"></style>

<script>
// @ is an alias to /src
// import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  name: "Home",
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
