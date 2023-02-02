import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Paginator } from 'primeng/paginator';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  //show and hide components from parent component
  @Input() tableHeaders: any[] = [];
  @Input() tableData: any;
  @Input() showActionCol: boolean = false;
  @Input() showEditAction: boolean = false;
  @Input() showDetailsAction: boolean = false;
  @Input() showDeleteAction: boolean = false;
  @Input() showSettingAction: boolean = false;
  @Input() loadingIndicator: boolean = false;
  @Input() Message: string = 'Loading...';
  @Input() totalItems: any;
  @Input() page: any;
  @Input() image: any;
  @Input() showImage: boolean = false;
  @Input() imageHeader?: string
  @Input() showColor: boolean = false
  @Input() checkValues: boolean = false
  @Input() viewStatus: boolean = false
  @Input() hidePagintation: boolean = true
  @Input() selectedItems: any[] = [];






  // send flag to the parent componenet to open dialogs and send data
  @Output() isEditBtnClicked: EventEmitter<object> = new EventEmitter();
  @Output() isDeleteBtnClicked: EventEmitter<object> = new EventEmitter();
  @Output() isBulkDeleteBtnClicked: EventEmitter<object> = new EventEmitter();
  @Output() isDetailsBtnClicked: EventEmitter<object> = new EventEmitter();
  @Output() isSettingBtnClicked: EventEmitter<object> = new EventEmitter();
  @Output() sendTablePageSize: EventEmitter<object> = new EventEmitter();
  @Output() handleExportFiles: EventEmitter<any> = new EventEmitter();
  @Output() handleCheckedValues: EventEmitter<any> = new EventEmitter();
  @Output() handleChangeStatus: EventEmitter<any> = new EventEmitter();
  @Output() isBulkExportBtnClicked: EventEmitter<object> = new EventEmitter();


  @ViewChildren('menu')
  menu!: QueryList<any>;

  @ViewChild('dataTable') content: any;

  @ViewChild('p', { static: false })
  paginator!: Paginator;

  tableValues: any[] = [];
  fileName = 'ExcelSheet.xlsx';
  item: any
  statusList: any[] = []
  statusName: string = 'New'
  listItems: any[] = []
  selectedMenu: any = ''
  deletedArray: any[] = []


  constructor(
    private confirmationService: ConfirmationService) {

  }
  changeStatus(statusNumber: number, id: number) {
    let statusBody = {
      statusId: statusNumber,
      productId: id
    }
    this.handleChangeStatus.emit(statusBody)
  }

  deleteSelected() {
    this.selectedItems
    this.isBulkDeleteBtnClicked.emit(this.selectedItems);
  }
  exportedSelected() {
    this.selectedItems
    this.isBulkExportBtnClicked.emit(this.selectedItems);
  }

  ngOnInit(): void {

  }

  exportexcel(): void {
    let exportData = {
      data: this.tableData,
      fileName: 'Table Data',
    };
    this.handleExportFiles.emit(exportData);
  }

  edit(data: any) {
    let editEventData = {
      editFlag: true,
      data,
    };
    this.isEditBtnClicked.emit(data);
  }

  viewDetails(data: any) {
    let detailsEventData = {
      detailsFlag: true,
      data,
    };
    this.isDetailsBtnClicked.emit(detailsEventData);
  }

  Delete(data: any) {
    let deleteEventData = {
      deleteFlag: true,
      id: data.id,
    };
    this.isDeleteBtnClicked.emit(deleteEventData);
  }

  setting(data: any) {
    this.isSettingBtnClicked.emit(data);
  }

  setMyPagination(event: any) {
    let currentPage = event.first / event.rows + 1;
    let paginator = {
      page: currentPage,
      size: event.rows,
    };
    this.sendTablePageSize.emit(paginator);
  }

  check(data: any) {
    this.handleCheckedValues.emit(data);
  }

  reset($event: any) {
    this.paginator.changePageToFirst($event);
  }

}
