const courses = {
	"python":
	[
		{
			"id":1,
			"name":"Learn Python: The Complete Python Programming Course",
			"instructor":"Avinash Jain, The Codex",
			"rating":4.4,
			"users":2923,
			"price":269.99,
			"oldPrice":679.99,
			"bestseller":false,
			"cat":"python"
		}
		,
		{
			"id":2,
			"name":"Learning Python for Data Analysis and Visualization",
			"instructor":"Jose Portilla",
			"rating":4.4,
			"users":17986,
			"price":319.99,
			"oldPrice":1599.99,
			"bestseller":false,
			"cat":"python"
		}
		,
		{
			"id":3,
			"name":"Python for Beginners - Learn Programming from scratch",
			"instructor":"Edwin Diaz, Coding Faculty Solutions",
			"rating":4.4,
			"users":1770,
			"price":269.99,
			"oldPrice":679.99,
			"bestseller":false,
			"cat":"python"
		}
		,
		{
			"id":4,
			"name":"Learn Python: Python for Beginners",
			"instructor":"Abrar Hussain",
			"rating":4.3,
			"users":2768,
			"price":269.99,
			"oldPrice":319.99,
			"bestseller":false,
			"cat":"python"
		}
		,
		{
			"id":5,
			"name":"Python From Scratch & Selenium WebDriver QA Automation 2022",
			"instructor":"Admas Kinfu",
			"rating":4.7,
			"users":1800,
			"price":269.99,
			"oldPrice":1299.99,
			"bestseller":true,
			"cat":"python"
		}
		,
		{
			"id":6,
			"name":"Teach Your Kids to Code: Learn to Program Python at Any Age!",
			"instructor":"Avinash Jain, The Codex",
			"rating":4.5,
			"users":269.99,
			"price":319.99,
			"oldPrice":1299.99,
			"bestseller":true,
			"cat":"python"
		}	
	],
	"excel":
	[
		{
			"id":1,
			"name":"Microsoft Excel 2013 Course Beginners/ Intermediate Training",
			"instructor":"Infinite Skills",
			"rating":4.6,
			"users":1615,
			"price":519.99,
			"bestseller":false,
			"cat":"excel"
		}
		,
		{
			"id":2,
			"name":"Microsoft Excel 2013 Advanced. Online Excel Training Course",
			"instructor":"Infinite Skills",
			"rating":4.5,
			"users":3500,
			"price":519.99,
			"bestseller":false,
			"cat":"excel"
		}
		,
		{
			"id":3,
			"name":"Microsoft Excel - From Beginner to Expert in 6 Hours",
			"instructor":"Todd McLeod",
			"rating":4.5,
			"users":24488,
			"price":269.99,
			"bestseller":false,
			"cat":"excel"
		}
		,
		{
			"id":4,
			"name":"Sharper skills using Microsoft Excel 2010 for business",
			"instructor":"Ulrika Hedlund",
			"rating":4.7,
			"users":655,
			"price":229.99,
			"bestseller":false,
			"cat":"excel"
		},
		{
			"id":5,
			"name":"Learn Microsoft Excel 2013 - Advanced",
			"instructor":"Simon Sez IT",
			"rating":4.6,
			"users":372,
			"price":679.99,
			"bestseller":false,
			"cat":"excel"
		},
		{
			"id":6,
			"name":"7 Steps To Excel Success - Excel Skills And Power Tips",
			"instructor":"Billu Wigley, Stephanie Jhoy Tumulak",
			"rating":4.6,
			"users":1234,
			"price":769.99,
			"bestseller":false,
			"cat":"excel"
		},
		{
			"id":7,
			"name":"Advanced Excel - Beginner to Ninja level (includes Charts)",
			"instructor":"Rishabh Pugalia, Yoda Learning",
			"rating":4.5,
			"users":748,
			"price":1299.99,
			"bestseller":false,
			"cat":"excel"
		}
	],
	"web development":[
		{
			"id":1,
			"name":"Become a Certified HTML, CSS, JavaScript Web Developer",
			"instructor":"Teach Learning NetWork, Mark Lassoff",
			"rating":4.5,
			"users":2737,
			"price":679.99,
			"bestseller":false,
			"cat":"web development"
		},
		{
			"id":2,
			"name":"The Complete 2020 Fullstack Web Developer Course",
			"instructor":"Kalob Taulien",
			"rating":4.5,
			"users":6158,
			"price":1299.99,
			"bestseller":false,
			"cat":"web development"
		},
		{
			"id":3,
			"name":"Introduction to Web Development",
			"instructor":"Teach Learning NetWork, Mark Lassoff",
			"rating":4.3,
			"users":1720,
			"price":339.99,
			"bestseller":false,
			"cat":"web development"
		},
		{
			"id":4,
			"name":"Running a Web Development Business: The Complete Guide",
			"instructor":"Evan Kimbrell",
			"rating":4.8,
			"users":1575,
			"price":829.99,
			"bestseller":true,
			"cat":"web development"
		}

	],
	"javascript":
	[
		{
			"id":1,
			"name":"Javascript for Beginners",
			"instructor":"Teach Learning NetWork",
			"rating":4.5,
			"users":782,
			"price":229.99,
			"bestseller":false,
			"cat":"javascript"
		},
		{
			"id":2,
			"name":"1 Hour JavaScript",
			"instructor":"John Bura",
			"rating":4.4,
			"users":1898,
			"price":1399.99,
			"bestseller":false,
			"cat":"javascript"
		},
		{
			"id":3,
			"name":"JavaScript: Understanding the Weird Parts",
			"instructor":"Anthony Alicea",
			"rating":4.7,
			"users":45198,
			"price":1299.99,
			"bestseller":false,
			"cat":"javascript"
		},
		{
			"id":4,
			"name":"Javascript for Beginners Learn by Doing Practical Exercises",
			"instructor":"Edwin Diaz, Coding Faculty Solutions",
			"rating":4.3,
			"users":14135,
			"price":679.99,
			"bestseller":false,
			"cat":"javascript"
		}

	],
	"data science":
	[
		{
			"id":1,
			"name":"Data Science A-Z™: Real-Life Data Science Exercises Included",
			"instructor":"Kiril Eremenko",
			"rating":4.6,
			"users":32040,
			"price":1299.99,
			"bestseller":false,
			"cat":"data science"
		},
		{
			"id":2,
			"name":"Machine Learning, Data Science and Deep Learning with Python",
			"instructor":"Cundog Eduction",
			"rating":4.5,
			"users":27632,
			"price":269.99,
			"bestseller":false,
			"cat":"data science"
		},
		{
			"id":3,
			"name":"Data Science: Deep Learning and Neural Networks in Python",
			"instructor":"Lazy Programmer Inc.",
			"rating":4.6,
			"users":8508,
			"price":1199.99,
			"bestseller":false,
			"cat":"data science"
		},
		{
			"id":4,
			"name":"R Programming A-Z™: R For Data Science With Real Exercises!",
			"instructor":"Kiril Eremenko",
			"rating":4.7,
			"users":47131,
			"price":1399.99,
			"bestseller":true,
			"cat":"data science"
		}
	],
	"aws certification":
	[
		{
			"id":1,
			"name":"AWS Certified Security Specialty 2022",
			"instructor":"Zeal Vora",
			"rating":4.6,
			"users":5331,
			"price":369.99,
			
			"bestseller":true,
			"cat":"aws certification"
		},
		{
			"id":2,
			"name":"Part 1: AWS Certified Solutions Architect SAA C03 [Updated]",
			"instructor":"Chandra Lingam",
			"rating":4.6,
			"users":1571,
			"price":269.99,
			"oldPrice":669.99,
			"bestseller":false,
			"cat":"aws certification"
		},
		{
			"id":3,
			"name":"Practice Test AWS Solutions Architect Associate SAA C03",
			"instructor":"Chandra Lingam",
			"rating":4.7,
			"users":2829,
			"price":269.99,
			"oldPrice":519.99,
			"bestseller":false,
			"cat":"aws certification"
		},
		{
			"id":4,
			"name":"AWS Certified Solution Architect - Associate",
			"instructor":"Alan Rodrigues",
			"rating":4.6,
			"users":2285,
			"price":269.99,
			"oldPrice":829.99,
			"bestseller":false,
			"cat":"aws certification"
		},
		{
			"id":5,
			"name":"AWS Certified Solutions Architect - Associate 2022",
			"instructor":"Zeal Vora",
			"rating":4.6,
			"users":1472,
			"price":319.99,
			"bestseller":false,
			"cat":"aws certification"
		},
		{
			"id":6,
			"name":"The Ultimate AWS Certified Solutions Architect - Associate",
			"instructor":"Bernard Golden",
			"rating":4.2,
			"users":1467,
			"price":269.99,
			"oldPrice":1299.99,
			"bestseller":false,
			"cat":"aws certification"
		}
	],
	"drawing":
	[
		{
			"id":1,
			"name":"The Secrets to Drawing",
			"instructor":"Matthew Fussell",
			"rating":4.6,
			"users":3938,
			"price":229.99,
			"oldPrice":319.99,
			"bestseller":false,
			"cat":"drawing"
		},
		{
			"id":2,
			"name":"Drawing and Sketching for Beginners",
			"instructor":"Robin Slee | Art | Illustration | iPad",
			"rating":4.3,
			"users":1438,
			"price":269.99,
			"oldPrice":319.99,
			"bestseller":false,
			"cat":"drawing"
		},
		{
			"id":3,
			"name":"Building Confidence Through Drawing: Art for Beginners",
			"instructor":"Em Winn",
			"rating":4.6,
			"users":1775,
			"price":219.99,
			"oldPrice":269.99,
			"bestseller":true,
			"cat":"drawing"
		},
		{
			"id":4,
			"name":"Art for Kids & Beginners: 15 Easy Drawing & Painting Lessons",
			"instructor":"Em Winn",
			"rating":4.6,
			"users":766,
			"price":229.99,
			"oldPrice":269.99,
			"bestseller":false,
			"cat":"drawing"
		}
	]
};

const messages = {
	"python":"Expand your career opportunities with Python",
	"excel":"Analyze and visualize data with Excel",
	"web development":"Build websites and applications with Web Development",
	"javascript":"Grow your software development skills with JavaScript",
	"data science":"Lead data-driven decisions with Data Science",
	"aws certification":"Become an expert in cloud computing with AWS Certification",
	"drawing":"Expand your creative skillset with Drawing"
	};
const descs = {
	"python":"Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.",
	"excel":"Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic formulas. Both small businesses and large companies use Excel to turn their raw data into actionable insights.",
	"web development":"The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.",
	"javascript":"JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. With JavaScript online classes, you can learn to build interactive web applications, choose the best framework, and work with other programming languages like HTML and CSS.",
	"data science":"Data science application is an in-demand skill in many industries worldwide — including finance, transportation, education, manufacturing, human resources, and banking. Explore data science courses with Python, statistics, machine learning, and more to grow your knowledge. Get data science training if you’re into research, statistics, and analytics.",
	"aws certification":"Prep for your AWS certification with an AWS course on Udemy. Learn the fundamentals of AWS such as working with a serverless platform, the various frameworks, security and more. With these courses, you’ll build the valuable skills you need to implement cloud initiatives — and open up new career opportunities. If you want to become an AWS developer, we’ve got the course for you.",
	"drawing":"Want to start drawing for fun or take your craft to the next level? Explore our online drawing classes and learn pencil drawing, figure drawing, cartoon drawing, character drawing for cartoons and anime, illustration, sketching, shading and more. Take an overview course on the fundamentals of drawing or zero in on an area you’d like to improve with a specialized course. We’ve got tons of options to get — and keep — you going."
};


const categories = ["python","excel","web development","javascript","data science","aws certification","drawing"]
export {courses, messages, descs,categories};