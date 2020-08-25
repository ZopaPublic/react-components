import React, { FC } from 'react';

import { default as ListComponent, ListProps } from './List/List';
import Item from './Item/Item';

type ListStatic = {
  Item: typeof Item;
};

/**
 * @visibleName List
 */
const List: ListStatic & FC<ListProps> = (props) => <ListComponent {...props} />;

List.Item = Item;

export default List;
