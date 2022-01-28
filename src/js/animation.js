import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const time = 0.4;
const tl = gsap.timeline();

tl.set(".content--welcome-section", { visibility: "visible" });
tl.from(".content--welcome-section", { duration: time, opacity: 0.2, x: -50 });

tl.set("#table, #monitor", { visibility: "visible" });
tl.add("table");
tl.from("#table", { duration: time, opacity: 0.2, x: -50 }, "table");
tl.from("#monitor", { duration: time, opacity: 0.2, x: 50 }, "table");

tl.add("window");
tl.set("#window3, #window1", { visibility: "visible" });
tl.from(
	"#window3",
	{ duration: time * 1.5, opacity: 0.5, x: -50, ease: "back.out(4)" },
	"window"
);
tl.from(
	"#window1",
	{ duration: time * 1.5, opacity: 0.5, x: 50, ease: "back.out(4)" },
	"window"
);

tl.set("#code--window3", { visibility: "visible" });
tl.from("#code--window3", { duration: time, scaleX: 0, ease: "expo.out" });

tl.set("#code--window1, #code-bottom", { visibility: "visible" });
tl.from("#code--window1", { duration: time, scaleX: 0, ease: "expo.out" });
tl.from(
	"#code-bottom",
	{ duration: time, scaleX: 0, ease: "expo.out" },
	"-=0.3"
);

tl.set("#window4, #window2", { visibility: "visible" }, "window2");
tl.add("window2");
tl.from("#window4", { duration: time, opacity: 0.5, y: 50 });
tl.from("#window2", { duration: time * 2, opacity: 0.5, y: 80 }, "window2");

tl.set("#code--window4, #code", { visibility: "visible" });
tl.from("#code--window4", {
	duration: time * 1.2,
	scaleX: 0,
	ease: "expo.out",
});
tl.from(
	"#code",
	{ duration: time * 1.2, scaleX: 0, ease: "expo.out" },
	"-=0.4"
);

tl.set("#image, #message", { visibility: "visible" });
tl.add("image", "-=0.3");
tl.from("#image", { duration: time, opacity: 0.5, y: -80 }, "image");
tl.from("#message", { duration: time, opacity: 0.5, x: 50 }, "image");

tl.set("#icon1, #icon2, #icon3, #dots", { visibility: "visible" });
tl.add("icons");
tl.from(
	"#icon1",
	{ duration: time * 2, opacity: 0, y: -50, ease: "elastic.out(1, 0.3)" },
	"icons1"
);
tl.from(
	"#icon2",
	{ duration: time * 3, opacity: 0, y: -80, ease: "elastic.out(1, 0.3)" },
	"icons1"
);
tl.from(
	"#icon3",
	{ duration: time * 4, opacity: 0, y: 50, ease: "elastic.out(1, 0.3)" },
	"icons1"
);
tl.from("#dots", { duration: time, opacity: 0, y: 80 }, "icons1");

tl.to(
	"#icon1, #icon2, #icon3",
	{
		rotation: "360",
		transformOrigin: "center",
		duration: 3,
		ease: "none",
		repeat: -1,
	},
	"-=1"
);
tl.to("#message", { duration: 0.4, y: 8, yoyo: "true", repeat: -1 }, "-=5");

const animateElements = document.querySelectorAll("[data-gsap]");

animateElements.forEach((animateElement) => {
	if (animateElement.getAttribute("data-gsap") === "top") {
		gsap.fromTo(
			animateElement,
			{ y: "+=100", opacity: 0 },
			{
				y: 0,
				opacity: 1,
				stagger: 0.2,
				duration: 0.7,
				ease: "easeInOut",
				scrollTrigger: {
					trigger: animateElement,
					start: "top 70%",
					end: "top 20%",
				},
			}
		);
	} else if (animateElement.getAttribute("data-gsap") === "right") {
		gsap.fromTo(
			animateElement,
			{ x: "-=100", opacity: 0 },
			{
				x: 0,
				opacity: 1,
				stagger: 0.2,
				duration: 0.7,
				ease: "easeInOut",
				scrollTrigger: {
					trigger: animateElement,
					start: "top 70%",
					end: "top 20%",
				},
			}
		);
	} else if (animateElement.getAttribute("data-gsap") === "left") {
		gsap.fromTo(
			animateElement,
			{ x: "+=100", opacity: 0 },
			{
				x: 0,
				opacity: 1,
				stagger: 0.2,
				duration: 0.7,
				ease: "easeInOut",
				scrollTrigger: {
					trigger: animateElement,
					start: "top 70%",
					end: "top 20%",
				},
			}
		);
	} else if (animateElement.getAttribute("data-gsap") === "opacity") {
		gsap.from(animateElement, {
			opacity: 0,
			duration: 1,
			scrollTrigger: {
				trigger: animateElement,
				start: "top 50%",
			},
		});
	}
});
