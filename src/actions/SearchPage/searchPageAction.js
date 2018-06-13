import request from 'axios';
import * as types from '../../types';

/**
 * 検索文字列変更時処理
 * @param {string} searchWord 検索文字列
 */
export function changeSearchWord(searchWord) {
  return {
    type: types.CHANGE_SEARCH_WORD,
    searchWord,
  };
}

/**
 * 実行中ダイアログ表示処理
 */
function requestProcess() {
  return { type: types.REQUEST_PROCESS };
}

/**
 * APIリクエスト(検索)処理
 */
export function searchData() {
  return (dispatch, getState) => {
    dispatch(requestProcess());

    const company_code = getState().searchPageReducer.searchWord;
    return makeRequest('http://localhost/find', 'post', { company_code })
      .then(response => {
        if (response.status === 200) {
          return dispatch({
            type: types.SUCCESS_SEARCH,
            searchedList: response.data.result,
          });
        } else {
          return dispatch({
            type: types.FAILED_SEARCH,
            title: '検索失敗',
            message: '検索に失敗しました。',
          });
        }
      })
      .catch(() => {
        return dispatch({
          type: types.FAILED_SEARCH,
          title: '例外発生',
          message: '例外が発生しました。',
        });
      });
  };
}

/**
 * アラートメッセージ変更処理
 * @param {string} message アラートメッセージ
 */
export function changeAlertMessage() {
  return {
    type: types.CHANGE_ALERT_MESSAGE,
  };
}

/**
 * リクエストobject作成処理
 * @param {string} url APIのURL
 * @param {string} method REST区分(GET、POST、PUT、DELETE)
 * @param {object} data 送信データ
 */
function makeRequest(url, method, data) {
  return request({
    url,
    method,
    data,
  });
}
