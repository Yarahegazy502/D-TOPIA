import { ConfirmationService, MessageService } from 'primeng/api';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { products } from './product';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-data-table.component.html',
  styleUrls: ['./dynamic-data-table.component.scss'],

})
export class DynamicDataTableComponent implements OnInit {
   //show and hide components from parent component
  @Input() tableHeader: string='';
  @Input() showSearch: boolean = false;
  @Input() searchPlaceholder: string='Search...';
  @Input() showAddButton: boolean = false;
  @Input() AddButtonLink: string='';

  @Input() tableHeaders: any[] = [];
  @Input() tableData: any=[];
  @Input() totalItems: number=0;

  @Input() showSelection: boolean = false;

  @Input() showActions: boolean = false;
  @Input() showDetails: boolean = false;
  @Input() showDelete: boolean = false;
  @Input() showEdit: boolean = false;
  @Input() editLink: string = '';

  @Input() showImage: boolean = false;
  @Input() imageShape: string = 'circle';
  @Input() imageSize: string = 'xlarge';

  @Input() showStatus: boolean = false;
  @Input() showReviews: boolean = false;

  @Input() isLoading: boolean = false;

  @Input() pageNumber:number=0;
  @Input() pages:number=0;
  @Input() results:number=0;
  @Input() paginatorRows:number = 0;

  @Input() notFoundImage:string ='';
  @Input() notFoundText:string ='No Records Found';
  @Input() notFoundBtn:string ='Add Record';

  // send flag to the parent componenet to open dialogs and send data
  @Output() searchHandler: EventEmitter<any> = new EventEmitter();

  @Output() selectionHandler: EventEmitter<any> = new EventEmitter();

  @Output() detailsHandler: EventEmitter<any> = new EventEmitter();
  @Output() editHandler: EventEmitter<any> = new EventEmitter();
  @Output() deleteHandler: EventEmitter<any> = new EventEmitter();


  tableDataCount: number=0;
  selectedItems: any=[];
  selectedItemsCount: number=0;


  productDialog: boolean = false;
  submitted: boolean = false;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
    ) { }

  ngOnInit():void {
  }

  selectionHandlerEmit(): void {
    this.selectedItemsCount = this.selectedItems?.length;
    this.selectionHandler.emit(this.selectedItems);
  }

  detailsHandlerEmit(item:any): void {
    this.detailsHandler.emit({id:item?.id});
  }
  editHandlerEmit(item:any): void {
    this.editHandler.emit(item?.id);
  }
  deleteHandlerEmit(item:any): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteHandler.emit(item);
      }
    });
  }

  searchHandlerEmit(event:any):void{
    this.searchHandler.emit(event)
  }

  deleteSelectedProducts():void  {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.tableData = this.tableData.filter((val: any) => !this.selectedItems.includes(val));
        this.selectedItems = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
    });
  }

  paginate(event:any) {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
    console.log(event);

}
}

