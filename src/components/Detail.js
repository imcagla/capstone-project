import React from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleMovie, fetchSingleMovieCredits } from '../api';
import { Container } from '../styledComponents/CardContainer';
import { MainContainer } from '../styledComponents/MainContainer';
import { DetailGrid, CastCard, CastCardDescription } from '../styledComponents/StyledDetailPage';

function Detail() {
  const { movieId } = useParams()
  const { theme } = useSelector(state => state)
  const themeName = theme ? "light" : "dark"


  const movieQuery = useQuery(["movie", movieId], () => fetchSingleMovie(movieId), { retry: false })
  console.log("movie:::", movieQuery)
  const movieCreditsQuery = useQuery(["moviecredits", movieId], () => fetchSingleMovieCredits(movieId), { retry: false })
  console.log("movie:::", movieCreditsQuery)
  const movieData = movieQuery?.data?.data
  const movieCastData = movieCreditsQuery?.data?.data?.cast

  return <MainContainer>
    <DetailGrid>
      <img src={movieData?.poster_path === null ? `https://tigres.com.tr/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png` : `https://image.tmdb.org/t/p/w300${movieData?.poster_path}`} alt="" />
      <div className='detail-description'>
        <h2>
          {movieData?.title}
        </h2>
        <h4>
          {movieData?.release_date}
        </h4>
        <h6>
          {movieData?.genres.map(item => <span>{item.name} </span>)}
        </h6>
        <p>
          {movieData?.overview}
        </p>
      </div>

      <Container theme={themeName}>
        {
          movieCastData?.map(item => <CastCard> <img width={"100"} height={"150"} src={item.profile_path === null ? `https://tigres.com.tr/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png` : `https://image.tmdb.org/t/p/w200${item?.profile_path}`} alt="" />
            <CastCardDescription>
              <div>{item.name}</div>
              <div>{item.character}</div>
            </CastCardDescription>

          </CastCard>)
        }
      </Container>

    </DetailGrid>
  </MainContainer>;
}

export default Detail;
