import request from '@/utils/request';

/**
 * 获取表单列表
 * @param {*} query 
 * @returns 
 */
export function templateList(query) {
  return request({
    url: '/workflow/template/list',
    method: 'get',
    params: query
  })
}

/**
 * 新增表单
 * @param {*} data 
 * @returns 
 */
export function addTemplate(data) {
  return request({
    url: '/workflow/template',
    method: 'post',
    data: data
  })
}

/**
 * 查询所有表
 * @param {*} query 
 * @returns 
 */
export function getDBTable(query) {
  return request({
    url: '/workflow/wfForm/db/list',
    method: 'get',
    params: query,
  })
}

/**
 * 查询表字段
 * @param {*} query { table: '' }
 * @returns 
 */
export function getTableFieldByName(query) {
  return request({
    url: '/workflow/wfForm/fieldList',
    method: 'post',
    params: query,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

/**
 * 表单修改
 * @param {*} data { id: '' }
 * @returns 
 */
export function updateTemplate(data) {
  return request({
    url: '/workflow/template',
    method: 'put',
    data: data
  })
}

/**
 * 表单删除
 * @param {*} id
 * @returns 
 */
export function delTemplateById(id) {
  return request({
    url: '/workflow/template/' + id,
    method: 'delete',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

/**
 * 表单详情
 * @param {*} id 
 * @returns 
 */
export function getTemplateInfoById(id) {
  return request({
    url: '/workflow/template/' + id,
    method: 'get',
  })
}