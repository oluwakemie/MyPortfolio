"use client";
import React from "react";
import { EXPERIENCES } from "../../constants";
import { motion } from "framer-motion";
import QaMotifs from "../shared/QaMotifs";

const Experience = () => {
	return (
		<section
			id="experience"
			className="relative scroll-mt-16 overflow-hidden py-24"
		>
			<QaMotifs variant="experience" />
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -20 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="relative text-5xl font-medium text-forest sm:text-6xl"
			>
				Where I&rsquo;ve worked
			</motion.h2>

			<div className="relative mt-14 divide-y divide-forest/15 border-t border-forest/15">
				{EXPERIENCES.map((experience, index) => (
					<motion.div
						key={experience.company}
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 30 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="grid grid-cols-1 gap-y-10 py-14 lg:grid-cols-[320px_1fr] lg:gap-x-0"
					>
						<div className="lg:border-r lg:border-forest/15 lg:pr-10">
							<span className="font-sans text-sm text-forest-muted/60">
								{String(index + 1).padStart(2, "0")}
							</span>
							<h3 className="mt-4 text-3xl leading-tight text-forest sm:text-4xl">
								{experience.role}
							</h3>

							<dl className="mt-10 space-y-6">
								<div>
									<dt className="font-sans text-xs uppercase tracking-[0.2em] text-forest-muted/70">
										Company
									</dt>
									<dd className="mt-1.5 text-lg text-coral">
										{experience.company}
									</dd>
								</div>
								<div>
									<dt className="font-sans text-xs uppercase tracking-[0.2em] text-forest-muted/70">
										Location
									</dt>
									<dd className="mt-1.5 text-lg text-forest">
										{experience.location}
									</dd>
								</div>
								<div>
									<dt className="font-sans text-xs uppercase tracking-[0.2em] text-forest-muted/70">
										Period
									</dt>
									<dd className="mt-1.5 text-lg text-forest">
										{experience.year}
									</dd>
								</div>
							</dl>
						</div>

						<div className="lg:pl-10">
							<p className="font-sans text-xs uppercase tracking-[0.2em] text-forest-muted/70">
								What I did
							</p>
							<ol className="mt-5 max-w-2xl space-y-4">
								{experience.bullets.map((bullet, i) => (
									<li key={bullet} className="flex gap-4">
										<span className="mt-0.5 flex-shrink-0 font-sans text-sm text-coral">
											{String(i + 1).padStart(2, "0")}
										</span>
										<span className="text-lg font-light leading-relaxed text-forest-light sm:text-xl">
											{bullet}
										</span>
									</li>
								))}
							</ol>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Experience;
