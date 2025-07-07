---
title: Hide and show elements in HTML based on theme using CSS
date: 2025-05-20
authors:
  - name: HX2003
    link: https://github.com/HX2003
    image: https://github.com/HX2003.png
tags:
  - HTML
  - CSS
---
I wanted to make the toggle theme icon change from 'moon' to 'sun' depending on whether dark or light mode is active.

A possible solution would be to use Javascript to add/remove the classes for the icons once when the website loads and when the theme changes. However, instead of adding extra javascript logic to handle the specific icon, a more elegant approach is to use CSS.

>light.css
>```css
>.hide-when-light {
>   display: none;
>}
>```

>dark.css
>```css
>.hide-when-dark {
>   display: none;
>}
>```

>sidebar.html
>```html
><button type="button" class="btn btn-link nav-link" aria-label="Switch Mode" id="mode-toggle">
>   <i class="fas fa-sun hide-when-dark"></i>
>   <i class="fas fa-moon hide-when-light"></i>
></button>
>```