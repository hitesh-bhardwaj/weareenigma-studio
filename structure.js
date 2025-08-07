export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog Content')
            .items([
              S.documentTypeListItem('post').title('Posts'),
              S.documentTypeListItem('category').title('Categories'),
              S.documentTypeListItem('author').title('Authors'),
            ])
        ),

      S.listItem()
        .title('Careers')
        .child(
          S.list()
            .title('Careers')
            .items([
              S.documentTypeListItem('job').title('All Jobs'),
              S.documentTypeListItem('careersCategory').title('Job Categories'),
            ])
        ),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            'post',
            'category',
            'author',
            'job',
            'careersCategory'
          ].includes(item.getId())
      )
    ])

