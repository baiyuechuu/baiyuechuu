const themeToggle = document.querySelector(".dark-mode-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme =
	localStorage.getItem("theme") ||
	(prefersDarkScheme.matches ? "dark" : "light");

if (currentTheme === "dark") {
	document.documentElement.setAttribute("data-theme", "dark");

	themeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-dasharray="4" stroke-dashoffset="4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"><animate id="SVGjUNXVaqx" fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;SVGjUNXVaqx.begin+6s" dur="0.4s" values="4;0"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="SVGjUNXVaqx.begin+2s;SVGjUNXVaqx.begin+4s" dur="0.4s" values="4;0"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="SVGjUNXVaqx.begin+1.2s;SVGjUNXVaqx.begin+3.2s;SVGjUNXVaqx.begin+5.2s" dur="0.4s" values="0;4"/><set fill="freeze" attributeName="d" begin="SVGjUNXVaqx.begin+1.8s" to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5"/><set fill="freeze" attributeName="d" begin="SVGjUNXVaqx.begin+3.8s" to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5"/><set fill="freeze" attributeName="d" begin="SVGjUNXVaqx.begin+5.8s" to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"/></path><path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"><animate id="SVGO88gQckN" fill="freeze" attributeName="stroke-dashoffset" begin="1.1s;SVGO88gQckN.begin+6s" dur="0.4s" values="4;0"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="SVGO88gQckN.begin+2s;SVGO88gQckN.begin+4s" dur="0.4s" values="4;0"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="SVGO88gQckN.begin+1.2s;SVGO88gQckN.begin+3.2s;SVGO88gQckN.begin+5.2s" dur="0.4s" values="0;4"/><set fill="freeze" attributeName="d" begin="SVGO88gQckN.begin+1.8s" to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5"/><set fill="freeze" attributeName="d" begin="SVGO88gQckN.begin+3.8s" to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5"/><set fill="freeze" attributeName="d" begin="SVGO88gQckN.begin+5.8s" to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"/></path><path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"><animate id="SVGPXuakc7A" fill="freeze" attributeName="stroke-dashoffset" begin="2s;SVGPXuakc7A.begin+6s" dur="0.4s" values="4;0"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="SVGPXuakc7A.begin+2s" dur="0.4s" values="4;0"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="SVGPXuakc7A.begin+1.2s;SVGPXuakc7A.begin+3.2s" dur="0.4s" values="0;4"/><set fill="freeze" attributeName="d" begin="SVGPXuakc7A.begin+1.8s" to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5"/><set fill="freeze" attributeName="d" begin="SVGPXuakc7A.begin+5.8s" to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"/></path></g><path fill="none" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"/></path></svg>`;
}

themeToggle.addEventListener("click", () => {
	const isDark = document.documentElement.getAttribute("data-theme") === "dark";
	document.documentElement.setAttribute(
		"data-theme",
		isDark ? "light" : "dark",
	);
	localStorage.setItem("theme", isDark ? "light" : "dark");
	themeToggle.innerHTML = isDark
		? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="2" stroke-dashoffset="2" d="M12 19v1M19 12h1M12 5v-1M5 12h-1"><animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="2;0"/></path><path stroke-dasharray="2" stroke-dashoffset="2" d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"><animate fill="freeze" attributeName="d" begin="0.8s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0"/></path><animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></g><mask id="SVGpCD1890p"><circle cx="12" cy="12" r="12" fill="#fff"/><circle cx="12" cy="12" r="8"><animate fill="freeze" attributeName="r" dur="0.4s" values="8;4"/></circle><circle cx="18" cy="6" r="12" fill="#fff"><animate fill="freeze" attributeName="cx" dur="0.4s" values="18;22"/><animate fill="freeze" attributeName="cy" dur="0.4s" values="6;2"/><animate fill="freeze" attributeName="r" dur="0.4s" values="12;3"/></circle><circle cx="18" cy="6" r="10"><animate fill="freeze" attributeName="cx" dur="0.4s" values="18;22"/><animate fill="freeze" attributeName="cy" dur="0.4s" values="6;2"/><animate fill="freeze" attributeName="r" dur="0.4s" values="10;1"/></circle></mask><circle cx="12" cy="12" r="10" mask="url(#SVGpCD1890p)" fill="currentColor"><animate fill="freeze" attributeName="r" dur="0.4s" values="10;6"/></circle></svg>`
		: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-dasharray="4" stroke-dashoffset="4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"><animate id="SVGjUNXVaqx" fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;SVGjUNXVaqx.begin+6s" dur="0.4s" values="4;0"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="SVGjUNXVaqx.begin+2s;SVGjUNXVaqx.begin+4s" dur="0.4s" values="4;0"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="SVGjUNXVaqx.begin+1.2s;SVGjUNXVaqx.begin+3.2s;SVGjUNXVaqx.begin+5.2s" dur="0.4s" values="0;4"/><set fill="freeze" attributeName="d" begin="SVGjUNXVaqx.begin+1.8s" to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5"/><set fill="freeze" attributeName="d" begin="SVGjUNXVaqx.begin+3.8s" to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5"/><set fill="freeze" attributeName="d" begin="SVGjUNXVaqx.begin+5.8s" to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"/></path><path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"><animate id="SVGO88gQckN" fill="freeze" attributeName="stroke-dashoffset" begin="1.1s;SVGO88gQckN.begin+6s" dur="0.4s" values="4;0"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="SVGO88gQckN.begin+2s;SVGO88gQckN.begin+4s" dur="0.4s" values="4;0"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="SVGO88gQckN.begin+1.2s;SVGO88gQckN.begin+3.2s;SVGO88gQckN.begin+5.2s" dur="0.4s" values="0;4"/><set fill="freeze" attributeName="d" begin="SVGO88gQckN.begin+1.8s" to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5"/><set fill="freeze" attributeName="d" begin="SVGO88gQckN.begin+3.8s" to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5"/><set fill="freeze" attributeName="d" begin="SVGO88gQckN.begin+5.8s" to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"/></path><path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"><animate id="SVGPXuakc7A" fill="freeze" attributeName="stroke-dashoffset" begin="2s;SVGPXuakc7A.begin+6s" dur="0.4s" values="4;0"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="SVGPXuakc7A.begin+2s" dur="0.4s" values="4;0"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="SVGPXuakc7A.begin+1.2s;SVGPXuakc7A.begin+3.2s" dur="0.4s" values="0;4"/><set fill="freeze" attributeName="d" begin="SVGPXuakc7A.begin+1.8s" to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5"/><set fill="freeze" attributeName="d" begin="SVGPXuakc7A.begin+5.8s" to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"/></path></g><path fill="none" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"/></path></svg>`;
});

const fetchUserData = async () => {
	const response = await fetch("https://api.github.com/users/baiyuechuu");
	const data = await response.json();
	return data;
};

// format data

// {
//   "login": "baiyuechuu",
//   "id": 119971209,
//   "node_id": "U_kgDOByadiQ",
//   "avatar_url": "https://avatars.githubusercontent.com/u/119971209?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/baiyuechuu",
//   "html_url": "https://github.com/baiyuechuu",
//   "followers_url": "https://api.github.com/users/baiyuechuu/followers",
//   "following_url": "https://api.github.com/users/baiyuechuu/following{/other_user}",
//   "gists_url": "https://api.github.com/users/baiyuechuu/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/baiyuechuu/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/baiyuechuu/subscriptions",
//   "organizations_url": "https://api.github.com/users/baiyuechuu/orgs",
//   "repos_url": "https://api.github.com/users/baiyuechuu/repos",
//   "events_url": "https://api.github.com/users/baiyuechuu/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/baiyuechuu/received_events",
//   "type": "User",
//   "user_view_type": "public",
//   "site_admin": false,
//   "name": "BaiYueChu",
//   "company": null,
//   "blog": "",
//   "location": "Viet Nam",
//   "email": null,
//   "hireable": null,
//   "bio": "\"落子無悔, 舉棋不回.\"",
//   "twitter_username": null,
//   "public_repos": 11,
//   "public_gists": 0,
//   "followers": 18,
//   "following": 6,
//   "created_at": "2022-12-06T19:33:52Z",
//   "updated_at": "2025-08-29T05:08:53Z"
// }

const loadProfile = async () => {
	const githubData = await fetchUserData();
	console.log(githubData);

	const profileImage = document.querySelector(".profile-info-wrapper");
	profileImage.innerHTML = `<img src="${githubData.avatar_url}" alt="Profile Image" class="user-avatar">
  <div class="user-details">
    <h2>${githubData.name}</h2>
    <span>@${githubData.login}</span>
    <p class="bio">${githubData.bio}</p>
  </div>
  `;

	const ghDetails = document.querySelector(".gh-details");
	ghDetails.innerHTML = `
<div class="stat">
		<div class="stat-item">
			<span class="stat-number">${githubData.public_repos}</span>
			<span class="stat-label"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M3 2.75A2.75 2.75 0 0 1 5.75 0h14.5a.75.75 0 0 1 .75.75v20.5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h5.25v-4H6A1.5 1.5 0 0 0 4.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 0 1-.6 1.374A3.25 3.25 0 0 1 3 18.75ZM19.5 1.5H5.75c-.69 0-1.25.56-1.25 1.25v12.651A3 3 0 0 1 6 15h13.5Z"/><path fill="currentColor" d="M7 18.25a.25.25 0 0 1 .25-.25h5a.25.25 0 0 1 .25.25v5.01a.25.25 0 0 1-.397.201l-2.206-1.604a.25.25 0 0 0-.294 0L7.397 23.46a.25.25 0 0 1-.397-.2z"/></svg>Repositories</span>
		</div>
		<div class="stat-item">
			<span class="stat-number">${githubData.followers}</span>
			<span class="stat-label"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.226 11.33l6.998-8.983c.547-.703 1.573-.266 1.573.67V9.97c0 .56.402 1.015.899 1.015H18.1c.773 0 1.185 1.03.674 1.686l-6.998 8.983c-.547.702-1.573.265-1.573-.671V14.03c0-.56-.403-1.015-.899-1.015H5.9c-.773 0-1.185-1.03-.674-1.686"/></svg>Followers</span>
		</div>
		<div class="stat-item">
			<span class="stat-number">${githubData.following}</span>
			<span class="stat-label"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6.5 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M3 19a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v3H3zm5-3a3 3 0 0 0-3 3v1h14v-1a3 3 0 0 0-3-3z"/></svg>Following</span>
		</div>
</div>
	`;
};

loadProfile();

const skillIcons = [
	"html",
	"css",
	"scss",
	"pug",
	"react",
	"tailwind",
	"nextjs",
	"nodejs",
	"express",
	"mongodb",
	"firebase",
	"javascript",
	"typescript",
	"python",
	"c",
	"cpp",
	"lua",
	"flutter",
	"dart",
	"docker",
	"git",
	"github",
	"gitlab",
	"vercel",
	"postman",
	"bun",
	"linux",
	"arch",
	"bash",
	"ubuntu",
	"windows",
	"neovim",
	"vim",
	"vscode",
	"figma",
	"ps",
	"ai",
	"qt",
	"raspberrypi",
	"tauri",
	"cmake",
	"latex",
	"md",
	"nginx",
	"githubactions",
	"swift",
	"jquery",
	"mysql",
	"notion",
	"obsidian",
	"postgres",
	"sqlite",
	"supabase",
	"vite",
];

const skillSection = document.querySelector(".skills-grid");

skillIcons.forEach((icon) => {
	const iconElement = document.createElement("img");
	iconElement.src = `https://skillicons.dev/icons?i=${icon}`;
	iconElement.alt = `${icon}`;
	skillSection.appendChild(iconElement);
});
