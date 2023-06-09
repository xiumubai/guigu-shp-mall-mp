import { config } from '../../config/index';
import { request } from '../../utils/request';
/** 获取商品列表 */
function mockFetchGoodsList(pageIndex = 1, pageSize = 20) {
  const { delay } = require('../_utils/delay');
  const { getGoodsList } = require('../../model/goods');
  return delay().then(() =>
    getGoodsList(pageIndex, pageSize).map((item) => {
      return {
        spuId: item.spuId,
        thumb: item.primaryImage,
        title: item.title,
        price: item.minSalePrice,
        originPrice: item.maxLinePrice,
        tags: item.spuTagList.map((tag) => tag.title),
      };
    }),
  );
}

/** 获取商品列表 */
export function fetchGoodsList(params) {
  console.log(1);
  if (!config.useMock) {
    return mockFetchGoodsList(params.pageNo, parmas.pageSize);
  }
  return request({
    url: `/api/list`,
    method: 'POST',
    data: params
  });
}
