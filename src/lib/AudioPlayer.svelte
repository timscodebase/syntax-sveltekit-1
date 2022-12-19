<script>
	import { onMount } from 'svelte';
	import lottieWeb from 'lottie-web';

	export let src = '';
	export let title = '';

	onMount(() => {
		const playIconContainer = document.getElementById('play-icon');
		const audioPlayerContainer = document.getElementById('audio-player-container');
		const seekSlider = document.getElementById('seek-slider');
		const volumeSlider = document.getElementById('volume-slider');
		const muteIconContainer = document.getElementById('mute-icon');
		let playState = 'play';
		let muteState = 'unmute';

		const playAnimation = lottieWeb.loadAnimation({
			container: playIconContainer,
			path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/pause/pause.json',
			renderer: 'svg',
			loop: false,
			autoplay: false,
			name: 'Play Animation'
		});

		const muteAnimation = lottieWeb.loadAnimation({
			container: muteIconContainer,
			path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/mute/mute.json',
			renderer: 'svg',
			loop: false,
			autoplay: false,
			name: 'Mute Animation'
		});

		playAnimation.goToAndStop(14, true);

		playIconContainer.addEventListener('click', () => {
			if (playState === 'play') {
				audio.play();
				playAnimation.playSegments([14, 27], true);
				requestAnimationFrame(whilePlaying);
				playState = 'pause';
			} else {
				audio.pause();
				playAnimation.playSegments([0, 14], true);
				cancelAnimationFrame(raf);
				playState = 'play';
			}
		});

		// muteIconContainer.addEventListener('click', () => {
		// 	if (muteState === 'unmute') {
		// 		muteAnimation.playSegments([0, 15], true);
		// 		audio.muted = true;
		// 		muteState = 'mute';
		// 	} else {
		// 		muteAnimation.playSegments([15, 25], true);
		// 		audio.muted = false;
		// 		muteState = 'unmute';
		// 	}
		// });

		const showRangeProgress = (rangeInput) => {
			if (rangeInput === seekSlider)
				audioPlayerContainer.style.setProperty(
					'--seek-before-width',
					(rangeInput.value / rangeInput.max) * 100 + '%'
				);
			else
				audioPlayerContainer.style.setProperty(
					'--volume-before-width',
					(rangeInput.value / rangeInput.max) * 100 + '%'
				);
		};

		seekSlider.addEventListener('input', (e) => {
			showRangeProgress(e.target);
		});
		volumeSlider.addEventListener('input', (e) => {
			showRangeProgress(e.target);
		});

		/** Implementation of the functionality of the audio player */

		const audio = document.querySelector('audio');
		const durationContainer = document.getElementById('duration');
		const currentTimeContainer = document.getElementById('current-time');
		const outputContainer = document.getElementById('volume-output');
		let raf = null;

		const calculateTime = (secs) => {
			const minutes = Math.floor(secs / 60);
			const seconds = Math.floor(secs % 60);
			const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
			return `${minutes}:${returnedSeconds}`;
		};

		const displayDuration = () => {
			durationContainer.textContent = calculateTime(audio.duration);
		};

		const setSliderMax = () => {
			seekSlider.max = Math.floor(audio.duration);
		};

		const displayBufferedAmount = () => {
			const bufferedAmount = Math.floor(audio.buffered.end(audio.buffered.length - 1));
			audioPlayerContainer.style.setProperty(
				'--buffered-width',
				`${(bufferedAmount / seekSlider.max) * 100}%`
			);
		};

		const whilePlaying = () => {
			seekSlider.value = Math.floor(audio.currentTime);
			currentTimeContainer.textContent = calculateTime(seekSlider.value);
			audioPlayerContainer.style.setProperty(
				'--seek-before-width',
				`${(seekSlider.value / seekSlider.max) * 100}%`
			);
			raf = requestAnimationFrame(whilePlaying);
		};

		if (audio.readyState > 0) {
			displayDuration();
			setSliderMax();
			displayBufferedAmount();
		} else {
			audio.addEventListener('loadedmetadata', () => {
				displayDuration();
				setSliderMax();
				displayBufferedAmount();
			});
		}

		audio.addEventListener('progress', displayBufferedAmount);

		seekSlider.addEventListener('input', () => {
			currentTimeContainer.textContent = calculateTime(seekSlider.value);
			if (!audio.paused) {
				cancelAnimationFrame(raf);
			}
		});

		seekSlider.addEventListener('change', () => {
			audio.currentTime = seekSlider.value;
			if (!audio.paused) {
				requestAnimationFrame(whilePlaying);
			}
		});

		volumeSlider.addEventListener('input', (e) => {
			const value = e.target.value;

			outputContainer.textContent = value;
			audio.volume = value / 100;
		});
	});
</script>

<div id="audio-player-container">
	<audio {src} preload="metadata" loop />
	<div class="left">
		<button id="play-icon" />
		<span class="play-time">
			<span id="current-time" class="time">0:00</span>/
			<span id="duration" class="time">0:00</span>
		</span>
	</div>
	<div class="middle">
		<input type="range" id="seek-slider" max="100" value="0" />
		<p>Playing: {title}</p>
	</div>
	<div class="volume">
		<div>
			<input type="range" id="volume-slider" max="100" value="100" />
			<span>Volume:</span><output id="volume-output">100</output>
		</div>
	</div>
</div>

<style>
	#audio-player-container {
		--seek-before-width: 0%;
		--volume-before-width: 100%;
		--buffered-width: 0%;
		background: rgba(255, 255, 255, 0.579);
		position: relative;
		display: grid;
		grid-template-columns: 80px 1fr 200px;
		color: var(--dark-purple);
		gap: 1rem;
	}
	button {
		--size: 80px;
		padding: 0;
		border: 0;
		background: transparent;
		cursor: pointer;
		outline: none;
		width: var(--size);
		height: var(--size);
		color: var(--dark-purple);
	}
	p {
		padding: 0.25rem;
	}
	.left,
	.middle,
	.volume {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	.left,
	.volume {
		padding: 1rem 0;
	}
	.middle {
		padding: 1rem 0;
	}
	.volume {
		padding: 1rem;
	}
	.volume span {
		margin-right: 2rem;
	}
	.middle p {
		display: inline-block;
		font-size: 0.8rem;
		width: 100%;
	}
	.play-time {
		font-size: 0.7rem;
	}
	output {
		display: inline-block;
		width: 32px;
		text-align: center;
		font-size: 20px;
	}
	/* #volume-slider {
		width: 58%;
	} */
	#volume-slider::-webkit-slider-runnable-track {
		background: var(--dark-purple);
	}
	#volume-slider::-moz-range-track {
		background: var(--dark-purple);
	}
	#volume-slider::-ms-fill-upper {
		background: var(--dark-purple);
	}
	#volume-slider::before {
		width: var(--volume-before-width);
	}
	#mute-icon {
		margin: 0 auto;
	}
	input[type='range'] {
		position: relative;
		-webkit-appearance: none;
		width: 100%;
		margin: 0;
		margin-top: 1rem;
		padding: 0;
		height: 19px;
		outline: none;
	}
	input[type='range']::-webkit-slider-runnable-track {
		width: 100%;
		height: 19px;
		cursor: pointer;
		background: linear-gradient(
			to right,
			var(--purple) var(--buffered-width),
			var(--dark-purple) var(--buffered-width)
		);
	}
	input[type='range']::before {
		position: absolute;
		content: '';
		top: 8px;
		left: 0;
		width: var(--seek-before-width);
		height: 3px;
		background-color: var(--dark-purple);
		cursor: pointer;
	}
	input[type='range']::-webkit-slider-thumb {
		position: relative;
		-webkit-appearance: none;
		box-sizing: content-box;
		border: 1px solid var(--dark-purple);
		height: 24px;
		width: 5px;
		border-radius: 50vw;
		background-color: var(--white);
		cursor: pointer;
		margin: -3px 0 0 7.5px;
	}
</style>
