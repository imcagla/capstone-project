import React from 'react';
import { useSelector } from 'react-redux';
import { CardDescription, Card, CardImg } from '../styledComponents/CardContainer';
import { StyledTitleLink } from "../styledComponents/Link"
import SeenFavIcons from './SeenFavIcons';


function Cards(props) {
    const { theme, genres } = useSelector((state) => state)
    const themeName = theme ? "light" : "dark";
    



    return <>
        {
            props.data?.map(item => <Card key={item.id} theme={themeName}>
                <CardImg height={props.height} width={props.width} style={{ objectFit: "cover" }}
                    src={item.poster_path === null ? `https://tigres.com.tr/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png` : `https://image.tmdb.org/t/p/w200${item?.poster_path}`} alt="" />
                <CardDescription>
                    <div className="row">
                        <ul className='list-unstyled fw-bold'>
                            <StyledTitleLink theme={themeName} to={`/movies/${item.id}`}><li className='fs-6'>{item.original_title} - {item.release_date?.substring(0, 4)}</li></StyledTitleLink>
                            <li className='text-muted small'>
                                {
                                    item.genre_ids.map(item =>
                                        genres
                                            ?.filter(genre => item === (genre.id)).map(item => <span>{item.name} </span>))
                                }
                            </li>
                        </ul>
                        <SeenFavIcons movieId={item.id} />
                        
                    </div>
                </CardDescription>
            </Card>
            )
        }
    </>;
}

export default Cards;
