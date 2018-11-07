import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { KytheService } from './kythe.service';

@NgModule({
  providers: [KytheService],
  imports: [HttpClientModule]
})
export class KytheModule {}
