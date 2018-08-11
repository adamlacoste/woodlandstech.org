// meetups.js - list of meetups in object format. Each meetup will result in a permanent URI
// being created

const slugify = require('slugify');

const remark = require('remark');
const html = require('remark-html');

const remarker = remark().use(html);

/**
 * Meetup objects look like this:
 * {
 *   date: 'YYYY-MM-DD',
 *   time: string
 *   title: string
 *   location: string  
 *   description: string
 *   map?: URL (generated from google maps -> share -> embed iframe src)
 *   rsvp?: { link: string, href: string } 
 * }
 * 
 * Map 
 */

// Add by ascending date (most recent meetups at the top)
const meetups = [
  {
    date: '2018-08-14',
    time: '6:00 to 8:00 PM',
    title: 'Intro to GraphQL: A new way to build APIs',
    location: 'BubbleUp LLC',
    map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.4164388564677!2d-95.46816768485667!3d30.16809598183751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8647343cc2fac92b%3A0x3d0a2df8bad6a42c!2sBubbleUp+Digital+Marketing+Agency!5e0!3m2!1sen!2sus!4v1530317673925`,
    description: `
GraphQL represents a new language created by Facebook to simplify how distributed systems share information. This new way of building an API is being used in production at Facebook since 2013 and is currently used by Twitter, Github, Pinterest, Yelp and more. This talk will cover the basics of GraphQL, review some of the advantages and disadvantages, create an example graphql schema, and then review AWS appsync as a potential graphql provider with an example application.`,

    rsvp: {
      link: `https://www.meetup.com/Woodlands-Area-Software-Enthusiasts/events/252944067/`,
      text: 'RSVP on Meetup',
    }
  },
  {
    date: '2018-07-19',
    time: '6:00 to 8:00 PM',
    title: 'React: Basics and Lazy Loading with create-react-app',
    location: 'BubbleUp LLC',
    map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.4164388564677!2d-95.46816768485667!3d30.16809598183751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8647343cc2fac92b%3A0x3d0a2df8bad6a42c!2sBubbleUp+Digital+Marketing+Agency!5e0!3m2!1sen!2sus!4v1530317673925`,
    description: `

Want to know what this React thing was about? We'll "build" a basic app using react-create-app and talk concepts.

Then for the brave I'll add lazy loading to it using react-router 4 and web pack2 because these nice peeps at serverless wrote a tutorial and I was able to use it on an existing project. So thanks to them!

Info Links:

React Create App - https://github.com/facebook/create-react-app

Lazy Loading / Code Splitting Tutorial - https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html

So bring your laptop and I'll see y'all there!`,
    rsvp: {
      link: `https://www.meetup.com/Woodlands-Area-Software-Enthusiasts/events/251786516/`,
      text: 'RSVP on Meetup',
    }
  },
  {
    date: '2018-07-12',
    time: '5:30 to 7:30 PM',
    title: 'Software and Drinks',
    location: 'Black Walnut Cafe',
    map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.100276572834!2d-95.48173328498861!3d30.177129381834195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8647312c9c7805bf%3A0xc9eee5be2d30fd5c!2s9000+New+Trails+Dr%2C+The+Woodlands%2C+TX+77381!5e0!3m2!1sen!2sus!4v1531272810235`,
    description: `Like to code or talk tech? Enjoy adult beverages? Come out and hang, talk shop, and get away from the computer screen.
    
Join other software enthusiasts at a [probably] fine Woodlands area drinking establishment. Post idea locations in the RSVP.
    
See y'all there!`,
    rsvp: {
      link: `https://www.meetup.com/Woodlands-Area-Software-Enthusiasts/events/251793110/`,
      text: "RSVP on Meetup",
    }
  },
];


const getMeetupUrl = (m) => {
  const slug = slugify(`${m.date} ${m.title}`, {
    replacement: '-',
    remove: /[$*_+~.()'"!:@]/g,
  });

  return `/meetups/${slug}`;
}

/**
 * Post-processing: determine permalink URL, create HTML descriptions using remark etc
 * 
 */

meetups.forEach(m => {
  const { description } = m;

  m.url = getMeetupUrl(m);

  let shortDescription = description.slice(0, 250).trim();
  if(description.length >= 250) {
    shortDescription += '...';
  }

  m.shortDescription = shortDescription;
  m.shortHtmlDescription = remarker.processSync(shortDescription).contents;
  m.htmlDescription = remarker.processSync(description).contents;
})

module.exports = { meetups };
