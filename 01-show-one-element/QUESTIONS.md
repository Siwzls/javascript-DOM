# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

Nē, teksts tiks paslēpts, jo pats indeksa fails, no kura lapa tiek ielādēta, nav mainīts.

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Šī funkcija aktivizē skriptu

---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

Metode EventTarget.addEventListener() reģistrē konkrētu apstrādātāju notikumam, ko izsauc EventTarget.
