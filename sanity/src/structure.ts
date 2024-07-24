import {group, singleton} from './utils'
import type {StructureResolver} from 'sanity/structure'

import {VscServerProcess} from 'react-icons/vsc'
import {BsDatabaseAdd} from 'react-icons/bs'

const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      singleton(S, 'Site', 'site').icon(VscServerProcess),
      S.documentTypeListItem('page').title('Pages'),
      S.divider(),

      S.documentTypeListItem('navigation'),
      S.documentTypeListItem('clinics'),
      S.documentTypeListItem('service'),
      S.documentTypeListItem('announcement').title('Announcements'),
      S.documentTypeListItem('redirect').title('Redirects'),
      S.divider(),

      S.documentTypeListItem('blog.post').title('Blog posts'),
      S.documentTypeListItem('blog.category').title('Blog categories'),
      S.documentTypeListItem('cities').title('Cities List'),
      S.divider(),

      group(S, 'Miscellaneous', [
        S.documentTypeListItem('logo').title('Logos'),
        S.documentTypeListItem('testimonial').title('Testimonials'),
        S.documentTypeListItem('colorTheme').title('Color'),
        S.documentTypeListItem('location').title('Location'),
        S.documentTypeListItem('service').title('Service'),
        S.documentTypeListItem('facility').title('Facility'),
      ]).icon(BsDatabaseAdd),
    ])

export default structure
