import * as types from '../../types';

const defaultState = {
  // テーブル設定
  tableTitle: '会社検索',
  tableColumns: ['会社コード', '会社名', '住所', 'メールアドレス'],
  tableOptions: {
    filterType: 'dropdown',
    responsive: 'stacked',
    textLabels: {
      body: {
        noMatch: 'データは存在しません',
        toolTip: 'ソート',
      },
      pagination: {
        next: '次へ',
        previous: '前へ',
        rowsPerPage: '表示行数:',
        displayRows: '　合計：',
      },
      toolbar: {
        search: '検索',
        downloadCsv: 'CSV ダウンロード',
        print: '印刷',
        viewColumns: 'カラム表示切替',
        filterTable: 'フィルターリスト',
      },
      filter: {
        all: '全件',
        title: 'フィルター',
        reset: 'クリア',
      },
      viewColumns: {
        title: '表示切替',
        titleAria: '表示/非表示',
      },
      selectedRows: {
        text: '行を選択',
        delete: '削除',
        deleteAria: '選択行を削除',
      },
    },
  },
  // 検索ボックス設定
  labelText: '検索文字列',
  placeholderText: 'Enterキーで検索実行',
  // 検索文字列
  searchWord: '',
  // 検索結果
  searchList: [],
  // 処理結果ダイアログタイトル
  resultDialogTitle: '',
  // 処理結果内容
  resultDialogMessage: '',
  // 処理結果表示フラグ
  isResultDialogOpen: false,
  // ロードダイアログ表示フラグ
  isLoadingDialogOpen: false,
  // プログレスバーの色
  progressColor: 'secondary',
};

const searchPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    // 検索文字列変更時
    case types.CHANGE_SEARCH_WORD:
      return {
        ...state,
        searchWord: action.searchWord,
      };
    // 検索正常終了時
    case types.SUCCESS_SEARCH:
      return {
        ...state,
        isLoadingDialogOpen: false,
        searchedList: action.result,
      };
    // 検索以上終了時
    case types.FAILED_SEARCH:
      return {
        ...state,
        isLoadingDialogOpen: false,
        resultDialogTitle: action.title,
        resultDialogMessage: action.message,
        isResultDialogOpen: true,
      };
    // 検索実行時
    case types.REQUEST_PROCESS:
      return {
        ...state,
        isLoadingDialogOpen: true,
      };
    // アラートメッセージ変更処理
    case types.CHANGE_ALERT_MESSAGE:
      return {
        ...state,
        resultDialogTitle: '',
        resultDialogMessage: '',
        isResultDialogOpen: false,
      };
    default:
      return state;
  }
};

export default searchPageReducer;
