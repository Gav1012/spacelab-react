/**
 * Array of Dates and descriptions for Spacelab History timeline
 * @type {string[][]}
 */

import jan2021 from "../../assets/aboutAssets/jan2021.jpeg";
import aug2021 from "../../assets/aboutAssets/aug2021.png";
import may2023 from "../../assets/aboutAssets/may2023.png";
import feb2021 from "../../assets/homeAssets/image2.jpg";

export const newAboutHistoryArray = [
	[
		"Jan",
		"2021",
		jan2021,
		"group of people gathered around a laptop looking at something",
		"Matthew Paterson is working to publish a paper about " +
			"machine learning and exoplanets. Eager about space " +
			"exploration and exoplanets, Matt reconnects with friends Ollie " +
			"Jackson and Jon Zivku. Together, they set out to create an " +
			"interactive web application that will help young people and " +
			"space enthusiasts learn about our galaxy. Thus, The Spacelab is born!",
	],
	[
		"Feb",
		"2021",
		feb2021,
		"people in an office planning a project",
		"Spacelab meets with aspiring UX Designers to create " +
			"a website for exoplanet discovery. Realizing the lack " +
			"of cross-functional collaboration experience for early " +
			"tech professionals, they decide to become a non-profit " +
			"organization aiming to provide experiences for women, " +
			"people of color, and members of the LGBTQ+ " +
			"community.",
	],
	[
		"Aug",
		"2021",
		aug2021,
		"planet against a blue sky",
		"Spacelab launches its website and receive help " +
			"from Meghan Slan (Director of DEIB) in becoming a non-" +
			"profit organization with the foundation of diversity and " +
			"inclusion. " +
			"Currently, a team of 25 cross-functional members are " +
			"working on Spacelab's first project: Exoplanetarium, " +
			"where users can explore exoplanets in the Milky Way.",
	],
	[
		"May",
		"2023",
		may2023,
		"planets around a star, from Spacelab's Exoplanetarium project",
		"Exoplanetarium is launched as Spacelab's pilot project! ",
	],
];

/*
export const aboutHistoryArray = [
	[
		"SPACELAB 2021.01.27",
		'Data Scientist Matt Paterson is introduced to Dr. Andrew Vanderburg by Cal Tech"s Dr. Jessie Christiansen ' +
			"in hopes that the former NASA Sagen Fellow can help with publishing a paper about machine learning and " +
			"exoplanets. The interaction with Dr. Vanderburg and Dr. Christiansen lead Matt to reconnect with former " +
			"classmates Ollie Jackson and Jon Zivku. The three are excited about space exploration and exoplanets and " +
			"want to build a web application that allows all three to contribute; thus, SpaceLab was born.",
	],
	[
		"SPACELAB 2021.01.05",
		"The founders of The SpaceLab meet aspiring UX designers who were fresh out of school and ready to take " +
			"the founders’ visions and designs towards a website for exoplanet discovery. The group recognizes that " +
			"experience with cross-functional collaboration towards the development of real-world applications is " +
			"something that early-career tech professionals often lack, specifically traditionally underrepresented " +
			"groups in the tech industry. Upon recognizing this, the team decides that finding exoplanets it’s not " +
			"just a one-time project. Instead, it will be the first of many projects built by the members and future " +
			"community of The SpaceLab. This led the team at The SpaceLab to become a non-profit organization to " +
			"help women, people of color, people from the LGBTQ+ community, and others currently underrepresented in " +
			"the tech industry to gain experience with cross-functional teams in outer-space-related sciences.",
	],
	[
		"SPACELAB 2021.08.16",
		"After building a team of front-end developers, SpaceLab launches its website, announcing its purpose and " +
			"mission to the world. While SpaceLab is working on becoming a nonprofit organization, the organization is " +
			"created upon a foundation of diversity and inclusion with the help of Meghan Slan, Director of DEIB. " +
			"SpaceLab is currently working with roughly 25 cross-functional members to build its first project, " +
			"Exoplanetarium, of which users will have the opportunity to explore exoplanets in our milky way system.",
	],
];
*/

/**
 * Object containing details for the Board of Directors
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const boardOfDirectors = {
	title: "board of directors",
	members: [
		{
			image: "https://i.imgur.com/Fi9AEMY.jpg",
			fullName: "Matt Paterson",
			title: "Executive Director | Machine Learning Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "https://HireMattPaterson.com",
			linkedIn: "https://www.linkedin.com/in/hiremattpaterson/",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130990/team_pics/Ollie_pic_yabvpi.png",
			fullName: "Ollie Jackson",
			title: "Officer, Board of Directors | Physicist",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130971/team_pics/Megan_ncesok.png",
			fullName: "Meghan Slan",
			title: "Director of DEIB, Board Member at Large",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/rddAX7C.png",
			fullName: "Anna Bukareva",
			title: "Officer, Board of Directors",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/vSQFMQh.png",
			fullName: "Jennifer Harrold",
			title: "Secretary, Board of Directors",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/6KnXf6X.png",
			fullName: "Bernadette Cruz",
			title: "Advisory Board Member",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/JtNw1qE.png",
			fullName: "Mike Matera",
			title: "Advisory Board Member",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
	],
};

/**
 * Object containing details for the UX Designers
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const uxDesigners = {
	title: "UX Designers",
	members: [
		{
			image: "https://res.cloudinary.com/dwbygdu7w/image/upload/v1734047256/Burbridge_April_gn9sow.png",
			fullName: "April Burbridge",
			title: "Product Designer",
			bioQuote: "After ten years as an air traffic controller, ensuring smooth and safe journeys in the skies, I’ve transitioned to a career as a product designer. My goal is to create user experiences that feel just as seamless and reliable as a well-coordinated flight.",
			gitHub: "",
			portfolio: "https://www.aprilburbridge.com",
			linkedIn: "https://www.linkedin.com/in/april-burbridge",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/dwbygdu7w/image/upload/v1734047257/Mirageas_Alexa_py7d1l.png",
			fullName: "Alexa Mirageas",
			title: "UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "https://www.alexamirageas.com/",
			linkedIn: "https://www.linkedin.com/in/alexamirageas/",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/dwbygdu7w/image/upload/v1734047259/Wong_Corinne_hd96ey.jpg",
			fullName: "Corinne Wong",
			title: "UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "https://coriwong.co",
			linkedIn: "https://www.linkedin.com/in/corinne-e-wong/",
			status: "current",
		},
		{
			image: "https://i.imgur.com/Umz7gGi.jpeg",
			fullName: "Brianna Tran",
			title: "UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "https://www.linkedin.com/in/briannantran/",
			status: "past",
		},
		{
			image: "https://i.imgur.com/EAIpFlK.jpeg",
			fullName: "Larry Chan",
			title: "UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "https://www.linkedin.com/in/larry-chan-designs/",
			status: "past",
		},
		{
			image: "https://i.imgur.com/tFmGYfz.jpeg",
			fullName: "Clarence Jackson",
			title: "UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "https://www.linkedin.com/in/clarenceamosjackson/",
			status: "past",
		},
		{
			image: "https://i.imgur.com/2c00TVu.jpeg",
			fullName: "Sayre Tripp",
			title: "UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/OnDOWG8.png",
			fullName: "Venus Lumayag",
			title: "UX Designer",
			bioQuote:
				"Venus is a designer based in Southern California with a background in graphic design and illustration. In her professional work, she enjoys using creativity to solve design problems and puzzles. In her spare time, she enjoys video games, baking, and visiting local independent coffee shops.",
			gitHub: "",
			portfolio: "https://www.venuslumayag.com/",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/oFhnNer.png",
			fullName: "Faezeh Faezipour",
			title: "UX Researcher",
			bioQuote: "",
			gitHub: "",
			portfolio: "https://www.faezehf.com/",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/paoGCSJ.png",
			fullName: "Amarachi Nwachukwu",
			title: "UI/UX (Podcaster)",
			bioQuote:
				"I'm a Amarachi Nwachukw, a product designer who believes in solving problems through designs. I'm a critical thinker and possess a strong skill in UX design.",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/kjXCkWW.png",
			fullName: "Charmy Patel",
			title: "UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "https://charmypatel.github.io/index.html",
			linkedIn: "",
			status: "past",
		},
		{
			image: "",
			fullName: "Nina Ulaganathan",
			title: "UI/UX Designer",
			bioQuote:
				"Hi everyone! My name is Nina Ulaganathan, and I am a second-year Cognitive Science major at UCSC. My focuses in my major include AI, and Human Computer Interaction. I am extremely passionate about UX Design, and I hope to be able to contribute those skills to Spacelab!",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/a8kkFwV.png",
			fullName: "Eliza Gonzales",
			title: "UX Designer",
			bioQuote:
				"Hey! I am a UX Designer that recently graduated from University of California, Santa Cruz. I absolutely love design, and have been doing this for quite some time. ",
			gitHub: "",
			portfolio: "elizagonzales.com",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/Ovfpeog.png",
			fullName: "Bhavani Sree Mahendrakar",
			title: "UI/UX Design Team Lead",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130965/team_pics/Phaly_ieng0k.png",
			fullName: "Phaly Bell",
			title: "Lead Project Manager | UX Designer & Researcher",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130965/team_pics/subin_p8gjt5.png",
			fullName: "Subin Shin",
			title: "UI/UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629131338/team_pics/uma_n6hcdv.jpg",
			fullName: "Uma Muthu",
			title: "Product Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130970/team_pics/yumi_j5x47l.png",
			fullName: "Yumi Jeon",
			title: "UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629131297/team_pics/Christy_kn3wxm.jpg",
			fullName: "Christy Min",
			title: "UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/HttHaC0.png",
			fullName: "Stephanie Yarborough",
			title: "UI/UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "",
			fullName: "Yabi",
			title: "UI/UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/rarcG7w.png",
			fullName: "Danni Freedman",
			title: "UI/UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/gN6hybH.png",
			fullName: "May Wu",
			title: "UI/UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/JfMphhG.png",
			fullName: "Meenakshi Limbachiya",
			title: "UI/UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/yqSt1NS.png",
			fullName: "Joanne Li",
			title: "UI/UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "",
			fullName: "Mio Larasati",
			title: "UI/UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/AExJLUf.png",
			fullName: "Victoria Gonzalez",
			title: "UI/UX Designer",
			bioQuote:
				"I’m a Mexican UX/UI Designer based in LA, in beautiful and sunny Southern California." +
				"I was a former bartender, and I’ve always enjoyed giving people great experiences and helping them in whatever their needs are. If I’m able to contribute for someone to feel good, it makes me feel twice as good." +
				"That’s why I choose to be in the UX field, because is not only delivering to your clients, is to deliver to all the users a great experience which will result in me feeling extremely satisfied because I was able to help!",
			gitHub: "",
			portfolio: "https://victoriagonzalezux.squarespace.com/",
			linkedIn: "",
			status: "past",
		},
		{
			image: "",
			fullName: "Sheetal Paranjpe",
			title: "UI/UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},

		{
			image: "",
			fullName: "Richard Garagliano",
			title: "UI/UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
	],
};

/**
 * Object containing details for the Front End Developers
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const frontEnd = {
	title: "Frontend Developers",
	members: [
		{
			image: "https://res.cloudinary.com/dwbygdu7w/image/upload/v1734047256/Rusu_Alexei_dn0zk2.png",
			fullName: "Alexei Rusu",
			title: "Software Engineer",
			bioQuote: "I'm a versatile software engineer with a background in arts, blending technical expertise with artistic creativity. I thrive in cross-functional teams with diverse skill sets. When I’m not coding, I enjoy working on robotics and experimenting with new ideas.",
			gitHub: "https://github.com/Alex-dev7",
			portfolio: "https://alexeirusu.com",
			linkedIn: "https://www.linkedin.com/in/alexei-rusu-dev/",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/dwbygdu7w/image/upload/v1734047258/Tria_FJ_pzbidl.jpg",
			fullName: "FJ Tria",
			title: "Software Engineer",
			bioQuote:
				"A detail-oriented software engineer and web developer aiming to develop aesthetic, responsive, and user-centric software experiences.",
			gitHub: "https://github.com/fjstria",
			portfolio: "https://fjstria.github.io/",
			linkedIn: "https://www.linkedin.com/in/fjstria/",
			status: "current",
		},
		{
			image: "",
			fullName: "Jaspreet Nijjar",
			title: "Lead Front-End Developer",
			bioQuote:
				"Jaspreet is Front End Developer with a strong interest in React. I enjoy the creative process of creating responsive applications with clean code.",
			gitHub: "https://github.com/Jaspreet-Nijjar",
			portfolio: "https://jn-portfolio-site.netlify.app/",
			linkedIn: "https://www.linkedin.com/in/jaspreet-nijjar-3266a7276/",
			status: "past",
		},
		{
			image: "https://i.imgur.com/7145a8u.jpeg",
			fullName: "Neha Abbas",
			title: "Front-End Developer",
			bioQuote:
				"Neha is a student software developer enthusiastic about coding, problem-solving, and creating meaningful applications that make a difference.",
			gitHub: "https://github.com/neha-ha",
			portfolio: "",
			linkedIn: "https://www.linkedin.com/in/neha-abbas-827406275/",
			status: "past",
		},
		{
			image: "https://i.imgur.com/KMpDndL.jpeg",
			fullName: "Anh Pham",
			title: "Front-End Developer",
			bioQuote:
				"Anh is a self-taught Frontend Developer, possesses a background in Chemical Engineering. Intrigued by technology's intricacies, they embarked on a programming journey through online resources, emphasizing exceptional user experiences that resonate with user needs. Anh actively collaborates with various teams, including UX/UI designers, to create extraordinary products.",
			gitHub: "https://github.com/anhvietq",
			portfolio: "",
			linkedIn: "https://www.linkedin.com/in/anhvietq/",
			status: "past",
		},
		{
			image: "https://i.imgur.com/navaiiw.jpeg",
			fullName: "Gavin Poley",
			title: "Front-End Developer",
			bioQuote:
				"Gavin is a software developer with experience in Full Stack development and strong passion for Front End development.",
			gitHub: "https://github.com/Gav1012",
			portfolio: "",
			linkedIn: "https://www.linkedin.com/in/gavin-poley",
			status: "past",
		},
		{
			image: "https://i.imgur.com/13aS1rA.jpeg",
			fullName: "Cindy Wong",
			title: "Front-End Developer",
			bioQuote:
				"Cindy is a dedicated software developer who finds joy in crafting beautiful user experiences through frontend and fullstack development, aspiring to better the world with her skills.",
			gitHub: "https://github.com/cindywongdev",
			portfolio: "",
			linkedIn: "https://www.linkedin.com/in/cindywongdev/",
			status: "past",
		},
		{
			image: "https://i.imgur.com/qjMvsN5.jpeg",
			fullName: "Laurie Liu",
			title: "Front-End Developer",
			bioQuote:
				"Laurie is a software developer and is passionate about frontend development as well as learning more about current evolving technologies.",
			gitHub: "https://github.com/lauriealiu",
			portfolio: "",
			linkedIn: "https://www.linkedin.com/in/lauriealiu",
			status: "past",
		},
		{
			image: "https://i.imgur.com/DXCAXcW.jpeg",
			fullName: "Deepthi Rao",
			title: "Front-End Developer",
			bioQuote:
				"Deepthi is a Full Stack Developer, specializes in building responsive and scalable solutions. ",
			gitHub: "https://github.com/DeepthiSRao",
			portfolio: "https://deepthisrao.com",
			linkedIn: "https://www.linkedin.com/in/deepthi-srinidhi-rao/",
			status: "past",
		},
		{
			image: "https://i.imgur.com/mnGxgMr.jpeg",
			fullName: "Shirin Rokni",
			title: "Front-End Developer",
			bioQuote:
				"Shirin is a Software Developer who has a passion for Frontend and is learning more about Fullstack development.",
			gitHub: "https://github.com/roknishirin",
			portfolio: "",
			linkedIn: "https://www.linkedin.com/in/shirin-rokni/",
			status: "past",
		},
		{
			image: "",
			fullName: "Joey Kozak",
			title: "3D Developer/Full-stack Engineer",
			bioQuote:
				"Exoplanetarium Lead @ SpaceLab | Solutions Engineer @ Orchestra | Trinity University & General Assembly Alum | Always excited to expand and refine my skills while building something awesome!",
			gitHub: "https://github.com/jrkozak92",
			portfolio: "http://joeykozak.com/",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/afdlLMu.png",
			fullName: "Asti Shalymova",
			title: "Software Engineer",
			bioQuote:
				"Asti is a software engineer based in LA. Frontend developer @ Spacelab | Software Developer @ Femispace | Instructor associate @ General Assembly.",
			gitHub: "https://github.com/AnastasiiaAsti",
			portfolio: "https://asticodes.dev",
			linkedIn: "https://www.linkedin.com/in/anastasiiaasti/",
			status: "past",
		},
		{
			image: "https://imgur.com/HVUZ6bf.png",
			fullName: "Laura Hiller",
			title: "Front-End Developer",
			bioQuote:
				"Laura is an experienced Software Engineer specializing in Frontend/Fullstack development.",
			gitHub: "https://github.com/lauraehiller",
			portfolio: "https://lauraehiller.com/",
			linkedIn: "https://www.linkedin.com/in/laura-e-hiller/",
			status: "past",
		},
		{
			image: "https://i.imgur.com/vutLmqW.png",
			fullName: "Eric Matlock",
			title: "Frontend Developer",
			bioQuote:
				"I am a software developer. My mission is to create highly intuitive products with a keen eye for detail, functionality, and a cohesive user experience. Aside from my professional work, I am an avid science and sci-fi nerd, and I play a talkbox. Let's chat science and music!",
			gitHub: "",
			portfolio: "https://terminal.turing.edu/alumni/1329-eric-matlock",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/bOmCTkN.png",
			fullName: "Meghan Bucher",
			title: "Software Engineer",
			bioQuote:
				"I'm a full stack developer based in the San Francisco Bay Area. My passion is delivering engaging, memorable, and meaningful user experiences. Thriving in the front end, I enjoy working at the intersection of art and functionality.",
			gitHub: "https://github.com/megbuch",
			portfolio: "https://meghanbucher.work",
			linkedIn: "https://linkedin.com/in/meghanbucher",
			status: "past",
		},
		{
			image: "",
			fullName: "Mark Sturman",
			title: "Software Engineer",
			bioQuote:
				"Mark has a BS in Computer Science. He is currently volunteering at SpaceLab" +
				"SWE @ Chief | Full-Stack Eng @ SpaceLab ",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/pBo2sNX.png",
			fullName: "Amanda Stern",
			title: "Full Stack Engineer",
			bioQuote:
				"My name's Amanda, and I'm a full-stack Software Engineer. My professional career started with working project management for software development programs in the Air Force's Space Command. Upon leaving the military, I went on to work outdoor education and became a Park Ranger in the Bureau of Land Management. As a Ranger I worked wildland fire response and collected field data for integration into SQL databases.",
			gitHub: "",
			portfolio: "https://www.amandastern.dev",
			status: "past",
		},
		{
			image: "https://ca.slack-edge.com/T01NXS517FE-U02M259VB29-764495edcf61-512",
			fullName: "Alex Anand",
			title: "Full-Stack Software Engineer",
			bioQuote:
				"Frontend Developer @ SpaceLab | Graphic Designer/Owner @ TSL Printing Co. | Freelance Software Developer | General Assembly Alumni |" +
				"Currently studying for a bachelor's degree in Software Development & Security (class of 2024) at University of Maryland Global Campus",
			gitHub: "https://github.com/aanand93",
			portfolio: "",
			linkedIn: "https://www.linkedin.com/in/alexanderanand/",
			status: "past",
		},
		{
			image: "",
			fullName: "S. Kyle Deleon",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/LAAT4Ac.png",
			fullName: "Brian De La Cruz",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/cAqeobu.png",
			fullName: "Lindsey Dukles",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "https://github.com/ldukles",
			portfolio: "https://lindsey-dukles-portfolio.netlify.app/",
			linkedIn: "https://www.linkedin.com/in/lindsey-dukles/",
			status: "past",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130966/team_pics/brandon_ihzbvu.png",
			fullName: "Brandon Cantello",
			title: "Project Manager | Software Engineer",
			bioQuote:
				"With a BS in Physics from UCSB and years of experience as a software engineer, Brandon brings " +
				"a unique perspective, leadership, and a passion for space to the front end team.",
			gitHub: "https://github.com/bcantello",
			portfolio: "https://www.brandoncantello.com/",
			linkedIn: "https://www.linkedin.com/in/brandon-cantello/",
			status: "past",
		},
		{
			image: "https://i.imgur.com/nDhtO48.png",
			fullName: "Anna Chowattanakul",
			title: "Summer 2021 Front End Project Manager",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130966/team_pics/kat_wzzzo3.png",
			fullName: "Kat Hackethal",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130969/team_pics/angelines_ygdgfi.png",
			fullName: "Angelines Yaport-Garcia",
			title: "Full Stack Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/hlg0qD5.png",
			fullName: "Shanti Betts",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},

		/* TODO: The following members listed BELOW can be deleted upon the full implementation of Cohorts*/

		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130965/team_pics/jon_cxasx9.png",
			fullName: "Jon Zivku",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130970/team_pics/deen_ex8fxt.png",
			fullName: "Deen Haque",
			title: "Full Stack Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130963/team_pics/charlie_ibjvgs.png",
			fullName: "Charlie Arboleda",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "",
			fullName: "Cat Moran",
			title: "Software Developer | Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://ca.slack-edge.com/T01NXS517FE-U02MHPLFH4H-0a5296950b94-512",
			fullName: "Cory Rice",
			title: "Software Developer | Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "",
			fullName: "Rohit Jacob",
			title: "Software Developer | Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "",
			fullName: "Sven Gerlach",
			title: "Software Developer | Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
	],
};

/**
 * Object containing details for the Back End Developers
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const backEnd = {
	title: "Backend Developers",
	members: [
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1632849788/IMG_0286_bkf98r.jpg",
			fullName: "Kausar Akther",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/AKnYMWD.jpeg",
			fullName: "Tejaswini Edidi",
			title: "Software Engineer",
			bioQuote:
				"I am a software engineer with a passion for intersections of technology. With over 2 years of experience, I aim to create unique products and learn continuously.",
			gitHub: "https://github.com/tejuedidi",
			portfolio: "",
			linkedIn: "https://www.linkedin.com/in/teju-edidi/",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/dwbygdu7w/image/upload/v1734047257/Pickard_Benny_sgsdeq.jpg",
			fullName: "Benny Pickard",
			title: "Backend Software Engineer",
			bioQuote: "Designer of SQL Database and GraphQL API on AWS services.",
			gitHub: "https://github.com/bennypickard",
			portfolio: "",
			linkedIn: "https://www.linkedin.com/in/benny-pickard/",
			status: "current",
		},
		{
			image: "https://i.imgur.com/pBo2sNX.png",
			fullName: "Amanda Stern",
			title: "Full Stack Engineer",
			bioQuote:
				"My name's Amanda, and I'm a full-stack Software Engineer. My professional career started with working project management for software development programs in the Air Force's Space Command. Upon leaving the military, I went on to work outdoor education and became a Park Ranger in the Bureau of Land Management. As a Ranger I worked wildland fire response and collected field data for integration into SQL databases.",
			gitHub: "",
			portfolio: "https://www.amandastern.dev",
			status: "past",
		},
		{
			image: "https://i.imgur.com/FitwR6t.png",
			fullName: "Lily Obeng",
			title: "Software developer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedin: "",
			status: "past",
		},
		{
			image: "https://imgur.com/cAqeobu.png",
			fullName: "Lindsey Dukles",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "https://github.com/ldukles",
			portfolio: "https://lindsey-dukles-portfolio.netlify.app/",
			linkedIn: "https://www.linkedin.com/in/lindsey-dukles/",
			status: "past",
		},
		{
			image: "https://i.imgur.com/zuLfuhP.png",
			fullName: "Kheffy Cervantez",
			title: "Backend Engineer",
			bioQuote:
				'I am a graduate of General Assembly"s Full Stack Software Engineer Bootcamp, currently acting as a mentor for underrepresented communities in web development, with a focus on Node.js and Express.js.',
			gitHub: "",
			portfolio: "https://kheffycervantez.surge.sh",
			status: "past",
		},
		{
			image: "https://i.imgur.com/RrU84at.png",
			fullName: "Nathaniel Wolf",
			title: "Backend Team",
			bioQuote: "",
			gitHub: "",
			portfolio: "https://portfolio-site-seven-swart.vercel.app/",
			status: "past",
		},
		{
			image: "",
			fullName: "Brandon Tomecsko",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/UXz18XD.png",
			fullName: "Xu Xu",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/fPunQXz.png",
			fullName: "Bach Le",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/EsUof5b.png",
			fullName: "Dennis Oliver",
			title: "Backend Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/b86C11a.jpg",
			fullName: "Derek Deidrich",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/yV7uEjh.png",
			fullName: "Zachary Monea",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/gEbk8B1.png",
			fullName: "Glen Oliff",
			title: "Software Engineering Mentor",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/9Fd7Qwo.png",
			fullName: "Yunao Guo",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/qsJ2bg4.png",
			fullName: "Andrew Cabezudo",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "",
			fullName: "Madhura Anand",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
	],
};

/**
 * Object containing details for the Data Science Team
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const dataScience = {
	title: "Data Scientists",
	members: [
		{
			image: "https://res.cloudinary.com/dwbygdu7w/image/upload/v1734047255/Halbig_Kristina_zxfkzf.jpg",
			fullName: "Kristina Halbig",
			title: "Data Scientist",
			bioQuote: "Data scientist with a background in analytical chemistry. I’ve visited JPL's control room six times (and counting!) and am excited to use data to explore and contribute to space exploration projects in fun ways.",
			gitHub: "https://github.com/FragariaChemist",
			portfolio: "https://fragariachemist.github.io/",
			linkedin: "https://www.linkedin.com/in/khalbig/",
			status: "current",
		},
		{
			image: "",
			fullName: "Joel Lashmore",
			title: "Data Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedin: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/P5s9s59.jpeg",
			fullName: "Christopher Volpacchio",
			title: "Data Engineer",
			bioQuote:
				"Christopher is an seasoned Data Scientist with experience in Supply Chain, Veterinary Healthcare and Reinsurance industries. He has a passion for education and strives to leverage his experience by contributing to new projects and initiatives.",
			gitHub: "https://github.com/chris-volpacchio",
			portfolio: "",
			linkedin: "https://www.linkedin.com/in/chrisvolpacchio/",
			status: "past",
		},
		{
			image: "https://i.imgur.com/FitwR6t.png",
			fullName: "Lily Obeng",
			title: "Software Developer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedin: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/Th806tx.png",
			fullName: "Julian Ornelas",
			title: "Data Scientist | Machine Learning Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedin: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/aLwVaRl.png",
			fullName: "Dustin Creech",
			title: "Data Scientist | Machine Learning Engineer",

			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedin: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/aVfBvaL.png",
			fullName: "Pramit Bhatia",
			title: "Data Scientist | Machine Learning Engineer",
			bioQuote:
				"Hello! I'm Pramit, a Computer Science Major @Georgia State University. I have a background in Data Science, and am interested in working on full stack development and machine learning." +
				"I'm keen on engaging in various projects throughout my engineering journey and excited to contribute to SpaceLab!",
			gitHub: "https://github.com/pramitbhatia25",
			portfolio: "pramitbhatia25.github.io/Portfolio",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/nRhfo0Q.png",
			fullName: "Alexandra Borriello",
			title: "Data Science Intern",
			bioQuote:
				"Hi! I am Alex Borriello, an Applied Math and Stats major at Stony Brook University, working at SpaceLab as a Data Science Intern." +
				"I am passionate about using data science and machine learning to understand and improve the world using technology.",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/PbwKBSo.png",
			fullName: "Shraddha Sonawane",
			title: "Data Science Intern",
			bioQuote:
				"I'm Shraddha; I'm a student and am currently pursuing a master's degree in data science. When I was applying for this internship, I was impressed with the organization's future goals and mission." +
				"It's a pleasure to work with SpceLab's data science team. I'm looking forward to contributing to the Explonatarium Project.",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "",
			fullName: "Gabriel Pino",
			title: "Full Stack Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/7kNmHvV.png",
			fullName: "Vera-Patience Dureke",
			title: "Data Science Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/Ag0eTFb.png",
			fullName: "Hannah Sailar",
			title: "Data Science Project Manager",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629131368/team_pics/ricky_fdzb1y.png",
			fullName: "Ricky Rong",
			title: "Data Scientist | Machine Learning Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130966/team_pics/robert_oggyg8.png",
			fullName: "Robert Sato",
			title: "Data Scientist | Machine Learning Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/vxMri4M.png",
			fullName: "Cally Lin",
			title: "Data Scientist | Machine Learning Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/6QT53lE.png",
			fullName: "Gio Abou Jaoude",
			title: "Data Scientist",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/gZ2WUml.png",
			fullName: "Arwa Daqqaq",
			title: "Data Scientist",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/oUuPU8w.png",
			fullName: "Sean Atkinson",
			title: "Data Scientist",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/IyxqjJc.png",
			fullName: "Alex M",
			title: "Machine Learning Engineering Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/Wcrm1AI.png",
			fullName: "Daniel Mao",
			title: "Machine Learning Engineering Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/UWe1RAo.png",
			fullName: "Breanna Chi",
			title: "Machine Learning Engineering Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/418ED2U.png",
			fullName: "William Luo",
			title: "Machine Learning Engineering Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/FrSOSL3.png",
			fullName: "Zacharia Rupp",
			title: "Machine Learning Engineering Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/VKT4GAl.png",
			fullName: "Bella Arenas",
			title: "Machine Learning Engineering Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/C6PdpAK.png",
			fullName: "Joel Silverman",
			title: "Data Scientist",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/99Ecdd9.png",
			fullName: "Benjamin Nagle",
			title: "Data & Machine Learning Scientist",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
	],
};

/**
 * Object containing details for the WebGL Team
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const webGL = {
	title: "3D Developers",
	members: [
		{
			image: "",
			fullName: "Joey Kozak",
			title: "3D Developer/Full-stack Engineer",
			bioQuote:
				"Exoplanetarium Lead @ SpaceLab | Solutions Engineer @ Orchestra | Trinity University & General Assembly Alum | Always excited to expand and refine my skills while building something awesome!",
			gitHub: "https://github.com/jrkozak92",
			portfolio: "http://joeykozak.com/",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/HVUZ6bf.png",
			fullName: "Laura Hiller",
			title: "Front-End Developer",
			bioQuote:
				"Laura is an experienced Software Engineer specializing in Frontend/Fullstack development.",
			gitHub: "https://github.com/lauraehiller",
			portfolio: "https://lauraehiller.com/",
			linkedIn: "https://www.linkedin.com/in/laura-e-hiller/",
			status: "past",
		},
		{
			image: "https://i.imgur.com/vutLmqW.png",
			fullName: "Eric Matlock",
			title: "Frontend Developer",
			bioQuote:
				"I am a software developer. My mission is to create highly intuitive products with a keen eye for detail, functionality, and a cohesive user experience. Aside from my professional work, I am an avid science and sci-fi nerd, and I play a talkbox. Let's chat science and music!",
			gitHub: "",
			portfolio: "https://terminal.turing.edu/alumni/1329-eric-matlock",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/c_scale,w_200/v1629131500/team_pics/raysean_dn1vww.png",
			fullName: "Raysean Williams",
			title: "Project Manager | 3D Graphics Developer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130970/team_pics/mamadou_mtnlfc.png",
			fullName: "Mamadou Diallo",
			title: "3D Graphics Developer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/tHUZq9s.png",
			fullName: "Nemi Gugssa",
			title: "3D Graphics Developer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/Zmy00N4.png",
			fullName: "Ian Walls",
			title: "3D Graphics Developer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/aJgDqQw.png",
			fullName: "Adream Thompson",
			title: "3D Graphics Developer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
	],
};

/**
 * Object containing details for the Staff Writers team
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const writers = {
	title: "staff writers",
	members: [
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130968/team_pics/alex_s0g0a6.png",
			fullName: "Alex Simon",
			title: "Staff Writer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1632850171/katgirl_lbfxk8.jpg",
			fullName: "Kat Rendon",
			title: "Staff Writer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/hpdfwjo.png",
			fullName: "Diani Alvarenga", // Yes her preferred name is Diani
			title: "Staff Writer",
			bioQuote:
				"Diani is a student at North Central College and is obtaining her B.A in writing.",
			gitHub: "",
			portfolio: "",
			linkedIn: "https://www.linkedin.com/in/diana-alvarenga-52b8a4206",
			status: "past",
		},
		{
			image: "https://imgur.com/AtAebvj.png",
			fullName: "Teshome Jenkins",
			title: "Staff Writer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/jD3LFb0.png",
			fullName: "Danielle Sidhu",
			title: "Tech Writer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/paoGCSJ.png",
			fullName: "Amara Nwachukwu",
			title: "UX | Tech Writer | Podcast Creator",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
	],
};

/**
 * Object containing details for administration to the Spacelab project
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const administration = {
	title: "administration",
	members: [
		{
			image: "https://imgur.com/0Qd8hVW.png",
			fullName: "Mayah Collins",
			title: "Director of Creative Content",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/6YPKVbH.png",
			fullName: "Myesha Dunn",
			title: "Program Director",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/IZOE2tp.png",
			fullName: "Blair Feldman",
			title: "Director of Finance",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/hCTKu88.png",
			fullName: "Scott Allison",
			title: "Fundraiser",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/zn2CSzP.png",
			fullName: "David Lindgren",
			title: "Grant Writer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/k0OYag4.png",
			fullName: "Chris Miller",
			title: "Mentor",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/QLChPXs.png",
			fullName: "Kristina Catapang",
			title: "Paralegal Advisor",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/zx1ROBo.png",
			fullName: "Faith Marlin",
			title: "Recruiter",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/nIwMI5E.png",
			fullName: "Prachi Priya",
			title: "Recruiter",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://imgur.com/PxBOUHA.png",
			fullName: "T'Keyah Nichols",
			title: "Cyber Security Analyst",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "past",
		},
		{
			image: "https://i.imgur.com/6Zq0ldv.png",
			fullName: "Lauren Owen",
			title: "Marketing and Digital Analytics Manager",
			bioQuote:
				"I create optimization reports for websites, mobile, and software. My data comes from Google/Adobe Analytics, user interviews, 1000's of research studies, and more." +
				"I also install and manage analytics software.",
			gitHub: "",
			portfolio: "https://www.laurenmarieowen.com/",
			linkedIn: "",
			status: "past",
		},
	],
};

/**
 * Object containing details for members of the Spacelab December 2021 cohort
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const december2021Cohort = {
	title: "december 2021 cohort",
	members: [
		{
			image: "https://ca.slack-edge.com/T01NXS517FE-U02M259VB29-764495edcf61-512",
			fullName: "Alex Anand",
			title: "Full-Stack Software Engineer",
			bioQuote:
				"Frontend Developer @ SpaceLab | Graphic Designer/Owner @ TSL Printing Co. | Freelance Software Developer | General Assembly Alumni |" +
				"Currently studying for a bachelor's degree in Software Development & Security (class of 2024) at University of Maryland Global Campus",
			gitHub: "https://github.com/aanand93",
			portfolio: "",
			linkedIn: "https://www.linkedin.com/in/alexanderanand/",
			status: "current",
		},
		{
			image: "",
			fullName: "Cat Moran",
			title: "Software Developer | Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://ca.slack-edge.com/T01NXS517FE-U02MHPLFH4H-0a5296950b94-512",
			fullName: "Cory Rice",
			title: "Software Developer | Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "",
			fullName: "Rohit Jacob",
			title: "Software Developer | Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "",
			fullName: "Sven Gerlach",
			title: "Software Developer | Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
	],
};

/**
 * Object containing details for additional contributors to the Spacelab project
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const additionalContributors = {
	title: "additional contributors",
	members: [
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130965/team_pics/jon_cxasx9.png",
			fullName: "Jon Zivku",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130970/team_pics/deen_ex8fxt.png",
			fullName: "Deen Haque",
			title: "Full Stack Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130963/team_pics/charlie_ibjvgs.png",
			fullName: "Charlie Arboleda",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
	],
};

/**
 * Object containing the data to populate the nav bar for the Current Teams slider
 * @type {{currentTeams: [{title: string, activeFlag: string}]}}
 */
export const teamSliderNavLinks = {
	currentTeams: [
		{
			title: "Frontend Developers",
			activeFlag: "frontend",
		},
		{
			title: "Backend Developers",
			activeFlag: "backend",
		},
		{
			title: "3D Developers",
			activeFlag: "webgl",
		},
		{
			title: "UX Designers",
			activeFlag: "designers",
		},
		{
			title: "Data Scientists",
			activeFlag: "datascience",
		},
		{
			title: "Writers",
			activeFlag: "writers",
		},
		{
			title: "Board",
			activeFlag: "board",
		},
		{
			title: "Administration",
			activeFlag: "administration",
		},
	],
};

/**
 * Object containing the data to populate the nav bar for the Past Cohorts slider
 * @type {title: string, activeFlag: string}
 */
export const cohortSliderNavLinks = {
	pastCohorts: [
		{
			title: "Dec 2021",
			activeFlag: "december2021",
		},
		{
			title: "Additional Contributors",
			activeFlag: "additionalContributors",
		},
	],
};
