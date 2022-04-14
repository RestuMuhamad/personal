let nav = document.querySelector(".nav");
let bar = nav.querySelector(".bar");
let hiddenNav = nav.querySelector(".hiddenNav");
let barHidden = nav.querySelector(".hiddenNav .bar");

bar.addEventListener("click", () => {
	hiddenNav.classList.toggle("active");
});

barHidden.addEventListener("click", () => {
	hiddenNav.classList.toggle("active");
});

let arrow = document.getElementById("arrow");
let titleHeader = document.querySelectorAll(".titleHeader h1");
let type = document.getElementsByClassName("type")[0];

const headerP = (ws) => {
	titleHeader[0].style.transform = "translate(0," + ws / 4 + "px)";
	titleHeader[1].style.transform = "translate(0," + ws / 6 + "px)";
	arrow.style.transform = "translate(0," + ws / 4 + "px)";
	type.style.transform = "translate(0," + ws / 4 + "px)";
};

window.addEventListener("load", () => {
	setTimeout(() => {
		type.classList.add("active");
	}, 300);
	titleHeader.forEach((tH) => {
		setTimeout(() => {
			tH.classList.add("active");
			arrow.classList.add("active");
		}, 600);
	});
});

let fotoProfile = document.querySelector(".profile");
let mainAbout = document.querySelector(".mainAbout");
let titleAbout = mainAbout.getElementsByClassName("title")[0];
let parafAbout = mainAbout.getElementsByClassName("paraf")[0];
let nextAbout = mainAbout.getElementsByClassName("next")[0];

const aboutP = () => {
	fotoProfile.classList.add("active");
	titleAbout.classList.add("active");
	setTimeout(() => {
		parafAbout.classList.add("active");
		setTimeout(() => {
			nextAbout.classList.add("active");
		}, 200);
	}, 200);
};

const clearAbout = () => {
	fotoProfile.classList.remove("active");
	titleAbout.classList.remove("active");
	setTimeout(() => {
		parafAbout.classList.remove("active");
		setTimeout(() => {
			nextAbout.classList.remove("active");
		}, 200);
	}, 200);
};

let btnMore = document.querySelectorAll("#more");
btnMore.forEach((more) => {
	more.addEventListener("click", () => {
		Swal.fire({
			title: "Coming Soon",
			text: "This feature can't be accessed now",
			icon: "info"
		});
	});
});

let webPersonal = document.getElementsByClassName("webPersonal")[0];
let landingPage = document.getElementsByClassName("landingPage")[0];
let webBusines = document.getElementsByClassName("webBusines")[0];

const wP = () => {
	webPersonal.classList.add("active");
};

const lP = () => {
	landingPage.classList.add("active");
};

const wB = () => {
	webBusines.classList.add("active");
};

const wPClear = () => {
	webPersonal.classList.remove("active");
};

const lPClear = () => {
	landingPage.classList.remove("active");
};

const wBClear = () => {
	webBusines.classList.remove("active");
};

const workP = (ws) => {
	ws > 1250 ? wP() : wPClear();
	ws > 1250 ? lP() : lPClear();
	ws > 1400 ? wB() : wBClear();
};

let sectionSkill = document.querySelector(".skill");
let mainSkill = sectionSkill.querySelectorAll(".contentSkill");
const skillP = (ws) => {
	mainSkill.forEach((mS) => {
		ws >= 1600 ? mS.classList.add("active") : mS.classList.remove("active");
	});
};

let sectionContact = document.querySelector(".contact");
let logoContact = document.querySelector(".contact .logo");
let parafContact = document.querySelector(".contact .paraf");
let sosmedContact = document.querySelectorAll(".contact .sosmed i");

const contactP = (ws) => {
	ws >= 1600
		? sectionContact.classList.add("active")
		: sectionContact.classList.remove("active");
};

window.addEventListener("scroll", (e) => {
	let winScroll = this.scrollY;
	headerP(winScroll);
	winScroll >= 300 ? aboutP() : "";
	winScroll > 800 || winScroll < 300 ? clearAbout() : "";
	workP(winScroll);
	skillP(winScroll);
	contactP(winScroll);
});
