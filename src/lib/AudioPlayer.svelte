<script>
	import { onMount } from 'svelte';
	import 'iconify-icon';

	export let src = '';
	export let title = '';
	let playing = false;

	onMount(() => {
		const play_button = document.querySelector('#play_button');
		const play = document.querySelector('.play');
		const pause = document.querySelector('.pause');
		const audioPlayerContainer = document.getElementById('audio-player-container');
		const seekSlider = document.querySelector('.seek-slider');
		const volumeSlider = document.getElementById('volume-slider');

		const showRangeProgress = (rangeInput) => {
			if (rangeInput === seekSlider)
				audioPlayerContainer?.style.setProperty(
					'--seek-before-width',
					(rangeInput.value / rangeInput.max) * 100 + '%'
				);
			else
				audioPlayerContainer?.style.setProperty(
					'--volume-before-width',
					(rangeInput.value / rangeInput.max) * 100 + '%'
				);
		};

		play_button?.addEventListener('click', (e) => {
			if (playing) {
				audio?.pause();
				playing = !playing;
			} else {
				audio?.play();
				playing = !playing;
			}
			play?.classList.toggle('hide');
			pause?.classList.toggle('hide');
		});

		seekSlider?.addEventListener('input', (e) => {
			showRangeProgress(e.target);
		});
		volumeSlider?.addEventListener('input', (e) => {
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

		audio?.addEventListener('progress', displayBufferedAmount);

		seekSlider?.addEventListener('input', () => {
			currentTimeContainer.textContent = calculateTime(seekSlider.value);
			if (!audio.paused) {
				cancelAnimationFrame(raf);
			}
		});

		seekSlider?.addEventListener('change', () => {
			audio.currentTime = seekSlider.value;
			if (!audio?.paused) {
				requestAnimationFrame(whilePlaying);
			}
		});

		volumeSlider?.addEventListener('input', (e) => {
			const value = e.target.value;
			outputContainer.textContent = value;
			audio.volume = value / 100;
		});
	});
</script>

<div id="audio-player-container">
	<audio {src} preload="metadata" loop />
	<button id="play_button" class="left">
		<iconify-icon class="play" icon="material-symbols:play-arrow-rounded" />
		<iconify-icon class="pause hide" icon="material-symbols:pause-rounded" />
		<span class="play-time">
			<span id="current-time" class="time">0:00</span>/
			<span id="duration" class="time">0:00</span>
		</span>
	</button>
	<div class="middle">
		<input type="range" class="seek-slider" max="100" value="0" />
		<p>Playing: {title}</p>
	</div>
	<div class="volume">
		<input type="range" id="volume-slider" max="100" value="100" />
		<p><span>Volume:</span><output id="volume-output">100</output></p>
	</div>
</div>

<style>
	#audio-player-container {
		--size: 100px;
		--seek-before-width: 0%;
		--volume-before-width: 100%;
		--buffered-width: 0%;
		background: rgba(0, 0, 0, 0.7);
		position: relative;
		display: grid;
		grid-template-columns: var(--size) 1fr 200px;
		border-bottom: 3px solid var(--purple);
	}
	button {
		--size: 80px;
		padding: 0;
		border: 0;
		background: transparent;
		cursor: pointer;
		outline: none;
	}
	p {
		margin: 8px 0;
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
	.left {
		justify-content: space-around;
	}
	.left,
	.middle {
		border-right: 3px solid var(--purple);
	}
	.volume span {
		margin-right: 2rem;
	}

	.middle p,
	.volume p {
		display: inline-block;
		font-size: 1rem;
		width: 100%;
		padding: 0.5rem 1rem;
		font-family: var(--heading-font);
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
	.play,
	.pause {
		font-size: 3rem;
	}
	.hide {
		display: none;
	}
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
		padding: 0;
		height: 24px;
		outline: none;
		border-bottom: 3px solid var(--purple);
	}
	input[type='range']::-webkit-slider-runnable-track {
		width: 100%;
		height: 21px;
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
		top: 0px;
		left: 0;
		width: var(--seek-before-width);
		height: 21px;
		background: var(--dark-grad);
		cursor: pointer;
	}
	input[type='range']::-webkit-slider-thumb {
		position: relative;
		-webkit-appearance: none;
		box-sizing: content-box;
		border: 1px solid var(--dark-purple);
		height: 24px;
		width: 18px;
		border-radius: 50vw;
		background-color: var(--white);
		cursor: pointer;
		margin: -3px 0 0 7.5px;
		left: -10px;
	}
</style>
