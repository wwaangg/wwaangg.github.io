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
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-admission",
          title: "Admission",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/admission/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-one-paper-is-accepted-in-cvpr-2023-sparkles-smile",
          title: 'One paper is accepted in CVPR 2023 :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-in-acm-mm-2023-sparkles-smile",
          title: 'One paper is accepted in ACM MM 2023 :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-two-papers-are-accepted-in-aaai-2024-sparkles-smile",
          title: 'Two papers are accepted in AAAI 2024 :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-ieee-t-ifs-sparkles-smile",
          title: 'One paper is accepted by IEEE T-IFS :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-ieee-t-mm-sparkles-smile",
          title: 'One paper is accepted by IEEE T-MM :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-acm-tomm-sparkles-smile",
          title: 'One paper is accepted by ACM TOMM :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-in-eccv-2024-sparkles-smile",
          title: 'One paper is accepted in ECCV 2024 :sparkles: :smile:',
          description: "",
          section: "News",},{
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
