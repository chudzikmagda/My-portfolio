import style from "./../sass/style.scss";
import { createFocusTrap } from 'focus-trap'

// menu
const hamburgerIcon = document.querySelector(".hamburger-icon");
const nav = document.querySelector(".menu");
const header = document.querySelector(".header");
const blurBox = document.querySelector(".overlay");
let openMenu = false;
const focusableElements = [...document.querySelectorAll('.hamburger-icon, nav>ul>li, nav>.social-media>a')]
const focusTrap = createFocusTrap(header);

hamburgerIcon.addEventListener("click", function () {
	blurBox.classList.toggle("overlay--active");
	hamburgerIcon.classList.toggle("hamburger-icon--active");
	nav.classList.toggle("menu--active");
	openMenu = !openMenu;
	if (openMenu) {
		focusableElements.forEach(item => {
			if (!item.classList.contains('hamburger-icon')) {
				item.setAttribute('tabindex', '1')
			}
		});
		header.addEventListener('click', focusTrap.activate());
	} else {
		focusableElements.forEach(item => {
			if (!item.classList.contains('hamburger-icon')) {
				item.setAttribute('tabindex', '-1')
			}
		});
		header.addEventListener('click', focusTrap.deactivate());
	}
});


// scroll to the section
const menuAnchors = document.querySelectorAll("[data-anchor]");

menuAnchors.forEach((menuAnchor) => {
	menuAnchor.addEventListener("click", function (e) {
		e.preventDefault();
		blurBox.classList.remove("overlay--active");
		nav.classList.remove("menu--active");
		hamburgerIcon.classList.remove("hamburger-icon--active");
		const scrollToSection = document.querySelector(
			`[data-content="${menuAnchor.dataset.anchor}"]`
		);

		scrollToSection.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
});

// effects on scroll
const logotypeElements = document.querySelectorAll(".logotype__element");
const logotypeLink = document.querySelector(".logotype__homepage-link");

window.addEventListener("scroll", function (e) {
	if (window.scrollY > 100) {
		logotypeElements.forEach((logotypeElement) => {
			logotypeElement.classList.add("logotype__element--hidden");
		});

		logotypeLink.addEventListener("mouseover", () => {
			logotypeElements.forEach((logotypeElement) => {
				logotypeElement.classList.remove("logotype__element--hidden");
			});
		});
	} else {
		logotypeElements.forEach((logotypeElement) => {
			logotypeElement.classList.remove("logotype__element--hidden");
		});
	}
});

//go to the top
const goToTop = document.querySelector(".footer__gotop");

const windowScrollToTop = () => {
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
}

goToTop.addEventListener("click", windowScrollToTop);

goToTop.addEventListener("keypress", (e) => {
	if (e.key === 'Enter') {
		goToTop.click();
		windowScrollToTop;
	}
});

//products listing page - filters
const filters = document.querySelectorAll(".technologies__icon--filters");
const projectsItems = document.querySelectorAll(".projects-listing__item");
let numberOfActiveFIlters = 0;
const clearBtn = document.querySelector(".filters__clearBtn");

const clearFilters = () => {
	projectsItems.forEach((item) => {
		item.classList.remove("projects-listing__item--hidden");
	});
	filters.forEach((filter) => {
		filter.classList.remove("technologies__icon--filters-active");
	});
	clearBtn.classList.remove("filters__clearBtn--active");
};

if (clearBtn) clearBtn.addEventListener("click", clearFilters);

filters.forEach((filter) => {
	filter.addEventListener("click", () => {
		const filterName = filter.getAttribute("data-filter");

		if (!filter.classList.contains("technologies__icon--filters-active")) {
			filter.classList.add("technologies__icon--filters-active");
			clearBtn.classList.add("filters__clearBtn--active");
			projectsItems.forEach((item) => {
				const projectsAttr = item.getAttribute("data-usedTechnologies");
				if (!projectsAttr.includes(filterName))
					item.classList.add("projects-listing__item--hidden");
			});
			numberOfActiveFIlters++;
		} else {
			projectsItems.forEach((item) => {
				const projectsAttr = item.getAttribute("data-usedTechnologies");
				if (!projectsAttr.includes(filterName))
					item.classList.remove("projects-listing__item--hidden");
			});
			filter.classList.remove("technologies__icon--filters-active");
			numberOfActiveFIlters--;

			if (
				!numberOfActiveFIlters &&
				clearBtn.classList.contains("filters__clearBtn--active")
			)
				clearBtn.classList.remove("filters__clearBtn--active");
		}
	});
});

//expand elements on mobile
const accordionItems = document.querySelectorAll(".project__subtitle");

accordionItems.forEach((item) => {
	item.addEventListener("click", () => {
		item.classList.toggle("project__subtitle--open");
	});
});
