!function(){var t={dayEl:document.querySelector(".date-day"),dateEl:document.querySelector(".date"),monthEl:document.querySelector(".date-month"),yearEl:document.querySelector(".date-year"),digitalClockEl:document.querySelector(".digital-clock"),arrowSecondsEl:document.querySelector(".clock-seconds__arrow"),arrowMinutesEl:document.querySelector(".clock-minutes__arrow"),arrowHoursEl:document.querySelector(".clock-hours__arrow")},e=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],o=["Неділя","Понеділок","Вівторок","Середа","Четвер","Пʼятниця","Субота"];setInterval((function(){var r=new Date,a=o[r.getDay()],n=r.getDate(),c=e[r.getMonth()],l=r.getFullYear(),d=r.getHours(),u=r.getMinutes(),s=r.getSeconds(),y="".concat(d.toString().padStart(2,0)," : ").concat(u.toString().padStart(2,0)," : ").concat(s.toString().padStart(2,0)),S=6*s,g=6*u,E=30*d+.5*u;t.dayEl.textContent=a,t.dateEl.textContent=n,t.monthEl.textContent=c,t.yearEl.textContent=l,t.digitalClockEl.textContent=y,t.arrowSecondsEl.style.transform="rotate(".concat(S,"deg)"),t.arrowMinutesEl.style.transform="rotate(".concat(g,"deg)"),t.arrowHoursEl.style.transform="rotate(".concat(E,"deg)")}),1e3)}();
//# sourceMappingURL=index.66fedb10.js.map
