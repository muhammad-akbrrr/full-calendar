//Import your <script> tags here via cdn (look into fullcalendar docs for more details).
//Dont forget to add the <script> and </script> line at the beginning & at the end of the code.

document.addEventListener('DOMContentLoaded', function () {
  window.Wized = window.Wized || [];
  window.Wized.push((Wized) => {
    const events = Wized.data.v.eventsData;
    const calendarEl = document.querySelector('[data-element = "calendar"]');
    const calendar = new FullCalendar.Calendar(calendarEl, {
      height: 'auto',
      initialView: 'timeGridDay',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridDay,timeGridWeek,dayGridMonth',
      },
      events: events,
    });
    calendar.render();
  });
});
