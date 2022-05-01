export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '626e88b227fc404fa63561d9',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-ikio6913',
                  apiId: '6263bc4f-199d-4245-81b9-6be5b42dd6d4'
                },
                {
                  buildHookId: '626e88b3276ce250622cfc7b',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-uypk956h',
                  apiId: '88b8ed7b-46ef-4d15-8962-b81de84028ee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gurpreet-legend/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-uypk956h.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
