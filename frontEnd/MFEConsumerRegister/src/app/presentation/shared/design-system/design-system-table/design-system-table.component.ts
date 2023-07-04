import { Component, Input, OnInit } from '@angular/core';
import { tableHeadAndBodyModel } from '../../models/table-head-and-body.model';

@Component({
  selector: 'app-design-system-table',
  templateUrl: './design-system-table.component.html',
  styleUrls: ['./design-system-table.component.scss']
})
export class DesignSystemTableComponent implements OnInit{

  public slicedPageListItems = [];

  @Input()
  public tableHeadAndBody: tableHeadAndBodyModel = new tableHeadAndBodyModel();

  @Input()
  public pagination: boolean = false;
  
  @Input()
  public numbersOfRegistersPerPage: number = 15;
  public currentlyShowedPage: number = 1;
  public arrayOfPageNumbers: Array<number> = [];
  public numbersOfPages: number = 1;

  public tableBodyContent: Array<Array<string>> = [];

  public tableBodyPagesContent: Array<Array<Array<string>>> = [];

  ngOnInit(): void {
    this.setTableBodyContent(this.tableHeadAndBody.body);
    if(this.pagination) {
      this.setNumbersOfPages();
      this.makeArrayOfFooterPageNumbers();
      this.setCurrentPageItemsData();
    }
  }

  private setTableBodyContent(tableBodyContent: Array<Array<string>>) {
    this.tableBodyContent = tableBodyContent;
  }

  
  private makeArrayOfFooterPageNumbers() {
    for(let i = 0; i < this.numbersOfPages; i++) {
      this.arrayOfPageNumbers.push(i + 1);
    }
  }

  private setNumbersOfPages() {    
   this.numbersOfPages = Math.ceil(this.tableBodyContent.length / this.numbersOfRegistersPerPage);
  }

  public changeCurrentlyShowedPage(currentPage: number) {
    if(currentPage > 0 && currentPage <= this.numbersOfPages)
      this.currentlyShowedPage = currentPage;    
  }

  public setCurrentPageItemsData() {
    const initialArraySlicePageItems = ((this.currentlyShowedPage - 1) * this.numbersOfRegistersPerPage);
    const endArraySlicePageItems = initialArraySlicePageItems+ this.numbersOfRegistersPerPage;
    this.slicedPageListItems = this.tableBodyContent.slice(initialArraySlicePageItems,  endArraySlicePageItems) as [];
  }

}
