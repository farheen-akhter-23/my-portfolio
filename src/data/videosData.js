import shopmindAI from "../components/live-demos/ai-agent.mp4";
import ats from "../components/live-demos/ATS.mp4";
import sent from "../components/live-demos/squid-demo.mp4";
import movie from "../components/live-demos/movie-recom.mp4"
import churn from "../components/live-demos/churn-model.mp4"
import auto from "../components/live-demos/auto-web-app.mp4"
import podcast from "../components/live-demos/podcast.mp4"

const videosData = [
    {
      id: 1,
      title: 'AI Agent Shop Mind',
      src: shopmindAI,
    },
    {
      id: 2,
      title: 'ATS Resume evaluator',
      src: ats,
    },
    {
      id: 3,
      title: 'Sentimental Analysis ML Model',
      src: sent,
    },
    {
        id: 4,
        title: 'Movie Recommendation System',
        src: movie,
      },
      {
        id: 5,
        title: 'Telecom Churn Detection Model',
        src: churn,
      },
      {
        id:6,
        title:'Autonomous Web App Generator LLM',
        src: auto
      },
      {
        id:7,
        title:'Multi Modal AI Podcast App',
        src: podcast
      }
  ];
  
  export default videosData;
  