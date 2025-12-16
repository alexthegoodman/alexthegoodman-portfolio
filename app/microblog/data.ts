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
  {
    slug: "vulkan-worth-it",
    title: "Is Vulkan Worth It?",
    date: "11/27/2025",
    content: `Of course, it is. All graphics APIs are largely the same. There are buffers, pipelines, and queues, among other things. The worst you'll hear about Vulkan is
    that it is verbose, and this is technically accurate. But you've got to ask, is 20% more code worth 20% more speed in the final product? Given how much of that code is just boilerplate,
    I would say the answer is an easy yes. I am not saying wgpu or OpenGL are no good, but ultimately you make a decision regarding performance when deciding between these APIs. Also, don't worry
    about feature support. Just be mindful of which special features you really need in your Vulkan implementation.`
  },
  {
    slug: "headhunters",
    title: "Headhunters",
    date: "11/27/2025",
    content: `I do wonder what it is like to be in need of a frontend, graphics, or video engineer and not be satisfied with what you get in your searches or job postings. Or perhaps
    you are looking for one of these engineers but aren't ready to hire right away. Either way, I think the solution for us specialized developers is to market ourselves and make ourselves
    more discoverable. This will open all kinds of doors for both parties. I was never great with Kubernetes or Kafka (back-end tools), but love working with vertices, shaders, and matrices.`
  },
  {
    slug: "entropy-update-1",
    title: "Entropy Update #1",
    date: "12/16/2025",
    content: `I recently unified my "Midpoint" and "Stunts" engines, which were my Rust-based engines for games and video. The result is called Entropy Engine. I also added several important
    upgrades to improve visual fidelity, including deferred rendering. Now, EE powers an MCP-inspired experience called Entropy Chat. With Entropy Chat, the "make games easy" search phrase
    is finally satisfied to the fullest. Users can create a game just by chatting, and with the abstractions provided by Entopy Engine, the experience is far less clunky and more capable
    for level design as compared to MCP with Unity or Unreal Engine.`
  },
  {
    slug: "make-games-easy",
    title: "Make Games Easy",
    date: "12/16/2025",
    content: `If you're anything like me, you've long dreamed of creating a game with ease. Crafting your story, your art, and your mechanics, without having to learn complex math and programming.
    Entropy Chat is here to solve this problem. Just by chatting, you can control your level design, game behaviors, and 3D art. Sure, you will need to create, generate, or find your art unless
    you would like to create a prototype with the art Entropy Chat will provide by default. But that's what gives your game its unique charm in the end! Ultimately, the gain is from being able
    to design and orchestrate your scenes just by chatting. Then, if you'd like, you can extend the engine and add any complex feature you want!`
  }
  // {
  //   slug: "",
  //   title: "",
  //   date: "",
  //   content: ``
  // }
];
