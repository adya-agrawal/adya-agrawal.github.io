// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-art",
          title: "Art",
          description: "I enjoy painting with acrylics and sketching.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/art/";
          },
        },{id: "art-achaari-zindagi",
          title: 'Achaari Zindagi',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/achar.html";
            },},{id: "art-the-world-is-your-canvas",
          title: 'The world is your canvas',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/bookpainting.html";
            },},{id: "art-dark-academia",
          title: 'Dark academia',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/librarygirl.html";
            },},{id: "art-saree-stories",
          title: 'Saree Stories',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/sareesketch.html";
            },},{id: "art-just-how-fast-the-night-changes",
          title: 'Just how fast the night changes',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/sunrise.html";
            },},{id: "art-miles-to-go-before-i-sleep",
          title: 'Miles to go before I sleep',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/sunrisephone.html";
            },},{id: "art-last-sunset-in-a-city",
          title: 'Last Sunset in a City',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/sunset.html";
            },},{id: "art-teary-eye",
          title: 'Teary Eye',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/tearyeyes.html";
            },},{id: "art-starry-night-by-van-gogh",
          title: 'Starry Night by Van Gogh',
          description: "",
          section: "Art",handler: () => {
              window.location.href = "/art/vangogh.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%61%67%72%61%77%61%6C%36%30%39@%67%61%74%65%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/adya-agrawal", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/adya-agrawal", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=NAShfsgAAAAJ&hl=en", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/adya_agrawal4", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
