/* empty css                                    */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderScript, d as renderTemplate, e as renderComponent } from '../../chunks/astro/server_CEJ2q_J-.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_gx1bWz4I.mjs';
import { $ as $$Button } from '../../chunks/Button_az6TwUfl.mjs';
import 'clsx';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$3 = createAstro("https://studio10b.com");
const $$VideoPlayer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$VideoPlayer;
  const {
    videoUrl,
    thumbnailUrl,
    title = "",
    autoplay = false,
    controls = true,
    loop = false,
    muted = true,
    isExternal = false
    // Default to false
  } = Astro2.props;
  const fileExtension = videoUrl.split(".").pop()?.toLowerCase();
  const videoType = fileExtension === "mp4" ? "video/mp4" : fileExtension === "webm" ? "video/webm" : fileExtension === "ogg" ? "video/ogg" : "video/mp4";
  const finalVideoUrl = isExternal ? videoUrl : videoUrl;
  return renderTemplate`${maybeRenderHead()}<div class="video-player-container w-full overflow-hidden rounded-lg shadow-md group relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"> <div class="video-wrapper relative w-full rounded-lg overflow-hidden bg-black"> <!-- Video element (hidden initially if thumbnail exists) --> <video class="w-full h-auto"${addAttribute(thumbnailUrl, "poster")}${addAttribute(controls, "controls")}${addAttribute(autoplay, "autoplay")}${addAttribute(loop, "loop")}${addAttribute(muted, "muted")} playsinline preload="metadata"${addAttribute(thumbnailUrl ? "display: none;" : "", "style")}> <source${addAttribute(finalVideoUrl, "src")}${addAttribute(videoType, "type")}>
Your browser does not support the video tag.
</video> <!-- Custom thumbnail and play button overlay --> ${thumbnailUrl && renderTemplate`<div class="custom-thumbnail-container relative w-full h-0 pb-[56.25%]"> <img${addAttribute(thumbnailUrl, "src")}${addAttribute(title || "Video thumbnail", "alt")} class="absolute inset-0 w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"> <div class="absolute inset-0 flex items-center justify-center"> <div class="play-button-circle w-16 h-16 bg-black bg-opacity-60 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 hover:bg-opacity-80"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white"> <polygon points="5,3 19,12 5,21"></polygon> </svg> </div> </div> </div>`} </div> <!-- Video Title with animated line under it --> ${title && renderTemplate`<div class="video-info p-4 bg-white"> <h3 class="text-base font-medium relative pb-2 inline-block"> ${title} <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span> </h3> </div>`} </div> ${renderScript($$result, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/VideoPlayer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/VideoPlayer.astro", void 0);

const $$Astro$2 = createAstro("https://studio10b.com");
const $$VideoEmbed = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$VideoEmbed;
  const {
    videoId,
    provider = "youtube",
    title = "",
    description = "",
    aspectRatio = "16:9",
    customRatio = "56.25%",
    // Default is 16:9 (56.25%)
    autoplay = false,
    showControls = true,
    showInfo = true,
    startAt = 0
  } = Astro2.props;
  const getPaddingTop = () => {
    switch (aspectRatio) {
      case "16:9":
        return "56.25%";
      case "4:3":
        return "75%";
      case "1:1":
        return "100%";
      case "custom":
        return customRatio;
      default:
        return "56.25%";
    }
  };
  const getEmbedUrl = () => {
    if (provider === "youtube") {
      return `https://www.youtube.com/embed/${videoId}?rel=0&start=${startAt}&autoplay=${autoplay ? 1 : 0}&controls=${showControls ? 1 : 0}&showinfo=${showInfo ? 1 : 0}`;
    } else if (provider === "vimeo") {
      return `https://player.vimeo.com/video/${videoId}?autoplay=${autoplay ? 1 : 0}&title=${showInfo ? 1 : 0}&byline=${showInfo ? 1 : 0}&portrait=${showInfo ? 1 : 0}#t=${startAt}s`;
    }
    return "";
  };
  const embedUrl = getEmbedUrl();
  return renderTemplate`${maybeRenderHead()}<div class="video-embed-container w-full mb-8" data-astro-cid-mrk3q7f7> <!-- Video Title (if provided) --> ${title && renderTemplate`<h4 class="text-xl font-medium mb-3" data-astro-cid-mrk3q7f7>${title}</h4>`} <!-- Video Description (if provided) --> ${description && renderTemplate`<p class="text-gray-600 mb-4" data-astro-cid-mrk3q7f7>${description}</p>`} <!-- Responsive Video Embed Wrapper --> <div class="video-embed-wrapper relative w-full rounded-lg overflow-hidden bg-black shadow-lg"${addAttribute(`padding-top: ${getPaddingTop()}`, "style")} data-astro-cid-mrk3q7f7> <iframe class="absolute top-0 left-0 w-full h-full border-0"${addAttribute(embedUrl, "src")} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen${addAttribute(title, "title")} data-astro-cid-mrk3q7f7></iframe> </div> <!-- Caption Area (if title provided) --> ${title && renderTemplate`<div class="mt-3 text-sm text-gray-500" data-astro-cid-mrk3q7f7> ${title} </div>`} </div> `;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/VideoEmbed.astro", void 0);

const $$Astro$1 = createAstro("https://studio10b.com");
const $$ProjectMediaSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectMediaSection;
  const {
    video,
    isEmbedded = false
  } = Astro2.props;
  const hasVideo = !!video;
  return renderTemplate`${maybeRenderHead()}<div class="project-media-section my-16"> <h2 class="text-3xl font-bold mb-8">Project Demo</h2> ${hasVideo && !isEmbedded && renderTemplate`<div class="video-container mb-8"> ${renderComponent($$result, "VideoPlayer", $$VideoPlayer, { "videoUrl": video.url, "thumbnailUrl": video.thumbnail, "title": video.title, "isExternal": video.isExternal })}  </div>`} ${hasVideo && isEmbedded && renderTemplate`<div class="video-container mb-8"> ${renderComponent($$result, "VideoEmbed", $$VideoEmbed, { "videoId": video.videoId, "provider": video.provider, "title": video.title, "description": video.description })} </div>`} ${!hasVideo && renderTemplate`<p class="text-gray-600">No video available for this project.</p>`} </div>`;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/ProjectMediaSection.astro", void 0);

const $$Astro = createAstro("https://studio10b.com");
function getStaticPaths() {
  return validSlugs.map((slug) => ({
    params: { slug },
    props: { slug }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const projectData = {
    "marketing-environment": {
      title: "Virtual Marketing Experience",
      category: "Marketing Environment",
      client: "ADAM 4 Artists",
      year: "2023",
      projectUrl: "https://nearhub.club/kGRfWy6/adam-4-artists",
      description: "Our client, a distinguished player in the music business, sought to create an innovative 3D space. The goal was to provide a unique platform that facilitates meaningful connections between musicians and promoters.",
      challenge: "Our task was to develop an immersive, walkable 3D environment designed to educate and engage guests. This interactive space features promotional materials such as PDFs, videos, and images, providing an informative yet captivating experience.",
      solution: "The process began with detailed sketches, moving to creation post-approval. Utilizing Blender, I meticulously crafted the 3D scene, integrating elements that reflect the client's vision. I implemented flexible areas where the site owner can conveniently update videos, PDFs, and images, ensuring the content remains fresh and relevant.",
      features: [
        "Promotional materials such as PDFs, videos, and images",
        "Interactive tour with audio commentary",
        "Social viewing mode for shared experiences"
      ],
      mainImage: "/images/env-project-1.jpg",
      galleryImages: [
        "/images/env-project-1-gallery-1.jpg",
        "/images/env-project-1-gallery-2.jpg",
        "/images/env-project-1-gallery-3.jpg"
      ],
      video: {
        url: "https://deanyeager.s3.us-east-1.amazonaws.com/mozillahubs/adam4artists.mp4",
        thumbnail: "/images/env-project-1-thumbnail.jpg",
        title: "Marketing Experience Walkthrough",
        description: "Take a tour through our virtual marketing experience"
      }
    },
    "videogame-gallery": {
      title: "Independant Game Developers",
      category: "Gallery",
      client: "Human Guild",
      year: "2023",
      projectUrl: "https://nearhub.club/hLyuPmW/",
      description: "Our goal was to raise awareness and engagement for independent developers striving to shine on social media. This project involved creating a virtual gallery that showcases their games in an immersive 3D environment.",
      challenge: "The challenge was to design a virtual space that not only highlights the unique aspects of each game but also provides an engaging and interactive experience for visitors.",
      solution: "We designed a virtual gallery that allows users to explore different game environments, interact with game elements, and learn about the developers' stories. The gallery features interactive displays, video trailers, and links to the games' social media pages.",
      features: [
        "Immersive 3D game environments",
        "Interactive game displays",
        "Developer stories and links to social media"
      ],
      mainImage: "/images/env-project-2.jpg",
      galleryImages: [
        "/images/env-project-2-gallery-1.jpg",
        "/images/env-project-2-gallery-2.jpg",
        "/images/env-project-2-gallery-3.jpg"
      ],
      video: {
        url: "https://deanyeager.s3.us-east-1.amazonaws.com/mozillahubs/vids/Arcade.mp4",
        thumbnail: "/images/env-project-2-thumbnail.jpg",
        title: "Game Gallery Tour",
        description: "Explore the virtual gallery showcasing independent game developers"
      }
    },
    "beach-party-environment": {
      title: "Virtual Party Experience",
      category: "Event",
      client: "Marma J Foundation",
      year: "2023",
      projectUrl: "https://nearhub.club/WV2Ty4a/marma-j-beach-2023",
      description: "A virtual party platform that allows users to host and attend events in a fully interactive 3D environment, complete with music, games, and social features.",
      challenge: "Creating a dynamic and engaging virtual party experience that captures the excitement of real-life events while being accessible to a wide audience.",
      solution: "We developed a customizable virtual space where users can create themed parties, invite friends, and enjoy interactive games and music. The platform supports real-time interactions and social features to enhance the party atmosphere.",
      features: [
        "Customizable virtual party spaces",
        "Real-time music and game integration",
        "Social features for inviting friends",
        "Interactive party games and activities"
      ],
      mainImage: "/images/env-project-3.jpg",
      galleryImages: [
        "/images/env-project-3-gallery-1.jpg",
        "/images/env-project-3-gallery-2.jpg",
        "/images/env-project-3-gallery-3.jpg"
      ],
      video: {
        url: "https://deanyeager.s3.us-east-1.amazonaws.com/mozillahubs/vids/MarmaJ.mp4",
        thumbnail: "/images/env-project-3-thumbnail.jpg",
        title: "Virtual Party Experience Demo",
        description: "Watch our virtual party platform in action"
      }
    },
    "film-festival": {
      title: "Independant Film Festival",
      category: "Event",
      client: "Animaze Montreal",
      year: "2023",
      projectUrl: "https://nearhub.club/q7vqGDH/animaze-awards-theater",
      description: "An immersive 3D environment designed to host a virtual film festival, allowing filmmakers to showcase their work and engage with audiences in a unique way.",
      challenge: "The challenge was to create a virtual space that not only showcases films but also provides an engaging and interactive experience for attendees, including Q&A sessions with filmmakers.",
      solution: "We designed a virtual cinema that allows users to watch films, participate in live Q&A sessions, and explore interactive exhibits related to the films. The environment features multiple screening rooms, interactive displays, and social areas for networking.",
      features: [
        "Multiple screening rooms for different films",
        "Live Q&A sessions with filmmakers",
        "Interactive exhibits related to the films",
        "Social areas for networking and discussions"
      ],
      mainImage: "/images/env-project-4.jpg",
      galleryImages: [
        "/images/env-project-4-gallery-1.jpg",
        "/images/env-project-4-gallery-2.jpg",
        "/images/env-project-4-gallery-3.jpg"
      ],
      video: {
        url: "https://deanyeager.s3.amazonaws.com/mozillahubs/vids/Theater.mp4",
        thumbnail: "/images/env-project-4-thumbnail.jpg",
        title: "Film Festival Experience",
        description: "Experience the virtual film festival environment designed for Animaze Montreal"
      }
    },
    "fashion-show": {
      title: "LaSalle Signature 24 Fashion Show",
      category: "Fashion",
      client: "LaSalle College of Montreal",
      year: "2024",
      projectUrl: "https://nearhub.club/jJQy3wn/collegelasalle-signature2024",
      description: "A virtual fashion show environment that allows users to experience the latest collections from LaSalle College's fashion design students in an immersive 3D setting.",
      challenge: "Creating a visually stunning and interactive environment that showcases the fashion designs while providing an engaging user experience.",
      solution: "We designed a virtual runway that highlights the fashion pieces with dynamic lighting, camera angles, and interactive elements that allow users to explore the designs up close.",
      features: [
        "360-degree views of fashion pieces",
        "Designer interviews and behind-the-scenes content",
        "Social sharing features for user-generated content"
      ],
      mainImage: "/images/env-project-5.jpg",
      galleryImages: [
        "/images/env-project-5-gallery-1.jpg",
        "/images/env-project-5-gallery-2.jpg",
        "/images/env-project-5-gallery-3.jpg"
      ],
      video: {
        url: "https://deanyeager.s3.us-east-1.amazonaws.com/mozillahubs/vids/LaSalle24.mp4",
        thumbnail: "/images/env-project-5-thumbnail.jpg",
        title: "Fashion Show Experience",
        description: "Watch the LaSalle College fashion show in our immersive virtual environment"
      }
    },
    "industrial-training": {
      title: "Industrial Training Environment",
      category: "Training",
      client: "Global Manufacturing Corp",
      year: "2024",
      description: "A comprehensive virtual training environment for industrial workers to practice complex and potentially hazardous procedures in a safe setting.",
      challenge: "Creating realistic simulations of industrial equipment and processes with accurate physics and safety protocols.",
      solution: "We developed high-fidelity equipment models with functional controls and realistic failure scenarios, integrated with haptic feedback systems for skill development.",
      features: [
        "High-fidelity machine modeling",
        "Procedural safety protocol training",
        "Maintenance and troubleshooting scenarios",
        "Performance tracking and certification"
      ],
      mainImage: "/images/project-6.jpg",
      galleryImages: [
        "/images/project-6.jpg",
        "/images/project-6.jpg",
        "/images/project-6.jpg"
      ],
      embeddedVideo: {
        provider: "youtube",
        videoId: "dQw4w9WgXcQ",
        title: "Industrial Training Demo",
        description: "See our industrial training environment in action"
      }
    }
  };
  const validSlugs2 = Object.keys(projectData);
  const { slug } = Astro2.params;
  const currentSlug = typeof slug === "string" ? slug : "";
  const project = validSlugs2.includes(currentSlug) ? projectData[currentSlug] : {
    title: "Project Not Found",
    category: "Error",
    client: "N/A",
    year: "N/A",
    description: "This project could not be found.",
    challenge: "N/A",
    solution: "N/A",
    features: ["N/A"],
    mainImage: "/images/env-project-1.jpg",
    galleryImages: []
  };
  const hasLocalVideo = !!project.video;
  const hasEmbeddedVideo = !!project.embeddedVideo;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `${project.title} - Studio 10b` }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative h-[70vh] min-h-[600px] flex items-end text-white"> <div class="absolute inset-0 -z-10"> <img${addAttribute(project.mainImage, "src")}${addAttribute(project.title, "alt")} class="w-full h-full object-cover"> </div> <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-black/0 -z-10"></div> <div class="container mx-auto px-4 md:px-8 max-w-screen-xl pb-16"> <div> <h1 class="text-4xl md:text-5xl font-bold mb-4">${project.title}</h1> <p class="text-xl opacity-80">${project.category}</p> </div> </div> </section>  <section class="py-24"> <div class="container mx-auto px-4 md:px-8 max-w-screen-xl"> <div class="grid lg:grid-cols-3 gap-16"> <!-- Main Content (2/3 width) --> <div class="lg:col-span-2 space-y-16"> <!-- Overview --> <div> <h2 class="text-3xl md:text-4xl font-bold mb-6">Overview</h2> <p class="text-lg leading-relaxed">${project.description}</p> </div> <!-- Video Media Section - Local video takes precedence if both exist --> ${hasLocalVideo && renderTemplate`${renderComponent($$result2, "ProjectMediaSection", $$ProjectMediaSection, { "video": project.video, "isEmbedded": false })}`} ${!hasLocalVideo && hasEmbeddedVideo && renderTemplate`${renderComponent($$result2, "ProjectMediaSection", $$ProjectMediaSection, { "video": project.embeddedVideo, "isEmbedded": true })}`} <!-- Challenge & Solution --> <div class="grid md:grid-cols-2 gap-8 bg-gray-50 p-8 rounded-lg"> <div> <h3 class="text-2xl font-bold mb-4">The Challenge</h3> <p class="leading-relaxed">${project.challenge}</p> </div> <div> <h3 class="text-2xl font-bold mb-4">Our Solution</h3> <p class="leading-relaxed">${project.solution}</p> </div> </div> <!-- Key Features --> <div> <h3 class="text-2xl font-bold mb-6">Key Features</h3> <ul class="space-y-4"> ${project.features.map((feature) => renderTemplate`<li class="relative pl-8 text-lg"> <span class="absolute left-0 top-0 text-black">→</span> ${feature} </li>`)} </ul> </div> <!-- Project Gallery --> ${project.galleryImages && project.galleryImages.length > 0 && renderTemplate`<div> <h3 class="text-2xl font-bold mb-6">Project Gallery</h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${project.galleryImages.map((image) => renderTemplate`<div class="rounded-lg overflow-hidden h-48 md:h-52"> <img${addAttribute(image, "src")}${addAttribute(`${project.title} gallery image`, "alt")} class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"> </div>`)} </div> </div>`} </div> <!-- Sidebar (1/3 width) --> <div> <div class="bg-gray-50 p-6 md:p-8 rounded-lg sticky top-8"> <h3 class="text-2xl font-bold mb-6">Project Information</h3> <div class="flex justify-between py-4 border-b border-gray-200"> <span class="font-semibold">Client</span> <span>${project.client}</span> </div> <div class="flex justify-between py-4 border-b border-gray-200"> <span class="font-semibold">Category</span> <span>${project.category}</span> </div> <div class="flex justify-between py-4 border-b border-gray-200"> <span class="font-semibold">Year</span> <span>${project.year}</span> </div> <div class="mt-8 flex flex-col gap-4"> ${project.projectUrl ? renderTemplate`${renderComponent($$result2, "Button", $$Button, { "href": project.projectUrl, "variant": "outline", "openInNewTab": true }, { "default": ($$result3) => renderTemplate`
View Project
` })}` : renderTemplate`${renderComponent($$result2, "Button", $$Button, { "href": "/contact", "variant": "outline" }, { "default": ($$result3) => renderTemplate`
Request Demo
` })}`} ${renderComponent($$result2, "Button", $$Button, { "href": "/contact", "variant": "primary" }, { "default": ($$result3) => renderTemplate`
Inquire About This Project
` })} </div> </div> </div> </div> </div> </section>  <section class="py-24 bg-gray-50"> <div class="container mx-auto px-4 md:px-8 max-w-screen-xl"> <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Related Projects</h2> <div class="grid md:grid-cols-2 gap-10"> <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"> <a href="/projects/urban-planning" class="block text-current no-underline"> <div class="h-60 overflow-hidden"> <img src="/images/project-4.jpg" alt="Urban Planning Simulator" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"> </div> <div class="p-6"> <h3 class="text-xl font-medium mb-2">Urban Planning Simulator</h3> <span class="text-sm text-gray-600">Simulation</span> </div> </a> </div> <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"> <a href="/projects/wildlife-conservation" class="block text-current no-underline"> <div class="h-60 overflow-hidden"> <img src="/images/project-5.jpg" alt="Wildlife Conservation Experience" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"> </div> <div class="p-6"> <h3 class="text-xl font-medium mb-2">Wildlife Conservation Experience</h3> <span class="text-sm text-gray-600">Education</span> </div> </a> </div> </div> </div> </section> ` })}`;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/projects/[slug].astro", void 0);

const $$file = "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/projects/[slug].astro";
const $$url = "/projects/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
