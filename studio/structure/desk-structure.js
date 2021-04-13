import S from '@sanity/desk-tool/structure-builder';
import {
  HiOutlineCog,
  HiOutlineColorSwatch,
  HiOutlineInformationCircle,
  HiOutlineLink,
  HiOutlineShare,
  HiOutlineUsers,
} from 'react-icons/hi';

const hiddenDocTypes = (listItem) =>
  ![
    'author',
    'authors',
    'category',
    'metadata',
    'navLink',
    'navLinks',
    'socialLink',
    'socialLinks',
    'theme',
    'themeDmColor',
    'themeLmColor',
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      // Spread all documents that aren't hidden
      ...S.documentTypeListItems().filter((docTypes) =>
        hiddenDocTypes(docTypes)
      ),

      // Add a visual divider
      S.divider(),

      // Site settings
      S.listItem()
        .title('Site Settings')
        .icon(HiOutlineCog)
        .child(
          S.list()
            .title('Site Settings')
            .items([
              // Metadata document
              S.listItem()
                .title('Metadata')
                .icon(HiOutlineInformationCircle)
                .child(
                  S.document()
                    .title('Metadata')
                    .schemaType('metadata')
                    .documentId('metadata')
                ),

              // Authors document
              S.listItem()
                .title('Authors')
                .icon(HiOutlineUsers)
                .child(
                  S.document()
                    .title('Authors')
                    .schemaType('authors')
                    .documentId('authors')
                ),

              // Navigation document
              S.listItem()
                .title('Navigation Links')
                .icon(HiOutlineLink)
                .child(
                  S.document()
                    .title('Navigation Links')
                    .schemaType('navLinks')
                    .documentId('navLinks')
                ),

              // Social Links document
              S.listItem()
                .title('Social Links')
                .icon(HiOutlineShare)
                .child(
                  S.document()
                    .title('Social Links')
                    .schemaType('socialLinks')
                    .documentId('socialLinks')
                ),

              // Theme Settings document
              S.listItem()
                .title('Theme Settings')
                .icon(HiOutlineColorSwatch)
                .child(
                  S.document()
                    .schemaType('theme')
                    .documentId('theme')
                    .title('Theme Settings')
                ),
            ])
        ),
    ]);
