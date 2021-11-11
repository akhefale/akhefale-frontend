import { operationStore } from '@urql/svelte';

export const asaPiliQuery = operationStore(`
  query {
    asaPilis {
      id
      Name
      Symbol {
        url
      }
    }
  }
`);

export const projectsQuery = operationStore(`
  query {
    projects {
      id
      title
      kicker
      symbol {
        url
      }
      description
    }
  }
`);

export const articlesQuery = operationStore(`
  query {
    words {
      id
      title
      content
      kicker
    }
  }
`);

export const articleQuery = `
  query ($id: ID!) {
    word(id: $id) {
      id
      title
      content
      kicker
    }
  }
`
