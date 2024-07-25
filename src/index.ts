//Before running pnpm dev, make sure to run pnpm install then pnpm add (dependencies)

import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

window.Webflow ||= [];
window.Webflow.push(() => {
  window.Wized = window.Wized || [];
  window.Wized.push((Wized) => {
    const calendarEl = document.querySelector<HTMLDivElement>('[data-element = "calendar"]');
    if (!calendarEl) return;

    const events = Wized.data.v.eventsData;

    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin],
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
