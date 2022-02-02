/*===========DISABLE TRANSITION===========*/
let r = document.querySelector(':root');
r.style.setProperty('--transition-duration', '0s');

/*===========THEMING MANAGEMENT===========*/
const nav_toggle_theme = document.getElementById('nav-toggle-theme');
const themeName = 'theme-mode';
const stylesheetElements = document.querySelectorAll(
	'[media="screen and (prefers-color-scheme: dark)"]',
);
let themePreference = false;
let themeSpecified = false;

let itemMode = localStorage.getItem(themeName);
if (itemMode) {
	//User indicated preference for this website
	themeSpecified = true;
	themePreference = JSON.parse(itemMode).val;
} else {
	//User did not indicate preference for this website, use browser preference
	themeSpecified = false;
	themePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function updateTheme() {
	nav_toggle_theme.classList[themePreference ? 'remove' : 'add']('bx-sun');
	document.querySelector('meta[name=color-scheme]').content = themePreference ? 'dark' : 'light';
	stylesheetElements.forEach(element => {
		element.media = themePreference ? 'screen' : 'not all';
	});
}

updateTheme();

nav_toggle_theme.addEventListener('click', () => {
	themePreference = !themePreference;

	localStorage.setItem(themeName, JSON.stringify({
		val: themePreference
	}));

	updateTheme();
})


window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
	if (!themeSpecified) {
		themePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
		updateTheme();
	}
});
/*===========NAV BAR MANAGEMENT===========*/
const nav_menu = document.getElementById('nav-menu');
const nav_toggle = document.getElementById('nav-toggle-menu');
const nav_close = document.getElementById('nav-close');

nav_toggle.addEventListener('click', () => {
	nav_menu.classList.add('show-menu');
});

nav_close.addEventListener('click', () => {
	nav_menu.classList.remove('show-menu');
});

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
	const nav_menu = document.getElementById('nav-menu');
	nav_menu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===========ACTIVE LINKS MANAGEMENT===========*/
const observerOptions = {
	root: null,
	rootMargin: '0px',
	threshold: 0.5
};

function observerCallback(entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {

			Array.prototype.forEach.call(document.getElementsByClassName('active-link'), function(element) {
				element.classList.remove('active-link');
			});

			document.querySelector('#nav-menu a[href*=' + entry.target.id + ']').classList.add('active-link');
		}
	});
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

document.querySelectorAll('section[id]').forEach((sec) => observer.observe(sec));


/*===========SCROLL UP ICON MANAGEMENT===========*/
const scroll_up = document.getElementById('scroll-up');

function onScroll() {
	if (this.scrollY >= 300) {
		scroll_up.classList.add('show-scroll');
	} else {
		scroll_up.classList.remove('show-scroll');
	}
}

window.addEventListener('scroll', onScroll);

/*===========SCROLL REVEAL MANAGEMENT===========*/
const sr = ScrollReveal({
	origin: 'top',
	delay: 0,
	duration: 1500,
	distance: '20px'
});

sr.reveal(`.section-title, .card-outer`);

/*===========ENABLE TRANSITION===========*/
let transition_duration = getComputedStyle(r).getPropertyValue('transition-duration-default');
r.style.setProperty('--transition-duration', transition_duration);