import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import currencyUsd from '@iconify/icons-mdi/currency-usd';
import reportIcon from '@iconify/icons-carbon/report';
// import fileTextFill from '@iconify/icons-eva/file-text-fill';
// import lockFill from '@iconify/icons-eva/lock-fill';
// import personAddFill from '@iconify/icons-eva/person-add-fill';
// import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/app/dashboard',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'report',
    path: '/app/report',
    icon: getIcon(reportIcon)
  },
  {
    title: 'product',
    path: '/app/products',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'sales',
    path: '/app/sales',
    icon: getIcon(currencyUsd)
  },
  {
    title: 'user',
    path: '/app/user',
    icon: getIcon(peopleFill)
  }
];

export default sidebarConfig;
