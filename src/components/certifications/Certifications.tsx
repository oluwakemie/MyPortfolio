"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineCheckBadge } from "react-icons/hi2";
import { CERTIFICATIONS, EDUCATION } from "../../constants";

const Certifications = () => {
	return (
		<section
			id="certifications"
			className="scroll-mt-16 relative overflow-hidden py-24"
		>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 -z-10"
			/>

			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -20 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="text-5xl font-medium text-forest sm:text-6xl"
			>
				Learning &amp; credentials
			</motion.h2>

			<div className="mt-14 flex flex-wrap gap-x-16 gap-y-14">
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -30 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="w-full lg:flex-1"
				>
					<h3 className="mb-6 flex items-center gap-3 text-2xl text-forest">
						<HiOutlineCheckBadge className="text-coral" />
						Certifications
					</h3>
					<ul className="space-y-3">
						{CERTIFICATIONS.map((cert) => (
							<li
								key={cert.title}
								className="flex flex-col md:flex-row items-start justify-between gap-4 rounded-2xl border-l-2 border-coral/60 bg-cream/5 p-5 !bg-forest"
							>
								<div className="flex items-start gap-4">
									<span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-cream/10 text-coral">
										<HiOutlineCheckBadge />
									</span>
									<div>
										<p className="text-lg text-cream sm:text-xl">
											{cert.title}
										</p>
										<p className="mt-1 font-sans text-sm text-cream/50">
											{cert.issuer}
										</p>
									</div>
								</div>
								{cert.status ? (
									<span className="flex-shrink-0 whitespace-nowrap rounded-full border border-coral/40 px-3 py-1 font-sans text-xs uppercase tracking-wider text-coral">
										{cert.status}
									</span>
								) : null}
							</li>
						))}
					</ul>
				</motion.div>

				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 30 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="w-full lg:flex-1"
				>
					<h3 className="mb-6 flex items-center gap-3 text-2xl text-forest">
						<HiOutlineAcademicCap className="text-coral" />
						Education
					</h3>
					<ul className="space-y-3">
						{EDUCATION.map((item) => (
							<li
								key={item.degree}
								className="flex items-start gap-4 rounded-2xl border-l-2 border-coral/60 bg-forest p-5"
							>
								<span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-cream/10 text-coral">
									<HiOutlineAcademicCap />
								</span>
								<div>
									<p className="text-lg text-cream sm:text-xl">
										{item.degree}
									</p>
									<p className="mt-1 font-sans text-sm text-cream/50">
										{item.school} &middot; {item.year}
									</p>
								</div>
							</li>
						))}
					</ul>
				</motion.div>
			</div>
		</section>
	);
};

export default Certifications;
