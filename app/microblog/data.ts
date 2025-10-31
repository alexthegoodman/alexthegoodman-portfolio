export interface MicroBlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export const microblogs: MicroBlogPost[] = [
  {
    slug: "microblogging",
    title: "Microblogging",
    date: "10/30/2025",
    content: `It has occurred to me that the best approach to marketing my services locally is SEO. 
    It is high intent like search ads, but also relatively affordable and has a long shelf-life. 
    I don't love writing long articles, but can package original thoughts in small posts like this one.
    I am not sure how many of us in Grand Rapids start our blogs only to abandon them, but I hope my micro-strategy
    will mitigate any burnout!`,
  },
  {
    slug: "underdogs",
    title: "The Underdog",
    date: "10/30/2025",
    content: `Society loves the underdog, which is why I love to design services that help the underdog win. I myself am constantly
    working against the headwinds, always persevering through the next complex task. I am your classic underdog, so I couldn't possibly abandon my own kind.`,
  },
  {
    slug: "early-vibe-coding",
    title: "Early Vibe Coding",
    date: "10/30/2025",
    content: `Truth is, vibe coding is not all it's cracked up to be. 
    At least, not for complex tasks like 3D or video rendering or custom machine learning architectures. 
    Sure, it is fantastic for getting a prototype built, but it fails to reach the heights I set for it, regardless of how well I prompt or what else I do.
    Perhaps this will be solved in the next few years, but it has already been a few years since ChatGPT launched, so my optimism has taken a hit.`,
  },
  {
    slug: "quantum-ml-algorithms",
    title: "Quantum ML Algorithms",
    date: "10/31/2025",
    content: `If you've been watching the quantum developments closely, you might know that we have built machines with hundreds of qubits, some with very low error rates,
    and even some that operate at room-temperature. As the hardware continues to improve, more and more people are using quantum "simulation" to verify algorithms ahead of time.
    Such simulators allow for the testing of thousands or even millions of qubits on traditional hardware. However, the algorithms are struggling across the board, except one crucial
    area - machine learning / artificial intelligence. Building on this, I put forward the idea that we should achieve traditional problem solving via quantum machine learning models.`,
  },
  {
    slug: "massive-microblog",
    title: "My Massive Microblogging Goal",
    date: "10/31/2025",
    content: `I have mentioned before how valuable and enjoyable microblogging can be. I do it all the time via social media, but with my unique services, I just don't get
    very far without the strong SEO component. That's why I'm focused on microblogging here on my portfolio (AlexTheGoodman). I have made up my mind to write 10,000 microblogs
    within 2 years. My hope is that I can exceed that target. Each blog will be handwritten with original thoughts and insights into the world of business and technology.
    I will follow best practices, but also ensure that my content remains genuine, original, and brief. This means there will be discussions ranging from WebGL / WebGPU
    to PyTorch, and from technology trends to details that make a UX shine.`,
  },
  {
    slug: "neo-bot-mvp",
    title: "Is the Neo Bot an MVP?",
    date: "10/31/2025",
    content: `I have seen this exciting new Neo humanoid robot from 1x.tech. It is a beautiful looking bot, that's for sure. It feels unimposing and welcome
    into personal spaces. It's size and form factor make it seem appropriate for home use. There is a common dream among many that all kinds of chores
    from cooking to cleaning could be handled by a humanoid. For others, there is skepticism that chores are worth such a price. But that's not what I'd like to mention.
    Rather, it is the sad revelation that came out shortly after Neo's pre-orders were launched... This bot is currently remote operated. There is no AI component.
    Many of us founders might be quick to either judge, because we believe in quality, or to question if this is a valid MVP. Is it? Here's the problem. People
    are less comfortable inviting a silent stranger into their home than a secure robot. It's basically that simple. AI may have its drawbacks, but it has a lot of
    potential to shine in the robot world. This is not a valid MVP.`,
  },
];
