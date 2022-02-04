import React from 'react';
import { useSelector } from 'react-redux';
import {TableStyled} from "../styledComponents/ProfileStyle"
import SeenFavIcons from './SeenFavIcons';


function Table(props) {
    const {theme} = useSelector(state => state)

  return <>
      <TableStyled theme={theme}>
          <tr>
            <th>Film ID</th>
            <th>Genre</th>
            <th>Title</th>
            <th>Fav/Seen</th>
          </tr>
          {
            props?.data?.map(item => <tr key="">
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.genres}</td>
              <td><SeenFavIcons loc={"table"} movieId={item.id} /></td>
            </tr>)
          }
        </TableStyled>
  </>;
}

export default Table;
