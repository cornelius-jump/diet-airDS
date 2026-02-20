import {StructureResolver} from 'sanity/structure'
import {DashboardIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Diet AirDS')
    .items([
      // Dashboard
      S.listItem()
        .title('Dashboard')
        .icon(DashboardIcon)
        .child(
          S.component()
            .component(() => import('../components/Dashboard').then((m) => m.Dashboard))
            .title('Dashboard')
        ),

      S.divider(),

      // Default team document list
      ...S.documentTypeListItems().filter((item) => item.getId() === 'team'),
    ])
