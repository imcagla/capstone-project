import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardDescription, Card, Container } from '../styledComponents/CardContainer';

function CardSlideContainer(props) {
  const dispatch = useDispatch()
  const { theme, search } = useSelector((state) => state)
  const themeName = theme ? "light" : "dark";


  return <Container theme={themeName}>
  {
    props.data?.map(item => <Card theme={themeName} className='position-relative'>
      <img width={"150"} 
      src={`https://image.tmdb.org/t/p/w200${item?.poster_path}`} 
      className='rounded-3' alt="" />
      <CardDescription>
        <p>{item.title}</p>
      </CardDescription>
    </Card>
    )
  }
</Container>;
}

export default CardSlideContainer;
