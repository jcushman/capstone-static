import { LitElement, svg, css } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";

export class CapArrowRight extends LitElement {
	static styles = [
		baseStyles,
		css`
			.iconContainer {
				color: var(--color-gray-500);

				&:hover {
					color: var(--color-yellow);
				}
			}
		`,
	];
	render() {
		return svg`
		<svg class="iconContainer" width="28" height="28" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="28" height="28" fill="white"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M25.9946 17.7025C24.0845 19.6159 22.1685 21.5231 20.2545 23.4326C20.008 23.6785 19.7118 23.8195 19.3631 23.8386C18.7603 23.8716 18.2235 23.5388 17.974 22.9831C17.7294 22.4384 17.8318 21.8674 18.2694 21.4284C19.2971 20.3973 20.3296 19.3712 21.36 18.3427C21.4146 18.2883 21.4651 18.2296 21.5447 18.1435H21.2579C16.8485 18.1435 12.4392 18.1435 8.0298 18.1433C7.94791 18.1433 7.86602 18.1449 7.78433 18.1414C7.05344 18.1105 6.44967 17.502 6.42665 16.774C6.40037 15.9441 7.04081 15.2953 7.89617 15.2951C12.3501 15.2937 16.8041 15.2943 21.2581 15.2943H21.5514C21.4722 15.211 21.4329 15.1676 21.3913 15.1262C20.3663 14.103 19.3427 13.0784 18.3146 12.0582C18.0457 11.7912 17.8691 11.4852 17.8495 11.1025C17.82 10.5229 18.1636 9.96498 18.6923 9.7238C19.237 9.47548 19.8281 9.58181 20.2708 10.022C21.6191 11.3626 22.9637 12.707 24.3096 14.0499C24.8722 14.6113 25.4406 15.1672 25.9952 15.7361C26.5687 16.3244 26.5703 17.1258 25.9946 17.7025ZM31.4258 9.46367C30.5592 7.6285 29.3631 5.98094 27.9154 4.5925C24.9511 1.75002 20.9312 0 16.5 0C12.0688 0 8.04874 1.75002 5.08465 4.5925C3.55137 6.06263 2.30226 7.82507 1.42593 9.79143C0.511907 11.8417 0 14.1104 0 16.5C0 18.8894 0.511907 21.1583 1.42593 23.2084C2.39026 25.3717 3.80457 27.289 5.55276 28.841C7.59856 30.6572 10.0988 31.9705 12.8619 32.5926C14.0327 32.8562 15.2493 33 16.5 33C17.7505 33 18.9671 32.8562 20.1381 32.5926C22.901 31.9705 25.4012 30.6572 27.447 28.841C29.1068 27.3676 30.4674 25.566 31.4258 23.5361C32.4339 21.4015 33 19.0172 33 16.5C33 13.9826 32.4339 11.5983 31.4258 9.46367Z" fill="currentColor"/>
		</svg>
		`;
	}
}

customElements.define("cap-arrow-right", CapArrowRight);