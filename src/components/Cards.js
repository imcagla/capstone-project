import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardDescription, Card } from '../styledComponents/CardContainer';
import { FavoriteIcon, WatchedIcon } from "../styledComponents/Icons"
import { addSeenList, addFavList } from "../reduxStore/user"
import { StyledLink } from "../styledComponents/Link"


function Cards(props) {
    const dispatch = useDispatch()
    const { theme, user, genres } = useSelector((state) => state)
    const themeName = theme ? "light" : "dark";

    const favoritesList = user?.favoritesList?.favoritesFilms
    const seenList = user?.seenList?.seenFilms



    return <>
        {
            props.data?.map(item => <Card theme={themeName} className='position-relative'>
                <img height={props.height} width={props.width} style={{ objectFit: "cover" }}
                    src={item.poster_path === null ? `https://tigres.com.tr/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png` : `https://image.tmdb.org/t/p/w200${item?.poster_path}`}
                    className='rounded-3' alt="" />
                <CardDescription>
                    <div className="row">
                        <ul className='list-unstyled fw-bold'>
                            <StyledLink to={`/movies/${item.id}`}><li className='fs-6'>{item.title} - {item.release_date.substring(0, 4)}</li></StyledLink>
                            <li className='text-muted small'>
                                {
                                    item.genre_ids.map(item =>
                                        genres
                                            ?.filter(genre => item === (genre.id)).map(item => <span>{item.name} </span>))
                                }
                            </li>
                        </ul>
                        {
                            user.userLogin && <div>
                            <FavoriteIcon isFav={favoritesList?.includes(item.id)}
                                onClick={() => dispatch(addFavList(item.id))} />
                            <WatchedIcon isSeen={seenList?.includes(item.id)}
                                onClick={() => dispatch(addSeenList(item.id))} />
                        </div>
                        }
                        
                    </div>
                </CardDescription>
            </Card>
            )
        }
    </>;
}

export default Cards;
