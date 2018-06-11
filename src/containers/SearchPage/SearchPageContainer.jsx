import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/** Components */
import DripTable from 'mui-drip-table';
import { AppHeader, TextBox, LoadingDialog, ResultDialog } from '../../components';

/** Actions */
import * as searchPageAction from '../../actions';

class SearchPageContainer extends Component {
  constructor(props) {
    super(props);
    /** ActionBinds */
    this.handleChangeSearchWord = this.handleChangeSearchWord.bind(this);
    this.handleEnterSearchEdit = this.handleEnterSearchEdit.bind(this);
  }

  /**
   * 検索文字列変更時
   * @param {object} e Elmオブジェクト
   */
  handleChangeSearchWord(e) {
    const { searchActionBind } = this.props;
    // 検索ボックス内の値を引数に渡す
    searchActionBind.changeSearchWord(e.target.value);
  }

  /**
   * 検索実行時
   * @param {object} e Elmオブジェクト
   */
  handleEnterSearchEdit(e) {
    const { searchActionBind } = this.props;
    const ENTER_KEY_CODE = 13;
    // Enterキーを押下した場合は検索実行
    if (e.keyCode === ENTER_KEY_CODE) {
      searchActionBind.searchData();
    }
  }

  render() {
    const {
      tableTitle, // 【テーブル】タイトル
      tableColumns, // 【テーブル】カラム一覧
      tableOptions, // テーブルオプション
      labelText, // 【テキストボックス】ラベル
      placeholderText, // 【テキストボックス】ヒントテキスト
      searchWord, // 【テキストボックス】検索文字列
      searchedList, // 【テーブル】データ一覧
      isLoadingDialogOpen, // 【ロードダイアログ】表示フラグ
      progressColor, // 【ロードダイアログ】プログレスバーの色
      isResultDialogOpen, // 【処理結果ダイアログ】表示フラグ
    } = this.props;
    return (
      <div>
        {/* アプリケーションヘッダー */}
        <AppHeader />
        {/* 検索ボックス */}
        <TextBox
          labelText={labelText}
          placeholderText={placeholderText}
          textValue={searchWord}
          onKeyDownFunc={this.handleEnterSearchEdit}
          onChangeFunc={this.handleChangeSearchWord}
        />
        {/* テーブル */}
        <DripTable title={tableTitle} columns={tableColumns} options={tableOptions} data={searchedList} />
        {/* ロードダイアログ */}
        <LoadingDialog isLoadingOpen={isLoadingDialogOpen} progressColor={progressColor} />
        {/* 処理結果ダイアログ */}
        <ResultDialog isResultDialogOpen={isResultDialogOpen} />
      </div>
    );
  }
}

SearchPageContainer.propTypes = {
  tableTitle: PropTypes.string.isRequired,
  tableColumns: PropTypes.array.isRequired,
  tableOptions: PropTypes.object.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  searchWord: PropTypes.string.isRequired,
  searchedList: PropTypes.array,
  isLoadingDialogOpen: PropTypes.bool.isRequired,
  progressColor: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  const {
    tableTitle,
    tableColumns,
    tableOptions,
    labelText,
    placeholderText,
    searchWord,
    searchedList,
    isLoadingDialogOpen,
    progressColor,
  } = state.searchPageReducer;
  return {
    tableTitle,
    tableColumns,
    tableOptions,
    labelText,
    placeholderText,
    searchWord,
    searchedList,
    isLoadingDialogOpen,
    progressColor,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchActionBind: bindActionCreators(searchPageAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPageContainer);
