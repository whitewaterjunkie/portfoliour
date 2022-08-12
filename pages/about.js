import React from "react";
import { motion } from "framer-motion";
import { slideDown } from ".";

export default function about() {
	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={slideDown}
			className="min-h-screen px-[15rem] py-[2rem]"
		>
			<h1 className="font-semibold dark:text-white text-7xl">About</h1>
		</motion.div>
	);
}
