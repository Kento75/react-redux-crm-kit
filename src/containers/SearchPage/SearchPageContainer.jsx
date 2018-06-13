import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/** Components */
import DripTable from 'mui-drip-table';
import { AppHeader, TextBox, LoadingDialog, ResultDialog } from '../../components';

/** Actions */
import * as searchPageAction from '../../actions/SearchPage/searchPageAction';

class SearchPageContainer extends Component {
  constructor(props) {
    super(props);
    /** ActionBinds */
    this.handleChangeSearchWord = this.handleChangeSearchWord.bind(this);
    this.handleEnterSearchEdit = this.handleEnterSearchEdit.bind(this);
    this.handleOnClickOkBtn = this.handleOnClickOkBtn.bind(this);
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

  /**
   * 処理結果ダイアログ内OKボタン押下時
   */
  handleOnClickOkBtn() {
    const { searchActionBind } = this.props;
    searchActionBind.changeAlertMessage();
  }

  render() {
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
      resultDialogTitle,
      resultDialogMessage,
      isResultDialogOpen,
    } = this.props;
    return (
      <div>
        <AppHeader />
        <TextBox
          labelText={labelText}
          placeholderText={placeholderText}
          textValue={searchWord}
          onKeyDownFunc={this.handleEnterSearchEdit}
          onChangeFunc={this.handleChangeSearchWord}
        />
        <DripTable title={tableTitle} columns={tableColumns} options={tableOptions} data={searchedList} />
        <LoadingDialog isLoadingDialogOpen={isLoadingDialogOpen} progressColor={progressColor} />
        <ResultDialog
          isResultDialogOpen={isResultDialogOpen}
          resultDialogTitle={resultDialogTitle}
          resultDialogMessage={resultDialogMessage}
          onCloseDialog={this.handleOnClickOkBtn}
        />
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
  resultDialogTitle: PropTypes.string.isRequired,
  resultDialogMessage: PropTypes.string.isRequired,
  isResultDialogOpen: PropTypes.bool.isRequired,
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
    resultDialogTitle,
    resultDialogMessage,
    isResultDialogOpen,
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
    resultDialogTitle,
    resultDialogMessage,
    isResultDialogOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchActionBind: bindActionCreators(searchPageAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPageContainer);
