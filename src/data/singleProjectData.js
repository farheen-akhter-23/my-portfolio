// Import images
import shop from '../images/shop.png';
import webapp from '../images/web-app.png';
import llama from '../images/llama.png';
import ats from "../images/ats.png";
import chatbot from '../images/chatbot.png';
import yolo from "../images/tox.png";
import tox from "../images/toxicity.jpeg"
import podcast from "../images/podcast.jpeg"

// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
	FiGithub
} from 'react-icons/fi';

export const projectsData = [
	{
		id:1,
	  ProjectHeader: {
		title: 'ShopMind AI',
		publishDate: 'March 23, 2025',
		tags: 'Full-Stack / AI / E-commerce',
	  },
	  ProjectImages: [
		{
		  id: 1,
		  title: 'ShopMind AI Interface',
		  img: shop,
		},
	  ],
	  ProjectInfo: {
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
		  'Develop a full-stack e-commerce platform that delivers personalized product recommendations based on user roles (Admin or Customer), integrating AI for enhanced user experience.',
		Technologies: [
		  {
			title: 'Tools & Technologies',
			techs: ['React.js', 'Django', 'PostgreSQL', 'Tailwind CSS', 'AI Integration'],
		  },
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
		  {
			id: 1,
			details:
			  'Implementing a role-based login system to differentiate between Admin and Customer functionalities.',
		  },
		  {
			id: 2,
			details:
			  'Integrating AI to provide personalized product recommendations, enhancing the shopping experience.',
		  },
		  {
			id: 3,
			details:
			  'Ensuring a responsive and clean UI using Tailwind CSS for optimal user engagement.',
		  },
		],
		SocialSharingHeading: 'Source Code',
		SocialSharing: [
		  {
			id: 1,
			name: 'GitHub',
			icon: <FiGithub />,
			url: 'https://github.com/farheen-akhter-23/Ecommerce-based-AI-Agent',
		  },
		//   {
		// 	id: 2,
		// 	name: 'LinkedIn',
		// 	icon: <FiLinkedin />,
		// 	url: 'https://www.linkedin.com/in/farheen-akhter-153a0b156/',
		//   },
		],
	  },
	  RelatedProject: {
		title: 'Related Projects',
		Projects: [
		  {
			id: 1,
			title: 'Autonomous Web App Generator',
			img: webapp,
		  },
		  {
			id: 2,
			title: 'LLM RAG FAISS',
			img:llama ,
		  },
		  {
			id: 3,
			title: 'Milvus MistralAI Chatbot',
			img: chatbot,
		  },
		],
	  },
	},
	{
		id:2,
	  ProjectHeader: {
		title: 'Autonomous Web App Generator',
		publishDate: 'March 31, 2025',
		tags: 'AI / Web Development',
	  },
	  ProjectImages: [
		{
		  id: 1,
		  title: 'Autonomous Web App Generator Interface',
		  img: webapp,
		},
	  ],
	  ProjectInfo: {
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
		  'Create an AI-powered tool that generates production-ready React components with Tailwind CSS based on natural language prompts.',
		Technologies: [
		  {
			title: 'Tools & Technologies',
			techs: ['OpenAI API', 'Next.js 14', 'React 18', 'Tailwind CSS', 'JSZip'],
		  },
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
		  {
			id: 1,
			details:
			  'Integrating OpenAI API to interpret natural language prompts and convert them into functional React code.',
		  },
		  {
			id: 2,
			details:
			  'Implementing a live preview feature for real-time component rendering.',
		  },
		  {
			id: 3,
			details:
			  'Developing a one-click export functionality to download generated code as a ZIP file.',
		  },
		],
		SocialSharingHeading: 'Source Code',
		SocialSharing: [
		  {
			id: 1,
			name: 'GitHub',
			icon: <FiGithub />,
			url: 'https://github.com/farheen-akhter-23/Autonomous-Web-App-Generator',
		  },
		//   {
		// 	id: 2,
		// 	name: 'LinkedIn',
		// 	icon: <FiLinkedin />,
		// 	url: 'https://www.linkedin.com/in/farheen-akhter-153a0b156/',
		//   },
		],
	  },
	  RelatedProject: {
		title: 'Related Projects',
		Projects: [
		  {
			id: 1,
			title: 'ShopMind AI',
			img: shop,
		  },
		  {
			id: 2,
			title: 'LLM RAG FAISS',
			img: ats,
		  },
		  {
			id: 3,
			title: 'Milvus MistralAI Chatbot',
			img: chatbot,
		  },
		],
	  },
	},
	{
		id:3,
	  ProjectHeader: {
		title: 'LLM RAG FAISS',
		publishDate: 'April 5, 2025',
		tags: 'AI / Natural Language Processing',
	  },
	  ProjectImages: [
		{
		  id: 1,
		  title: 'ATS Resume Evaluator',
		  img: ats,
		},
	  ],
	  ProjectInfo: {
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
		  'Develop an AI-powered ATS Resume Evaluator that analyzes resumes against job descriptions using Google Gemini AI.',
		Technologies: [
		  {
			title: 'Tools & Technologies',
			techs: ['Streamlit', 'Google Generative AI', 'PyPDF2', 'docx2txt', 'Python'],
		  },
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
		  {
			id: 1,
			details:
			  'Integrating Google Gemini AI to extract key insights, match scores, and missing keywords from resumes.',
		  },
		  {
			id: 2,
			details:
			  'Developing a user-friendly interface with Streamlit for seamless user interaction.',
		  },
		  {
			id: 3,
			details:
			  'Ensuring support for both PDF and DOCX resume uploads and accurate text extraction.',
		  },
		],
		SocialSharingHeading: 'Source Code',
		SocialSharing: [
		  {
			id: 1,
			name: 'GitHub',
			icon: <FiGithub />,
			url: 'https://github.com/farheen-akhter-23/LLM-RAG-FAISS',
		  },
		//   {
		// 	id: 2,
		// 	name: 'LinkedIn',
		// 	icon: <FiLinkedin />,
		// 	url: 'https://www.linkedin.com/in/farheen-akhter-153a0b156/',
		//   },
		],
	  },
	  RelatedProject: {
		title: 'Related Projects',
		Projects: [
		  {
			id: 1,
			title: 'ShopMind AI',
			img: shop,
		  },
		  {
			id: 2,
			title: 'Autonomous Web App Generator',
			img: webapp,
		  },
		  {
			id: 3,
			title: 'Milvus MistralAI Chatbot',
			img: chatbot,
		  },
		],
	  },
	},
	{
		id: 4,
		ProjectHeader: {
		  title: 'Milvus-MistralAI Chatbot',
		  publishDate: 'March 15, 2024',
		  tags: 'AI / Chatbot / RAG',
		},
		ProjectImages: [
		  {
			id: 1,
			title: 'Milvus-MistralAI Chatbot Interface',
			img: chatbot,
		  },
		],
		ProjectInfo: {
		  ObjectivesHeading: 'Objective',
		  ObjectivesDetails:
			'Develop an AI-powered chatbot for CSUSB\'s Computer Science and Engineering department to assist students with academic advising by retrieving relevant information using Milvus and Mistral-7B.',
		  Technologies: [
			{
			  title: 'Tools & Technologies',
			  techs: ['Milvus', 'Mistral-7B', 'RAG', 'HPC', 'Deep Learning'],
			},
		  ],
		  ProjectDetailsHeading: 'Challenge',
		  ProjectDetails: [
			{
			  id: 1,
			  details:
				'Integrating Milvus vector database with Mistral-7B to provide accurate and contextually relevant responses to student queries.',
			},
			{
			  id: 2,
			  details:
				'Ensuring the chatbot retrieves information strictly from official university data to maintain accuracy and reliability.',
			},
			{
				id:3,
				details:
				'Gather additional academic resources, including course catalogs, faculty publications, and departmental guidelines, to enrich the chatbots knowledge base.Process and integrate the collected data into the Milvus vector database, ensuring that the information is indexed and retrievable by the chatbot.​ Develop a set of diverse academic queries that students might ask, covering topics such as course prerequisites, research opportunities, and graduation requirements.​ Test the chatbots responses to the simulated queries, assessing accuracy, relevance, and completeness.​Optimization: Based on the evaluation results, fine-tune the chatbots retrieval and response generation mechanisms to enhance performance.'
			}
		  ],
		  SocialSharingHeading: 'Source Code',
		  SocialSharing: [
			{
			  id: 1,
			  name: 'GitHub',
			  icon: <FiGithub />,
			  url: 'https://github.com/farheen-akhter-23/Milvus-MistralAI-Chatbot',
			},
			// {
			//   id: 2,
			//   name: 'LinkedIn',
			//   icon: <FiLinkedin />,
			//   url: 'https://www.linkedin.com/in/farheen-akhter-153a0b156/',
			// },
		  ],
		},
		RelatedProject: {
		  title: 'Related Projects',
		  Projects: [
			{
			  id: 1,
			  title: 'Ecommerce AI Agent',
			  img: shop,
			},
			{
			  id: 2,
			  title: 'Autonomous Web App Generator',
			  img: webapp,
			},
			{
			  id: 3,
			  title: 'LLM-RAG-FAISS',
			  img: ats,
			},
		  ],
		},
	},
	{
		id: 5,
		ProjectHeader: {
		  title: 'LLAMA Document Parser',
		  publishDate: 'April 10, 2024',
		  tags: 'Document Parsing / AI',
		},
		ProjectImages: [
		  {
			id: 1,
			title: 'LLAMA Document Parser Interface',
			img: llama,
		  },
		],
		ProjectInfo: {
		  ObjectivesHeading: 'Objective',
		  ObjectivesDetails:
			'Demonstrate the use of LlamaParse to efficiently extract structured data from PDFs, focusing on loading, parsing, and extracting tables using Python and LlamaParse API.',
		  Technologies: [
			{
			  title: 'Tools & Technologies',
			  techs: ['LlamaParse', 'Python', 'dotenv'],
			},
		  ],
		  ProjectDetailsHeading: 'Challenge',
		  ProjectDetails: [
			{
			  id: 1,
			  details:
				'Securely loading API credentials and integrating with LlamaParse for document parsing.',
			},
			{
			  id: 2,
			  details:
				'Handling errors gracefully to avoid unexpected failures during the parsing process.',
			},
		  ],
		  SocialSharingHeading: 'Source Code',
		  SocialSharing: [
			{
			  id: 1,
			  name: 'GitHub',
			  icon: <FiGithub />,
			  url: 'https://github.com/farheen-akhter-23/LLAMA-Document-Parser',
			},
			// {
			//   id: 2,
			//   name: 'LinkedIn',
			//   icon: <FiLinkedin />,
			//   url: 'https://www.linkedin.com/in/farheen-akhter-153a0b156/',
			// },
		  ],
		},
		RelatedProject: {
		  title: 'Related Projects',
		  Projects: [
			{
			  id: 1,
			  title: 'Milvus-MistralAI Chatbot',
			  img: chatbot,
			},
			{
			  id: 2,
			  title: 'LLM-RAG-FAISS',
			  img: ats,
			},
			{
			  id: 3,
			  title: 'Autonomous Web App Generator',
			  img: webapp,
			},
		  ],
		},
	},
	{
		id: 6,
		ProjectHeader: {
		  title: 'YOLO Segmentation',
		  publishDate: 'May 5, 2024',
		  tags: 'Computer Vision / Segmentation',
		},
		ProjectImages: [
		  {
			id: 1,
			title: 'YOLO Segmentation Output',
			img: yolo,
		  },
		],
		ProjectInfo: {
		  ObjectivesHeading: 'Objective',
		  ObjectivesDetails:
			'Implement instance segmentation using YOLOv8 on custom datasets, focusing on accurate object segmentation with high performance.',
		  Technologies: [
			{
			  title: 'Tools & Technologies',
			  techs: ['YOLOv8', 'Python', 'OpenCV', 'PyTorch'],
			},
		  ],
		  ProjectDetailsHeading: 'Challenge',
		  ProjectDetails: [
			{
			  id: 1,
			  details:
				'Training YOLOv8 model on custom datasets to achieve high accuracy in object segmentation.',
			},
			{
			  id: 2,
			  details:
				'Optimizing the model for real-time inference without compromising on performance.',
			},
		  ],
		  SocialSharingHeading: 'Source Code',
		  SocialSharing: [
			{
			  id: 1,
			  name: 'GitHub',
			  icon: <FiGithub />,
			  url: 'https://github.com/farheen-akhter-23/Data-Science-AI-DeepLearning-YOLO-Segmentation',
			},
			// {
			//   id: 2,
			//   name: 'LinkedIn',
			//   icon: <FiLinkedin />,
			//   url: 'https://www.linkedin.com/in/farheen-akhter-153a0b156/',
			// },
		  ],
		},
		RelatedProject: {
		  title: 'Related Projects',
		  Projects: [
			{
			  id: 1,
			  title: 'LLAMA Document Parser',
			  img: llama,
			},
			{
			  id: 2,
			  title: 'Milvus-MistralAI Chatbot',
			  img: chatbot,
			},
			{
			  id: 3,
			  title: 'LLM-RAG-FAISS',
			  img: ats,
			},
		  ],
		},
	},
	{
		id:7,
		ProjectHeader: {
		  title: 'Toxicity Model with Tokenization',
		  publishDate: 'March 15, 2025',
		  tags: 'NLP / Machine Learning',
		},
		ProjectImages: [
		  {
			id: 1,
			title: 'Toxicity Model Interface',
			img: tox,
		  },
		],
		ProjectInfo: {
		  ObjectivesHeading: 'Objective',
		  ObjectivesDetails:
			'Develop a machine learning model capable of detecting toxic comments in text data, utilizing advanced tokenization techniques to enhance accuracy.',
		  Technologies: [
			{
			  title: 'Tools & Technologies',
			  techs: ['Python', 'TensorFlow', 'Keras', 'NLTK', 'Pandas'],
			},
		  ],
		  ProjectDetailsHeading: 'Challenge',
		  ProjectDetails: [
			{
			  id: 1,
			  details:
				'The project involved creating a model to classify text comments based on their toxicity levels, addressing categories such as toxic, severe_toxic, obscene, threat, insult, and identity_hate.',
			},
			{
			  id: 2,
			  details:
				'Implemented data preprocessing steps including text cleaning, tokenization, and lemmatization to prepare the dataset for training.',
			},
			{
			  id: 3,
			  details:
				'Utilized a Bidirectional Long Short-Term Memory (LSTM) Recurrent Neural Network (RNN) architecture to effectively capture context and improve classification performance.',
			},
			{
			  id: 4,
			  details:
				'Employed techniques to handle class imbalance in the dataset, ensuring the model performs well across all toxicity categories.',
			},
		  ],
		  SocialSharingHeading: 'Source Code',
		  SocialSharing: [
			{
			  id: 1,
			  name: 'LinkedIn',
			  icon: '<FiLinkedin />',
			  url: 'https://www.linkedin.com/in/farheen-akhter-153a0b156/',
			},
			// {
			// 	id: 2,
			// 	name: 'GitHub',
			// 	icon: <FiGithub />,
			// 	url: 'https://github.com/farheen-akhter-23/Data-Science-AI-DeepLearning',
			//   },
		  ],
		},
		RelatedProject: {
		  title: 'Related Projects',
		  Projects: [
			{
			  id: 1,
			  title: 'YOLO Segmentation',
			  img: yolo,
			},
		  ],
		},

	},
	{
		id: 8,
		ProjectHeader: {
		  title: 'Podcast Intelligence Multimodal AI App',
		  publishDate: 'April 24, 2025',
		  tags: 'AI / Multimodal / NLP / Audio',
		},
		ProjectImages: [
		  {
			id: 1,
			title: 'Podcast Summarizer App Interface',
			img: podcast, // make sure to import or define this image
		  },
		],
		ProjectInfo: {
		  ObjectivesHeading: 'Objective',
		  ObjectivesDetails:
			'Build a multimodal AI application that takes a Spotify podcast episode, generates a concise text summary using LLMs, and produces a short audio version of the summary for rapid comprehension.',
		  Technologies: [
			{
			  title: 'Tools & Technologies',
			  techs: [
				'Streamlit',
				'gTTS',
				'OpenAI API (GPT-4)',
				'Anthropic Claude 3',
				'Mistral Large',
				'Spotify API',
				'Python 3.10',
			  ],
			},
		  ],
		  ProjectDetailsHeading: 'Challenge',
		  ProjectDetails: [
			{
			  id: 1,
			  details:
				'Integrating Spotify API to fetch podcast episode metadata and descriptions.',
			},
			{
			  id: 2,
			  details:
				'Designing a unified interface to support multiple LLMs (OpenAI, Claude, Mistral) for text summarization.',
			},
			{
			  id: 3,
			  details:
				'Implementing voice synthesis using gTTS to generate a 10-second audio clip from the generated summary.',
			},
			{
			  id: 4,
			  details:
				'Providing an intuitive UI using Streamlit for non-technical users to access AI capabilities in a single click.',
			},
			{
			  id: 5,
			  details:
				'Exploring multimodal support and potential extensions like podcast scraping and audio file uploads.',
			},
		  ],
		  SocialSharingHeading: 'Source Code',
		  SocialSharing: [
			{
			  id: 1,
			  name: 'GitHub',
			  icon: <FiGithub />,
			  url: 'https://github.com/farheen-akhter-23/Multimodal-AI-PODCAST',
			},
			// {
			//   id: 2,
			//   name: 'LinkedIn',
			//   icon: <FiLinkedin />,
			//   url: 'https://www.linkedin.com/in/farheen-akhter-153a0b156/',
			// },
		  ],
		},
		RelatedProject: {
		  title: 'Related Projects',
		  Projects: [
			{
			  id: 1,
			  title: 'Autonomous Web App Generator',
			  img: webapp,
			},
			{
			  id: 2,
			  title: 'Milvus MistralAI Chatbot',
			  img: chatbot,
			},
			{
			  id: 3,
			  title: 'ShopMind AI',
			  img: shop,
			},
		  ],
		},
	},   
]
