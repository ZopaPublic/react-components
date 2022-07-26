import React from 'react';

import { default as ListComponent, ListProps } from './List/List';
import Item from './Item/Item';

/**
 * @visibleName List
 */
const List = (props: ListProps) => <ListComponent {...props} />;

export default Object.assign(List, {
  Item,
});
