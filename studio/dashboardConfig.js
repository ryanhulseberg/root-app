export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5de94da486b32801801bf1e3',
                  title: 'Sanity Studio',
                  name: 'root-app-studio',
                  apiId: '0379f55e-6cff-438c-9afe-72c862ec1b5f'
                },
                {
                  buildHookId: '5de94da498708007284b9da4',
                  title: 'Portfolio Website',
                  name: 'root-app',
                  apiId: 'b9e83553-5585-4dfb-a58c-0eb6c4d8d72d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryanhulseberg/root-app',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://root-app.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
