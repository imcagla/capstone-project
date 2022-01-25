import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres } from '../api';
import { CardDescription, Card } from '../styledComponents/CardContainer';
import { FavoriteIcon, WatchedIcon } from "../styledComponents/Icons"
import { addFavoritesList, addSeenList } from '../reduxStore/movies';
import { StyledLink } from "../styledComponents/Link"


function CardSlideContainer(props) {
    const dispatch = useDispatch()
    const { theme, search } = useSelector((state) => state)
    const themeName = theme ? "light" : "dark";
    const [genresList, setGenresList] = useState([])

    const genresQuery = useQuery("genres", () => fetchGenres, { reply: false })
    console.log("query:::", genresQuery)
    

    // let genresList = []
    genresQuery?.data?.then((val) => 
        // val?.data?.genres?.map((item, index) => genresList[index] = item)
        setGenresList(val?.data?.genres)
    )
    console.log("genres:::", genresList)

    return <>
        {
            props.data?.map(item => <Card theme={themeName} className='position-relative'>
                <img height={"230"} width={"150"} style={{objectFit: "cover"}}
                    src={item.poster_path === null ? `https://tigres.com.tr/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png` : `https://image.tmdb.org/t/p/w200${item?.poster_path}`}
                    className='rounded-3' alt="" />
                <CardDescription>
                    <div className="row">
                        <ul className='list-unstyled fw-bold'>
                            <StyledLink to={`movies/${item.id}`}><li className='fs-6'>{item.title} - {item.release_date.substring(0,4)}</li></StyledLink>
                            <li className='text-muted small'>
                                {
                                    item.genre_ids.map(item => 
                                        genresList
                                        ?.filter(genre => item === (genre.id)).map(item => <span>{item.name} </span>)).slice(0, 2) 
                                }...
                            </li>
                        </ul>
                        <div>
                            <FavoriteIcon onClick={() => dispatch(addFavoritesList(item.id))} />
                            <WatchedIcon onClick={() => dispatch(addSeenList(item.id))} />
                        </div>
                    </div>
                </CardDescription>
            </Card>
            )
        }
    </>;
}

export default CardSlideContainer;
