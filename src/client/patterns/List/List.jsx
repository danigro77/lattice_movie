import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

const ListColumn = ({
  text,
  isHeader,
  width,
  alignment
}) => (
  <div
    style={{ width, textAlign: alignment }}
  >
    { text }
  </div>
);

ListColumn.defaultProps = {
  text: '',
  isHeader: false,
  width: 'auto',
  alignment: 'left',
};

ListColumn.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.string,
  isHeader: PropTypes.bool,
  alignment: PropTypes.oneOf(['left', 'right', 'center'])
};

const ListHeader = ({
  columns
}) => (
  <li className='list-header'>
    {
      columns.map((row) => {
        return (
          <ListColumn
            text={row.header}
            key={row.header}
            isHeader
            width={row.width}
            alignment={row.alignment}
          />
        );
      })
    }
  </li>
);

ListHeader.defaultProps = {
  columns: [],
};

ListHeader.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    header: PropTypes.string,
    fieldName: PropTypes.string,
  })),
};

const ListItem = ({
  item,
  columns,
  key,
}) => (
  <li key={key}>
    {
      columns.map(row => (
        <ListColumn
          text={item[row.fieldName]}
          width={row.width}
          key={item[row.fieldName]}
          alignment={row.alignment}
        />
      ))
    }
  </li>
);

ListItem.defaultProps = {
  key: 'id',
  columns: [],
  item: {},
};

ListItem.propTypes = {
  key: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.shape({
    header: PropTypes.string,
    fieldName: PropTypes.string,
    width: PropTypes.string,
  })),
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object,
};

const List = ({
  data,
  listConfig,
}) => (
  <ul className="list">
    <ListHeader columns={listConfig.columns} />
    {
      data && data.map((item) => {
        if (listConfig.rowClickTo) {
          return (
            <Link to={listConfig.rowClickTo(item.id)} key={item[listConfig.keyField]}>
              <ListItem

                item={item}
                columns={listConfig.columns}
              />
            </Link>
          );
        }
        return (
          <ListItem
            key={item[listConfig.keyField]}
            item={item}
            columns={listConfig.columns}
          />
        );
      })
    }
  </ul>
);

List.defaultProps = {
  data: [],
  listConfig: {},
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  listConfig: PropTypes.shape({
    keyField: PropTypes.string,
    rowClickTo: PropTypes.func,
    columns: PropTypes.arrayOf(PropTypes.shape({
      header: PropTypes.string,
      fieldName: PropTypes.string,
    }))
  }),
};

export default List;
