export const seo = {
  title:
    'Lawrence Li | Developer, Open-Source Enthusiast, Indiehacker, Dreamer',
  description: `I'm Lawrence, a passionate developer who wants to build amazing things
          with my code. I'm the maintainer of an awesome open-source AI-powered
          note-taking app called Reor, I'm currently learning Flutter to develop an AI reader app that will help you clear your unread articles. Cheers!`,
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
