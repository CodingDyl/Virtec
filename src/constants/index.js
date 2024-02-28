import {twitter, link, facebook, insta} from '../assets'

const navLinks = [
    {
        id: "#about",
        title: "About"
    },
    {
        id: "#why",
        title: "Why Us"
    },
    {
        id: "#contact",
        title: "Contact"
    },
];

const problems = [
    {
        title: "HANDLE EVERYTHING YOURSELF?",
        content: "That's fine if you have very little on your plate. But if you're pretty swamped already... this isn't a viable option. You would want to spend the time focused on things that matter.",
        image: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "NEW STAFF?",
        content: "Finding good people isn't easy. Training and onboarding staff is costly and even if you do find the perfect man or woman for the position... you're still depending on one person!",
        image: "https://images.unsplash.com/photo-1641122669951-3e2aff778d3b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "HIRE AN AGENCY?",
        content: "Don't have a marketing budget of tens of thousands of euros? Then you might end up having your account managed by the intern of the assistants' assistant. Not exactly optimal.",
        image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=1847&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
];

const socials = [
    {
      name: 'twitter',
      url: twitter,
      link: 'https://youtu.be/dQw4w9WgXcQ'
    },
    {
      name: 'linkedin',
      url: link,
      link: 'https://www.linkedin.com/company/virtec-marketing/'
    },
    {
      name: 'instagram',
      url: insta,
      link: 'https://youtu.be/dQw4w9WgXcQ'
    },
    {
      name: 'facebook',
      url: facebook,
      link: 'https://www.facebook.com/people/Virtec-Marketing/61556979114996/'
    },
  ];

export {navLinks, problems, socials};