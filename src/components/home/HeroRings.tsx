import React from "react";

/**
 * Decorative orbit rings behind the hero portrait.
 *
 * Each ring is deliberately imperfect: a slight ellipse (rx !== ry) whose centre
 * is nudged off the shared middle. That matters for two reasons.
 *   1. A perfectly circular, perfectly concentric ring shows no visible change
 *      when rotated, so the animation would be invisible.
 *   2. The small offsets make the rings drift in and out of alignment as they
 *      turn, which reads as hand-drawn rather than machine-generated.
 *
 * Rotation is CSS-driven (see .hero-ring in globals.css) so six perpetual
 * animations cost no per-frame JS, and prefers-reduced-motion is honoured
 * without this needing to be a Client Component.
 *
 * Coordinates are in a 1000x1000 viewBox, so the shared centre is (500, 500).
 */
type Ring = {
	cx: number;
	cy: number;
	rx: number;
	ry: number;
	stroke: string;
	opacity: number;
	width: number;
	/** Seconds for one full turn. Deliberately mismatched so they rarely resync. */
	duration: number;
	reverse?: boolean;
	dash?: string;
};

const CREAM = "#f7f9f2";
const CORAL = "#dd5a35";

const RINGS: Ring[] = [
	{
		cx: 500,
		cy: 500,
		rx: 392,
		ry: 380,
		stroke: CREAM,
		opacity: 0.12,
		width: 1,
		duration: 90,
	},
	{
		cx: 487,
		cy: 509,
		rx: 410,
		ry: 397,
		stroke: CREAM,
		opacity: 0.09,
		width: 1,
		duration: 131,
		reverse: true,
	},
	{
		cx: 513,
		cy: 492,
		rx: 366,
		ry: 377,
		stroke: CORAL,
		opacity: 0.38,
		width: 1.2,
		duration: 79,
	},
	{
		cx: 498,
		cy: 503,
		rx: 430,
		ry: 416,
		stroke: CREAM,
		opacity: 0.07,
		width: 1,
		duration: 157,
		reverse: true,
	},
	{
		cx: 506,
		cy: 497,
		rx: 344,
		ry: 338,
		stroke: CREAM,
		opacity: 0.48,
		width: 1,
		duration: 63,
		dash: "2 16",
	},
	// Short coral arc sweeping the outer edge: the one element with obvious travel.
	{
		cx: 500,
		cy: 500,
		rx: 418,
		ry: 404,
		stroke: CORAL,
		opacity: 0.55,
		width: 1.4,
		duration: 47,
		reverse: true,
		dash: "150 2450",
	},
];

const HeroRings = () => (
	<div
		aria-hidden="true"
		className="pointer-events-none absolute left-1/2 top-1/2 aspect-square h-[100%] lg:h-[156%] -translate-x-1/2 -translate-y-1/2"
	>
		<svg viewBox="0 0 1000 1000" fill="none" className="h-full w-full">
			{RINGS.map((ring, i) => (
				<ellipse
					key={i}
					cx={ring.cx}
					cy={ring.cy}
					rx={ring.rx}
					ry={ring.ry}
					stroke={ring.stroke}
					strokeOpacity={ring.opacity}
					strokeWidth={ring.width}
					strokeDasharray={ring.dash}
					className={`hero-ring${ring.reverse ? " hero-ring--reverse" : ""}`}
					style={{ animationDuration: `${ring.duration}s` }}
				/>
			))}
		</svg>
	</div>
);

export default HeroRings;
