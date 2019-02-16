// api.js - backend API

const { request, GraphQLClient } = require('graphql-request');

/**
 * Can develop against a local instance of the API by setting REACT_APP_API_URL
 */
const API_URL = process.env.REACT_APP_API_URL || 'https://us-central1-woodlandstech-invite.cloudfunctions.net/woodlandstech-backend/graphql';

const client = new GraphQLClient(API_URL);

// No-op GQL tag to get VSCode syntax highlighting
const gql = (strings) => strings.join('');

/**
 * Retrieve a list of all past and future meetup events
 */
const meetupEvents = () => client.request(gql`query getMeetupEvents {
  meetupEvents {
    description, name, yesRsvpCount, status, time
  }
}`);

module.exports = {
  client,
  gql,
  meetupEvents
}