// import { AuthService } from './auth';
// import '../assets/css/style.css';
// import { SpotifyButton } from '$lib/components/spotifyButton.svelte';

// const app = new SpotifyButton({
// 	target: document.querySelector('main') as HTMLElement,
// });
// const authorization = new AuthService();

// const messageListener = window.addEventListener('message', (event) => {
// 	const authParameters = new URLSearchParams((event.data as string).slice(1));
// 	console.log(...authParameters.entries());
// 	if (
// 		authParameters.get('state') === authorization.state &&
// 		authParameters.get('access_token')
// 	) {
// 		// console.log(
// 		// 	`/generator.html?token=${authParameters.get('access_token') ?? ''}`
// 		// );
// 		window.location.href = `${
// 			window.location.origin
// 		}/wave/generator.html?token=${
// 			authParameters.get('access_token') ?? ''
// 		}`;
// 	}
// });

// document.querySelector('#spotify-login')?.addEventListener('click', () => {
// 	authorization.authorize();
// });

// // console.log(navigator);
// // if ('share' in navigator) {
// // 	navigator.share({
// // 		title: 'Spotify Waveformer',
// // 		text: 'Check it out!',
// // 		url: 'https://github.com/illumincrotty',
// // 	});
// // }

export {};
