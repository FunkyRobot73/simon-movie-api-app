import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { MoviesPage } from '../movies/movies.page';

//import { MoviesPage } from '../movies/movies.page';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MoviesPage]
})
export class MovieDetailsPage implements OnInit {
  movie:any = null;
  
  constructor(
    private route: ActivatedRoute, 
    private movieService: MovieService
    ) { }

  ngOnInit() {
    const id:any = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetails(id).subscribe((res) => {
      console.log(res);
      this.movie = res;
    });
  }

  openHomepage() {
    window.open(this.movie.homepage);
  }
}


//This is the spot.

//So is this!!!