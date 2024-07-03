import React from "react";
import { DiHtml5 } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap, FaReact, FaPhp, FaLaravel, FaAngular, FaAws } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";

const Icons = () => (
	<div className="social-icons flex flex-wrap justify-center items-center text-[20px] gap-4">
		<DiHtml5 />
		<IoLogoCss3 />
		<FaBootstrap />
		<SiTailwindcss />
		<IoLogoJavascript />
		<FaReact />
		<FaPhp />
		<FaLaravel />
		<FaAngular />
		<BiLogoTypescript />
		<FaAws />
	</div>
);

export default Icons;
