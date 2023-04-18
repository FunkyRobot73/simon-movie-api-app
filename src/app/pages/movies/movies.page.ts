import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, LoadingController } from '@ionic/angular';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MoviesPage implements OnInit {
  movies:any = [];
  currentPage = 1;

  constructor(private movieService: MovieService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies() {
    const loading = await this.loadingCtrl.create({
      message: "Loading...",
      spinner: "bubbles",
    });
    await loading.present();


    this.movieService.getTopRatedMovies(this.currentPage).subscribe(res => {
      loading.dismiss();
      this.movies = [...this.movies, ...res.results];
      console.log(res);
    })
  }

}
