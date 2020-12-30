import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainPageComponent } from "./component1/main-page/main-page.component";
import { AddPostComponent } from "./component2/Addpost/add-post.component";
import { SkeletonAComponent } from "./component3/skeleton-a/skeleton-a.component";
//import { SkeletonBComponent } from "./component4/skeleton-b/skeleton-b.component"

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "main1", component: MainPageComponent },
  { path: "main2", component: AddPostComponent },
  { path: "main3", component: SkeletonAComponent }
  //{path:"main4",component: SkeletonBComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
