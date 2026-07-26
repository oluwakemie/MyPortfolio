import React from "react";
import type { IconType } from "react-icons";
import {
	TbTestPipe,
	TbChecks,
	TbBug,
	TbTerminal2,
	TbClipboardCheck,
	TbShieldCheck,
	TbRepeat,
	TbBinaryTree,
} from "react-icons/tb";

/**
 * Decorative QA motifs that drift slowly behind a section.
 *
 * Kept deliberately faint (5-10% opacity) so they read as background texture
 * rather than content, and hidden below md where there is no spare whitespace
 * for them to occupy without crowding the copy.
 *
 * Motion is CSS-driven (see .qa-motif in globals.css) so this stays a plain
 * markup component and prefers-reduced-motion is honoured without any JS.
 */
type Motif = {
	Icon: IconType;
	/** Tailwind placement + size utilities. */
	position: string;
	/** Seconds for one bob. Mismatched so the group never pulses in unison. */
	duration: number;
	delay: number;
	/** Larger travel, for variety between neighbouring motifs. */
	deep?: boolean;
	/** Coral instead of forest. Used sparingly, one or two per set. */
	accent?: boolean;
};

const SETS = {
	skills: [
		{ Icon: TbTestPipe, position: "right-[5%] top-[12%] text-6xl", duration: 7.5, delay: 0, accent: true },
		{ Icon: TbChecks, position: "right-[17%] top-[6%] text-4xl", duration: 9, delay: 1.1, deep: true },
		{ Icon: TbBug, position: "right-[8%] bottom-[16%] text-5xl", duration: 8.2, delay: 0.5, deep: true },
		{ Icon: TbTerminal2, position: "right-[24%] bottom-[8%] text-4xl", duration: 10.5, delay: 2.1, accent: true },
	],
	experience: [
		{ Icon: TbClipboardCheck, position: "right-[4%] top-[2%] text-7xl", duration: 9.5, delay: 0 },
		// top-[4%] not [1%]: the `deep` bob travels -20px and would clip the section edge.
		{ Icon: TbShieldCheck, position: "right-[19%] top-[4%] text-5xl", duration: 7.8, delay: 1.4, deep: true, accent: true },
		{ Icon: TbRepeat, position: "right-[3%] top-[42%] text-6xl", duration: 11, delay: 0.7, deep: true },
		{ Icon: TbBinaryTree, position: "right-[13%] bottom-[6%] text-5xl", duration: 8.8, delay: 2.3 },
	],
} satisfies Record<string, Motif[]>;

const QaMotifs = ({ variant }: { variant: keyof typeof SETS }) => (
	<div
		aria-hidden="true"
		className="pointer-events-none absolute inset-0 overflow-hidden hidden md:block"
	>
		{SETS[variant].map(({ Icon, position, duration, delay, deep, accent }, i) => (
			<Icon
				key={i + 1}
				strokeWidth={0.9}
				className={`qa-motif${deep ? " qa-motif--deep" : ""} absolute ${position} ${
					accent ? "!text-coral-light" : "text-forest-light"
				} opacity-90`}
				style={{
					animationDuration: `${duration}s`,
					animationDelay: `${delay}s`,
				}}
			/>
		))}
	</div>
);

export default QaMotifs;
