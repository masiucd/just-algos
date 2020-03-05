-- select all series that don't have any review

select *
from series s
  left JOIN reviews r
  on s.id = r.series_id;


select s.title, s.released_year, s.genre, r.rating
from series s
  left JOIN reviews r
  on s.id = r.series_id
;


select s.title, s.released_year, s.genre, IFNULL(r.rating,"NO RATING")
from series s
  left JOIN reviews r
  on s.id = r.series_id
WHERE r.rating is null;


SELECT title AS unreviewed_series
FROM series
  LEFT JOIN reviews
  ON series.id = reviews.series_id
WHERE rating IS NULL;