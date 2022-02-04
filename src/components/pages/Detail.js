import React from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSimilarMovies, fetchSingleMovie, fetchSingleMovieCredits, fetchReviews } from '../../api';
import {  CardImg } from '../../styledComponents/CardContainer';
import Cards from '../Cards';
import { Container, MainContainer } from '../../styledComponents/BaseStyleComponents';
import { DetailGrid, CastCard, CastCardDescription } from '../../styledComponents/DetailStyle';



function Detail() {
  const { movieId } = useParams()
  const { theme } = useSelector(state => state)

  const reviewsQuery = useQuery(["reviews", movieId], () => fetchReviews(movieId), { retry: false, select: state => state?.data })

  const similarMoviesQuery = useQuery(["similarmovies", movieId], () => fetchSimilarMovies(movieId), { retry: false, select: state => state?.data })
  const movieQuery = useQuery(["movie", movieId], () => fetchSingleMovie(movieId), { retry: false, select: state => state?.data })

  const movieCreditsQuery = useQuery(["moviecredits", movieId], () => fetchSingleMovieCredits(movieId), { retry: false, select: state => state?.data })
  
  const movieData = movieQuery?.data
  const similarMoviesData = similarMoviesQuery?.data
  const reviewsData = reviewsQuery?.data
  
  const movieCastData = movieCreditsQuery?.data?.cast
  const movieCrewData = movieCreditsQuery?.data?.crew
  const crewList = ["director", "producer"]


  return <MainContainer>
    <DetailGrid theme={theme}>
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
        <ul>
          {
            movieCrewData?.filter(item => crewList.includes(item.job.toLowerCase())).map(item => <li> <strong>{item.job}</strong>: {item.name}</li>).slice(0,3)
          }
        </ul>
      </div>

      <div className='review-part'>
        <h5>Reviews:</h5>
        <p>
            <span>{reviewsData?.results[0]?.author[0].toUpperCase()}</span>
          {
            reviewsData?.results[0]?.author
          }          
        </p>
        <p>
          {
            reviewsData?.results[0]?.content?.slice(0, 500)
          }..
        </p>
      </div>
      <div>
        <h5> Cast Members:</h5>
        <Container theme={theme}>

          {
            movieCastData?.map(item => <CastCard> <CardImg width={"100"} height={"150"} src={item.profile_path === null ? `https://tigres.com.tr/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png` : `https://image.tmdb.org/t/p/w200${item?.profile_path}`} alt="" />
              <CastCardDescription>
                <div>{item.name}</div>
                <div className='char-name'>{item.character}</div>
              </CastCardDescription>
            </CastCard>)
          }
        </Container>
      </div>
    </DetailGrid>

    <div>
      <h5>Similar Movies:</h5>
      <Container theme={theme}>
        <Cards height={"230"} width={"150"} data={similarMoviesData?.results} />
      </Container>
    </div>
  </MainContainer>;
}

export default Detail;
