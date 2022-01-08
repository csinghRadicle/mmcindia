import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {

  panelOpenState = true;
  columnDefs = [
    { field: 'Fund' },
    { field: 'PendingActions', cellRenderer: function(params:any) {
      return '<span><i class="material-icons">insert_drive_file</i>' + params.value + '</span>'
 } },
    { field: 'RecordInfo' },
    { headerName: 'MTD Book P&L', field: 'MTDBookPL' },
    { headerName: 'YTD Book P & L', field: 'YTDBookPL' },
    { field: 'ENDBookNAV' },
];

rowData = [
    { Fund: 'ARYMFLP', PendingActions: '', RecordInfo: '8454.21', MTDBookPL: '545.55', YTDBookPL : '9545.33', ENDBookNAV: '5454.55'  },
    { Fund: 'ARYMFLP', PendingActions: '', RecordInfo: '8454.21', MTDBookPL: '545.55', YTDBookPL : '9545.33', ENDBookNAV: '5454.55'  },
    { Fund: 'ARYMFLP', PendingActions: '', RecordInfo: '8454.21', MTDBookPL: '545.55', YTDBookPL : '9545.33', ENDBookNAV: '5454.55'  },
    { Fund: 'ARYMFLP', PendingActions: '', RecordInfo: '8454.21', MTDBookPL: '545.55', YTDBookPL : '9545.33', ENDBookNAV: '5454.55'  },
    { Fund: 'ARYMFLP', PendingActions: '', RecordInfo: '8454.21', MTDBookPL: '545.55', YTDBookPL : '9545.33', ENDBookNAV: '5454.55'  },
    { Fund: 'ARYMFLP', PendingActions: '', RecordInfo: '8454.21', MTDBookPL: '545.55', YTDBookPL : '9545.33', ENDBookNAV: '5454.55'  },
    { Fund: 'ARYMFLP', PendingActions: '', RecordInfo: '8454.21', MTDBookPL: '545.55', YTDBookPL : '9545.33', ENDBookNAV: '5454.55'  },
    { Fund: 'ARYMFLP', PendingActions: '', RecordInfo: '8454.21', MTDBookPL: '545.55', YTDBookPL : '9545.33', ENDBookNAV: '5454.55'  },
    { Fund: 'ARYMFLP', PendingActions: '', RecordInfo: '8454.21', MTDBookPL: '545.55', YTDBookPL : '9545.33', ENDBookNAV: '5454.55'  },
    { Fund: 'ARYMFLP', PendingActions: '', RecordInfo: '8454.21', MTDBookPL: '545.55', YTDBookPL : '9545.33', ENDBookNAV: '5454.55'  },
];
  constructor() { }

  ngOnInit(): void {
  }

  actionOne() { alert('Action One')}
  actionTwo() { alert('Action Two')}

}
