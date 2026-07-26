"use client";
import React from "react";
import Profile from "../../assets/hero-profile.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { motion, useReducedMotion } from "framer-motion";
import { SOCIALS } from "../../constants";
import Image from "next/image";
import HeroRings from "./HeroRings";

const fadeUp = (delay: number) => ({
	hidden: { y: 24, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.6, delay },
	},
});

const STACK = [
	"Playwright",
	"Cypress",
	"Postman",
	"API Testing",
	"Regression",
	"CI/CD",
	"Agile",
];

const Hero = () => {
	const reduce = useReducedMotion();
	const marqueeItems = [...STACK, ...STACK];

	return (
		// -mt-16 cancels the navbar's height in the page flow so the hero starts
		// at the very top; the sticky navbar then floats over it.
		<section
			id="top"
			className="relative -mt-16 left-1/2 flex min-h-[100dvh] w-screen -mx-[50vw] flex-col justify-center pb-10"
		>
			<div className="relative flex min-h-[calc(100dvh-2.5rem)] flex-col overflow-hidden rounded-b-[2.5rem] bg-forest">
				{/* Full-bleed portrait: the hero's primary visual.
				    At lg the card is landscape, so covering it would scale the
				    portrait up ~1.8x. Narrowing the image box to 80% drops that
				    magnification by 20% while still filling the full card height,
				    so no bare band appears top or bottom. The mask dissolves the
				    two resulting vertical seams into the forest. */}
				<div className="absolute inset-0">
					<Image
						src={Profile.src}
						alt="Oluwakemi Dada"
						className="absolute inset-y-0 left-1/2 h-full w-full -translate-x-1/2 object-cover object-[42%_44%] grayscale-[0.25] brightness-110 lg:w-[80%] lg:[mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]"
						unoptimized
						width={1}
						height={1}
					/>
					{/* Forest tint grades the photo into the brand palette */}
					<div
						aria-hidden="true"
						className="absolute inset-0 bg-forest/20 mix-blend-multiply"
					/>
					{/* Side scrims keep the left/right copy legible over the photo.
					    Desktop only: at mobile widths the columns stack, so these
					    would flatten the whole card into solid green. */}
					<div
						aria-hidden="true"
						className="absolute inset-0 hidden bg-gradient-to-r from-forest via-forest/20 to-forest lg:block"
					/>
					{/* Bottom scrim carries the copy block and marquee */}
					<div
						aria-hidden="true"
						className="absolute inset-0 bg-gradient-to-t from-forest via-forest/65 to-transparent lg:via-forest/55"
					/>
					{/* Orbit rings sit above the scrims so the hairlines stay
					    visible, but below the z-10 copy so text is unobstructed. */}
					<HeroRings />
					<div
						aria-hidden="true"
						className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
						style={{
							backgroundImage:
								"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
						}}
					/>
				</div>

				<div className="relative z-10 flex flex-1 flex-col justify-center px-6 sm:px-10 lg:px-14">
					<div className="grid grid-cols-1 items-end gap-x-12 gap-y-10 mt-4 lg:mt-0 lg:grid-cols-[1.15fr_0.85fr] pt-20">
						<div>
							<motion.div
								variants={fadeUp(0)}
								initial="hidden"
								animate="visible"
								className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-4 py-1.5 font-sans text-sm text-cream/85 backdrop-blur-sm"
							>
								<span className="h-2 w-2 rounded-full bg-coral" />
								Available for QA Engineer roles
							</motion.div>

							<motion.h1
								variants={fadeUp(0.15)}
								initial="hidden"
								animate="visible"
								className="mt-5 text-6xl font-medium leading-[0.95] tracking-tight text-cream sm:text-7xl lg:text-8xl"
							>
								Oluwakemi
								<br />
								Dada
							</motion.h1>
						</div>

						<div className="lg:pb-3">
							<motion.p
								variants={fadeUp(0.3)}
								initial="hidden"
								animate="visible"
								className="max-w-md text-xl font-light leading-relaxed text-cream/75 sm:text-2xl"
							>
								Results-driven QA Engineer shipping reliable
								web, mobile, and API products through
								disciplined test automation.
							</motion.p>

							<motion.div
								variants={fadeUp(0.45)}
								initial="hidden"
								animate="visible"
								className="mt-7 flex flex-wrap items-center gap-4"
							>
								<a
									href="/Oluwakemi-Dada-QA-Resume.pdf"
									download
									className="flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-base font-medium text-forest transition-colors hover:bg-coral hover:text-cream"
								>
									<HiOutlineArrowDownTray className="text-lg" />
									Download CV
								</a>
								<a
									href="#contact"
									className="rounded-full border border-cream/30 px-6 py-3 text-base text-cream transition-colors hover:border-cream/70 hover:bg-cream/10"
								>
									Let&rsquo;s talk
								</a>
							</motion.div>

							<motion.div
								variants={fadeUp(0.55)}
								initial="hidden"
								animate="visible"
								className="mt-7 flex items-center gap-6 text-2xl"
							>
								<a
									href={SOCIALS.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn"
									className="text-cream/60 transition-colors hover:text-coral"
								>
									<FaLinkedin />
								</a>
								<a
									href={SOCIALS.github}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub"
									className="text-cream/60 transition-colors hover:text-coral"
								>
									<FaGithub />
								</a>
							</motion.div>
						</div>
					</div>
				</div>

				<div className="relative z-10 overflow-hidden border-t border-cream/15 py-5">
					<motion.div
						className="flex w-max gap-10 whitespace-nowrap font-sans text-sm uppercase tracking-[0.25em] text-cream/60"
						animate={reduce ? undefined : { x: ["0%", "-50%"] }}
						transition={{
							duration: 22,
							repeat: Infinity,
							ease: "linear",
						}}
					>
						{marqueeItems.map((item, i) => (
							<span
								key={`${item}-${i}`}
								className="flex items-center gap-10"
							>
								{item}
								<span className="text-coral">&bull;</span>
							</span>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
