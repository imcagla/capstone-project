import React from 'react';
import { useSelector } from 'react-redux';
import { CardDescription, Card, CardImg } from '../styledComponents/CardContainer';
import { StyledTitleLink } from "../styledComponents/Link"
import SeenFavIcons from './SeenFavIcons';


function Cards(props) {
    const { theme, genres } = useSelector((state) => state)
    



    return <>
        {
            props.data?.map(item => <Card key={item.id} theme={theme}>
                <CardImg height={props.height} width={props.width} 
                    src={item.poster_path === null ? `https://tigres.com.tr/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png` : `https://image.tmdb.org/t/p/w200${item?.poster_path}`} alt="" />
                <CardDescription>
                    
                        <ul>
                            <StyledTitleLink theme={theme} to={`/movies/${item.id}`}><li>{item.original_title} - {item.release_date?.substring(0, 4)}</li></StyledTitleLink>
                            <li>
                                {
                                    item.genre_ids.map(item =>
                                        genres
                                            ?.filter(genre => item === (genre.id)).map(item => item.name)).join(", ")
                                            
                                }
                            </li>
                        </ul>
                        <SeenFavIcons movieId={item.id} />
                </CardDescription>
            </Card>
            )
        }
    </>;
}

export default Cards;
