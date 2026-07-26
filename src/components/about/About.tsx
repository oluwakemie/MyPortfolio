"use client";
import React from "react";
import { motion } from "framer-motion";
import AboutPhoto from "../../assets/about.jpg";
import { STATS } from "../../constants";

const About = () => {
	return (
		<section id="about" className="scroll-mt-16 bg-sage/50 py-24">
			<div className="grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-[3fr_2fr]">
				<motion.div
					whileInView={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: 30 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="max-w-2xl text-5xl font-medium leading-tight text-forest sm:text-6xl">
						Shipping quality, one release at a time.
					</h2>
					<p className="mt-8 max-w-xl text-xl font-light leading-relaxed text-forest-light sm:text-2xl">
						I&rsquo;m a QA Engineer with 4+ years of hands-on
						experience delivering end-to-end product quality across
						web, mobile, and API layers. I work across the full
						testing lifecycle, from test planning and manual
						exploratory testing to building Playwright automation
						frameworks with the Page Object Model pattern for
						scalable, maintainable regression coverage.
					</p>
					<p className="mt-6 max-w-xl text-xl font-light leading-relaxed text-forest-light sm:text-2xl">
						I&rsquo;m most effective in fast-moving Agile teams,
						owning QA sign-off end to end: test strategy, defect
						management, API validation with Postman, and
						CI/CD-integrated automation that ships quality with
						confidence.
					</p>

					<div className="mt-14 grid grid-cols-2 gap-8 border-t border-forest/10 pt-10 sm:grid-cols-4">
						{STATS.map((stat) => (
							<div key={stat.label}>
								<p className="text-4xl font-medium text-forest sm:text-5xl">
									{stat.value}
								</p>
								<p className="mt-2 font-sans text-sm uppercase tracking-wider text-forest-muted">
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</motion.div>

				<motion.div
					whileInView={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: 30 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="relative mx-auto w-full max-w-sm lg:mx-0"
				>
					<div
						className="aspect-[4/5] w-full overflow-hidden"
						style={{
							maskImage:
								"linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%)",
							WebkitMaskImage:
								"linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%)",
						}}
					>
						<img
							src={AboutPhoto.src}
							alt=""
							className="h-full w-full object-cover grayscale"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
