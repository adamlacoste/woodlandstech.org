// meetups.js - list of meetups in object format. Each meetup will result in a permanent URI
// being created

const slugify = require('slugify');

/**
 * Meetup objects look like this:
 * {
 *   date: 'YYYY-MM-DD',
 *   time: string
 *   title: string
 *   location: string  
 *   description: string
 *   map?: URL (generated from google maps -> share -> embed iframe src)
 * }
 * 
 * Map 
 */

// Add by ascending date (most recent meetups at the top)
module.exports = {
  meetups: [
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
  
  So bring your laptop and I'll see y'all there!`
    },
    {
      date: '2018-07-12',
      time: '5:30 to 7:30 PM',
      title: 'Software and Drinks',
      location: 'TBD',
      description: `Like to code or talk tech? Enjoy adult beverages? Come out and hang, talk shop, and get away from the computer screen.
      
Join other software enthusiasts at a [probably] fine Woodlands area drinking establishment. Post idea locations in the RSVP.
      
See y'all there!`,
      rsvp: {
        link: `https://www.meetup.com/Woodlands-Area-Software-Enthusiasts/events/251793110/`,
        text: "RSVP on Meetup",
      }
    },
  ],

  getMeetupUrl: (m) => {
    const slug = slugify(`${m.date} ${m.title}`, {
      replacement: '-',
      remove: /[$*_+~.()'"!:@]/g,
    });

    return `/meetups/${slug}`;
  },
}
