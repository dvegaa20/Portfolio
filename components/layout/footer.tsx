'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FrameIcon } from 'lucide-react';
import { LinkPreview } from '../ui/link-preview';
import { socialMedia } from '@/data';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Product',
		links: [
			{ title: 'Features', href: '#features' },
			{ title: 'Pricing', href: '#pricing' },
			{ title: 'Testimonials', href: '#testimonials' },
			{ title: 'Integration', href: '/' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'FAQs', href: '/faqs' },
			{ title: 'About Us', href: '/about' },
			{ title: 'Privacy Policy', href: '/privacy' },
			{ title: 'Terms of Services', href: '/terms' },
		],
	},
	{
		label: 'Resources',
		links: [
			{ title: 'Blog', href: '/blog' },
			{ title: 'Changelog', href: '/changelog' },
			{ title: 'Brand', href: '/brand' },
			{ title: 'Help', href: '/help' },
		],
	}
];

export function Footer() {
	return (
		<footer className="md:rounded-t-[4rem] relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-[2rem] border border-b-0 overflow-hidden bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%)] px-6 py-12 lg:py-16 mt-32">
			<div className="bg-foreground absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			{/* Scattered decorative cubes (Christmas ornament layout) */}
			<img src="/decorations/cube.svg" alt="cube decoration" className="absolute top-[1%] left-[15%] w-32 md:w-44 opacity-20 pointer-events-none -rotate-6" />
			<img src="/decorations/cube.svg" alt="cube decoration" className="absolute top-[20%] right-[10%] w-24 md:w-32 opacity-15 pointer-events-none rotate-45" />
			<img src="/decorations/cube.svg" alt="cube decoration" className="absolute top-[5%] left-[45%] w-12 md:w-16 opacity-15 pointer-events-none rotate-12" />
			<img src="/decorations/cube.svg" alt="cube decoration" className="absolute bottom-[5%] right-[50%] w-20 md:w-28 opacity-15 pointer-events-none rotate-12" />
			<img src="/decorations/cube.svg" alt="cube decoration" className="absolute bottom-[10%] right-[15%] w-28 md:w-36 opacity-15 pointer-events-none -rotate-12" />
			<img src="/decorations/cube.svg" alt="cube decoration" className="absolute bottom-[15%] left-[8%] w-20 md:w-28 opacity-10 pointer-events-none rotate-[30deg]" />
			<img src="/decorations/cube.svg" alt="cube decoration" className="absolute bottom-[5%] left-[55%] w-16 md:w-20 opacity-10 pointer-events-none -rotate-45" />

			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8 z-10 relative">
				<AnimatedContainer className="space-y-4">
					<FrameIcon className="size-8" />
					<p className="text-muted-foreground mt-8 text-sm md:mt-0">
						© {new Date().getFullYear()} Diego Vega.
					</p>
					<h1 className="text-sm md:text-md font-medium mt-4 max-w-[280px] leading-relaxed">
						Let&apos;s bring your
						<span className="text-purple"> digital vision</span> to life, work
						with me to achieve your goals.
					</h1>
				</AnimatedContainer>

				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-xs">{section.label}</h3>
								<ul className="text-muted-foreground mt-4 space-y-2 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="hover:text-foreground inline-flex items-center transition-all duration-300"
											>
												{link.icon && <link.icon className="me-1 size-4" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
					<div className="flex justify-between items-center flex-col gap-2">
						{socialMedia.map((profile) => (
							<LinkPreview
								key={profile.id}
								url={profile.url}
								className="w-8 h-8 cursor-pointer flex justify-center items-center"
							>
								<img
									src={profile.img}
									alt={profile.id.toString()}
									width={20}
									height={20}
								/>
							</LinkPreview>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};